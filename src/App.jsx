import './App.css'
import VideoList from './components/VideoList'
import list from './data/data'

function App() {

  return (
    <>
      <VideoList list={list} />
    </>
  )
}

export default App
