/* ---- Requires ---- */

const Validator = require('validatorjs')

/* ---- Helpers ---- */

const language = require('./assets/lang/pt-br')
const firstFn = require('./assets/prototype/first')

/* ---- Default ---- */

Validator.setMessages('en', language)
Validator.prototype.first = firstFn

/* ---- Exports ---- */

module.exports = Validator
