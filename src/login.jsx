import { useState } from 'react';
import './login.css';
import './components/estilo.css';
import './components/reset.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [identificador, setIdentificador] = useState('');  
  const [senha, setSenha] = useState('');                 
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate()  
  

 const voltar = () => {
  navigate('/')
 }
  function login(identificador, senha){
    console.log("Tentando fazer login com:", identificador, senha);
    fetch(`http://localhost:3000/usuario?email=${identificador}`)
      .then(response => response.json())
      .then(usuárioPorEmail => {
        console.log("Resposta do email:", usuárioPorEmail);
        if (usuárioPorEmail.length > 0) {
          const usuário = usuárioPorEmail[0]; 
          if (usuário.senha === senha) {
            setMensagem("Login bem-sucedido! Bem-vindo ");
            navigate('/petsitter');
          } else {
            setMensagem("Não é uma conta cadastrada no sistema!");
          }
        } else {
          fetch(`http://localhost:3000/usuario?nome=${identificador}`)
            .then(response => response.json())
            .then(usuárioPorNome => {
              if (usuárioPorNome.length > 0) {
                const usuário = usuárioPorNome[0]; 
                if (usuário.senha === senha) {
                  setMensagem("Login bem-sucedido! Bem-vindo ");

                } else {
                  setMensagem("Não é uma conta cadastrada no sistema!");
                }
              } else {
                setMensagem("Usuário não encontrado!");
              }
            });
        }
      })
      .catch(error => console.error("Erro ao buscar usuário:", error));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();  
    login(identificador, senha);  
  };

  return (
    <main className="connect__formulario">
      <section className="connect">
        <img className="patinhas" onClick={voltar} src="/logo.png" alt="Patinhas de cachorro." />
        <h1 className="titulo">Connect</h1>
        <h1 className="titulo__inferior"> PET</h1>
        <h2 className="texto">Ajudando no dia a dia do seu animal</h2>
        <img className="imagem__destaque" src="/patinhaVerdeClaro.svg" alt="Patinha de cachorro." />
        <h3 className="connect__conta">Não tem uma conta ainda?</h3>
        <Link to="/petsitter">
          <button className="cadastrar"> Cadastre-se como Tutor</button>
        </Link>
        <Link to="/petsitter">
          <button className="cadastrar"> Cadastre-se como PetSitter</button>
        </Link>
      </section>

      <section className="Login">
        <div className="login__formulario">
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome" className="Nome">Nome ou e-mail:</label>
            <input
              type="text"
              id="nome"
              value={identificador}  // O valor do campo de nome/email
              onChange={(e) => setIdentificador(e.target.value)}  // Atualiza o estado com o valor do campo
              required
            />
            <label htmlFor="senha" className="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              value={senha}  // O valor do campo de senha
              onChange={(e) => setSenha(e.target.value)}  // Atualiza o estado com o valor do campo
              required
            />
            <button type="submit" className="senha1">Entrar</button>
          </form>

          
         

          <div className="botoes__senha">
            <button className="senha1">Esqueci a senha</button>
          </div>
          {mensagem && <p className="mensagem">{mensagem}</p>}
        </div>
      </section>
    </main>
  );
};

export default LoginPage;