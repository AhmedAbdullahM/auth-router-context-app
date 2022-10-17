/**
 * BASIC CONTEXT API SETUP
 1.context api: share auth state with other component (across the application)
 2.create an UserContext 
3. context provider with passed children
4.set the userContext in index.js
5.To consume the context: export the AuthContext from UserContext.
6. Now at Header or Home or anywhere else: use useContext hook to get info in the context.

----------
------------


**AUTH INTEGRATION
1.use getAuth by passing app from config firebase.
2.create a function named createUser to return createUserWithEmailAndPassword
 */