import React from 'react';
import { StackedAreaChart } from 'react-native-svg-charts';
import PropTypes from 'prop-types';
import { Chart } from '../styles/style';

const ResultsGraph = ({ formData }) => {
	console.log(formData);
	return <StackedAreaChart style={Chart.resultsChart} />;
};
const formPropType = PropTypes.shape({
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
});

ResultsGraph.propTypes = {
	formData: PropTypes.shape({
		mortgageAmount: formPropType,
		interestRate: formPropType,
		mortgagePeriod: formPropType,
		total: formPropType
	}).isRequired
};

export default ResultsGraph;
