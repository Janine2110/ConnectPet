import  './Footer.css';
import './estilo.css';
import './reset.css';


export function Footer() {
    return (
        <footer>
        <div className="footer__itens">
            <div className="footer__container">
                <h3 className="foot__titulo">Mapa</h3>
                <ul  className="ul__foot">
                    <li><a className="a__foot" href="#">Home</a></li>
                    <li><a className="a__foot" href="#">Sobre</a></li>
                    <li><a className="a__foot" href="#">Login</a></li>
                    <li><a className="a__foot" href="#">Vet/24h</a></li>
                </ul>
            </div>
            <div className="footer__container">
                <h3 className="foot__titulo">Serviços</h3>
                <ul className="ul__foot">
                    <li><a className="a__foot" href="#">Fórum</a></li>
                    <li><a className="a__foot" href="#">Econtrar Pet</a></li>
                    <li><a className="a__foot" href="#">Encontrar Petsitter</a></li>
                </ul>
            </div>
            <div className="footer__redes">
                <h3 className="foot__titulo">Redes sociais</h3>
                <div className="redes__foot">
                    <img src="/Group.png" alt=""/>
                    <img src="/Vector (2).png" alt=""/>
                    <img src="/Vector (3).png" alt=""/>
                </div>
            </div>
        </div>
    </footer>
    );
}