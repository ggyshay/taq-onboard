import {
  createStackNavigator,
} from 'react-navigation';
import React from 'react'

import LoginPage from './pages/loginPage'
import Users from './pages/usersPage'
import Detail from './pages/detail'
import SignUp from './pages/signUp'


const RootStack = createStackNavigator({
  Login: { screen: LoginPage },
  Welcome: { screen: Users },
  Detail: {screen: Detail},
  SignUp: {screen: SignUp}
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}