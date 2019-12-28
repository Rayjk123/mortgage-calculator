import React from 'react';
import { View, Text } from 'react-native';
import { bodyStyle } from '../styles/style';
import { MORTGAGE_TITLE } from '../constants/constants';

const ApplicationTitle = ({ title }) => (
	<View style={bodyStyle.TitleContainer}>
		<Text style={bodyStyle.Title}>{title}</Text>
	</View>
);

export default ApplicationTitle;
