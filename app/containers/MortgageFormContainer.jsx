import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import FormLine from '../components/FormLine';
import TotalContainer from '../components/TotalContainer';
import formUpdate from '../actions/index';
import { bodyStyle } from '../Styles/style';

const MortgageFormContainer = ({ formData, formUpdate }) => {
  const valueUpdateCB = (label, value) => {
    console.log(`Label: ${label} | value: ${value}`);
    if (!isNaN(value)) {
      formUpdate(label, value);
    }
  };
  function getTotalCost() {
    const R = formData.interestRate.value / 100 / 12;
    if (R === 0) return 0; // If interest is 0, results in dividing by 0
    const P = formData.mortgageAmount.value;
    const N = formData.mortgagePeriod.value * 12;
    if (N === 0) return 0; // If interst is not 0, but years is, results in dividing by 0
    const Numerator = R * P;
    const Denominator = 1 - (1 + R) ** (N * -1);
    return ((Numerator / Denominator) * N).toFixed(2);
  }

  return (
    <View style={bodyStyle.container}>
      <FormLine
        label={formData.mortgageAmount.label}
        value={formData.mortgageAmount.value}
        valueUpdateCB={valueUpdateCB}
      />
      <FormLine
        label={formData.interestRate.label}
        value={formData.interestRate.value}
        valueUpdateCB={valueUpdateCB}
      />
      <FormLine
        label={formData.mortgagePeriod.label}
        value={formData.mortgagePeriod.value}
        valueUpdateCB={valueUpdateCB}
      />
      <TotalContainer label={formData.total.label} value={getTotalCost()} />
    </View>
  );
};

const formPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

MortgageFormContainer.propTypes = {
  formData: PropTypes.shape({
    mortgageAmount: formPropType,
    interestRate: formPropType,
    mortgagePeriod: formPropType,
    total: formPropType,
  }).isRequired,
  formUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log(`state: ${JSON.stringify(state)}`);
  return {
    formData: state.formData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  formUpdate: (label, value) => dispatch(formUpdate(label, value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MortgageFormContainer);
