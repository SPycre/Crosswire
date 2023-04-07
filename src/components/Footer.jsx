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
            <div id="footer">
                <div>
                <Link id="lterms" to="/terms">Terms & conditions</Link>
                </div>

                <div>
                <p> YOUR IDENTITY OS </p>
                <p> Copyright Crosswire </p>
                </div>

                <div>
                <p> [Email]-[Linkedln] </p>
                <p> founders@crosswire.io </p>
                <p> @crosswire </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer