export const formatValueStringToNumber = value => {
    if (!value) {
        return '0';
    } else {
        const regexNotNumberOrDot = /[^0-9.]/g;
        const regexLeadingNumber = /^0+/;

        value = value.replace(regexNotNumberOrDot, '');
        value = value.replace(regexLeadingNumber, '');
    }

    return value;
};

export const formatValueStringToInteger = value => {
    if (!value) {
        return '0';
    } else {
        const regexNotNumberOrDot = /[^0-9]/g;
        const regexLeadingNumber = /^0+/;

        value = value.replace(regexNotNumberOrDot, '');
        value = value.replace(regexLeadingNumber, '');
    }

    return value;
};