import * as constants from "../constants/constants";

const formUpdate = (label, value) => {
    console.log("label : " + label + " value: " + value);
    console.log("typeof label : " + typeof label + " typeof value: " + typeof value);
    return {
        type: constants.FORM_UPDATE,
        label,
        value
    };
};

export default formUpdate;
