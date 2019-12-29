import React from 'react';
import { StackedAreaChart } from 'react-native-svg-charts';
import { Chart } from '../styles/style';

const ResultsGraph = ({ formData }) => {
	console.log(formData);
	return <StackedAreaChart style={Chart.resultsChart} />;
};

export default ResultsGraph;
