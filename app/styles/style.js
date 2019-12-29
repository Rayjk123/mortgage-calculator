import { StyleSheet } from 'react-native';

export const bodyStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#697DBA',
		alignItems: 'center',
		paddingTop: '10%',
		position: 'relative'
	},
	marginBottom: {
		marginBottom: 20
	},
	Title: {
		color: 'white',
		fontSize: 30,
		fontWeight: '700',
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 2,
		shadowOpacity: 1,
		width: '100%',
		textAlign: 'center'
	},
	TitleContainer: {
		width: '100%',
		position: 'relative',
		display: 'flex',
		paddingBottom: 15
	},
	button: {
		marginTop: 15,
		width: '100%',
		backgroundColor: '#4675FC',
		padding: 10,
		borderRadius: 8,
		alignItems: 'center',
		shadowRadius: 2,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.4
	},
	buttonTitle: {
		fontSize: 20,
		fontWeight: '700',
		color: 'white'
	}
});
export const wrapper = StyleSheet.create({
	container: {
		width: '90%',
		display: 'flex',
		position: 'relative',
		alignItems: 'center',
		padding: 20,
		backgroundColor: 'white'
	}
});
export const inputStyle = StyleSheet.create({
	container: {
		display: 'flex',
		width: '100%',
		paddingTop: 15,
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 0,
		backgroundColor: 'white',
		shadowRadius: 2,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.4
	},
	inputContainer: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: 'white',
		width: '100%',
		marginBottom: 15
	},

	textContainer: {
		display: 'flex',
		position: 'relative',
		flexDirection: 'column',
		paddingTop: 8,
		paddingBottom: 8,
		width: '60%'
	}
});

export const numStyle = StyleSheet.create({
	numContainer: {
		display: 'flex',
		position: 'relative',
		flexDirection: 'column',
		paddingTop: 8,
		paddingBottom: 8,
		borderRadius: 4,
		paddingLeft: 5,
		paddingRight: 5,
		width: '40%',
		shadowRadius: 1,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		backgroundColor: 'white'
	},
	numFont: {
		fontSize: 16,
		overflow: 'scroll'
	}
});

export const totalStyle = StyleSheet.create({
	container: {
		width: '100%',
		padding: 15,
		backgroundColor: 'white',
		shadowRadius: 2,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.4,
		position: 'relative',
		display: 'flex'
	},
	wrapper: {
		marginTop: 15,
		width: '90%',
		display: 'flex',
		position: 'relative',
		backgroundColor: 'white',
		alignItems: 'center',
		padding: 20
	},
	textContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		position: 'relative',
		paddingTop: 8,
		paddingBottom: 8
	},
	button: {
		width: '100%',
		backgroundColor: '#4675FC',
		padding: 10,
		borderRadius: 8,
		alignItems: 'center'
	},
	buttonText: {
		color: 'white',
		fontWeight: '700',
		fontSize: 20,
		letterSpacing: 1
	},
	textLabel: {
		flexDirection: 'column',
		width: '50%',
		fontSize: 16,
		fontWeight: '600'
	},
	numFont: {
		flexDirection: 'column',
		fontSize: 16,
		overflow: 'scroll',
		width: '50%',
		color: '#0D1D4B',
		fontWeight: '700',
		textAlign: 'right'
	}
});
