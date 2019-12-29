import React from 'react';
import { StackedAreaChat, StackedAreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Chart } from '../styles/style';
import * as constants from '../constants/constants';

const ResultsGraph = ({ formData }) => {
	const keys = [];
	return <StackedAreaChart style={Chart.resultsChart} />;
};

ResultsGraph.propTypes = {
	formData: PropTypes.object.isRequired
};

export default ResultsGraph;
