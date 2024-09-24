import { ReactComponent as Logo } from '../../assets/images/banner/logo.svg';
import './styles.css';

interface IHeader {
  handleChangeTheme: () => void;
  sourceAudio: string;
}

export default function Header({ handleChangeTheme, sourceAudio }: IHeader) {
  return (
    <header>
    <audio id="audio">
      <source src={sourceAudio} type="audio/mpeg" />
      I'm sorry; your browser doesn't support HTML audio.
    </audio>
    <div className="header-content">
      <Logo title="Imagem principal" className="invert-element" />
      <p className="invert-element">
        Uma jornada para quem não tem medo do desconhecido. O caminho para o Mundo invertido é incerto, repleto de obstáculos e perigos. Porém, a recompensa é grande: salvar Hawkings e o mundo todo das garras de Vecna. Você está preparado? Então clique no botão abaixo para entrar no Mundo Invertido!
      </p>
      <button id="switch-theme-button" type="button" onClick={handleChangeTheme}>Inverter Mundos</button>
    </div>

    <div id="top-characters" className="world-characters"></div>
  </header>
  )
}
