export function validateEmail(email?: string) {
    if (!email) return false

    var re = /\S+@\S+\.\S+/
    return re.test(email)
}
