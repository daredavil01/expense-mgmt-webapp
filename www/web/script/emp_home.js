  // Your  web app's Firebase configuration
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
var db =firebase.firestore();


function addVoucher(cost, reason,type)
{
var cost=document.getElementById("cost").value;
var reason=document.getElementById("reason").value;
var type=document.getElementById("type").value;

var user = firebase.auth().currentUser;
var email, uid;

if (user != null) {
  email = user.email;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}
// Add a new document with a generated id.
db.collection("voucher").add({
  uid: getUid(),
  approved: "false",
  emp_email: email,
  cost: cost, 
  reason: reason,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  type: type
})
.then(function(docRef) {
    alert("Voucher Added Successfully.");
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
} 
 // Signs-out of Friendly Chat.
function signOut() {
  // Sign out of Firebase.
  firebase.auth().signOut();
//  window.location='index.html';
}

// Initiate firebase auth.
function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
function getUserName() {
  return firebase.auth().currentUser.displayName;
}
// Returns the signed-in user's display name.
function getUid() {
  return firebase.auth().currentUser.uid;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}
/*
// Saves a new message on the Cloud Firestore.
function saveMessage(messageText) {
  // Add a new message entry to the Firebase database.
  return firebase.firestore().collection('messages').add({
    name: "sanket tambare",
    text: "Sample",
    profilePicUrl: getProfilePicUrl(),
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).catch(function(error) {
    console.error('Error writing new message to Firebase Database', error);
  });
}
*/
document.getElementById("logout-action").addEventListener('click', signOut, false);