import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import FormLine from '../components/FormLine';
import formUpdate from '../actions/index';
import { bodyStyle } from '../Styles/style';

const MortgageFormContainer = ({ formData, formUpdate }) => {
  const valueUpdateCB = (label, value) => {
    console.log(`Label: ${label} | value: ${value}`);
    if (!isNaN(value)) {
      formUpdate(label, value);
    }
  };

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
