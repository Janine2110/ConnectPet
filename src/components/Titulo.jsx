import { useNavigate } from 'react-router-dom';
import "./Titulo.css"
import './estilo.css';
import './reset.css';

export function Titulo(){
    const navigate = useNavigate(); 
    const handleVoltar = () => {
        navigate('/');
    }
    return(
        <header>
            <div className='btnContainer'></div>
            <button className='botaoVoltar' onClick={handleVoltar}>
                <a className='setaVoltar' href="">
                <img src="./seta.svg" alt="" />
                </a>
            </button>
            <div className='perfilUser'>
                <div className='fotoFrame'>
                <img className='fotoUser' src="/eu.png" alt="" />          
                </div>
                <h1 className='nomeUser'>Miguel Vencato</h1>
            </div>
        </header>
    )
}