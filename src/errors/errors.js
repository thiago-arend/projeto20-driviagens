function joi(message) {
    return {
        type: "joiError",
        message
    }
}

function conflict(resource = "Item") {
    return {
        type: "conflictError",
        message: `${resource} already exists!`
    }
}

function notFound(resource = "Item") {
    return {
        type: "notFoundError",
        message: `${resource} not found!`
    }
}

function unmatchedDatas() {
    return {
        type: "unmatchedDatasError",
        message: `The date to the left of the range cannot be greater than the date to the right of the range!`
    }
}

function originDestinationConflict() {
    return {
        type: "originDestinationConflict",
        message: "Origin and destination ids must be different!"
    }
}

function tooManyResults() {
    return {
        type: "tooManyResults",
        message: "Too many results!"
    }
}

export const errors =  { joi, conflict, originDestinationConflict, notFound, unmatchedDatas, tooManyResults };