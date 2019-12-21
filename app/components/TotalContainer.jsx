import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { totalStyle, inputStyle } from '../Styles/style';

const TotalContainer = ({ label, value }) => {
  function convertToDollarString(value) {
    return '$ ' + value.toString();
  }

  return (
    <View style={totalStyle.wrapper}>
      <View style={totalStyle.container}>
        <Text style={totalStyle.textLabel}>{label}</Text>
        <Text style={totalStyle.numFont}>{convertToDollarString(value)}</Text>
      </View>
    </View>
  );
};

TotalContainer.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default TotalContainer;
