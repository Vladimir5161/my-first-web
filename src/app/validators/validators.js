export const required = value => {
    if (value) return undefined;
    return "this filed is required"
}

export const correctLink = value => {
    debugger;
    if (value !== undefined) {
        let newValue = value.split('');
        let splitedValue = newValue.slice(0, 4);
        let linkValue = splitedValue.join('');
        debugger;
        if (linkValue !== "http") {
            return "not valid link"
        } return undefined;
    }
}