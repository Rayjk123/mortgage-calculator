import * as React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { resultsBodyStyle } from '../styles/style';
import * as MathUtil from '../util/MathUtil';
import { StackedAreaChart, YAxis, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const ResultsGraph = ({ formData }) => {
	function getData() {
		const pieData = [];
		const date = new Date();
		let currentYear = parseInt(date.getFullYear());
		const maxYear = parseInt(formData.mortgagePeriod.value) + currentYear;
		let balance = MathUtil.getTotalCost(formData);
		let paid = 0;
		const yearlyPrincipal = MathUtil.getMonthlyCost(formData) * 12;
		while (currentYear <= maxYear) {
			pieData.push({
				year: currentYear,
				balance: balance.toFixed(2),
				paid: paid.toFixed(2)
			});
			balance = balance - yearlyPrincipal;

			paid = paid + yearlyPrincipal;
			currentYear++;
		}
		return pieData;
	}
	function getColors() {
		const length = parseInt(formData.mortgagePeriod.value);
		const randomColor = () =>
			(
				'#' +
				((Math.random() * 0xffffff) << 0).toString(16) +
				'000000'
			).slice(0, 7);
		const colors = [];
		for (let i = 0; i < length; i++) {
			colors.push(randomColor());
		}
		return colors;
	}
	function getKeys() {
		return ['year', 'balance', 'paid'];
	}
	return (
		<View style={resultsBodyStyle.container}>
			<StackedAreaChart
				contentInset={{ top: 10, bottom: 10 }}
				data={getData()}
				keys={getKeys()}
				colors={getColors()}
				curve={shape.curveNatural}
			>
				<Grid />
			</StackedAreaChart>
			<YAxis
				style={{ position: 'absolute', top: 0, bottom: 0 }}
				data={StackedAreaChart.extractDataPoints(data, keys)}
				contentInset={{ top: 10, bottom: 10 }}
				svg={{
					fontSize: 8,
					fill: 'white',
					stroke: 'black',
					strokeWidth: 0.1,
					alignmentBaseline: 'baseline',
					baselineShift: '3'
				}}
			/>
		</View>
	);
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
