import { useNavigate } from "react-router-dom";

function LogOutConfirm(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    console.log("User LogOut");

    // Remove data form local storage
    localStorage.removeItem("Username");
    localStorage.removeItem("Password");
  };
  return (
    <div className="container">
      <h4 className="container my-4">Are You Sure!! Do You Want To LogOut!!!</h4>
      <button className="btn btn-secondary" onClick={props.onClose}>
        Cancel
      </button>
      <button className="btn btn-danger mx-2" onClick={handleLogout}>
        Confirm
      </button>
    </div>
  );
}

export default LogOutConfirm;
