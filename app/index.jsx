import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MortgageFormContainer from './containers/MortgageFormContainer';
import MortgageDetailsContainer from './containers/MortgageDetailsContainer';

const AppNavigator = createStackNavigator(
	{
		Home: MortgageFormContainer,
		Details: MortgageDetailsContainer
	},
	{
		initialRouteName: 'Home'
	}
);

const Navigation = createAppContainer(AppNavigator);

export default Navigation;
