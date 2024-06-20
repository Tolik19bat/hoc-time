import PropTypes from 'prop-types';

// Компонент DateTime принимает дату в пропсах и отображает её.
function DateTime(props) {
  return (
    <p className="date">{props.date}</p>
  );
}

// Определяем propTypes для компонента DateTime.
DateTime.propTypes = {
    date: PropTypes.string.isRequired, // Определяем, что date - обязательная строка
}
export default DateTime;
