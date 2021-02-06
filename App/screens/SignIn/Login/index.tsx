import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { TStackParams } from 'index'

type TNavigation = StackNavigationProp<TStackParams, 'Login'>

interface LoginScreenProps {
  navigation: TNavigation
}

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

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }): React.ReactElement => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={styles.appName}>uplace</Text>
      </View>
    </View>
  )
}
