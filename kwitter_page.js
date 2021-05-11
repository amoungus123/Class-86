//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDU8T9lWZEuk9Axdw5pChPOZpfBqilVCXE",
      authDomain: "classtest-7c7fe.firebaseapp.com",
      databaseURL: "https://classtest-7c7fe-default-rtdb.firebaseio.com",
      projectId: "classtest-7c7fe",
      storageBucket: "classtest-7c7fe.appspot.com",
      messagingSenderId: "369166333757",
      appId: "1:369166333757:web:0b6aec348012ff165af754",
      measurementId: "G-7JDEPX6QPC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "kwitter.html";
    }

//function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         //firebase_message_id = childKey;
         //message_data = childData;
//Start code
      
//End code
//      } });  }); }
//getData();
