function joi(message) {
    return {
        type: "joiError",
        message
    }
}

function conflict(resource = "Item") {
    return {
        type: "conflictError",
        message: `${resource} já existe!`
    }
}

function notFound(resource = "Item") {
    return {
        type: "notFoundError",
        message: `${resource} não encontrado!`
    }
}

function originDestinationConflict() {
    return {
        type: "originDestinationConflict",
        message: "Os ids da origem e do destino devem ser diferentes!"
    }
}

export const errors =  { joi, conflict, originDestinationConflict, notFound };