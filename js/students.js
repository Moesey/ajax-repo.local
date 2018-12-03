getStudents();
$("#btn").click(function () {
    $('div#modalWindow').css('display', 'block');
});
$("#add_student_form").submit(function () {
    var xhr = new XMLHttpRequest();

    var body = 'name=' + encodeURIComponent($name) + '&surname=' + encodeURIComponent($surname) + '&email=' + encodeURIComponent($email);
    

    xhr.open("POST", 'form', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send(body);
    return false;
});


