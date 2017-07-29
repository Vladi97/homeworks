var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}


function save() {
	var user = {
		"name": document.getElementById("name").value,
		"lastname": document.getElementById("lastname").value,
		"phone": document.getElementById("phone").value
	};
	debugger;
	users.push(user);
	localStorage.setItem('users', JSON.stringify(users));
}

function remove(){
	debugger;
	var u = [];
	for (var i = 0; i < users.length-1; i++) {
		u.push(users[i]);
	}
	localStorage.clear();
	localStorage.setItem('users', JSON.stringify(u));
}