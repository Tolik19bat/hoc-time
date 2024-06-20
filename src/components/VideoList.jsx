import PropTypes from 'prop-types';
import Video from './Video';

// Компонент VideoList отображает список видеозаписей.
function VideoList(props) {
  return props.list.map(item => (
    <Video key={item.url} url={item.url} date={item.date} />
  ));
}

// Определяем propTypes для компонента VideoList.
VideoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired, // url - обязательный пропс типа string.
      date: PropTypes.string.isRequired, // date - обязательный пропс типа string.
    })
  ).isRequired, // list - обязательный пропс типа array.
};

export default VideoList;
