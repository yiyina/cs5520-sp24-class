import { StyleSheet, Text, View,  TouchableOpacity} from 'react-native'
import React from 'react'
import CheckBox from 'expo-checkbox';

export default function StartCheckBox({ isCheckBoxChecked, handleCheckBox }) {
  return (
    <View style={styles.checkboxContainer}>
        <CheckBox 
              style={styles.checkbox}
              value={isCheckBoxChecked}
              onValueChange={handleCheckBox}/>
      <Text>I am not a robot</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginTop: 10,
    },
    checkbox: {
      marginRight: 10,
    },
})