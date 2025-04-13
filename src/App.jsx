
import './App.css';
import './components/estilo.css';
import './components/reset.css';
import { Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const petsitter = () => {
    navigate('/petsitter');
  }
  const quemSomos = () => {
    navigate('/quemSomos');
  }
  return (
    <>
      <Header/>

      {/* <!-- Cabeçalho Destaque --> */}
    <section className="principal">
        <div>
            <div className="principal__caixa">
                <h1>Cuidado personalizado para o seu pet</h1>
                <p>Porque cada patinha tem sua própria história</p>
            </div>
            <div>
            <button className="btn__caixa" onClick={petsitter}>Encontrar Petsitter</button>
            </div>
        </div>
        
        <div className="principal__retangulo" onClick={quemSomos}><h2>Mais Informações</h2></div>
    </section>

    {/* <!-- Serviços --> */}
    <section className="servicos">
        <div className="servicos__1">
            <img src="/pais.png" alt=""/>
            <h3>MELHOR PARA OS PAIS</h3>
            <p>Facilitando a vida dos pais de pets.</p>
        </div>
        <div className="servicos__2">
            <img src="/pet.png" alt=""/>
            <h3>MELHOR PARA OS PETS</h3>
            <p>Felicidade para seu pet.</p>
        </div>
        <div className="servicos__3">
            <img src="/petsitter.png" alt=""/>
            <h3>MELHOR PARA OS PETSITTERS</h3>
            <p>O suporte que os cuidadores merecem.</p>
        </div>
    </section>

    {/* Quem Somos */}
    <section className="quemSomos">
        <div className="quemSomos__titulo">
            <img src="/patinha.svg" alt=""/>
            <h1>Quem Somos</h1>
        </div>
        <p>Nós somos uma comunidade apaixonada por animais,
            dedicada a fornecer recursos e informações valiosas
            para donos de pets e cuidadores. Nosso objetivo é ajudar
            você a cuidar melhor dos seus amados animais de estimação,
            oferecendo dicas práticas, orientação confiável
            e ferramentas úteis para facilitar sua rotina diária.
        </p>
        <button className="saibaMais" onClick={quemSomos}><a href="" >Saiba Mais</a></button>
    </section>
    <section className="cadastro">
        <h1>Quer se tornar um petsitter ou cadastrar seu pet? Faça seu cadastro agora e junte-se à nossa comunidade!</h1>
        <p>Entre como:</p>
        <div className="btn">
            <Link to="/petsitter">
            <button><a href="Cadastro_Petsitter.html">Petsitter</a></button>
            </Link>
            <Link to="/tutor">
            <button><a href="Cadastro_Tutor.html">Tutor</a></button>
            </Link>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default App
