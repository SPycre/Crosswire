import '../style/Footer.css'
import '../style/Waves.css'
import { useNavigate, Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div id="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <div>
                <Link to="/terms">Terms</Link>
            </div>
        </footer>
    )
}

export default Footer