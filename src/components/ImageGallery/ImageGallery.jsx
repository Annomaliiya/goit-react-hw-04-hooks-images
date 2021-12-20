import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "../Button";
import Loader from "../Loader";
import Modal from "../Modal";
import { picturesApi } from "../../shared/services/fetchApi";

import s from "./ImageGallery.module.css";
import LargeImageInfo from "../LargeImageInfo";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  finish: false,
  modalOpen: false,
  largeImageURL: "",
};

const ImageGallery = ({ queryProp }) => {
  const [state, setState] = useState(initialState);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!queryProp) return;
    setState({ items: [], isLoading: true, finish: false });
    fetchImages();
  }, [queryProp]);

  useEffect(() => {
    if (!queryProp) return;
    fetchImages();
  }, [page]);

  const fetchImages = async () => {
    try {
      const { data } = await picturesApi.searchPictures(page, queryProp);

      setState(({ items }) => {
        const newState = {
          items: [...items, ...data.hits],
          isLoading: false,
          error: false,
        };
        if (data.hits.length < 12) {
          newState.finish = true;
        }
        if (!data.hits.length) {
          newState.error = true;
        }
        return newState;
      });
    } catch (error) {
      setState({ error, isLoading: false });
    }
  };

  const loadMore = () => {
    setPage((prevState) => {
      return prevState + 1;
    });
    setState({ ...state, isLoading: true });
  };

  const showModal = useCallback(((id) => {
    setState((prevState) => {
      const { items } = prevState;
      const { largeImageURL, tags } = items.find((item) => item.id === id);
      return {
        ...prevState,
        isLoading: true,
        largeImageURL: largeImageURL,
        tags: tags,
      };
    }, []);
    
  const closeModal = (e) => {
    setState({ ...state, modalOpen: false });
  };
  const { items, error, isLoading, finish, modalOpen, largeImageURL, tags } =
    state;
  const elements = items.map((item) => (
    <ImageGalleryItem
      key={item.id}
      tags={item.tags}
      webformatURL={item.webformatURL}
      onClick={() => showModal(item.id)}
    />
  ));

  return (
    <div>
      {error && <p>Impossible to load the pictures!</p>}
      {!error && <ul className={s.list}>{elements}</ul>}
      {isLoading && <Loader />}
      {!finish && items.length !== 0 && (
        <Button onClick={loadMore} title="Load more"></Button>
      )}
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <LargeImageInfo url={largeImageURL} tags={tags} />
        </Modal>
      )}
    </div>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  queryProp: PropTypes.string,
};
