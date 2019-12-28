import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { totalStyle } from '../styles/style';
import { totalLimitFormat } from '../util/numberFormat';
import { ResultLine } from '../components/ResultLine';
import { ButtonLine } from '../components/ButtonLine';
import { MORTGAGE_RESULTS_DETAILS } from '../constants/constants';
const TotalContainer = ({ total, totalValue, monthly, monthlyValue }) => {
	totalValue = parseFloat(totalValue);
	monthlyValue = parseFloat(monthlyValue);

	const mortgageResults = () => {
		console.log('Button Clicked');
	};
	function convertToDollarString(value) {
		return totalLimitFormat(value);
	}
	return (
		<View style={totalStyle.wrapper}>
			<View style={totalStyle.container}>
				<ResultLine
					label={total}
					value={convertToDollarString(totalValue)}
				/>
				<ResultLine
					label={monthly}
					value={convertToDollarString(monthlyValue)}
				/>
				<ButtonLine
					title={MORTGAGE_RESULTS_DETAILS}
					func={mortgageResults}
				/>
			</View>
		</View>
	);
};

TotalContainer.propTypes = {
	total: PropTypes.string.isRequired,
	totalValue: PropTypes.string.isRequired,
	monthly: PropTypes.string.isRequired,
	monthlyValue: PropTypes.string.isRequired
};

export default TotalContainer;
