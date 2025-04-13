import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "flowbite-react";
import "./Registro.css";
import "./estilo.css";
import "./reset.css";

interface Pet {
  nome: string;
  raca: string;
  foto: string;
  comentario: string | null; // Pode ser nulo inicialmente
}

export function Registro() {
  const [openModal, setOpenModal] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm();
  
  const [pets, setPets] = useState<Pet[]>([]);

  // Função para adicionar um pet
  const adicionaPet = (data: Pet) => {
    const novo = {
      nome: data.nome,
      raca: data.raca,
      foto: data.foto,
      comentario: [],
    };
    fetch(`http://localhost:3000/pets`, {
      method: "POST",
      body: JSON.stringify(novo)
    })
    
    setPets((prevPets) => {
      const updatedPets = [novo, ...prevPets];
      console.log(updatedPets);
      return updatedPets;
    });
    
    setOpenModal(false);
  };

  // Função para adicionar comentário
  const comentaPet = (nome: string) => {
    const comentario = prompt("Diga uma peculiaridade do seu bixo:");
    
    if (!comentario || comentario.trim() === "") {
      alert("Por favor, comente algo válido.");
      return;
    }

    // Atualizando o comentário do pet
    const petsAtualizados = pets.map(pet => 
      pet.nome === nome ? { ...pet, comentario } : pet
    );
    
    setPets(petsAtualizados);
  };

  return (
    <>
      <section className="secLista">
        <div className="petLista">
          {pets.length > 0 ? (
            pets.map((pet, index) => (
              <div key={index} className="petItem">
                <img className="petFoto" src={pet.foto} alt={pet.nome} />
                <div className="petInfo">
                  <h3 className="petNome">Nome: {pet.nome}</h3>
                  <p className="petRaca">Raça: {pet.raca}</p>
                  <button onClick={() => comentaPet(pet.nome)}>
                    Adicionar comentário
                  </button>
                  {pet.comentario && (
                    <p className="petRaca"><strong>Comentário:</strong> {pet.comentario}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Nenhum pet registrado ainda.</p>
          )}
        </div>
      </section>
      
      <button className="btnRegistro" onClick={() => setOpenModal(true)}>
        Registrar Pet
      </button>
      <button className="btnRegistroMobile" onClick={() => setOpenModal(true)}>
        <img className="mais" src="./maisVetorVerde.svg" alt="" />
      </button>

      <Modal
        className="modal"
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="modalBloco">
            <div className="modalTituloCtn"></div>
            <div className="registrarPet">
              <img className="cachorroFoto1" src="./cachorroSecretario.jpg" alt="" />
              <form className="formRegistro" onSubmit={handleSubmit(adicionaPet)}>
                <h2 className="tituloRegistro">Registre seu bixinho!</h2>

                {/* Nome */}
                <label htmlFor="nome">Nome:</label>
                <input
                  id="nome"
                  type="text"
                  {...register("nome", { required: "Nome é obrigatório" })}
                />
 
                {/* Raça */}
                <label htmlFor="raca">Raça:</label>
                <input
                  id="raca"
                  type="text"
                  {...register("raca", { required: "Raça é obrigatória" })}
                />

                {/* Foto */}
                <label htmlFor="foto">URL da Foto:</label>
                <input
                  id="foto"
                  type="text"
                  {...register("foto", { required: "A URL da foto é obrigatória" })}
                />
                
                {/* Botão de Enviar */}
                <Button className="registrar" type="submit">Registrar Pet</Button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
