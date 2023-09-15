import Login from "./Login";
import Logout from "./Logout";
const Form = () => {
  return (
    <div className="container h-96 w-96 rounded-md backdrop-blur-sm bg-black/30">
      <Login />
      <Logout />
    </div>
  );
};
export default Form;
