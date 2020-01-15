import { StyleSheet } from 'react-native';

export const resultsBodyStyle = StyleSheet.create({
	container: {
		width: '100%',
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 6,
		paddingRight: 6,
		position: 'relative'
	},
	yaxis: {
		fontSize: 12
	},
	calcContainer: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		paddingBottom: 4,
		paddingTop: 4,
		borderTopWidth: 0.5,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderBottomWidth: 0.5,
		borderStyle: 'solid',
		borderColor: 'gray'
	},
	baseTitleText: {
		textAlign: 'left',
		width: '100%',
		fontSize: 16,
		paddingBottom: 8
	}
});
export const bodyStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#697DBA',
		display: 'flex',
		justifyContent: 'center',
		paddingLeft: 20,
		paddingRight: 20
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
	ResultsTitle: {
		color: 'black',
		fontSize: 30,
		fontWeight: '700',
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
		width: '100%',
		marginTop: 15,
		padding: 10,
		alignItems: 'center',
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#8FCCFF',
		overflow: 'hidden',
		borderRadius: 8,
		shadowColor: '#113656'
	},
	buttonTitle: {
		fontSize: 20,
		fontWeight: '800',
		letterSpacing: 1,
		color: 'white',
		shadowRadius: 0.5,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowColor: 'black'
	}
});
export const wrapper = StyleSheet.create({
	container: {
		width: '100%',
		display: 'flex',
		position: 'relative',
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 8
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
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowColor: 'white',
		borderRadius: 8
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
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowColor: 'white',
		position: 'relative',
		display: 'flex',
		borderRadius: 8
	},
	wrapper: {
		marginTop: 15,
		width: '100%',
		backgroundColor: 'white',
		borderRadius: 8
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

export const Chart = StyleSheet.create({
	resultsChart: {
		height: 300,
		width: '100%'
	}
});
