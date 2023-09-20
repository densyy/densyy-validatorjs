# Densyy - ValidatorJS

1. Instalação
```
pnpm add densyy-validatorjs
```

2. Utilização
```
/* ---- Requires ---- */

const Validator = require('densyy-validatorjs').Validator
const firstError = require('densyy-validatorjs').firstError

/* ---- Methods ---- */

exports.usuario = async (req, res, next) => {
  const { body } = req

  const regras = {
    nome: 'required|string|max:100',
    nome: 'required|string|email'
  }

  const validacao = new Validator(body, regras)
  if (!validacao.fails()) return next()

  const erro = firstError(validacao)
  res.status(406).json(erro)
}
```

3. Consulte as Regras
[Rules](https://github.com/mikeerickson/validatorjs#available-rules)
