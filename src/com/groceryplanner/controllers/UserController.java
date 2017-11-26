package com.groceryplanner.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.UserRecord;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.groceryplanner.beans.UserBean;
import com.groceryplanner.util.GroceryAppUtil;

/**
 * Servlet implementation class Users
 */
@WebServlet("/Users")
public class UserController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<UserBean> users=new ArrayList<>();
		if(GroceryAppUtil.initializeApp()) {
			String uid=request.getParameter("userId");
			String status=request.getParameter("status");
			DatabaseReference ref = FirebaseDatabase.getInstance().getReference("users").child(uid);
			
		}
		System.out.println(users);
		request.setAttribute("users", users);
		request.getRequestDispatcher("users").forward(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
}
