import firebase from './firebase.js';

class OauthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();

    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default OauthService;
