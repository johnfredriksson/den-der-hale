import './App.css';
import Landing from './components/landing';
import Video from './components/video';
import Bio from './components/bio';
import Photos from './components/photos';
import Spotify from './components/spotify';
import Footer from './components/footer';
import Events from './components/events';
import News from './components/news';

function App() {
  return (
    <>
      <Landing />
      <Bio />
      {/* <Video /> */}
      <Events/>
      <Photos/>
      <News/>
      <Spotify />
      <Footer />
    </>
  );
}

export default App;
