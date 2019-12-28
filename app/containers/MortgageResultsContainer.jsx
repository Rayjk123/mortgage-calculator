import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { bodyStyle } from '../styles/style';
import { MORTGAGE_RESULTS_TITLE } from '../constants/constants';

const MortgageResultsContainer = ({ total }) => {
	<View style={bodyStyle.container}>
		<AppTitle title={MORTGAGE_RESULTS_TITLE} />
	</View>;
};

export default MortgageResultsContainer;
