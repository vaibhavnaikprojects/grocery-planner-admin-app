<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link href="resources/css/bootstrap.min.css" rel="stylesheet">
<link href="resources/css/bootstrap-toggle.min.css" rel="stylesheet">
<link href="resources/css/main.css" rel="stylesheet">
<title>Admin Console: Users</title>
</head>
<body>
	<jsp:include page="header.jsp"></jsp:include>
	<jsp:include page="modals.jsp"></jsp:include>
	<div class="container-fluid">
    	<div class="row">
    		<div class="col-lg-12">
	    		<div class="panel panel-primary">
	    			<div class="panel-heading">Users</div>
	    			<div class="panel-body" style="height: 450px;overflow-y: auto ">
			    		<table class="table table-bordered table-striped">
			    			<thead>
			    				<tr>
			    					<th>User Id</th>	
			    					<th>User Name</th>
			    					<th>Email Id</th>
			    					<th>Action</th>
			    				</tr>
			    			</thead>
			    			<tbody id="userTable">
			    			</tbody>
			    		</table>
		    		</div>
	    		</div>
    		</div>
    	</div>
    </div>
<script src="resources/js/jquery.min.js"></script>
<script src="resources/js/bootstrap.min.js"></script>
<script src="resources/js/bootstrap-toggle.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
<script src="resources/js/firebase-app.js"></script>
<script src="resources/js/users.js"></script>
</body>
</html>