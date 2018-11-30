$('#students').append('<ul></ul>');
$(getStudents()).each(function (i, student) {
    $('#students ul').append('<li>' + student.name + ' ' + student.surname + ' ' + student.email + '</li>');
}
);

