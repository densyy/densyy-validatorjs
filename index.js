/* ---- Requires ---- */

const Validator = require('validatorjs')

const language = require('./src/lang/pt-br')
const firstError = require('./src/functions/firstError')

/* ---- Default ---- */

Validator.setMessages('en', language)

/* ---- Exports ---- */

module.exports = { Validator, firstError }
