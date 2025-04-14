import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function App() {
  return (
    <div style={{ padding: 50 }}>
      <h1>App A (Login)</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential);
          console.log("User Info:", decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        auto_select
      />
    </div>
  );
}

export default App;
