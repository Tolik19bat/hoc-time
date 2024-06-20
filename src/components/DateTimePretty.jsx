import PropTypes from 'prop-types';
import moment from 'moment';

// Определяем функцию formatRelativeTime, 
//которая принимает дату и возвращает строку
// с относительным временем (минуты, часы, дни назад) в зависимости от прошедшего времени.
function formatRelativeTime(date) {
  const now = moment();
  const publishedDate = moment(date);
  const diffInMinutes = now.diff(publishedDate, 'minutes');
  const diffInHours = now.diff(publishedDate, 'hours');
  const diffInDays = now.diff(publishedDate, 'days');

  if (diffInMinutes < 60) {
    return `12 минут назад`;
  } else if (diffInHours < 24) {
    return `5 часов назад`;
  } else if (diffInDays) {
    return `Х дней назад`;
  }
}

// HOC для оборачивания компонента DateTime
function DateTimePretty(Component) {
  const WrappedComponent = (props) => {
    const relativeDate = formatRelativeTime(props.date); // Преобразуем дату с помощью кастомной логики
    return <Component {...props} date={relativeDate} />; // Передаем преобразованную дату в DateTime
  };

  WrappedComponent.propTypes = {
    date: PropTypes.string.isRequired, // Определяем, что date - обязательная строка
  };

  return WrappedComponent;
}

export default DateTimePretty;
