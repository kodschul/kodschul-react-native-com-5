import { storage } from './storage';

export const getSignedInUser = () => {
  try {
    const user = storage.getString('auth.user') || null;
    return user ? JSON.parse(user) : null;
  } catch (e) {
    return null;
  }
};

export const isLoggedIn = () => {
  return getSignedInUser() !== null;
};

export const signIn = (user: object) => {
  storage.set('auth.user', JSON.stringify(user));
};

export const signOut = () => {
  storage.remove('auth.user');
};

export default {
  getSignedInUser,
  isLoggedIn,
  signIn,
  signOut,
};
