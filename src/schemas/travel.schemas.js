import joi from "joi";

export const travelSchema = joi.object({
    passengerId: joi.number().integer().min(1).required().messages({
        'number.base': `"passengerId" é um campo do tipo número.`,
        'number.integer': `"passengerId" é um campo do tipo inteiro.`,
        'number.min': `"passengerId" deve ter o valor mínimo igual a 1.`,
        'any.required': `O campo "passengerId" é obrigatório.`,
        'number.empty': `O campo "passengerId" não pode ser vazio.`
    }),
    flightId: joi.number().integer().min(1).required().messages({
        'number.base': `"flightId" é um campo do tipo número.`,
        'number.integer': `"flightId" é um campo do tipo inteiro.`,
        'number.min': `"flightId" deve ter o valor mínimo igual a 1.`,
        'any.required': `O campo "flightId" é obrigatório.`,
        'number.empty': `O campo "flightId" não pode ser vazio.`
    })
});