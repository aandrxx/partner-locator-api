/**
 * Handles error by sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
const handleError = (res = {}, err = {}) => {
  res.status(err.code).json({
    errors: {
      msg: err.msg
    }
  })
}

module.exports = { handleError }
