import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { bodyStyle } from '../styles/style';

const AppTitle = ({ title }) => (
	<View style={bodyStyle.TitleContainer}>
		<Text style={bodyStyle.Title}>{title}</Text>
	</View>
);

AppTitle.propTypes = {
	title: PropTypes.string.isRequired
};
export default AppTitle;
