import { memo } from "react";
import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

function ImageGalleryItem({ tags, webformatURL, onClick }) {
  return (
    <li className={s.imageGalleryItem}>
      <img
        className={s.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={onClick}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(ImageGalleryItem);
