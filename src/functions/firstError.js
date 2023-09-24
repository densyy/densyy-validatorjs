/* ---- Methods ---- */

function firstError (validation) {
  const errors = validation.errors.all()
  return Object.values(errors)[0][0]
}

/* ---- Exports ---- */

module.exports = firstError
