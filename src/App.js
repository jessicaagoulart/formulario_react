import { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import { Container, Typography } from "@material-ui/core";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro"
import 'fontsource-roboto';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  render() {
    return (

      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" component="h1"> Formulario de Cadastro</Typography >
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>

    );
  }

}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default App;
