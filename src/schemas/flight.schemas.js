import joiBase from "joi";
import joiDate from "@joi/date";
import dayjs from "dayjs";

const joi = joiBase.extend(joiDate);

export const flightSchema = joi.object({
    origin: joi.number().integer().min(1).required().messages({
        'number.base': `"origin" é um campo do tipo número.`,
        'number.integer': `"origin" é um campo do tipo inteiro.`,
        'number.min': `"origin" deve ter o valor mínimo igual a 1.`,
        'any.required': `O campo "origin" é obrigatório.`,
        'number.empty': `O campo "origin" não pode ser vazio.`
    }),
    destination: joi.number().integer().min(1).required().messages({
        'number.base': `"destination" é um campo do tipo número.`,
        'number.integer': `"destination" é um campo do tipo inteiro.`,
        'number.min': `"destination" deve ter o valor mínimo igual a 1.`,
        'any.required': `O campo "destination" é obrigatório.`,
        'number.empty': `O campo "destination" não pode ser vazio.`
    }),
    date: joi.date().format("DD-MM-YYYY").min(dayjs()).required().messages({
        'date.base': `"date" é um campo do tipo data.`,
        'date.min': `A data presente no campo "date" deve ser maior que a data atual.`,
        'date.format': `"date" deve ter o formato dd-mm-aaaa.`,
        'any.required': `O campo "date" é obrigatório.`,
        'date.empty': `O campo "date" não pode ser vazio.`
    })
});