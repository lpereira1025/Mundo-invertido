import serieImage1 from '../../assets/images/content/serie-image-01.png';
import serieImage2 from '../../assets/images/content/serie-image-02.png';
import serieImage3 from '../../assets/images/content/serie-image-03.png';

import './styles.css';

export default function StrangerThingsGallery() {
  return (
    <section id="section-stranger-things-gallery">
    <div className="container section-text">
      <h2>A segunda série mais assistida da Netflix</h2>
      <ul className="gallery-container">
        <li className="gallery-image invert-element">
          <img src={serieImage1} alt="Imagem de Vecna" />
        </li>
        <li className="gallery-image invert-element">
          <img src={serieImage2} alt="Imagem ilustrativa dos amigos de Eleven" />
        </li>
        <li className="gallery-image invert-element">
          <img src={serieImage3} alt="Imagem Eleven assustada" />
        </li>
      </ul>
    </div>
  </section>
  )
}
