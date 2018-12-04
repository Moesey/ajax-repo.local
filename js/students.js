// getStudents();
$("#btn").click(function () {
    $('div#modalWindow').css('display', 'block');
});
$("#add_student_form").submit(function () {
	var student = {};
    student.name = $("input[name='name']").val();
	student.surname = $("input[name='surname']").val();
	student.email = $("input[name='email']").val();
	// console.log(student_name+" ; "+student_surname+" ; "+student_email);
	var xhr = new XMLHttpRequest();
	xhr.open("GET", location.origin+"/api/index");
	xhr.send(JSON.stringify(student));

    // var xhr = new XMLHttpRequest();

    // var body = 'name=' + encodeURIComponent($name) + '&surname=' + encodeURIComponent($surname) + '&email=' + encodeURIComponent($email);
    

    // xhr.open("POST", 'form', true);
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // xhr.send(body);
    return false;
});


