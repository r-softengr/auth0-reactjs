import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { isAuthenticated, user, logout, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Loading profile...
      </button>
    );
  }

  return (
    <>
      {!isLoading && isAuthenticated && (
        <div className="flex flex-col justify-center items-center h-full w-full space-y-9">
          <h1 className="text-white font-mono">Welcome {user?.email}</h1>
          <button
            type="button"
            className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-white h-10 w-24"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
};
export default Logout;
