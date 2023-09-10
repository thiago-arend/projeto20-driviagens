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

export const errors =  { joi, conflict };