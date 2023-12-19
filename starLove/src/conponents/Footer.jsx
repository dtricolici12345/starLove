
import { Link } from 'react-router-dom';
import Anneaux from "../assets/Anneaux.png"
import "./Styles/Footer.css"

function Footer() {

    return (
        <div>
            <Link to="/team">
                <img className="anneauxFooter" src={Anneaux} alt="buttonAnneaux" />
            </Link>
        </div>
    );
}

export default Footer;