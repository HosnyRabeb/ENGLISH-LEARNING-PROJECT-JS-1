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




//   <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

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
    
