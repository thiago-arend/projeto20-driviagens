function joi(message) {
    return {
        type: "joiError",
        message
    }
}

export const errors =  { joi };