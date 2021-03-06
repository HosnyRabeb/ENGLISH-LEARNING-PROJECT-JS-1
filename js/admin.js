function addCourse() {
  let COURSE = JSON.parse(localStorage.getItem("COURSES")) || [];
  var CourseTitle = document.getElementById("CourseTitle").value;
  var Level = document.getElementById("Level").value;
  var CourseContent = document.getElementById("CourseContent").value;
  var References = document.getElementById("References").value;
  var HomeWork = document.getElementById("HomeWork").value;

  COURSE.push({
    id: COURSE.length,
    CourseTitle: CourseTitle,
    Level: Level,
    CourseContent: CourseContent,
    References: References,
    HomeWork: HomeWork,
  });
  localStorage.setItem("COURSES", JSON.stringify(COURSE));
  window.location.href = "allcourses.html";
}
function updateCourse(index) {
  let COURSES = JSON.parse(localStorage.getItem("COURSES")) || [];
  let COURSE = COURSES[index];
  document.getElementById("CourseTitle").value = COURSE.CourseTitle;
  document.getElementById("Level").value = COURSE.Level;
  document.getElementById("CourseContent").value = COURSE.CourseContent;
  document.getElementById("References").value = COURSE.References;
  document.getElementById("HomeWork").value = COURSE.HomeWork;
  document.getElementById("index").value = index;
}

function saveCourse() {
  let COURSE = JSON.parse(localStorage.getItem("COURSES")) || [];
  let CourseTitle = document.getElementById("CourseTitle").value;
  let Level = document.getElementById("Level").value;
  let CourseContent = document.getElementById("CourseContent").value;
  let References = document.getElementById("References").value;
  let HomeWork = document.getElementById("HomeWork").value;
  let index = document.getElementById("index").value;
  let updateTheCourse = {
    CourseTitle: CourseTitle,
    Level: Level,
    CourseContent: CourseContent,
    References: References,
    HomeWork: HomeWork,
  };
  COURSE.splice(index, 1,updateTheCourse);
  localStorage.setItem("COURSES", JSON.stringify(COURSE));
  displayCourse();
}

function deleteCourse(index) {
  console.log("delete");
  let COURSE = JSON.parse(localStorage.getItem("COURSES")) || [];
  COURSE.splice(index, 1);
  localStorage.setItem("COURSES", JSON.stringify(COURSE));
  displayCourse();
 
}

function displayCourse() {
//   console.log("hello");
  var COURSE = JSON.parse(localStorage.getItem("COURSES")) || [];
  var tcourse = document.getElementById("tcourse");
  var cols = "";

  COURSE.forEach((content,index) => {
    cols+=`		<div class="col-lg-4 col-md-6 mt-3">
                <div class="card">
                  <img class="card-img-top" src="../images/online--courses.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${content.CourseTitle}</h5>
                    <p class="card-text mt-3">${content.CourseContent}</p>
                    <h4>${content.Level}</h4>
                    <h3>${content.References}</h3>
                    <p>${content.HomeWork}</p>
                      <button class="btn btn-info mt-3" onclick="updateCourse(${index})" data-toggle="modal" data-target="#exampleModal">
                      UPDATE COURSE
                     </button>
                     <button class="btn btn-danger mt-3" onclick="deleteCourse(${index})">
                      DELETE COURSE
                     </button>
                  </div>
                </div>
               </div>`;
              });

  tcourse.innerHTML = cols;
}
