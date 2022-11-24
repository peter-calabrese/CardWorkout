import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#2e3440',
  },
  imageContainer: {
    width: 250,
    height: 380,
    marginBottom: 30,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
  },
  stopButton: {
    backgroundColor: '#D36B75',
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B4252',
  },
  restartButton: {
    backgroundColor: '#a3be8c',
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  rulesButton: {
    backgroundColor: '#88c0d0',
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
