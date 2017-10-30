var signinButton = document.getElementById('Signin');
var username = document.getElementById('username');
var password = document.getElementById('password');

/*
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location="timeline.html";
    } else {
        // No user is signed in.
    }
});
*/



function loginClicked() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

        console.log(email);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        window.location="timeline.html";
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Invalid Credentials");
        // ...
    });





    /*var rootref = firebase.database().ref();
    var firebaseRef = firebase.database().ref();

    rootref.on("child_added", function (snap) {
        var usernamecheck = snap.child("praneet").child("Username").value;
        var passwordcheck = snap.child("praneet").child("Password").value;

        firebaseRef.child("Check").set("not checking");

        if(usernamecheck.equalTo(username) && passwordcheck.equals(password)){
            firebaseRef.child("New Username").set(usernamecheck);
            firebaseRef.child("New Password").set(passwordcheck);
        }

    });*/


/*
    var usernameT = $('#username').val();
    var passwordT = $('#password').val();*/
    /*var newUsername = document.getElementById('username').value;
    var newEmail = document.getElementById('password').value;*/





}



function registerClicked() {

    var newUsername = document.getElementById('newUsername').value;
    var newEmail = document.getElementById('newEmail').value;
    var newPassword = document.getElementById('newPassword').value;
    var dob = document.getElementById('dob').value;
    var fullname = document.getElementById('fullname').value;
    var contact = document.getElementById('contact').value;

    var firebaseRef = firebase.database().ref();
    var db = firebase.firestore();
    console.log(newEmail, newPassword);

    firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).then(function () {


        db.collection("users").doc(newUsername).set({
            Username: newUsername,
            Full_Name: fullname,
            Contact: contact,
            DOB: dob

        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        alert("Registration Successful!");

    }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            alert(errorMessage)
            // ...
        });



    /*firebaseRef.child(newUsername).child("Username").set(newUsername);
    firebaseRef.child(newUsername).child("Date Of Birth").set(dob);
    firebaseRef.child(newUsername).child("Full Name").set(fullname);
    firebaseRef.child(newUsername).child("Contact").set(contact);*/



}