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
      				<div class="panel-heading" style="padding-top:0px;padding-bottom:0px;padding-right: 0px"><div class="row"><div class="col-lg-8" style="padding-top: 10px">Product Categories</div><div class="col-lg-4"><button id="addproductCategoryBtnModal" class="btn btn-default btn-block" style="margin: 0px;" data-toggle="modal" data-target="#addProductCategory">ADD</button></div></div></div>
	      			<div id="productCategory" class="panel-body" style="height: 500px; overflow-y: auto;padding: 0px">
	      				<div id="productCategoryList" class="list-group"></div>
	      			</div>
      			</div>
      		</div>
      		<div class="col-lg-9">
      			<div class="panel panel-primary">
      				<div class="panel-heading" style="padding-top:0px;padding-bottom:0px;padding-right: 0px"><div class="row"><div class="col-lg-11" style="padding-top: 10px">Product Items</div><div class="col-lg-1"><button id="addproductBtnModal" class="btn btn-default btn-block" style="margin: 0px;" data-toggle="modal" data-target="#addProductItem">ADD</button></div></div></div>
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
<script src="resources/js/firebase-app.js"></script>
<script src="resources/js/home.js"></script>
</body>
</html>