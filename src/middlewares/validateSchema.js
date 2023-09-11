import { errors } from "../errors/errors.js";

export function validateSchema(schema) {

    return (req, res, next) => {
        let parsedQuery = undefined;

        if (req.query) { // faz o parsing dos dados que chegam da query
            parsedQuery = { ...req.query };
            parsedQuery.smallerDate = parsedQuery["smaller-date"]; // parsing do get /flights
            parsedQuery.biggerDate = parsedQuery["bigger-date"];
            delete parsedQuery["smaller-date"];
            delete parsedQuery["bigger-date"];

            res.locals.parsedQuery = parsedQuery;
        }

        const validation = schema.validate(( parsedQuery ? parsedQuery : req.body ), { abortEarly: false });

        if (validation.error) {
            let errorMessage = "";
            validation.error.details.forEach(det => errorMessage += det.message + " ");

            throw errors.joi(errorMessage);
        }

        next();
    }
}