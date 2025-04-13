import { useEffect, useState } from 'react';
import { Modal } from "flowbite-react";
import './components/estilo.css';
import './components/reset.css';
import './petsitter.css';
import { Titulo } from './components/Titulo';
import { useForm } from 'react-hook-form';
import { Registro } from './components/Registro';

function  Petsitter() {
  const [open, setOpen] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [pets, setPets] = useState([]);

  useEffect(()=>{

  })
  

  return (
    <>
      <Titulo />
  
      <section className="secLista">
          < Registro />
       </section>

      <section className="secPetsitter">
        <div className="tituloPetsitter">
          <img className="pata" src="pataVetor.svg" alt="" />
          <h1 className="petsitterTitulo">Encontrar Petsitter</h1>
        </div>
        <div className="petsitterGrid">
          <div className="petsitterItem">
            <img className="petsitterFoto" src="./alabobo.png" alt="" />
            <div className="petsitterInfos">
              <h1 className="petsitterNome">Janine Farias</h1>
              <p className="petsitterExp">86 vezes como petsitter
                <br />
                Fã de patos, amante de gatos
              </p>
              <p className="aprovação">98% de aprovação</p>
              <button className="contato">Entrar em contato</button>
            </div>
          </div>
          <div className="petsitterItem">
            <img className="petsitterFoto" src="./rafa.png" alt="" />
            <div className="petsitterInfos">
              <h1 className="petsitterNome">Rafaela Martins</h1>
              <p className="petsitterExp">57 vezes como petsitter
                <br />
                Especialista em cachorrinhos
              </p>
              <p className="aprovação">94% de aprovação</p>
              <button className="contato">Entrar em contato</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Petsitter;
