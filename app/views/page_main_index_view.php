<h2>Students</h2>
<div id="students"></div>
<div id="modalWindow">
    <form onsubmit="ajax" action="form">
	<input type="text" name="name" placeholder="name"/>
	<input type="text" name="surname" placeholder="surname"/>
	<input type="email" name="email" placeholder="email"/>
	<input type="submit" value="add"/>
    </form>
</div>
<button id="btn">add student</button>
<script>
    $("#btn").click(function(){
	$('div#modalWindow').css('display', 'block');
    });
</script>
<script src="/js/main.js" type="text/javascript"></script>
<script src="/js/students.js" type="text/javascript"></script>