import invertedWorldImage from "../../assets/images/content/inverted-world.png";
import './styles.css';

export default function InvertedWorld() {
  return (
    <section id="section-inverted-world" className="container">
      <div className="section-texts">
        <h1>O Mundo Invertido</h1>
        <p>
          O Mundo Invertido parece uma cópia do nosso mundo, mas com criaturas horrendas, tempestades assustadoras, muita escuridão e entidades malignas. Um reino controlado por Vecna, que tem planos de trazer tudo isso ao nosso mundo.
        </p>
      </div>
      <img src={invertedWorldImage} alt="Imagem ilustrativa do Mundo Invertido" className="invert-element" />
    </section>
  )
}
