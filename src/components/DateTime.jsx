import PropTypes from 'prop-types';

// Компонент DateTime принимает дату в пропсах и отображает её.
function DateTime({ date }) {
  return (
    <p>{date}</p>
  );
}

DateTime.propTypes = {
    date: PropTypes.string.isRequired, // Определяем, что date - обязательная строка
}
export default DateTime;
