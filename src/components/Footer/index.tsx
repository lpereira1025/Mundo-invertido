import { ReactComponent as Logo }  from '../../assets/images/footer/logo.svg';
import './styles.css';

export default function Footer() {
  return (
    <footer>
      <p>
        Projeto construído para fins didáticos, com o objetivo de colocar em prática os conhecimentos de HTML, CSS, JavaScript e React aprendidos na DIO._
      </p>
      <Logo title="Logotipo DIO" />
  </footer>
  )
}
