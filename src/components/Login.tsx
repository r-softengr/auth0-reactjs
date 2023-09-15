import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <div className="flex flex-col justify-center items-center h-full w-full space-y-9">
          <button
            type="button"
            className="rounded shadow-lg bg-slate-500 h-10 w-24 text-white
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
