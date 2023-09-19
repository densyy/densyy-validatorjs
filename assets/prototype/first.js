/* ---- Methods ---- */

function first () {
  const errors = this.errors.all()
  return Object.values(errors)[0][0]
}

/* ---- Exports ---- */

module.exports = { first }
