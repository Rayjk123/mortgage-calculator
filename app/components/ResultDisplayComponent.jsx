import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { totalStyle } from '../styles/style';
import { totalLimitFormat } from '../util/numberFormat';
import ResultLine from './ResultLine';

const ResultDisplayComponent = ({
	total,
	totalValue,
	monthly,
	monthlyValue
}) => {
	return (
		<View style={totalStyle.wrapper}>
			<View style={totalStyle.container}>
				<ResultLine label={total} value={totalValue.toString()} />
				<ResultLine label={monthly} value={monthlyValue.toString()} />
			</View>
		</View>
	);
};

ResultDisplayComponent.propTypes = {
	total: PropTypes.string.isRequired,
	totalValue: PropTypes.string.isRequired,
	monthly: PropTypes.string.isRequired,
	monthlyValue: PropTypes.string.isRequired
};

export default ResultDisplayComponent;
