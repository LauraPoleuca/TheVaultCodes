import {Link} from 'react-router-dom';
import "../../styles/HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero">
            <h1 className="hero-title">Swift Vault</h1>
            <p className="hero-tagline">Solve the lyrics, reveal the secrets</p>
            <Link to="/puzzle">
                <button className="hero-button">Unlock the Vault</button>
            </Link>
        </div>
    );
};

export default HeroSection;
