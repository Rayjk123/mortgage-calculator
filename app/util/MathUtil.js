const zero = 0;

export function getTotalCost(formData) {
	const R = parseFloat(formData.interestRate.value) / 100 / 12;
	if (R === 0) {
		return zero;
	}
	const P = parseFloat(formData.mortgageAmount.value);
	const N = parseFloat(formData.mortgagePeriod.value) * 12;
	if (N === 0) {
		return zero;
	}
	const Numerator = R * P;
	const Denominator = 1 - (1 + R) ** (N * -1);
	return (Numerator / Denominator) * N;
}

export function getMonthlyCost(formData) {
	const period = parseFloat(formData.mortgagePeriod.value);
	if (isNaN(period) || period === 0) {
		return zero;
	}
	const val = getTotalCost(formData);
	return val / period / 12;
}

export function getNumberOfPayments(formData) {
	const period = formData.mortgagePeriod.value;
	return period * 12;
}
