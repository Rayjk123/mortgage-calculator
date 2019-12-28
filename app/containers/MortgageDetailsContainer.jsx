import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import formUpdate from '../actions/index';
import { bodyStyle } from '../styles/style';

const MortgageDetailsContainer = ({ formData }) => {
	return (
		<View style={bodyStyle.container}>
			<Text>{'Hello'}</Text>
		</View>
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
