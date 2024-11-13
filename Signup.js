const firebaseConfig = {
  apiKey: "AIzaSyCKQpn9nKMNe0gjc_d12yQAJiUQ_LoqtVQ",
  authDomain: "quiz-app-78cb6.firebaseapp.com",
  databaseURL: "https://quiz-app-78cb6-default-rtdb.firebaseio.com",
  projectId: "quiz-app-78cb6",
  storageBucket: "quiz-app-78cb6.firebasestorage.app",
  messagingSenderId: "130816471784",
  appId: "1:130816471784:web:012ce36817ef5c0dbe4f5d"
};
  
  var app = firebase.initializeApp(firebaseConfig);
  
  var auth = firebase.auth();
  
  function signUp(e) {
    e.preventDefault()
    console.log("hello");
    var name = document.getElementById("userName");
    var email = document.getElementById("userEmail");
    var password = document.getElementById("userPassword");
  
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  


