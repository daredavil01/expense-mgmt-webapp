  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCjeLEF-zqI0cMoYJnv-Vw0cQvlGftxX4Q",
    authDomain: "expensetracker-ed3f6.firebaseapp.com",
    databaseURL: "https://expensetracker-ed3f6.firebaseio.com",
    projectId: "expensetracker-ed3f6",
    storageBucket: "expensetracker-ed3f6.appspot.com",
    messagingSenderId: "101415615668",
    appId: "1:101415615668:web:8584a9ad762b6eb6e6ebe1",
    measurementId: "G-9LFWZWC584"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

//Handle Account Status
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'home.html'; //After successful login, user will be redirected to emp_home.html
  }
});

function login(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
  console.log("Login successful");
   window.location = 'home.html'; //After successful login, user will be redirected to home.html
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});


}
  // Signs-in Friendly Chat.
function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
    if(user) {
    window.location = 'home.html'; //After successful login, user will be redirected to emp_home.html
  }
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
console.log("User Login successful");

}
function logout(){
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
console.log("Logout successful...");
}

   function sendPasswordReset() {
      var email = document.getElementById('email').value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }

    //document.getElementById("logout-button-action").addEventListener('click', logout, false);