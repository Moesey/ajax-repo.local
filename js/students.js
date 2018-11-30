$(document).ready(function () {
    
    var ul = document.createElement('ul');
    $.each(students, function(i, item) {        
        var li = document.createElement('li');
        for(student in item){  
            console.log(item['name']);
            $(li).text(item['name'] + ' ' + item['surname'] + ' ' + item['email']);
            $(li).appendTo(ul);
        }
    }
    );
    $(ul).appendTo('#students');
});
