function addCourse() {
  var storage = JSON.parse(localStorage.getItem("COURSES")) || [];
  var CourseTitle = document.getElementById("CourseTitle").value;
  var Level = document.getElementById("Level").value;
  var CourseContent = document.getElementById("CourseContent").value;
  var References = document.getElementById("References").value;
  var HomeWork = document.getElementById("HomeWork").value;

  storage.push({
    CourseTitle: CourseTitle,
    Level: Level,
    CourseContent: CourseContent,
    References: References,
    HomeWork: HomeWork,
  });
  localStorage.setItem("COURSES", JSON.stringify(storage));
  window.location.href = "allcourses.html";
}
function updateCourse(index) {
  let COURSES = JSON.parse(localStorage.getItem("COURSES")) || [];
  let COURSE = COURSES[index];
  document.getElementById("CourseTitle").value = COURSES.CourseTitle;
  document.getElementById("Level").value = COURSES.Level;
  document.getElementById("CourseContent").value = COURSES.CourseContent;
  document.getElementById("References").value = COURSES.References;
  document.getElementById("HomeWork").value = COURSES.HomeWork;
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
  localStorage.setItem("COURSE", JSON.stringify(COURSES));
  displayCourse();
}

function deleteCourse(index) {
  console.log("delete");
  let COURSE = JSON.parse(localStorage.getItem("COURSES")) || [];
  COURSE.splice(index, 1);
  localStorage.setItem("COURSE", JSON.stringify(COURSES));
  displayCourse();
 
}

function displayCourse() {
//   console.log("hello");
  var COURSE = JSON.parse(localStorage.getItem("COURSES")) || [];
  var tcourse = document.getElementById("tcourse");
  var cols = "";

  COURSE.forEach((content,index) => {
    cols += ` 
    <div class="col-lg-4 col-md-6 mt-5">
    <div class="card">
        <img class="card-img-top" src="../images/image-1.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title"> Online Courses </h5>
            <p class="card-text mb-3"> Here Is All You Need To Know About Your Online Courses .</p>
            <a href="../html/contact.html" class="btn btn-primary"><i class="fas fa-graduation-cap"></i>
                Join The Course</a>
        </div>
    </div>
</div>
  <button class="btn btn-info" onclick="updateCourse(${index})">
  UPDATE COURSE
 </button>
 <button class="btn btn-danger" onclick="deleteCourse(${index})">
  DELETE COURSE
 </button>
</div>`;
  });

  tcourse.innerHTML = cols;
}
