import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"

function DadosPessoais({ aoEnviar }) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCPF] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false
      }
    }
    return true;
  }

  return (

    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}>

      <TextField
        value={nome}
        onChange={event => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        margin="normal"
        fullWidth
        required
        variant="outlined" />

      <TextField
        value={sobrenome}
        onChange={event => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        margin="normal"
        fullWidth
        required
        variant="outlined" />

      <TextField
        value={cpf}
        onChange={event => {
          setCPF(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        name="cpf"
        label="CPF"
        margin="normal"
        fullWidth
        required
        variant="outlined" />

      <FormControlLabel
        label="Promocoes"
        control={
          <Switch
            checked={promocoes}
            onChange={event => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />} />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={event => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary" />} />

      <Button variant="contained" color="primary" type="submit">Proximo</Button>
    </form >

  );
}

export default DadosPessoais;