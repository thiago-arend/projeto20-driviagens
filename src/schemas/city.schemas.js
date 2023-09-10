import joi from "joi"

export const citySchema = joi.object({
    name: joi.string().min(2).max(50).required().messages({
        'string.base': `"name" é um campo do tipo texto.`,
        'string.min': `"name" deve ter no mínimo 2 caracteres.`,
        'string.max': `"name" deve ter no máximo 50 caracteres.`,
        'any.required': `O campo "name" é obrigatório.`,
        'string.empty': `O campo "name" não pode ser vazio.`
    })
});