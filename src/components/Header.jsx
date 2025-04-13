import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import './estilo.css';
import './reset.css';

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()        

    const voltar = () => {
     navigate('/')
    }
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <header className="cabecalho">
            <div className="cabecalho__container">
                <div className="cabecalho__container1">
                    <img src="/logo.png" alt="Logo" onClick={voltar} className="cabecalho__logo"/>
                    <span className="cabecalho__titulo" onClick={voltar}>CONNECT PET</span>
                </div>
                <nav>
                    <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/quemSomos">Quem Somos</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                <div className="menu-mobile" id="menu-toggle" onClick={toggleMenu}>
                    <img src="/menu-hamburguer.svg" alt="Menu" className="hamburger-icon"/>
                </div>
            </div>
        </header>
    );
}
