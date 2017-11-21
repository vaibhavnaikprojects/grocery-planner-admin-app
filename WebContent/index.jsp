<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link href="resources/css/bootstrap.min.css" rel="stylesheet">
<link href="resources/css/main.css" rel="stylesheet">
<title>Admin Console</title>
</head>
<body>
	<jsp:include page="header.jsp"></jsp:include>
	<jsp:include page="modals.jsp"></jsp:include>
	<div class="container-fluid">
    	<div class="row">
    		<div class="col-lg-3">
      			<div class="panel panel-primary">
      				<div class="panel-heading" style="padding-top:0px;padding-bottom:0px;padding-right: 0px"><div class="row"><div class="col-lg-8" style="padding-top: 10px">Product Categories</div><div class="col-lg-4"><button class="btn btn-default btn-block" style="margin: 0px;" data-toggle="modal" data-target="#addProductCategory">ADD</button></div></div></div>
	      			<div id="productCategory" class="panel-body" style="height: 500px; overflow-y: auto;padding: 0px">
	      				<div id="productCategoryList" class="list-group"></div>
	      			</div>
      			</div>
      		</div>
      		<div class="col-lg-9">
      			<div class="panel panel-primary">
      				<div class="panel-heading" style="padding-top:0px;padding-bottom:0px;padding-right: 0px"><div class="row"><div class="col-lg-11" style="padding-top: 10px">Product Items</div><div class="col-lg-1"><button class="btn btn-default btn-block" style="margin: 0px;" data-toggle="modal" data-target="#addProductItem">ADD</button></div></div></div>
	      			<div id="product-items-div" class="panel-body" style="height: 500px; overflow-y: auto;">
	      				<div class="row">
	      				</div>
	      			</div>
      			</div>
      		</div>
    	</div>
    </div>

<script src="resources/js/jquery.min.js"></script>
<script src="resources/js/bootstrap.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCzEGP8v-mr962Z7h_LHz62ZP0-FZ2l0mo",
    authDomain: "grocery-planner-09.firebaseapp.com",
    databaseURL: "https://grocery-planner-09.firebaseio.com",
    projectId: "grocery-planner-09",
    storageBucket: "grocery-planner-09.appspot.com",
    messagingSenderId: "692294766815"
  };
  firebase.initializeApp(config);
  var productCategoriesRef=firebase.database().ref('Product Categories');
  productCategoriesRef.on('value', function(snapshot) {
	  snapshot.forEach(function(childSnapshot) {
	        var key = childSnapshot.key;
	        var productCategory = childSnapshot.val();
	        $('#productCategoryList').append('<a href="#" class="list-group-item productCategoryItems" id="productCategoryItems-'+key+'">'+productCategory+'</a>');
	  });
	  $('.productCategoryItems').on('click',function(){
		  var productCategoryId=$(this).attr('id').split('-')[1];
		  console.log(productCategoryId);
		  var productItemRef=firebase.database().ref('Product Items').child(productCategoryId);
		  $('#product-items-div').html('');
		  productItemRef.on('value',function(snapshot){
			  snapshot.forEach(function(childSnapshot) {
			        var key = childSnapshot.key;
			        var productItem = childSnapshot.val();
			        $('#product-items-div').append('<div class="col-lg-3"><div class="well well-sm"><div class="row"><div class="col-lg-10">'+productItem+'</div><div class="col-lg-2" style="padding-left: 5px;padding-right: 0px;padding-top: 2px;font-size: 12px;color: grey;cursor:pointer;"><div id="productItem-'+key+'" class="product-remove"><i class="glyphicon glyphicon-remove"></i></div></div></div></div></div>');
			        
			  });
			  $('.product-remove').on('click',function(){
		        	var productItemId=$(this).attr('id').split('-')[1];
		        	console.log(productItemId);
		        });
		  });
	  });
  });
  
  
  
</script>
</body>
</html>