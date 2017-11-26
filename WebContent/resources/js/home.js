var productCategoriesRef=firebase.database().ref('Product Categories');
productCategoriesRef.on('value', function(snapshot) {
	snapshot.forEach(function(childSnapshot) {
		var key = childSnapshot.key;
		var productCategory = childSnapshot.val();
		$('#productCategoryList').append('<a href="#" class="list-group-item productCategoryItems" id="productCategoryItems||||'+key+'">'+productCategory["Product Category"]+'</a>');
	});

	$('.productCategoryItems').on('click',function(){
		$( ".productCategoryItems" ).removeClass( "active" );
		var productCategoryId=$(this).attr('id').split('||||')[1];
		$(this).addClass( "active" );
		var productItemRef=firebase.database().ref('Product Items').child(productCategoryId);
		productItemRef.on('value',function(snapshot){
			$('#product-items-div').html('');
			snapshot.forEach(function(childSnapshot) {
				var key = childSnapshot.key;
				var productItem = childSnapshot.val();
				$('#product-items-div').append('<div class="col-lg-3"><div class="well well-sm"><div class="row"><div class="col-lg-10">'+productItem["Product Item"]+'</div><div class="col-lg-2" style="padding-left: 5px;padding-right: 0px;padding-top: 2px;font-size: 12px;color: grey;cursor:pointer;"><div id="productItem|||'+key+'" class="product-remove"><i class="glyphicon glyphicon-remove"></i></div></div></div></div></div>');        
				$('.product-remove').on('click',function(){
					var productItemId=$(this).attr('id').split('|||')[1];
					console.log(productItemId);
					productItemRef.child(productItemId).remove();
				});
			});
		});
		$('#addProductItemBtn').on('click',function(){
			var newProduct=productItemRef.push(); 
			newProduct.set({
				"Product Item":$('#productItem').val()
			});
		}); 
	});
	$( ".productCategoryItems:first" ).trigger( "click" );
	$( ".productCategoryItems:first" ).addClass( "active" );
});
$('#addProductCategoryBtn').on('click',function(){
	var newProductCategory=productCategoriesRef.push(); 
	newProductCategory.set({
		"Product Category":$('#productCategory').val()
	});
});
$('#logout').on('click',function(){
	firebase.auth().signOut().then(function(){
		window.location.href = 'index.jsp';  
	}).catch(function (err) {
	});	  
});
$('#users').on('click',function(){
	$(".nav").find(".nav-active").removeClass("nav-active");
	$('#users').addClass("nav-active");
	window.location.href = 'users.jsp';
});
$('#addproductBtnModal').on('click',function(){
	$('#productItem').val('');
})
$('#addproductCategoryBtnModal').on('click',function(){
	$('#productCategory').val('');
})