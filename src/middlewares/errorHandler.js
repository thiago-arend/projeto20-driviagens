import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {

    if (error.type === "joiError") {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }

    if (error.type === "conflictError" || error.type === "originDestinationConflict") {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }

    if (error.type === "notFoundError") {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Ocorreu um erro desconhecido!")
}