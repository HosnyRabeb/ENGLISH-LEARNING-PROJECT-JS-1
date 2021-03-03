function signIn() {
  var Email = document.getElementById("recipient-name");
  var Password = document.getElementById("recipient-name1");
  var storage = JSON.parse(localStorage.getItem("STUDENTS"));
  console.log(storage);
  var connectedStudent = JSON.parse(localStorage.getItem("UserConnected")) || [];

  connectedStudent = storage.find(
    (x) => x.Email === Email.value && x.Password === Password.value
  );

  if (connectedStudent === undefined) {
    alert("VERIFY YOUR EMAIL OR/AND PASSWORD");
  } else if(connectedStudent.role=="admin"){
    localStorage.setItem("UserConnected", JSON.stringify(connectedStudent))
    window.location.href = "admin.html";
  }
  else{
    localStorage.setItem("UserConnected", JSON.stringify(connectedStudent))
    window.location.href = "student.html";
  }
}

