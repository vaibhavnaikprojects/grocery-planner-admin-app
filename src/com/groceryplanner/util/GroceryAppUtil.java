package com.groceryplanner.util;

import java.io.FileInputStream;
import java.io.IOException;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseCredentials;

@SuppressWarnings("deprecation")
public class GroceryAppUtil {
	public static boolean initializeApp() throws IOException {
		if(!ApplicationValues.initApp) {
			FileInputStream serviceAccount =new FileInputStream("grocery-planner-09-firebase-adminsdk-5h1o2-8298dc7813.json");

			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredential(FirebaseCredentials.fromCertificate(serviceAccount))
					.setDatabaseUrl("https://grocery-planner-09.firebaseio.com")
					.build();

			FirebaseApp.initializeApp(options);
			ApplicationValues.initApp=true;
		}
		return ApplicationValues.initApp;
	}
}
