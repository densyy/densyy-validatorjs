/* ---- Requires ---- */

const Validator = require('validatorjs')

/* ---- Assets ---- */

const language = require('./assets/lang/pt-br')
const firstError = require('./assets/functions/firstError')

/* ---- Default ---- */

Validator.setMessages('en', language)

/* ---- Exports ---- */

module.exports = { Validator, firstError }
