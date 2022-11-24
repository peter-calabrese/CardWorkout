import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#eceff4',
  },
  header: {
    color: '#4C566A',
    fontSize: 35,
    fontWeight: '700',
    top: 50,
    position: 'absolute',
  },
  description: {
    marginTop: -20,
    color: '#4C566A',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  cardTypeRule: {
    marginTop: 30,
    color: '#4C566A',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
  },
  backButton: {
    position: 'absolute',
    bottom: 60,
  },
  backButtonText: {
    color: '#4C566A',
    fontSize: 16,
  },
});
