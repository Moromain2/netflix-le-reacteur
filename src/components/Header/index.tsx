// CSS import for component
import "./header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <img className="header-logo" src="src/assets/netflix_logo.svg" alt="netflix logo" />
            </div>
        </header>
    )
}

export default Header;