	$(function() {
	var config = {
		apiKey: "AIzaSyAa26eymRRlyftZGQhf2MFaZyyfUOqHJ6I",
		authDomain: "ios-login-c71ab.firebaseapp.com",
		databaseURL: "https://ios-login-c71ab.firebaseio.com",
		storageBucket: "ios-login-c71ab.appspot.com",
		messagingSenderId: "171966663099"
	};

	firebase.initializeApp(config);
	const btnLogout = document.getElementById('btnLogout');
	btnLogout.addEventListener('click', e =>
{
	firebase.auth().signOut().then(function() {
  console.log('Signed Out');
	window.location.href = '/login/login.html';
}, function(error) {
  console.error('Sign Out Error', error);
});
});
});
