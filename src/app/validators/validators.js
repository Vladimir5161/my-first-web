export const required = (value) => {
    if (value) {
        return undefined;
    }

    return "this filed is required";
};

export const correctLink = (value) => {
    if (value !== undefined) {
        let newValue = value.split("");
        let splitedValue = newValue.slice(0, 4);
        let linkValue = splitedValue.join("");
        if (linkValue !== "http") {
            return "not valid link";
        }
        return undefined;
    }
};

export const dublicateLink = (arrey) => (value) => {
    arrey.map((link) => {
        if (link.image || link.video || link.storyImage === value) {
            return "dublicate Link";
        } else return undefined;
    });
};

export const minLength = (value) => {
    if (value !== undefined) {
        let arrValue = value.split("");
        if (arrValue.length < 50) {
            return "not enought text length";
        }
    } else return undefined;
};
export const maxPassLength = (max, type) => (value) => {
    if (value !== undefined) {
        let arrValue = value.split("");
        if (arrValue.length < max) {
            return `not enought ${type} length`;
        }
    } else return undefined;
};
