package com.groceryplanner.beans;

public class UserBean {
	private String userId;
	private String userName;
	private String emailId;
	private String status;
	
	public UserBean() {
		super();
	}
	public UserBean(String userId, String userName, String emailId, String status) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.emailId = emailId;
		this.status = status;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "UserBean [userId=" + userId + ", userName=" + userName + ", emailId=" + emailId + ", status=" + status
				+ "]";
	}
	
}
