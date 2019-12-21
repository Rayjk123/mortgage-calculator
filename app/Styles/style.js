import { StyleSheet } from 'react-native';

export const bodyStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#697DBA',
    alignItems: 'center',
    paddingTop: '10%',
    position: 'relative',
  },
  marginBottom: {
    marginBottom: 20,
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
    textAlign: 'center',
  },
  TitleContainer: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    paddingBottom: 15,
  },
});
export const wrapper = StyleSheet.create({
  container: {
    width: '90%',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
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
    shadowOpacity: 0.4,
  },
  inputContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 15,
  },

  textContainer: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    paddingTop: 8,
    paddingBottom: 8,
    width: '60%',
  },
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
    backgroundColor: 'white',
  },
  numFont: {
    fontSize: 16,
    overflow: 'scroll',
  },
});

export const totalStyle = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    flexDirection: 'row',
  },
  wrapper: {
    marginTop: 15,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  textLabel: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    paddingTop: 8,
    paddingBottom: 8,
    width: '70%',
    fontSize: 18,
    fontWeight: '600',
  },
  numFont: {
    display: 'flex',
    fontSize: 18,
    paddingTop: 8,
    paddingBottom: 8,
    overflow: 'scroll',
    width: '30%',
    color: '#0D1D4B',
    fontWeight: '700',
  },
});
