function displayAllCourses(){
    var COURSE = JSON.parse(localStorage.getItem("COURSES")) || [];
    var allCourses = document.getElementById("allCourses");
    var rows = "";
  
    COURSE.forEach((content,index) => {
      rows+=`		<div class="col-lg-4 col-md-6">
                  <div class="card mt-3">
                    <img class="card-img-top" src="../images/online--courses.jpg" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${content.CourseTitle}</h5>
                      <p class="card-text">${content.CourseContent}</p>
                      <h4>${content.Level}</h4>
                      <h3>${content.References}</h3>
                      <p>${content.HomeWork}</p>
                        <button class="btn btn-info mt-3" onclick="enrollCourse(${content.id})" data-toggle="modal" data-target="#exampleModal">
                        JOIN THE COURSE
                       </button>
                    </div>
                  </div>
                 </div>`;
                });
  
        allCourses.innerHTML = rows;
  }


  function enrollCourse(id){
    var connectedStudent = JSON.parse(localStorage.getItem("UserConnected")) || {};
     var exist = connectedStudent.privateCourses.find(x=> x== id);
     if(exist==undefined){
        connectedStudent.privateCourses.push(id);
        localStorage.setItem("UserConnected",JSON.stringify(connectedStudent));
        connectedStudent.privateCourses.push(id);
    localStorage.setItem("UserConnected",JSON.stringify(connectedStudent));

    // MODIFICATION FOR STUDENTS //
    
    var storage = JSON.parse(localStorage.getItem("STUDENTS")) || [];
    var indexConnected= storage.findIndex(x=> x.id==connectedStudent.id);
    storage[indexConnected].privateCourses.push(id);
    localStorage.setItem("STUDENTS", JSON.stringify(storage));
    }
  }
    
