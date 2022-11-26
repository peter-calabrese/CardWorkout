import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#2e3440',
    paddingHorizontal: 30,
  },
  header: {
    color: '#e5e9f0',
    fontSize: 35,
    fontWeight: '700',
    top: 50,
    position: 'absolute',
  },
  description: {
    marginTop: -20,
    color: '#e5e9f0',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  cardTypeRule: {
    marginTop: 30,
    color: '#e5e9f0',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
  },
  backButton: {
    position: 'absolute',
    bottom: 60,
  },
  backButtonText: {
    color: '#e5e9f0',
    fontSize: 16,
  },
});
