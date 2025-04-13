import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './quemSomos.css';
import './components/estilo.css';
import './components/reset.css';



function QuemSomos()  {
    return (
        <>
        <Header/>

     {/* <!-- Quem Somos --> */}   
    <section className="sobre">
        <div className="sobre__titulo">
            <img src="/patinhaVerde.svg" className="sobre__patinha"/>
            <h1>Quem Somos</h1>
        </div>
        <div className="sobre__subtitulo">
            <img src="/pessoas.svg" className="sobre__pessoas"/>
            <h2 className="esconde">Bem-vindo ao Connect Pet!</h2>
        </div>
        <p>Nós somos uma comunidade apaixonada por animais,
            dedicada a fornecer recursos e informações valiosas
            para donos de pets e cuidadores. Nosso objetivo é ajudar
            você a cuidar melhor dos seus amados animais de estimação,
            oferecendo dicas práticas, orientação confiável
            e ferramentas úteis para facilitar sua rotina diária.
        </p>
    </section>

     {/* Nossa Missão */}
     <section className="nossaMissao">
        <div className="nossaMissao__titulo">
            <img src="/patinha.svg" alt=""/>
            <h1>Nossa Missão</h1>
        </div>
        <div className="nossaMissao__subtitulo">
            <p>Nossa missão é apoiar donos de pets e cuidadores com informações acessíveis e de alta qualidade, ajudando a garantir a saúde e o bem-estar dos animais de estimação. Acreditamos que todos os pets merecem cuidados amorosos e atenciosos, e estamos aqui para tornar isso possível.</p>
            <img src="/cachorro.svg" className="dog__missao"/>
            <img src="/coracao.svg" className="esconde"/>
        </div>
    </section>

     {/* O que oferecemos */}
     <section className="oqueOferecemos">
        <div className="oqueOferecemos__titulo">
            <img src="/patinhaVerde.svg" alt=""/>
            <h1>O que oferecemos</h1>
        </div>
        <ol>
            <li>
                <strong>Serviços de Petsitter:</strong>
                <p>Conecte-se com cuidadores de confiança para garantir que seu pet receba o melhor cuidado quando você não puder estar presente.</p>
            </li>
            <li>
                <strong>Fórum Informativo:</strong>
                <p>Um espaço para petsitters e donos de pets trocarem experiências, compartilharem dicas e obterem suporte da comunidade.</p>
            </li>
            <li>
                <strong>Veterinário 24 horas:</strong>
                <p>Dispomos de profissionais da veterinária prontos para atendê-lo a todo momento.</p>
            </li>
        </ol>
    </section>

    <Footer/>
    </>
    )
}

export default QuemSomos;