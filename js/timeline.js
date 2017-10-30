
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        $("#currentUser").html("Hello " + user.email + "!");
    } else {
    }
});

function logoutClicked() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location="index.html";
    }).catch(function(error) {
        // An error happened.
        alert("Couldn't Signout!")
    });
}

