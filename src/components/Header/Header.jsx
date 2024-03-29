const reactDescriptions = ["Fundamental", "Crutical", "Core"];
import ReactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descriptions = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
export default Header;
