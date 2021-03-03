function studentDisplayCourse() {
	var COURSE = JSON.parse(localStorage.getItem("COURSES")) || [];
	var tstudent = document.getElementById("tstudent");
	var rows = "";

	COURSE.forEach((content, index) => {
		rows += `		<div class="col-lg-4 col-md-6 mt-5">
                    <div class="card">
                      <img class="card-img-top" src="../images/image-2.jpg" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${content.CourseTitle}</h5>
                        <p class="card-text mb-3">${content.CourseContent}</p>
                        <h4>${content.Level}</h4>
                        <h3>${content.References}</h3>
                        <p>${content.HomeWork}</p>
                          <button class="btn btn-info mt-3" onclick="joincourses(${content.id})" data-toggle="modal" data-target="#exampleModal">
                          JOIN THE COURSE
                         </button>
                      </div>
                    </div>
                   </div>
                   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog">
	  <div class="modal-content">
		<div class="modal-header">
		  <h5 class="modal-title" id="exampleModalLabel"> THE COURSE </h5>
		  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		  </button>
		</div>
		<div class="modal-body">
			<form action="#" method="post">
				<div class="fields-grid">
				  <div class="styled-input agile-styled-input-top">
					<textarea id="CourseTitle"></textarea>
					<label>CourseTitle</label>
				  </div>
				  <div class="styled-input">
					<textarea id="Level"></textarea>
					<label>Level</label>
				  </div>
				  <div class="styled-input">
					<textarea id="CourseContent"></textarea>
					<label>CourseContent</label>
				  </div>
				  <div class="styled-input">
					<textarea id="References"></textarea>
					<label class="text">References</label>
				  </div>
				</div>
				<div class="styled-input">
				  <textarea id="HomeWork"></textarea>
				  <label class="text">HomeWork</label>
				</div>
				<input type="hidden" id="index"> 
			  </form>
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel </button>
		</div>
	  </div>
	</div>
  </div>`;
	});

	tstudent.innerHTML = rows;
}
function joincourses(id) {
	var connectedStudent = JSON.parse(localStorage.getItem("UserConnected")) || {};
	var storage = JSON.parse(localStorage.getItem("STUDENTS")) || [];
	var exist = connectedStudent.privateCourses.find(x => x == id);
	if (exist == undefined) {
		connectedStudent.privateCourses.push(id);
		localStorage.setItem("UserConnected", JSON.stringify(connectedStudent));
/*
		var connectedStudent = JSON.parse(localStorage.getItem("UserConnected")) || {};
		var indexConnected = storage.findIndex(x => x.id == connectedStudent.id);
		storage[indexConnected].privateCourses.push(id);
		localStorage.setItem("STUDENTS", JSON.stringify(storage));*/
	}
}