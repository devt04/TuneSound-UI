"use client";
import clsx from "clsx";
import '/public/globals.css'
import style from "./home.module.css"
import { useState } from "react";
import React from "react";

export default function Home() {

     const time = 10;
     let start = 1;

     const countTime = () => {
          start = start + 1;
          if(start > time) {
               return start = 0;
          }
     }

     const [isHide, setIsHide] = useState(false);
     const [isCategory, setIsCategory] = useState(false);
     const [isSearch, setIsSearch] = useState(false);
     const [isPlayed, setIsPlayed] = useState(false);
     const [isStatus, setIsStatus] = useState("random");
     const [isActive, setIsActive] = useState(false);
     const handleChangeHide = () => {
          !isHide ? setIsHide(true) : setIsHide(false);
     }

     const handleChangeCategory = () => {
          !isCategory ? setIsCategory(true) : setIsCategory(false);
          setIsHide(false);
     }

     const handleChangeSearch = () => {
          !isSearch ? setIsSearch(true) : setIsSearch(false);
     }

     const handleChangePlayed = () => {
          !isPlayed ? setIsPlayed(true) : setIsPlayed(false);
     }

     const handleChangeStatus = () => {
          isStatus === "random" ? setIsStatus("sequence") : setIsStatus("random");
     }

     const handleChangeActive = () => {
          isActive ? setIsActive(false) : setIsActive(true);
     }

     if (isPlayed) {
          setInterval(countTime, 1000);
     }

     return (
          <div className={clsx(style.homePage)}>
               <div className={clsx(style.headerPage)}>
                    <div className={clsx(style.titleHead)}>
                         <a href="./home" title="Home page">
                              <div className={clsx(style.titlePage)}>
                                   <p className="text-teal-300">TUNE</p>
                                   <p className="text-red-700">S</p>
                                   <p className="text-rose-500">OUND</p>
                              </div>
                         </a>
                    </div>

                    <div className={clsx(style.searchBtn)}>
                         <form>   
                              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                              <div className="relative">
                                   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg 
                                             className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                             fill="none" viewBox="0 0 20 20">
                                             <path 
                                                  stroke="currentColor" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                             />
                                        </svg>
                                   </div>
                                   <input 
                                        type="search" id="default-search" 
                                        className="block w-full p-4 pl-10 text-sm text-gray-900 
                                                       border border-gray-300 rounded-lg bg-gray-50 
                                                       focus:ring-blue-500 focus:outline-0" 
                                        placeholder="Search" required/>
                                   <button 
                                        type="submit" 
                                        className="text-slate-950 absolute right-2.5 bottom-2.5 bg-neutral-200 hover:bg-teal-300 
                                        focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
                                        px-4 py-2">
                                             Search
                                   </button>
                              </div>
                         </form>
                    </div>

                    <div className={clsx(style.spaceDisplay)}></div>

                    <div onClick={handleChangeSearch} className={clsx(style.searchBtnDisplay)}>              
                         <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="24" height="24" viewBox="0 0 24 24" 
                              fill="none" stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="feather feather-search">
                                   <circle cx="11" cy="11" r="8"></circle>
                                   <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                         </svg>      
                    </div>

                    {isSearch &&
                         <div className={clsx(style.searchInputDisplay)}>
                              <form>   
                                   <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                   <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                             <svg 
                                                  className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                                                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                                  fill="none" viewBox="0 0 20 20">
                                                  <path 
                                                       stroke="currentColor" 
                                                       strokeLinecap="round" 
                                                       strokeLinejoin="round" 
                                                       strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                  />
                                             </svg>
                                        </div>
                                        <input 
                                             type="search" id="default-search" 
                                             className="block w-full p-4 pl-10 text-sm text-gray-900 
                                                            border border-gray-300 rounded-lg bg-gray-50 
                                                            focus:ring-blue-500 focus:outline-0" 
                                             placeholder="Search" required/>
                                        <button 
                                             type="submit" 
                                             className="text-slate-950 absolute right-2.5 bottom-2.5 bg-neutral-200 hover:bg-teal-300 
                                             focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
                                             px-4 py-2">
                                                  Search
                                        </button>
                                   </div>
                              </form>
                         </div>
                    }

                    <div onClick={handleChangeCategory} className={clsx(style.iconCategoryHead)}>
                         <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="24" height="24" viewBox="0 0 24 24" 
                              fill="none" stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="feather feather-align-justify">
                                   <line x1="21" y1="10" x2="3" y2="10"></line>
                                   <line x1="21" y1="6" x2="3" y2="6"></line>
                                   <line x1="21" y1="14" x2="3" y2="14"></line>
                                   <line x1="21" y1="18" x2="3" y2="18"></line>
                         </svg>
                    </div>

                    {isCategory && 
                         <div className={clsx(style.categoryDisplay)}>
                              <ul className={clsx(style.listCategoryDisplay)}>
                                   <li className={clsx(style.itemListDisplay)}>
                                        <a href="" title="song">
                                             Bài hát
                                        </a>
                                   </li>
                                   <li onClick={handleChangeHide} className={clsx(style.itemListDisplay, style.playList)}>                       
                                        {!isHide ? 
                                        <svg 
                                             xmlns="http://www.w3.org/2000/svg" 
                                             width="24" height="24" viewBox="0 0 24 24" 
                                             fill="none" stroke="currentColor" 
                                             strokeWidth="2" 
                                             strokeLinecap="round" 
                                             strokeLinejoin="round" 
                                             className="feather feather-chevron-down mt-[1px] mr-[10px]">
                                                  <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg> :                         
                                        <svg 
                                             xmlns="http://www.w3.org/2000/svg" 
                                             width="24" height="24" viewBox="0 0 24 24" 
                                             fill="none" stroke="currentColor" 
                                             strokeWidth="2" 
                                             strokeLinecap="round" 
                                             strokeLinejoin="round" 
                                             className="feather feather-chevron-up mt-[1px] mr-[10px]">
                                                  <polyline points="18 15 12 9 6 15"></polyline>
                                        </svg>
                                        }
                                        Danh sách phát       
                                        {isHide && 
                                             <ul className={clsx(style.listPlaylist)}>
                                                  <li>
                                                       <a href="">
                                                            Chill &#9756;
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="">
                                                            Remix &#9756;
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="">
                                                            Hip-Hop & Rap &#9756;
                                                       </a>
                                                  </li>
                                             </ul>
                                        }
                                   </li>
                                   <li className={clsx(style.itemListDisplay)}>
                                        <a href="">
                                             Yêu thích
                                        </a>
                                   </li>
                                   <li className={clsx(style.itemListDisplay)}>
                                        <a href="">
                                             Theo dõi
                                        </a>
                                   </li>

                                   <li className={clsx(style.itemListDisplay)}>
                                        <a className={clsx(style.upSoundDisplay)} href="">
                                             <svg 
                                                  xmlns="http://www.w3.org/2000/svg" 
                                                  width="15" height="15" viewBox="0 0 24 24" 
                                                  fill="none" stroke="currentColor" 
                                                  strokeWidth="2.5" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  className="feather feather-upload mr-[10px]  ">
                                                       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                       <polyline points="17 8 12 3 7 8"></polyline>
                                                       <line x1="12" y1="3" x2="12" y2="15"></line>
                                             </svg>
                                             <span>Upload Sound</span>
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    }

                    <div className={clsx(style.categoryHead)}>
                         <ul className={clsx(style.listCategory)}>
                              <li className={clsx(style.itemList)}>
                                   <a href="" title="song">
                                        Bài hát
                                   </a>
                              </li>
                              <li onClick={handleChangeHide} className={clsx(style.itemList, style.playList)}>
                                   Danh sách phát                              
                                   {!isHide ? 
                                   <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" height="24" viewBox="0 0 24 24" 
                                        fill="none" stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="feather feather-chevron-down mt-[1px] ml-[10px]">
                                             <polyline points="6 9 12 15 18 9"></polyline>
                                   </svg> :                         
                                   <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" height="24" viewBox="0 0 24 24" 
                                        fill="none" stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="feather feather-chevron-up mt-[1px] ml-[10px]">
                                             <polyline points="18 15 12 9 6 15"></polyline>
                                   </svg>
                                   }
                                   {isHide && 
                                        <ul className={clsx(style.listPlaylist)}>
                                             <li>
                                                  <a href="">
                                                       Chill &#9756;
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="">
                                                       Remix &#9756;
                                                  </a>
                                             </li>
                                             <li>
                                                  <a href="">
                                                       Hip-Hop & Rap &#9756;
                                                  </a>
                                             </li>
                                        </ul>
                                   }
                              </li>
                              <li className={clsx(style.itemList)}>
                                   <a href="">
                                        Yêu thích
                                   </a>
                              </li>
                              <li className={clsx(style.itemList)}>
                                   <a href="">
                                        Theo dõi
                                   </a>
                              </li>
                         </ul>
                    </div>

                   <div className={clsx(style.upSoundBtn)}>              
                         <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="20" height="20" viewBox="0 0 24 24" 
                              fill="none" stroke="currentColor" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="feather feather-upload mr-[10px]  ">
                                   <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                   <polyline points="17 8 12 3 7 8"></polyline>
                                   <line x1="12" y1="3" x2="12" y2="15"></line>
                         </svg>
                         <span>Upload Sound</span>
                   </div>

                    <div className={clsx(style.userHead)}>
                         <div className={clsx(style.notiUser)}>
                              <ul className={clsx(style.listItemNoti)}>
                                   <li className={clsx(style.notiActive, "relative")}>
                                        <svg 
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.855 -0.855 24 24" height="24" width="24"><g id="bell-notification--alert-bell-ring-notification-alarm"><path id="Ellipse 85" stroke="#786566" strokeLinecap="round" strokeLinejoin="round" d="M9.038594999999999 19.834915714285714a2.3882142857142856 2.3882142857142856 0 0 0 4.212809999999999 0" strokeWidth="1.71"></path><path id="Vector" fill="#5eead4" d="M6.785712857142856 2.9995971428571426a6.164777142857142 6.164777142857142 0 0 1 10.524064285714285 4.359287142857142c0 0.9616542857142857 0.15921428571428572 1.8643992857142857 0.39803571428571427 2.7894342857142855 0.06527785714285714 0.21016285714285715 0.14010857142857142 0.4075885714285714 0.21812357142857144 0.5938692857142857 0.36937714285714285 0.8677178571428572 1.3867564285714284 1.1654485714285714 2.1462085714285717 1.7258828571428573 1.1320135714285713 0.8390592857142857 0.9138899999999999 2.6334042857142856 -0.028658571428571426 3.330762857142857 0 0 -1.5220885714285712 1.3167021428571428 -8.89848642857143 1.3167021428571428 -7.3779900000000005 0 -8.89848642857143 -1.3167021428571428 -8.89848642857143 -1.3167021428571428 -0.9425485714285713 -0.6973585714285714 -1.1622642857142857 -2.4917035714285714 -0.028658571428571426 -3.330762857142857 0.7594521428571428 -0.5604342857142857 1.7768314285714286 -0.8581650000000001 2.1462085714285717 -1.7258828571428573 0.36778500000000003 -0.8661257142857143 0.6161592857142857 -1.9742571428571427 0.6161592857142857 -3.3833035714285713 0 -1.635130714285714 0.6495942857142857 -3.2033914285714284 1.8054899999999998 -4.359287142857142Z" strokeWidth="1.71"></path><path id="Vector_2" stroke="#786566" strokeLinecap="round" strokeLinejoin="round" d="M6.785712857142856 2.9995971428571426a6.164777142857142 6.164777142857142 0 0 1 10.524064285714285 4.359287142857142c0 0.9616542857142857 0.15921428571428572 1.8643992857142857 0.39803571428571427 2.7894342857142855 0.06527785714285714 0.21016285714285715 0.14010857142857142 0.4075885714285714 0.21812357142857144 0.5938692857142857 0.36937714285714285 0.8677178571428572 1.3867564285714284 1.1654485714285714 2.1462085714285717 1.7258828571428573 1.1320135714285713 0.8390592857142857 0.9138899999999999 2.6334042857142856 -0.028658571428571426 3.330762857142857 0 0 -1.5220885714285712 1.3167021428571428 -8.89848642857143 1.3167021428571428 -7.3779900000000005 0 -8.89848642857143 -1.3167021428571428 -8.89848642857143 -1.3167021428571428 -0.9425485714285713 -0.6973585714285714 -1.1622642857142857 -2.4917035714285714 -0.028658571428571426 -3.330762857142857 0.7594521428571428 -0.5604342857142857 1.7768314285714286 -0.8581650000000001 2.1462085714285717 -1.7258828571428573 0.36778500000000003 -0.8661257142857143 0.6161592857142857 -1.9742571428571427 0.6161592857142857 -3.3833035714285713 0 -1.635130714285714 0.6495942857142857 -3.2033914285714284 1.8054899999999998 -4.359287142857142Z" strokeWidth="1.71"></path></g>
                                        </svg>
                                        <span 
                                             className="top-[-3px] left-3.5 absolute  w-[10px] h-[10px] bg-rose-600 border-2 border-white dark:border-rose-600 rounded-full">
                                        </span>
                                   </li>
                                   <li className={clsx(style.notiAdmin, "relative")}>
                                        <svg 
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.855 -0.855 24 24" height="24" width="24"><g id="mail-send-envelope--envelope-email-message-unopened-sealed-close"><path id="Intersect" fill="#5eead4" d="M1.6430914285714286 16.776409285714287a3.330762857142857 3.330762857142857 0 0 0 2.9486485714285715 2.888147142857143c2.115957857142857 0.22290000000000001 4.3067464285714285 0.4553528571428571 6.553259999999999 0.4553528571428571 2.2449214285714283 0 4.437302142857143 -0.23404499999999998 6.553259999999999 -0.4553528571428571a3.327578571428571 3.327578571428571 0 0 0 2.9486485714285715 -2.888147142857143c0.22608428571428568 -1.8214114285714285 0.44898428571428567 -3.703324285714286 0.44898428571428567 -5.631409285714286 0 -1.926492857142857 -0.22290000000000001 -3.8099978571428568 -0.44898428571428567 -5.631409285714286a3.330762857142857 3.330762857142857 0 0 0 -2.9486485714285715 -2.8897392857142856C15.582302142857143 2.4041357142857143 13.389921428571428 2.1716828571428572 11.145 2.1716828571428572c-2.2449214285714283 0 -4.437302142857143 0.23404499999999998 -6.553259999999999 0.4553528571428571a3.327578571428571 3.327578571428571 0 0 0 -2.9486485714285715 2.888147142857143C1.417007142857143 7.335002142857143 1.1941071428571428 9.218507142857142 1.1941071428571428 11.145s0.22290000000000001 3.8099978571428568 0.44898428571428567 5.631409285714286Z" strokeWidth="1.71"></path><path id="Intersect_2" stroke="#786566" strokeLinecap="round" strokeLinejoin="round" d="M1.6430914285714286 16.776409285714287a3.330762857142857 3.330762857142857 0 0 0 2.9486485714285715 2.888147142857143c2.115957857142857 0.22290000000000001 4.3067464285714285 0.4553528571428571 6.553259999999999 0.4553528571428571 2.2449214285714283 0 4.437302142857143 -0.23404499999999998 6.553259999999999 -0.4553528571428571a3.327578571428571 3.327578571428571 0 0 0 2.9486485714285715 -2.888147142857143c0.22608428571428568 -1.8214114285714285 0.44898428571428567 -3.703324285714286 0.44898428571428567 -5.631409285714286 0 -1.926492857142857 -0.22290000000000001 -3.8099978571428568 -0.44898428571428567 -5.631409285714286a3.330762857142857 3.330762857142857 0 0 0 -2.9486485714285715 -2.8897392857142856C15.582302142857143 2.4041357142857143 13.389921428571428 2.1716828571428572 11.145 2.1716828571428572c-2.2449214285714283 0 -4.437302142857143 0.23404499999999998 -6.553259999999999 0.4553528571428571a3.327578571428571 3.327578571428571 0 0 0 -2.9486485714285715 2.888147142857143C1.417007142857143 7.335002142857143 1.1941071428571428 9.218507142857142 1.1941071428571428 11.145s0.22290000000000001 3.8099978571428568 0.44898428571428567 5.631409285714286Z" strokeWidth="1.71"></path><path id="Vector 15" stroke="#786566" strokeLinecap="round" strokeLinejoin="round" d="m1.6876714285714285 5.1012257142857145 7.486255714285714 5.903665714285714a3.184285714285714 3.184285714285714 0 0 0 3.942145714285714 0l7.486255714285714 -5.903665714285714" strokeWidth="1.71"></path></g>
                                        </svg>
                                        <span 
                                             className="top-[-3px] left-4 absolute  w-[10px] h-[10px] bg-rose-600 border-2 border-white dark:border-rose-600 rounded-full">
                                        </span>
                                   </li>
                              </ul>
                         </div>
                         <div className={clsx(style.avtUser)}>
                              <a href="/profile">
                              <div className="relative">
                                   <img className="w-10 h-10 rounded-full p-[2px] ring-2 ring-gray-300 dark:ring-gray-500" src="/yuta.jpg" alt=""/>
                              </div>
                              </a>
                         </div>
                    </div>
               </div>
               <div className={clsx(style.menuPage)}>
                    <div className={clsx(style.handlePlaySound)}>
                         <ul className={clsx(style.listPlaySound)}>
                              <li 
                                   onClick={handleChangeActive} 
                                   className={clsx(style.itemPlaySound, style.loopSound, isActive && style.addActive)}
                              >
                                   <svg 
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" viewBox="0 0 20 18">
                                        <path 
                                             stroke="currentColor" 
                                             strokeLinecap="round" 
                                             strokeLinejoin="round" 
                                             strokeWidth="1.9" 
                                             d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
                                   </svg>
                              </li>
                              <li className={clsx(style.itemPlaySound, style.prevSound)}>
                                   <svg 
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" viewBox="0 0 12 16">
                                        <path 
                                             stroke="currentColor" 
                                             strokeLinecap="round" 
                                             strokeLinejoin="round" 
                                             strokeWidth="1.5" 
                                             d="M1 1v14m8.336-.479-6.5-5.774a1 1 0 0 1 0-1.494l6.5-5.774A1 1 0 0 1 11 2.227v11.546a1 1 0 0 1-1.664.748Z"/>
                                   </svg>
                              </li>     
                              <li onClick={handleChangePlayed} className={clsx(style.itemPlaySound, style.playSound)}>
                                   {isPlayed ? 
                                        <svg 
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                             fill="none" viewBox="0 0 20 20">
                                             <path 
                                                  stroke="currentColor" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="2" 
                                                  d="M8 7v6m4-6v6m7-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg> :
                                        <svg 
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                             fill="none" viewBox="0 0 16 18">
                                             <path 
                                                  stroke="currentColor" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round"
                                                  strokeWidth="2" 
                                                  d="M1 1.984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 
                                                  0 0-1.69L2.506 1.139A1 1 0 0 0 1 1.984Z"/>
                                        </svg>
                                   }
                              </li>
                              <li className={clsx(style.itemPlaySound, style.nextSound)}>
                                   <svg 
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" viewBox="0 0 12 16">
                                        <path 
                                             stroke="currentColor" 
                                             strokeLinecap="round" 
                                             strokeLinejoin="round" 
                                             strokeWidth="1.5" 
                                             d="M11 1v14m-8.336-.479 6.5-5.774a1 1 0 0 0 0-1.494l-6.5-5.774A1 1 0 0 0 1 2.227v11.546a1 1 0 0 0 1.664.748Z"/>
                                   </svg>
                              </li>
                              <li onClick={handleChangeStatus} className={clsx(style.itemPlaySound, style.statusPlaySound)}>
                                   {isStatus === "random" ?
                                        <svg 
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                             fill="none" viewBox="0 0 20 18">
                                             <path 
                                                  stroke="currentColor" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="2" 
                                                  d="M11.484 6.166 13 4h6m0 0-3-3m3 3-3 3M1 14h5l1.577-2.253M1 4h5l7 10h6m0 0-3 3m3-3-3-3"/>
                                        </svg> : 
                                        <svg 
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                             fill="none" viewBox="0 0 16 14">
                                             <path 
                                                  stroke="currentColor" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="1.7" 
                                                  d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"/>
                                        </svg>
                                   }
                              </li>
                         </ul>
                    </div>
                    <div className={clsx(style.timeLineSound)}>
                         <div className={clsx(style.timeStartSound)}>0 : 00</div>
                         <div className={clsx(style.lineTime)}>
                         <input
                              type="range"
                              min="0"
                              max={time}
                              value={start}
                              step="1"
                              className="timeline"
                         />
                         </div>
                         <div className={clsx(style.timeEndSound)}>4 : 25</div>
                    </div>
                    <div className={clsx(style.soundSound)}></div>
                    <div className={clsx(style.infoSound)}>
                         <div className={clsx(style.imgSound)}></div>
                         <div className={clsx(style.nameSound)}>
                              <div className={clsx(style.titleSound)}></div>
                              <div className={clsx(style.titleAuthor)}></div>
                         </div>
                    </div>
                    <div className={clsx(style.statusSound)}>
                         <ul className={clsx(style.listStatusSound)}>
                              <li className={clsx(style.likeSound)}></li>
                              <li className={clsx(style.followAuthor)}></li>
                              <li className={clsx(style.showNextSound)}></li>
                         </ul>
                    </div>
               </div>
          </div>
     )
}