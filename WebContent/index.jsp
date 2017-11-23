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
	<div class="container-fluid">
    	<div class="row" style="margin-top: 24px;">
    		<div class="col-lg-4 col-lg-offset-4">
    			<div class="panel panel-primary">
    				<div class="panel-body">
    					<h2 class="text-center">Grocery Planner Admin Console</h2>
    					<form class="form-horizonal">
    						<div class="form-group">
    							<div class="input-group">
    								<div class="input-group-addon"><i class="glyphicon glyphicon-user"></i></div>
    								<input class="form-control" type="text" id="emailId" placeholder="Enter Email"/>
    							</div>
    						</div>
    						<div class="form-group">
    							<div class="input-group">
    								<div class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></div>
    								<input class="form-control" type="password" id="password" placeholder="Enter Password"/>
    							</div>
    						</div>
    						<div class="row">
    							<div id="loginStatus" class="col-lg-9"></div>
    							<div class="col-lg-3">
    								<button type="button" id="loginBtn" class="btn btn-primary btn-block">LOG IN</button>
    							</div>
    						</div>
    					</form>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
<script src="resources/js/jquery.min.js"></script>
<script src="resources/js/bootstrap.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
<script src="resources/js/firebase-app.js"></script>
<script src="resources/js/index.js"></script>
</body>
</html>