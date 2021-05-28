function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve conter 11 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.lenght > 72) {
    return { valido: false, texto: "Senha deve conter de 4 a 72 digitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export { validarCPF, validarSenha }