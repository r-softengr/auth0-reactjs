import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { isAuthenticated, user, logout } = useAuth0();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full w-full space-y-9">
        {isAuthenticated && (
          <>
            <div
              style={{ backgroundImage: `url('${user?.picture}')` }}
              className="shadow-md bg-cover h-24 w-24 rounded-full"
            ></div>
            <div className="text-slate-500 font-mono text-sm">
              {user?.nickname}
            </div>

            <button
              type="button"
              className="rounded shadow-lg bg-slate-500 h-10 w-24 text-white"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default Logout;
