function showStudents(students) {
    $('#students').append('<ul id="list"></ul>');
    $(students).each(function (i, student) {
        $('#students ul').append('<li>' + student.name + ' ' + student.surname + ' ' + student.email + '<form method="post"><input type="submit" value="del"/><input type=hidden value=' + student.id + '></form>') + '</li>';
    });

    $("#list form").submit(function () {
        var xhr = new XMLHttpRequest();

        var id = $(this).find('input[type="hidden"]').val();
        var body = 'id=' + encodeURIComponent(id);
        xhr.open("POST", location.origin + '/api/delete', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                $("#students").empty();
                getStudents();
            }
            ;

        };
        xhr.send(body);
        return false;
    });
}
function getStudents() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', location.origin + '/api/index');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = xhr.responseText;
            var students = JSON.parse(json);
            if (students) {
                showStudents(students);
            }
        }
    };
    xhr.send();
}