const firebaseConfig = {
  apiKey: "AIzaSyCKQpn9nKMNe0gjc_d12yQAJiUQ_LoqtVQ",
  authDomain: "quiz-app-78cb6.firebaseapp.com",
  databaseURL: "https://quiz-app-78cb6-default-rtdb.firebaseio.com",
  projectId: "quiz-app-78cb6",
  storageBucket: "quiz-app-78cb6.firebasestorage.app",
  messagingSenderId: "130816471784",
  appId: "1:130816471784:web:012ce36817ef5c0dbe4f5d",
};

var app = firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();

var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");

var model = {};

window.login = function (e) {
  e.preventDefault();
  model.email = userEmail.value;
  model.password = userPassword.value;
  console.log(model);

  auth.signInWithEmailAndPassword(model.email, model.password)
    .then(function (res) {
      console.log(res.user.uid, "successfull Login");
      window.location.assign("../Quiz/quiz.html");
      model.id = res.user.uid;
      let refrence = ref(database, `user/ ${model.id}`);
      onValue(refrence, function (user) {
        console.log(user.val());
      });

      userEmail.value = "";
      userPassword.value = "";
    })
    .catch(function (err) {
      console.log(err.message);
    });
};
