import { MAX_TOTAL_LENGTH } from '../constants/constants';

export const formatValueStringToNumber = value => {
	if (!value) {
		return '0';
	}
	const regexNotNumberOrDot = /[^0-9.]/g;
	const regexLeadingNumber = /^0+/;

	value = value.replace(regexNotNumberOrDot, '');
	value = value.replace(regexLeadingNumber, '');

	return value;
};

export const formatValueStringToInteger = value => {
	if (!value) {
		return '0';
	}
	const regexNotNumberOrDot = /[^0-9]/g;
	const regexLeadingNumber = /^0+/;

	value = value.replace(regexNotNumberOrDot, '');
	value = value.replace(regexLeadingNumber, '');

	return value;
};

export const totalLimitFormat = value => {
	value = value.toFixed(2).toString();
	if (value.length >= MAX_TOTAL_LENGTH) {
		return 'INVALID AMOUNT';
	}
	return `$ ${value}`;
};
