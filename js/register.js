function signUp() {
  var FirstName = document.getElementById("recipient-name2").value;
  var LastName = document.getElementById("recipient-name3").value;
  var Email = document.getElementById("recipient-name4").value;
  var Password = document.getElementById("recipient-name6").value;

  // if (FirstName .value == "") {
  //     FirstName.className += " is-invalid";
  //   return;
  // } else {
  //     FirstName.classList.remove("is-invalid");
  //   FirstName.className += " is-valid";
  // }
  // if (LastName.value == "") {
  //     LastName.className += " is-invalid";
  //   return;
  // } else {
  //     LastName.classList.remove("is-invalid");
  //   LastName.className += " is-valid";
  // }
  // if (Email.value.indexOf("@") == -1) {
  //     Email.className += " is-invalid";
  //   return;
  // } else {
  //     Email.classList.remove("is-invalid");
  //     Email.className += " is-valid";
  // }
  // if (Password.value.length < 6) {
  //     Password.classList.remove("is-valid");
  //     Password.className += " is-invalid";
  //   return;
  // } else {
  //     Password.classList.remove("is-invalid");
  //     Password.className += " is-valid";
  // }

  var storage = JSON.parse(localStorage.getItem("STUDENTS")) || [];

  storage.push({
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    Password: Password,
    role:"admin"
  });
  localStorage.setItem("STUDENTS", JSON.stringify(storage));
  window.location.href = "index.html";
}


