import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import * as MathUtil from '../util/MathUtil';
import ResultLine from './ResultLine';
import { Results } from '../constants/constants';
import { resultsBodyStyle } from '../styles/style';

const BaseCalculations = ({ data }) => {
	const total = MathUtil.getTotalCost(data).toString();
	const monthly = MathUtil.getTotalCost(data).toString();
	const numberOfPayments = MathUtil.getNumberOfPayments(data).toString();
	return (
		<View style={resultsBodyStyle.container}>
			<Text style={resultsBodyStyle.baseTitleText}>
				Base Calculations
			</Text>
			<View style={resultsBodyStyle.calcContainer}>
				<ResultLine
					label={Results.RESULTS_MONTHLY_PRINCIPAL}
					value={monthly}
				/>
				<ResultLine
					label={Results.RESULTS_NUMBER_OF_MONTHLY_PAYMENYS}
					value={numberOfPayments}
				/>
				<ResultLine
					label={Results.RESULTS_TOTAL_PAYMENTS}
					value={total}
				/>
				<ResultLine
					label={Results.RESULTS_ORIGINAL_LOAN_AMOUNT}
					value={data.mortgageAmount.value}
				/>
			</View>
			<Text>Graph here?</Text>
		</View>
	);
};

BaseCalculations.propTypes = {
	data: PropTypes.object.isRequired
};

export default BaseCalculations;
