
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomNames(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomNames(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}