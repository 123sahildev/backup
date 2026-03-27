import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { set, useForm } from "react-hook-form"
import Register from "./forms/register.jsx";
import Login from "./forms/login.jsx";
import { ForgotPassword } from "./forms/forgotPassword.jsx";
import  profile from "../public/favicon.svg"

const App = () => {
    const [profileUrl, setProfileUrl] = useState(null);
    const [preView, setPreView] = useState(false);
    const [register, setRegister] = useState(true);
    const [login, setLogin] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);

    useEffect(() => {
      let getProfile = async () => {
          let response = await axios.get("http://localhost:3000/api/user-access",
            {
              withCredentials: true
            }
          );

          console.log("get profile response data :", response.data);
      }

      getProfile();
    }, []);

    const handleImageProcess = async (e) => {
      let file = e.target.files[0];
      let preViewData = URL.createObjectURL(file);
      let formData = new FormData()
      formData.append("image", file)
      
      let response = await axios.post("http://localhost:3000/api/upload-profile", formData);
      console.log("formData api response :", response.data);
      setPreView(preViewData);
    }
  

  return (
    <>
      <div className=" flex absolute left-10 top-10 w-auto h-auto rounded-[50%] bg-[yellow] p-2">
        <img className="w-20 h-20 rounded-[50%]" src={preView ||  profile} alt="" />
        <input onChange={handleImageProcess} className="profile flex top-0 rounded-[50%]" type="file" placeholder="" />
      </div>
      <div className="absolute top-5 right-5 w-auto h-auto">
      </div>
      {register && <Register setRegister={setRegister} setLogin={setLogin} />}
      {login && <Login setLogin={setLogin} setRegister={setRegister} setForgotPassword={setForgotPassword} setProfileUrl={setProfileUrl} />}
      {forgotPassword && <ForgotPassword setForgotPassword={setForgotPassword} setRegister={setRegister} />}
    </>
  );
}

export default App
