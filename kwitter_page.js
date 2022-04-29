var firebaseConfig = {
    apiKey: "AIzaSyCWCZ1g7BLn9GNuLEQLJdwVM8IOmxGoAa4",
    authDomain: "kwitterproject-fc0d0.firebaseapp.com",
    projectId: "kwitterproject-fc0d0",
    storageBucket: "kwitterproject-fc0d0.appspot.com",
    messagingSenderId: "134754758829",
    appId: "1:134754758829:web:be1fc03ff7d3e947921624"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
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
function log(){
    localStorage.removeItem(user_name);
    localStorage.removeItem(room_name);2
}