"use client"
import React, { useEffect, useState } from "react";
import '/public/globals.css'
import clsx from "clsx"
import style from "./logIn.module.css"

export default function LogIn() {

     const [isCheck, setIsCheck] = useState(false);

     useEffect(() => {
          if (isCheck === true) {
               setIsType("text");
          } else {
               setIsType("password");
          }
     }, [isCheck]);

     const [isType, setIsType] =  useState("password")
     

     const onChangeCheck = () => {
          setIsCheck(!isCheck);
     }

     return (
          <div className={clsx(style.loginPage)}>
               <div className={clsx(style.headForm)}>
                    <div className={clsx(style.titlePage)}>
                         <p className="text-teal-300">TUNE</p>
                         <p className="text-red-700">S</p>
                         <p className="text-rose-500">OUND</p>
                    </div>

                    <div className={clsx(style.developer)}>
                         <a href="https://www.facebook.com/tgiap.dev" target="a" title="developer">
                              Developer: DevT with &#10084;
                         </a>
                    </div>
               </div>

               <div className={clsx(style.formLogIn)}>
                    <form action="" className={clsx(style.containerForm)} id="form_log_in">
                         <div className={clsx(style.titleForm)}>ĐĂNG NHẬP</div>
                         <input className={clsx(style.inputText)} type="text" name="username" placeholder="Nhập tên đăng nhập hoặc email" />
                         <input className={clsx(style.inputText)} type={isType} name="password" placeholder="Nhập mật khẩu" />
                         <div className={clsx(style.showPass)}>
                              <input 
                                   className={clsx(style.inputCheck)} 
                                   type="checkbox" 
                                   id="show_pass" 
                                   value="Hiện mật khẩu" 
                                   checked={isCheck}
                                   onChange={onChangeCheck}
                              />
                              <span className="text-base font-medium text-[#707070]">Hiện mật khẩu</span>
                         </div>
                    </form>
                    <button className={clsx(style.btnLogIn)} type="submit" form="form_log_in">Đăng nhập</button>

                    <div className={clsx(style.toRegister)}>Bạn là người dùng mới ?  
                         <a className="text-teal-700" href="./register" title="register page"> Đăng kí ngay!</a>
                    </div>
               </div>
          </div>
     )
}