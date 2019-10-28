module.exports = app => {
    const existOrError = (value, msg) => {
        if (!value) throw msg
        if (Array.isArray(value) && value.length === 0) throw msg
        if (typeof value === 'string' && !value.trim()) throw msg
    }

    const notExistOrError = (value, msg) => {
        try {
            existOrError(value, msg)
        } catch (error) {
            return
        }
        throw msg
    }

    const equalsOrError = (valueA, valueB, msg) => {
        if (valueA !== valueB) throw msg
    }

    const emailIsValidOrError = (value, msg) => {
        let regex = '/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/'
        if (!regex.test(valu)) throw msg
    }

    return { existOrError, notExistOrError, equalsOrError, emailIsValidOrError }
}