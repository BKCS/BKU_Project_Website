$(function() {
var config = {
  apiKey: "AIzaSyAa26eymRRlyftZGQhf2MFaZyyfUOqHJ6I",
  authDomain: "ios-login-c71ab.firebaseapp.com",
  databaseURL: "https://ios-login-c71ab.firebaseio.com",
  storageBucket: "ios-login-c71ab.appspot.com",
  messagingSenderId: "171966663099"
};

firebase.initializeApp(config);
const btnLogout = document.getElementById('btn-login');
btnLogout.addEventListener('click', e =>
{
  var email = document.getElementById('validation-email').value;
  var password = document.getElementById('validation-password').value;
  if (email.length < 1) {
  alert('Nhập email.');
    return;
      }
      if (password.length < 1) {
        alert('Nhập password.');
        return;
      }
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Đăng nhập thất bại: '+errorMessage);
        console.log(error);
      });

});
});
