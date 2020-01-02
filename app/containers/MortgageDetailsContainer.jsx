import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import formUpdate from '../actions/index';
import { resultsBodyStyle, bodyStyle } from '../styles/style';
import BaseCalculations from '../components/BaseCalculations';
import { MORTGAGE_RESULTS_TITLE } from '../constants/constants';
import ResultsGraph from '../components/ResultsGraph';
const MortgageDetailsContainer = ({ formData }) => {
	return (
		<ScrollView style={resultsBodyStyle.container}>
			<Text style={bodyStyle.ResultsTitle}>{MORTGAGE_RESULTS_TITLE}</Text>
			<BaseCalculations data={formData} />
			<ResultsGraph formData={formData} />
		</ScrollView>
	);
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
