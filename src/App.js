import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="84598120821-8009keevg70lo8fpqbd7cbbfss2553u9.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(jwt_decode(credentialResponse.credential))
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
