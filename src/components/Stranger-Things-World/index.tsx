import './styles.css';

export default function StrangerThingsWorld() {
  return (
    <section id="section-stranger-things-trailer" className="container">
      <div className="video-frame" aria-hidden="true">
        <iframe
          width="460"
          height="215"
          src="https://www.youtube.com/embed/SJ9EFhQ3ANQ"
          title="Youtube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="section-texts">
        <h2>Stranger Things Vol. 4</h2>
        <p>
          Mais experientes, os heróis de Stranger Things também precisam
          enfrentar desafios maiores do que nunca e fazer decisões que vão
          mudar suas vidas para sempre. Confira ao lado o trailer da quarta
          temporada.
        </p>
      </div>
    </section>
  )
}
