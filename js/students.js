getStudents();

var xhr = new XMLHttpRequest();

var body = 'name=' + encodeURIComponent($name) + '&surname=' + encodeURIComponent($surname) + '&email=' + encodeURIComponent($email);;

xhr.open("POST", 'form', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send(body);
