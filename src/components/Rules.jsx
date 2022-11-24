import React from 'react';
import {View, Text, Pressable, Platform} from 'react-native';

const Rules = ({navigation}) => {
  return (
    <View>
      <Text>Rules</Text>
      {Platform.OS === 'android' ? (
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </Pressable>
      ) : null}
    </View>
  );
};
export default Rules;
