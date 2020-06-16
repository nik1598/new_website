function submitToAPI(e) {
	e.preventDefault();
	var URL = "https://p2q1aaecrl.execute-api.us-west-2.amazonaws.com/prod/email";

	var name = $("#name").val();
	var email = $("#email").val();
	var subject = $("#subject").val();
	var message = $("#message").val();

	if (name=="" || email=="" || subject=="" || message=="")
        {
            alert("ERROR: Please fill in all fields!");
            return false;
        }
			
		nameRE = /[A-Za-z]{1}[A-Za-z]/;
		if(!nameRE.test(name)) {
			alert("ERROR: The name that you entered is not valid!\nNote: Name field should at least have 2 characters.");
				return false;
		}
		
		emailRE = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,3})?$/;
		if(!emailRE.test(email)) {
			alert("ERROR: The email address you entered is not valid!");
				return false;
		}

	var data = {
		name : name,
		email : email,
		subject : subject, 
		message : message
	};

	$.ajax({
		type: "POST",
		url: "https://p2q1aaecrl.execute-api.us-west-2.amazonaws.com/prod/email",
		dataType: "json",
		crossDomain: "true",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(data),

		success: function() {
			alert("Thank you for the submission. Your message will be responded soon.");
	location.reload();
		},
		error: function() {
			alert("ERROR: Your message was not delivered successfully!!");
		}
	})
}