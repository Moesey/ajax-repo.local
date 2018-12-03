function showStudents(students) {
    $('#students').append('<ul></ul>');
    $(students).each(function (i, student) {
	$('#students ul').append('<li>' + student.name + ' ' + student.surname + ' ' + student.email + '</li>');
    }
    );
}
function getStudents() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', location.origin + '/api/index');
    xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
	    var json = xhr.responseText;
	    var students = JSON.parse(json);
	    if (students) {
		showStudents(students)
	    }
	}
    };
    xhr.send();
}