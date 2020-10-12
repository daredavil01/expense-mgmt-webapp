  // Your  web app's Firebase configuration
  /*var firebaseConfig = {
    apiKey: "AIzaSyCjeLEF------------------Vw0cQvlGftxX4Q",
    authDomain: "expensetracker-ed3f6.firebaseapp.com",
    databaseURL: "https://expensetracker-ed3f6.firebaseio.com",
    projectId: "expensetracker-ed3f6",
    storageBucket: "expensetracker-ed3f6.appspot.com",
    messagingSenderId: "101415615668",
    appId: "1:101415615668:web:8584a9ad762b6eb6e6ebe1",
    measurementId: "G-9LFWZWC584"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);O*/
var db =firebase.firestore();

function viewVoucher() {
  // Create the query to load the last 12 messages and listen for new ones.
  var query = firebase.firestore().collection('voucher').orderBy('timestamp', 'desc').limit(8);
  
  // Start listening to the query.
  query.onSnapshot(function(snapshot) {
      var content='';
    snapshot.forEach(function(change) {
      var voucher=change.data();
      var cost=voucher.cost;
      var emp_email=voucher.emp_email;
      var reason=voucher.reason;
      var type=voucher.type;
      var timestamp=voucher.timestamp;
      content += '<tr>';
      content += '<td>' + cost + '</td>'; //column1
      content += '<td>' + emp_email + '</td>';//column2
      content += '<td>' + reason + '</td>';//column3
      content += '<td>' + type + '</td>';//column4
      content += '<td>' + timestamp + '</td>';//column5
      content += '</tr>';
       // displayMessage(change.doc.id, voucher.timestamp, voucher.approved, voucher.cost, voucher.emp_email, voucher.reson, voucher.type);
        console.log(change.id, " => ", change.data());
    });
  $('#ex-table').append(content);
  console.log("Content successfully added in the table.");
  }); 
}


 // Signs-out.
function signOut() {
  // Sign out of Firebase.
  firebase.auth().signOut();
//  window.location='index.html';
}
document.getElementById("logout-action").addEventListener('click', signOut, false);

