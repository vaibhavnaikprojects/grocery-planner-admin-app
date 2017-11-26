$('#loginBtn').on('click',function(){
		var email=$('#emailId').val();
		var password=$('#password').val();
		$('#loginStatus').html('');
		if(email=='vaibhavsnaik09@gmail.com'){
			firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
				window.location.href = 'home.jsp';
			}).catch(function(error) {
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  $('#loginStatus').html(errorMessage);
			});
		}
		else{
			$('#loginStatus').html('Please enter admin credentials');
		}
	});