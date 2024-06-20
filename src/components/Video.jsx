import PropTypes from "prop-types";
import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";

// Используем HOC для обёртывания компонента DateTime
const DateTimePrettyComponent = DateTimePretty(DateTime);

// Компонент Video отображает видео и дату публикации.
function Video(props) {
  return (
    <div className="video">
      <iframe
        className="video-frame"
        src={props.url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePrettyComponent date={props.date} />
    </div>
  );
}

// Определяем propTypes для компонента Video.
Video.propTypes = {
  url: PropTypes.string.isRequired, // url - обязательный пропс типа string.
  date: PropTypes.string.isRequired, // date - обязательный пропс типа string.
};

export default Video;
