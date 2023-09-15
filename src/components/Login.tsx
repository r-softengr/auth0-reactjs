import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <div className="flex flex-col justify-center items-center h-full w-full space-y-9">
          <h1 className="text-white font-mono">LOGIN TO CONTINUE</h1>
          <button
            type="button"
            className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-white h-10 w-24 text-black
          "
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};
export default Login;
