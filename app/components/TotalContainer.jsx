import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { totalStyle } from '../Styles/style';

const TotalContainer = ({ label, value }) => {
  console.log('Total');
  return (
    <View style={totalStyle.container}>
      <Text style={totalStyle.textLabel}>{label}</Text>
      <Text style={totalStyle.numFont}>{value.toString()}</Text>
    </View>
  );
};

TotalContainer.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default TotalContainer;
