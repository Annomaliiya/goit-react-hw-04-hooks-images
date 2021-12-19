import PropTypes from "prop-types";

const LargeImageInfo = ({ url, tags }) => {
  return <img src={url} alt={tags} />;
};

export default LargeImageInfo;

LargeImageInfo.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string,
};
