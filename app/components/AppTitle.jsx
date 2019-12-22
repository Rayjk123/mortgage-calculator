import React from 'react';
import { View, Text } from 'react-native';
import { bodyStyle } from '../styles/style';
import { MORTGAGE_TITLE } from '../constants/constants';

const ApplicationTitle = () => (
	<View style={bodyStyle.TitleContainer}>
		<Text style={bodyStyle.Title}>{MORTGAGE_TITLE}</Text>
	</View>
);

export default ApplicationTitle;
