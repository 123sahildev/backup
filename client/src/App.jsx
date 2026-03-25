import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form"
import Register from "./forms/register.jsx";
import Login from "./forms/login.jsx";
import { ForgotPassword } from "./forms/forgotPassword.jsx";

const App = () => {
    const [register, setRegister] = useState(true);
    const [login, setLogin] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <>
      <div className="absolute top-5 right-5 w-auto h-auto">
      </div>
      {register && <Register setRegister={setRegister} setLogin={setLogin} />}
      {login && <Login setLogin={setLogin} setRegister={setRegister} setForgotPassword={setForgotPassword} />}
      {forgotPassword && <ForgotPassword setForgotPassword={setForgotPassword} setRegister={setRegister} />}
    </>
  );
}

export default App
