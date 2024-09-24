import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import InvertedWorld from './components/Inverted-World';
import StrangerThingsWorld from './components/Stranger-Things-World';
import StrangerThingsGallery from './components/Stranger-Things-Gallery';
import audio1 from './assets/musics/normal-world.mpeg';
import audio2 from './assets/musics/inverted-world.mpeg';
import './App.css';

function App() {
  const [theme, setTheme] = useState<string>("light-theme");
  const [audio, setAudio] = useState<HTMLAudioElement>(new Audio(audio1));

  useEffect(()=>{
    setAudio(prev => {
      prev.src = theme === 'light-theme' ? audio1 : audio2;
      prev.volume = .2;
      prev.play();
      return prev;
    });
  },[theme])

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }

  return (
    <div className={theme}>
      <Header handleChangeTheme={changeTheme} sourceAudio={audio.src}/>
      <main>
        <div id="bottom-characters" className="world-characters"></div>
        <InvertedWorld />
        <StrangerThingsWorld />
        <StrangerThingsGallery />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
