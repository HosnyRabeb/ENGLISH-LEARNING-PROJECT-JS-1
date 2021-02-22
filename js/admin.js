function addCourse() {
    var storage = JSON.parse(localStorage.getItem("STUDENTS")) || [];
    storage.push({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: Password,
        role: "admin"
    });
    localStorage.setItem("STUDENTS", JSON.stringify(storage));
    window.location.href = "index.html";
}
