import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as SplashScreen from 'expo-splash-screen'

import { LoadingScreen } from 'screens/Loading'
import { LoginConfirmationScreen, LoginScreen } from 'screens/SignIn'

export type TStackParams = {
  Login: any
  LoginConfirmation: any
}

/* TODO:
   1. install styled-components
   2. create InputField component
*/

const Stack = createStackNavigator<TStackParams>()

const App: React.FC = (): React.ReactElement | null => {
  const [appIsReady, setAppIsReady] = useState(false)
  let [fontsLoaded] = useFonts({
    'Lato-thin': require('../assets/fonts/Lato-Thin.ttf'),
    'Lato-light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Montserrat-thin': require('../assets/fonts/Montserrat-Thin.ttf'),
    'Montserrat-extraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-semiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  })

  useEffect(() => {
    const mounting = async () => {
      try {
        await SplashScreen.preventAutoHideAsync()
      } catch (e) {
        console.warn(e)
      }

      setTimeout(async () => {
        setAppIsReady(true)
        await SplashScreen.hideAsync()
      }, 1000)
    }

    mounting()
  }, [])

  if (!appIsReady) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoginConfirmation" component={LoginConfirmationScreen} options={{ title: 'Welcome' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
