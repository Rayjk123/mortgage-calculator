import React from 'react';
import MortgageFormContainer from './containers/MortgageFormContainer';
import MortgageDetailsContainer from './containers/MortgageDetailsContainer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
	{
		Home: MortgageFormContainer,
		Details: MortgageDetailsContainer
	},
	{
		initialRouteName: 'Home'
	}
);

export let Navigation = createAppContainer(AppNavigator);
