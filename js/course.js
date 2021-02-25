function displayAllCourses(){
    var COURSE = JSON.parse(localStorage.getItem("COURSES")) || [];
    var allCourses = document.getElementById("allCourses");
    var rows = "";
  
    COURSE.forEach((content,index) => {
      rows+=`		<div class="col-lg-4 col-md-6 mt-5">
                  <div class="card">
                    <img class="card-img-top" src="../images/online--courses.jpg" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${content.CourseTitle}</h5>
                      <p class="card-text mb-3">${content.CourseContent}</p>
                      <h4>${content.Level}</h4>
                      <h3>${content.References}</h3>
                      <p>${content.HomeWork}</p>
                        <button class="btn btn-info mt-3" onclick="studentDisplayCourse(${index})" data-toggle="modal" data-target="#exampleModal">
                        JOIN THE COURSE
                       </button>
                    </div>
                  </div>
                 </div>`;
                });
  
        allCourses.innerHTML = rows;
  }
