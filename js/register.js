function signUp() {
  var FirstName = document.getElementById("recipient-name2").value;
  var LastName = document.getElementById("recipient-name3").value;
  var Email = document.getElementById("recipient-name4").value;
  var Password = document.getElementById("recipient-name6").value

  var storage = JSON.parse(localStorage.getItem("STUDENTS")) || [];
  storage.push({
    id:storage.length,
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    Password: Password,
    role:"admin",
    privateCourses:[]
  });
  localStorage.setItem("STUDENTS", JSON.stringify(storage));
  window.location.href = "index.html";
}


