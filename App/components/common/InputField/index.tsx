import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'

interface InputFieldProps {}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').width * 0.1,
    margin: 'auto',
  },
  appName: {
    fontFamily: 'Lato-regular',
    fontWeight: '400',
    fontSize: 64,
    lineHeight: 76,
    color: '#6AD1E3',
    paddingBottom: 15,
  },
})

export const InputField: React.FC<InputFieldProps> = (): React.ReactElement => {
  return (
    <View>
      <Text>input</Text>
    </View>
  )
}
