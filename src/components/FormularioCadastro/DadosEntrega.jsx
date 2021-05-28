import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (

    <form onSubmit={
      (event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }
    }>

      <TextField
        onChange={(event) => {
          setCep(event.target.value);
        }}
        value={cep}
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
        variant="outlined" />

      <TextField
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        value={endereco}
        id="endereco"
        label="Endereco"
        type="text"
        margin="normal"
        fullWidth
        variant="outlined" />

      <TextField
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        value={numero}
        id="numero"
        label="Numero"
        type="number"
        margin="normal"
        variant="outlined" />

      <TextField
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        value={estado}
        id="estado"
        label="Estado"
        type="text"
        margin="normal"
        variant="outlined" />

      <TextField
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        value={cidade}
        id="cidade"
        label="Cidade"
        type="text"
        margin="normal"
        variant="outlined" />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >Finalizar Cadastro
      </Button>
    </form>

  );
}

export default DadosEntrega;