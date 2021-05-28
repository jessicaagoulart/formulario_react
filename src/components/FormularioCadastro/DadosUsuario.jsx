import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro"

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });
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
    <form onSubmit={(event) => {
      event.preventDefault();
      if (possoEnviar()) {
        aoEnviar({ email, senha });
      }

    }}>
      <TextField
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        value={email}
        id="email"
        name="email"
        label="Email"
        type="email"
        margin="normal"
        fullWidth
        required
        variant="outlined" />

      <TextField
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        value={senha}
        id="senha"
        name="senha"
        label="Senha"
        type="password"
        margin="normal"
        fullWidth
        required
        variant="outlined" />

      <Button
        type="submit"
        variant="contained"
        color="primary"
      >Proximo
      </Button>
    </form>
  );
}

export default DadosUsuario;