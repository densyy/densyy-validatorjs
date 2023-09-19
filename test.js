/* ---- Requires --- */

const Validator = require('./index').Validator
const firstError = require('./index').firstError

/* ---- Start ---- */

const body = {
  nome: 'João Silva',
  email: 'joao@@@dominio.com'
}
const rules = {
  nome: 'required|string|max:5',
  email: 'required|string|email'
}

const validacao = new Validator(body, rules)
if (validacao.fails()) console.log(firstError(validacao))
