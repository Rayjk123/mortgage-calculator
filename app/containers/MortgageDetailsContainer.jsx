import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import formUpdate from '../actions/index';
import { resultsBodyStyle } from '../styles/style';
import BaseCalculations from '../components/BaseCalculations';
import { MORTGAGE_RESULTS_TITLE } from '../constants/constants';
import ResultsGraph from '../components/ResultsGraph';

const MortgageDetailsContainer = ({ formData }) => {
	return (
		<ScrollView style={resultsBodyStyle.container}>
			<BaseCalculations data={formData} />
			<View
				style={{
					alignItems: 'center',
					position: 'relative',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'row'
				}}
			>
				<Text
					style={{
						fontWeight: '700',
						fontSize: 14,
						color: '#202b35'
					}}
				>
					Balance
				</Text>
				<Text
					style={{
						marginLeft: 10,
						fontWeight: '700',
						fontSize: 14,
						color: '#00aeef'
					}}
				>
					Paid
				</Text>
			</View>
			<ResultsGraph formData={formData} />
		</ScrollView>
	);
};

MortgageDetailsContainer.navigationOptions = {
	title: MORTGAGE_RESULTS_TITLE
};

const formPropType = PropTypes.shape({
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
});

MortgageDetailsContainer.propTypes = {
	formData: PropTypes.shape({
		mortgageAmount: formPropType,
		interestRate: formPropType,
		mortgagePeriod: formPropType,
		total: formPropType
	}).isRequired
};

const mapStateToProps = state => {
	console.log(`STATE DETAILS: ${JSON.stringify(state)}`);
	return {
		formData: state.formData
	};
};

const mapDispatchToProps = dispatch => ({
	formUpdate: (label, value) => dispatch(formUpdate(label, value))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MortgageDetailsContainer);
