$('#predefinedItems').on('click',function(){
	$(".nav").find(".nav-active").removeClass("nav-active");
	$('#predefinedItems').addClass("nav-active");
	window.location.href = 'home.jsp';
});

$('.deactivateUser').on('click',function(){
	var id=$(this).attr('id');
	console.log(id);
});

$('.activateUser').on('click',function(){
	var id=$(this).attr('id');
	console.log(id);
});

var usersRef=firebase.database().ref('users');
usersRef.on('value', function(snapshot) {
	$('#userTable').html('');
	snapshot.forEach(function(childSnapshot) {
		var key = childSnapshot.key;
		var user = childSnapshot.val();
		$('#userTable').append('<tr><td>'+user["userId"]+'</td><td>'+user["userName"]+'</td><td>'+user["emailId"]+'</td><td><input type="checkbox" id="'+user["userId"]+'" class="userAction"></td></tr>');
		$('#'+user["userId"]).bootstrapToggle({
			on: 'Activate',
			off: 'Deactivate'
		})
		if(user['status']=='active')
			$('#'+user['userId']).bootstrapToggle('off');
		else
			$('#'+user['userId']).bootstrapToggle('on');
	});
	$('.userAction').on('change',function(){
		var statusMessage='deactive';
		var id=$(this).attr('id');

		if($(this).prop('checked')){
			statusMessage='deactive';
			console.log(id +" "+statusMessage);
		}
		else{
			statusMessage='active';
			console.log(id +" "+statusMessage);
		}

		usersRef.child(id).on('value', function(snapshot){
			user=snapshot.val();
			usersRef.child(id).set({
				userId:user['userId'],
				userName: user['userName'],
				emailId: user['emailId'],
				status: statusMessage
			});
		});
	});
});
