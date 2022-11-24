import React from 'react';
import {View, Text, Pressable, Platform} from 'react-native';
import MyContext from './MyContext';
import lightMode from '../styles/RulesStyles/Rules.light.styles';
import darkMode from '../styles/RulesStyles/Rules.dark.styles';
const Rules = ({navigation}) => {
  const isDark = React.useContext(MyContext);
  const styles = isDark ? lightMode : darkMode;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rules</Text>
      <Text style={styles.description}>
        The value of each card represents the number of exercise you do.
        {'\n'} {'\n'} J = 11, Q = 12, K = 13, A = 14
      </Text>
      <Text style={styles.cardTypeRule}>
        ♠️ = Push-ups{'\n'} {'\n'}❤️ = Sit-ups{'\n'} {'\n'}♣️ = Burpies{'\n'}{' '}
        {'\n'}♦️ = Jumping Jacks
      </Text>
      {Platform.OS === 'android' ? (
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back to Workout</Text>
        </Pressable>
      ) : null}
    </View>
  );
};
export default Rules;
