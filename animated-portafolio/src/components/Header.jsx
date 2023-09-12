import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1>Alex | Web</h1>
          <Link to="work">
            <button className="btn btn-sm" to="work">
              boton
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
