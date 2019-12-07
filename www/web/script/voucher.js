// Initialize Cloud Firestore through Firebase
 var firebaseConfig = {
    apiKey: "AIzaSyCDYHLVIj7GXJYnsS3TBcE6OsScHth-XDI",
    authDomain: "trackexpense-205ed.firebaseapp.com",
    databaseURL: "https://trackexpense-205ed.firebaseio.com",
    projectId: "trackexpense-205ed",
    storageBucket: "trackexpense-205ed.appspot.com",
    messagingSenderId: "938546180550",
    appId: "1:938546180550:web:2104d223c5128d51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
function addSampleData()
{
// Create an initial document to update.
var frankDocRef = db.collection("voucher").doc("voucher2");
frankDocRef.set({
    approved: false,
    id: 10000,
    reason: "company",
    type: "company"
}).then(function() {
  console.log("Voucher Created...");
});



var docRef = db.collection("voucher").doc("voucher2");

// Update the timestamp field with the value from the server
var updateTimestamp = docRef.update({
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
});

}

var firestore = firebase.firestore();

const docRef = firestore.doc("samples/textData");
const outputHeader = document.querySelector("#Text");
const inputTextField = document.querySelector("#NewText");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click",function() {
	const textToSave = inputTextField.value;
	console.log("You have Entered"+ textToSave + "to Firestone");
	docRef.set({
		Text: textToSave
	}).then(function(){
		console.log("Status saved!");
	}).catch(function(error){
		console.log("Got an error: ",error);
	})
})
