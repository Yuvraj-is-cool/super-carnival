const firebaseConfig = {
    apiKey: "AIzaSyAP7cQ9KvnyRRfDT4DXXA_C9zWFYZJC6a0",
    authDomain: "kwitter-project-63152.firebaseapp.com",
    projectId: "kwitter-project-63152",
    storageBucket: "kwitter-project-63152.appspot.com",
    messagingSenderId: "680530736411",
    appId: "1:680530736411:web:83ad7a7aa732da3323cfbe"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name+"!" ;
function addRoom(){
   room_name=document.getElementById("room_name").value;
   localStorage.setItem("room_name",room_name);
   firebase.datebase().ref("/").child(room_name).update({
    purpose:"add room name"
   });
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectroomname(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();
function rediectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}