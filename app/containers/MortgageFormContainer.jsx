import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import FormLine from '../components/FormLine';
import ResultDisplayComponent from '../components/ResultDisplayComponent';
import AppTitle from '../components/AppTitle';
import formUpdate from '../actions/index';
import {
	formatValueStringToNumber,
	formatValueStringToInteger
} from '../util/numberFormat';
import {
	MORTGAGE_TITLE,
	MORTGAGE_RESULTS_DETAILS
} from '../constants/constants';
import { bodyStyle, wrapper, inputStyle } from '../styles/style';
import * as MathUtil from '../util/MathUtil';

const MortgageFormContainer = ({ formData, formUpdate, navigation }) => {
	const valueUpdateIntegerCB = (label, value) => {
		formUpdate(label, formatValueStringToInteger(value));
	};

	const valueUpdateNumberCB = (label, value) => {
		formUpdate(label, formatValueStringToNumber(value));
	};

	return (
		<View style={bodyStyle.container}>
			<View style={wrapper.container}>
				<View style={inputStyle.container}>
					<FormLine
						label={formData.mortgageAmount.label}
						value={formData.mortgageAmount.value}
						valueUpdateCB={valueUpdateIntegerCB}
					/>
					<FormLine
						label={formData.interestRate.label}
						value={formData.interestRate.value}
						valueUpdateCB={valueUpdateNumberCB}
					/>
					<FormLine
						label={formData.mortgagePeriod.label}
						value={formData.mortgagePeriod.value}
						valueUpdateCB={valueUpdateIntegerCB}
					/>
				</View>
			</View>
			<ResultDisplayComponent
				total={formData.total.label}
				totalValue={MathUtil.getTotalCost(formData).toString()}
				monthly={formData.monthly.label}
				monthlyValue={MathUtil.getMonthlyCost(formData).toString()}
			/>
			<Button
				buttonStyle={bodyStyle.button}
				titleStyle={bodyStyle.buttonTitle}
				title={MORTGAGE_RESULTS_DETAILS}
				onPress={() => {
					navigation.navigate('Details', { formData });
				}}
			/>
		</View>
	);
};

MortgageFormContainer.navigationOptions = {
	title: MORTGAGE_TITLE
};

const formPropType = PropTypes.shape({
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
});

MortgageFormContainer.propTypes = {
	formData: PropTypes.shape({
		mortgageAmount: formPropType,
		interestRate: formPropType,
		mortgagePeriod: formPropType,
		total: formPropType,
		monthly: formPropType
	}).isRequired,
	formUpdate: PropTypes.func.isRequired,
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}).isRequired
};

const mapStateToProps = state => {
	console.log(`state: ${JSON.stringify(state)}`);
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
)(MortgageFormContainer);
