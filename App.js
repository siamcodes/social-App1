import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './pages/Home';
import PostPage from './pages/Post';
import LoadingPage from './pages/Loading';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

const AppStack = createStackNavigator({
  Home: HomePage,
  Post: PostPage
})

const AuthStack = createStackNavigator({
  Login : LoginPage,
  Register: RegisterPage
})


export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingPage,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)

