import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { TStackParams } from 'index'

type TNavigation = StackNavigationProp<TStackParams, 'LoginConfirmation'>

interface LoginConfirmationScreenProps {
  navigation: TNavigation
}
export const LoginConfirmationScreen: React.FC<LoginConfirmationScreenProps> = ({ navigation }): React.ReactElement => {
  return (
    <View>
      <Text>LoginConfirmation screen</Text>
    </View>
  )
}
