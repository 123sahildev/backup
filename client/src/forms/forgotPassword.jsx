import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import EmailIcon from "../assets/svgs/email";
import PasswordIcon from "../assets/svgs/password";

export const ForgotPassword = ({ setForgotPassword, setRegister }) => {
    const { register, handleSubmit, formState : { errors }, reset } = useForm();

    const submitForm = async (data) => {
        // let response = await axios.post("http://localhost:3000/api/forgotPassword", data);
        // console.log(response.data)
        setForgotPassword(false);
        setRegister(true)
        console.log(data)
    }   

    return (
            <form onClick={(e) => e.stopPropagation() } onSubmit={handleSubmit(submitForm)} className="py-10 px-5 rounded-2xl bg-white max-w-fit flex flex-col mx-auto">
                <div className="flex flex-col w-fit h-auto self-center">
                    <label htmlFor="userEmail">Email</label>
                    <div className="flex items-center group px-2 rounded-[5px] outline outline-[darkorange] ">
                        <EmailIcon className="text-[darkorange] w-5 h-5" />
                        <input type="email" id="userEmail" className="w-65 h-8 px-3 text-[15px] outline-none border-none" 
                        {...register("email",
                            {
                                minLength: {
                                    value: 10,
                                    message: "email length can't be less than 10" 
                                }
                            }
                        )}
                         />
                    </div>
                </div>
                <div className="flex flex-col w-fit h-auto self-center mt-5">
                    <label htmlFor="password">Passsword</label>
                    <div className="flex items-center group px-2 rounded-[5px] outline outline-[darkorange]">
                        <PasswordIcon className="text-[darkorange] w-5 h-5" />
                        <input type="password" className="w-65 h-8 px-3 text-[15px] outline-none border-none" id="password"
                            {...register("password",
                                {
                                    required: "please enter the password",
                                    minLength: {
                                        value: 10,
                                        message: "password length must greater than 10"
                                    }
                                }
                            )}
                         />
                    </div>
                </div>
                <button type="submit" className="w-75 h-10 duration-200 cursor-pointer rounded-2xl bg-[#0c0c0c] text-white hover:bg-[#141414] text-lg hover:text-[#ffe600] mt-7">save changes</button>
            </form>
    )
}