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
  firebase.analytics();
  /*<script>
loaduser()
{
var user = firebase.auth().currentUser;
var email;
if (user != null) {
  email = user.email;
}
 document.getElementById("userdetails").innerHTML = "Hi"+email; 
}
loaduser();
</script> */