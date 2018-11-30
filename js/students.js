$('#students').append('<ul></ul>');
$(students).each(function (i, student) {
    $('#students ul').append('<li>' + student.name + ' ' + student.surname + ' ' + student.email + '</li>');
}
);

