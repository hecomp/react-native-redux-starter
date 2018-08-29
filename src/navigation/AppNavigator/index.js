import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { authRoute, appRoute } from '../../route'

const AuthStack = createStackNavigator(authRoute)

const AppStack = createStackNavigator(appRoute)

export default createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack,
}, {
    initialRouteName: 'Auth'
})