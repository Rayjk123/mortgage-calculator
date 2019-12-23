import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import FormLine from '../components/FormLine';
import TotalContainer from '../components/TotalContainer';
import AppTitle from '../components/AppTitle';
import formUpdate from '../actions/index';
import {
	formatValueStringToNumber,
	formatValueStringToInteger
} from '../util/numberFormat';
import { bodyStyle, wrapper, inputStyle } from '../styles/style';

const MortgageFormContainer = ({ formData, formUpdate }) => {
	const valueUpdateIntegerCB = (label, value) => {
		if (!isNaN(value)) {
			formUpdate(label, formatValueStringToInteger(value));
		}
	};

	const valueUpdateNumberCB = (label, value) => {
		if (!isNaN(value)) {
			formUpdate(label, formatValueStringToNumber(value));
		}
	};

	function getTotalCost() {
		const zero = 0;
		const R = parseFloat(formData.interestRate.value) / 100 / 12;
		if (R === 0) {
			return zero;
		}
		const P = parseFloat(formData.mortgageAmount.value);
		const N = parseFloat(formData.mortgagePeriod.value * 12);
		if (N === 0) {
			return zero;
		}
		const Numerator = R * P;
		const Denominator = 1 - (1 + R) ** (N * -1);
		return (Numerator / Denominator) * N;
	}

	return (
		<View style={bodyStyle.container}>
			<AppTitle />
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
			<TotalContainer
				label={formData.total.label}
				value={getTotalCost().toString()}
			/>
		</View>
	);
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
		total: formPropType
	}).isRequired,
	formUpdate: PropTypes.func.isRequired
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
