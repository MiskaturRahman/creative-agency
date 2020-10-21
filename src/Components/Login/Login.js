import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import google from "../../images/icons/google.png";
import logo from "../../images/logos/logo.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import './Login.css';


const Login = () => {
    document.title = " Login";
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })




    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    /* Route redirects after login */
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // Initialize Firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    /* GOOGLE Sign in */
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const newUser = {
                    name: displayName,
                    email,
                    photoURL,
                };
                console.log(result.user);
                setLoggedInUser(newUser);
                storeAuthToken();
                history.replace(from);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const storeAuthToken = () => {
        firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem("token", idToken);
                history.replace(from);
            })
            .catch(function (error) {
                // Handle error
            });
    };



    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(response => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: ''
                }

                setUser(signedOutUser);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }
    return (

        <div>
            <div className="logo text-center">
                <Link to="/">
                    <img className="mt-5" src={logo} alt="google logo" style={{ width: "150px" }} />
                </Link>
            </div>

            <div className="container login text-center mt-5">

                <div className="d-flex align-items-center justify-content-center pb-5 my-5">
                    <div className="login-register">
                        <h4 className='mb-4'>Login With</h4>


                        {
                            user.isSignedIn ?
                                <button onClick={handleSignOut} class="btn btn-danger btn-lg" href="#" role="button">Sign Out</button> :
                                <button className="btn btn-outline-secondary social-login" onClick={handleGoogleSignIn}>
                                    <img src={google} alt="" style={{ maxWidth: "30px" }} />
						Continue with Google
					</button>
                        }
                        <h5 className="mt-3">
                            <span>Don’t have an account?</span>
                            <Link to="/login">Create an account</Link>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;