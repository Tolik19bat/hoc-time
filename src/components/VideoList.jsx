import DateTime from './DateTime';
import DateTimePretty from './DateTimePretty';

// Оборачиваем компонент DateTime в HOC DateTimePretty
const DateTimePrettyComponent = DateTimePretty(DateTime);

// Основной компонент для отображения списка видеозаписей
function VideoList() {
  // Список видеозаписей с датами публикации
  const videos = [
    { id: 1, date: '2024-06-20 16:25:10', title: 'Video 1' },
    { id: 2, date: '2024-06-20 13:15:10', title: 'Video 2' },
    { id: 3, date: '2024-06-17 12:15:10', title: 'Video 3' }
  ];

  return (
    <div>
      {videos.map(video => (
        // Для каждой видеозаписи создаем блок с заголовком и датой публикации
        <div key={video.id}>
          <h3>{video.title}</h3>
          <DateTimePrettyComponent date={video.date} />
        </div>
      ))}
    </div>
  );
}

export default VideoList;
