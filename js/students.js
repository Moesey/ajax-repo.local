getStudents();
$("#btn").click(function () {
    $('div#modalWindow').css('display', 'block');
});
$("#add_student_form").submit(function () {
	var student = {};
    student.name = $("input[name='name']").val();
	student.surname = $("input[name='surname']").val();
    student.email = $("input[name='email']").val();
    var content = "name="+student.name+"&surname="+student.surname+"&email="+student.email;
	var xhr = new XMLHttpRequest();
    xhr.open("POST", location.origin+"/api/add", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  
    // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            $('#students').empty();
           getStudents();
        }
        };
    xhr.send(content);
    return false;
});


