const joi = require('joi')

const eventSchema = joi.object({
  name: joi.string().required(),
  properties: joi.object({
    id: joi.string().required(),
    sbi: joi.string().required(),
    cph: joi.string().required(),
    checkpoint: joi.string().required(),
    status: joi.string().required(),
    reference: joi.string().optional(),
    action: joi.object({
      type: joi.string().required(),
      message: joi.string().required(),
      data: joi.object(),
      error: joi.string().allow(null, ''),
      raisedBy: joi.string().required(),
      raisedOn: joi.string().optional()
    })
  })
})

const validateEvent = (event) => {
  const validate = eventSchema.validate(event)

  if (validate.error) {
    console.log('Event validation error', validate.error)
    return false
  }

  return true
}

module.exports = validateEvent
