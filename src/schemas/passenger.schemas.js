import joi from "joi"

export const passengerSchema = joi.object({
    firstName: joi.string().min(2).max(100).required().messages({
        'string.base': `"firstName" é um campo do tipo texto.`,
        'string.min': `"firstName" deve ter no mínimo 2 caracteres.`,
        'string.max': `"firstName" deve ter no máximo 100 caracteres.`,
        'any.required': `O campo "firstName" é obrigatório.`,
        'string.empty': `O campo "firstName" não pode ser vazio.`
    }),
    lastName: joi.string().min(2).max(100).required().messages({
        'string.base': `"lastName" é um campo do tipo texto.`,
        'string.min': `"lastName" deve ter no mínimo 2 caracteres.`,
        'string.max': `"lastName" deve ter no máximo 100 caracteres.`,
        'any.required': `O campo "lastName" é obrigatório.`,
        'string.empty': `O campo "lastName" não pode ser vazio.`
    })
});