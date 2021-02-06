import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'

import { LoadingIcon } from 'components/UI/icons'

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -(Dimensions.get('window').width / 4) },
      { translateY: -(Dimensions.get('window').height / 4) },
    ],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 64,
    lineHeight: 76,
    color: '#6AD1E3',
    paddingBottom: 15,
  },
})

interface LoadingScreenProps {}
export const LoadingScreen: React.FC<LoadingScreenProps> = (): React.ReactElement => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.appName}>uplace</Text>
        <LoadingIcon />
      </View>
    </View>
  )
}
