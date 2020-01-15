import * as React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { StackedBarChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import { curveNatural } from 'd3-shape';
import * as MathUtil from '../util/MathUtil';

const ResultsGraph = ({ formData }) => {
	function getData() {
		const pieData = [];
		const date = new Date();
		let currentYear = parseInt(date.getFullYear(), 10);
		const maxYear =
			parseInt(formData.mortgagePeriod.value, 10) + currentYear;
		let balance = MathUtil.getTotalCost(formData);
		let paid = 0;
		const yearlyPrincipal = MathUtil.getMonthlyCost(formData) * 12;
		while (currentYear <= maxYear) {
			pieData.push({
				year: currentYear,
				balance: balance.toFixed(2),
				paid: paid.toFixed(2)
			});
			balance -= yearlyPrincipal;

			paid += yearlyPrincipal;
			currentYear += 1;
		}
		return pieData;
	}
	function getYAxisData() {
		const Data = getData();
		const yAxisData = [];
		Object.keys(Data).forEach(function(key) {
			yAxisData.push(parseFloat(Data[key].balance));
		});
		return yAxisData;
	}

	function getXAxisData() {
		const Data = getData();
		const xAxisData = [];
		Object.keys(Data).forEach(function(key) {
			xAxisData.push(parseFloat(Data[key].year));
		});
		return xAxisData;
	}

	function getXAxisValue(key) {
		const Data = getData();
		return Data[Math.round(key)].year;
	}

	// NEED TO MAKE THIS BETTER
	function getTicks() {
		const Data = getData();
		if (Data.length <= 5) {
			return Data.length;
		}
		return parseInt(Data.length / 5, 10);
	}
	function getColors() {
		/* const length = parseInt(formData.mortgagePeriod.value);
		const randomColor = () =>
			(
				'#' +
				((Math.random() * 0xffffff) << 0).toString(16) +
				'000000'
			).slice(0, 7);
		const colors = [];
		for (let i = 0; i < length; i++) {
			colors.push(randomColor());
		} */
		const colors = ['#202b35', '#00aeef'];
		return colors;
	}
	function getKeys() {
		return ['balance', 'paid'];
	}
	return (
		<View
			style={{
				flex: 1
			}}
		>
			<View
				style={{
					height: 250,
					flexDirection: 'row'
				}}
			>
				<YAxis
					style={{ width: '15%', padding: 0 }}
					contentInset={{ top: 10, bottom: 10 }}
					data={getYAxisData()}
					svg={{ fill: 'black', fontSize: 10 }}
					numberOfTicks={10}
					formatLabel={value => `$${value}`}
				/>
				<StackedBarChart
					contentInset={{ top: 10, bottom: 10 }}
					style={{ flex: 1 }}
					data={getData()}
					keys={getKeys()}
					colors={getColors()}
					curve={curveNatural}
				>
					<Grid />
				</StackedBarChart>
			</View>
			<XAxis
				style={{
					flexDirection: 'row',
					flex: 1,
					position: 'absolute',
					bottom: -10,
					paddingLeft: '15%'
				}}
				contentInset={{ left: 15, right: 15 }}
				data={getXAxisData()}
				svg={{ fill: 'black', fontSize: 10 }}
				numberOfTicks={getTicks()}
				formatLabel={value => getXAxisValue(value)}
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
