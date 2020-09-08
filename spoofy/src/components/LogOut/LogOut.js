import React from "react";

function LogOut(props) {
  return (
    <div>
      <h2>Log Out</h2>

      <form>
        <input value="LogOut" type="submit" onClick={props.handleLogOut} />
      </form>
    </div>
  );
}

export default LogOut;
