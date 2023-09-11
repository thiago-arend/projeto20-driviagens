import { errors } from "../errors/errors.js";

export function validateSchema(schema) {

    return (req, res, next) => {

        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            let errorMessage = "";
            validation.error.details.forEach(det => errorMessage += det.message + " ");

            throw errors.joi(errorMessage);
        }

        next();
    }
}

export function validateQuerySchema(schema) {

    return (req, res, next) => {
        let parsedQuery = { ...req.query };
        parsedQuery.smallerDate = parsedQuery["smaller-date"]; // parsing do get /flights
        parsedQuery.biggerDate = parsedQuery["bigger-date"];
        delete parsedQuery["smaller-date"];
        delete parsedQuery["bigger-date"];

        const validation = schema.validate(parsedQuery, { abortEarly: false });

        if (validation.error) {
            let errorMessage = "";
            validation.error.details.forEach(det => errorMessage += det.message + " ");

            throw errors.joi(errorMessage);
        }

        next();
    }
}