getStudents();
$("#btn").click(function () {
    $('div#modalWindow').css('display', 'block');
});
$("#add_student_form").submit(function () {
<<<<<<< HEAD
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
=======
    var
        name = $(this).find('input[name="name"]').val(),
        surname = $(this).find('input[name="surname"]').val(),
        email = $(this).find('input[type="email"]').val();
    var xhr = new XMLHttpRequest();

    var body = 'name=' + encodeURIComponent(name) + '&surname=' + encodeURIComponent(surname) + '&email=' + encodeURIComponent(email);

    xhr.open("POST", location.origin + '/api/add', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            $("#students").empty();
            getStudents();
        }
    };
    $('div#modalWindow').css('display', 'none');
    xhr.send(body);
>>>>>>> dev
    return false;
});


