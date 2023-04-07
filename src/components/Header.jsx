import '../style/Header.css';
import Logo from '../assets/crosswire.png'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/more')
    }

    return (
        <header>
            <img src={Logo}/>
            <button onClick={handleClick}>More</button>
        </header>
    )
}

export default Header