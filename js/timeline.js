
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







/*
var cardWithHeader = "<div class=\\\"card\\\">\n" +
    "\n" +
    "<div class=\\\"header\\\">\n" +
    "<h3>\" +  + \"</h3>\n" +
    "</div>\n" +
    "</div>";

var contribution = "<div class=\\\"contribution\\\">\n" +
    "                    <div class=\\\"post\\\">\n" +
    "                        <h4>\" +  + \"</h4>\n" +
    "                        <p>\n" +
    "                           \" +  + \"\n" +
    "                        </p>\n" +
    "                    </div>\n" +
    "                    <div class=\\\"like_share\\\">\n" +
    "                        <a href=\\\"index.html\\\"><button><i class=\\\"fa fa-thumbs-up\\\"> Like</i></button></a>\n" +
    "                        <a href=\\\"index.html\\\"><button><i class=\\\"fa fa-thumbs-down\\\"> Dislike</i></button></a>\n" +
    "                        <a href=\\\"index.html\\\"><button><i class=\\\"fa fa-hashtag\\\"> Contribute</i></button></a>\n" +
    "\n" +
    "                        <div class=\\\"dropdown right\\\">\n" +
    "                            <button><i class=\\\"fa fa-ellipsis-v\\\"></i></button>\n" +
    "                            <div class=\\\"dropdown-content\\\">\n" +
    "                                <a href=\\\"#\\\">Report</a>\n" +
    "                                <a href=\\\"#\\\">Spam</a>\n" +
    "                                <a href=\\\"#\\\">Hide</a>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                    </div>\n" +
    "                    <div class=\\\"commenting\\\">\n" +
    "                        <div>\n" +
    "                            <img src=\\\"images/photo.jpg\\\" class=\\\"newCommentImage\\\" alt=\\\"\\\">\n" +
    "                            <input type=\\\"text\\\" placeholder=\\\"Say something...\\\" class=\\\"newCommentInput\\\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\\\"comment\\\">\n" +
    "                        <div class=\\\"oldCommentImageDiv\\\">\n" +
    "                            <img src=\\\"images/photo.jpg\\\" alt=\\\"\\\">\n" +
    "                        </div>\n" +
    "                        <div class=\\\"commentTextDiv\\\">\n" +
    "                            <h3>\" +  + \"</h3>\n" +
    "                            <p>\" +  + \"</p>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>";*/
