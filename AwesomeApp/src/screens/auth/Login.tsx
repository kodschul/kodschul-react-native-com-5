import React from 'react';
import { ScreenProps, Screens } from '../../navigation';
import LoginView from './LoginView';
import authService from '../../config/authService';

const LoginScreen = ({ navigation }: ScreenProps<Screens.LOGIN>) => {
  const handleSignIn = (credentials: { email: string; password: string }) => {
    authService.signIn({
      email: credentials.email,
      username: credentials.email,
    });
    navigation.replace(Screens.TABS);
  };

  const handleSignUp = () => {
    // navigation.navigate(Screens.SIGNUP);
  };

  return <LoginView onSignIn={handleSignIn} onSignUp={handleSignUp} />;
};

export default LoginScreen;
