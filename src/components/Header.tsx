import calculator from "../assets/img/calculator.png";

const Header = () => {
  return (
    <header>
      <div>
        <img src={calculator} alt="calculator" />
        <h1>React Counter</h1>
      </div>
    </header>
  );
};

export default Header;
