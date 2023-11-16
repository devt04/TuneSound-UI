"use client";
import clsx from "clsx";
import '/public/globals.css'
import style from "./layout.module.css"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

export default function Layout ({
     children,
   }: {
     children: React.ReactNode
   }) {

     const [start, setStart] = useState(0);
     const [time, setTime] = useState(7280);
     const [isHide, setIsHide] = useState(false);
     const [isCategory, setIsCategory] = useState(false);
     const [isSearch, setIsSearch] = useState(false);
     const [isPlayed, setIsPlayed] = useState(false);
     const [isStatus, setIsStatus] = useState("random");
     const [isActive, setIsActive] = useState(false);
     const [isMute, setIsMute] = useState(false);
     const [isLiked, setIsLiked] = useState(false);

     const router = useRouter();

     const handlePush = () => {
          router.push('/upload-sound')
     }

     const handleChangeLike = () => {
          setIsLiked(!isLiked);
     }

     const handleChangeMute = () => {
          setIsMute(!isMute);
     }

     const handleChangeHide = () => {
          setIsHide(!isHide);
     }

     const handleChangeCategory = () => {
          setIsCategory(!isCategory);
          setIsHide(false);
     }

     const handleChangeSearch = () => {
         setIsSearch(!isSearch);
     }

     const handleChangePlayed = () => {
          setIsPlayed(!isPlayed);
     }

     const handleChangeStatus = () => {
          isStatus === "random" ? setIsStatus("sequence") : setIsStatus("random");
     }

     const handleChangeActive = () => {
          setIsActive(!isActive);
     }

     useEffect(() => {
          if (start < time && isPlayed) {
               const intervalId = setInterval(() => {
                    setStart((prevStart) => prevStart + 1);
               }, 1000);
          
               return () => {
                    clearInterval(intervalId);
               };
          }
     }, [time, start, isPlayed]);

     const handleRangeChange = (e: any) => {
          setStart(parseInt(e.target.value, 10));
     };

     function PrintStart() {
          if(start < 10) {
               return(
                    <p>0 : 0{start}</p>
               )
          }
          if(start >= 10 && start < 60) {
               return (
                    <p>0 : {start}</p>
               )
          }
          if (start >= 60 && start < 3600) {
               let p = Math.floor(start / 60);
               let g = start % 60;
               return (
                    <p>{p} : {g >= 10 ? g : `0` + g}</p>
               )
          }
          if(start >= 3600) {
               let h = Math.floor(start / 3600);
               let p = Math.floor((start % 3600) / 60);
               let g = (start % 3600) % 60;
               return (
                    <p>{h} : {p >= 10 ? p : `0` + p} : {g >= 10 ? g : `0` + g}</p>
               )
          }
     }

     function PrintEnd() {
          if(time < 10) {
               return(
                    <p>0 : 0{time}</p>
               )
          }
          if(time >= 10 && time < 60) {
               return (
                    <p>0 : {time}</p>
               )
          }
          if (time >= 60 && time < 3600) {
               let p = Math.floor(time / 60);
               let g = time % 60;
               return (
                    <p>{p} : {g >= 10 ? g : `0` + g}</p>
               )
          }
          if(time >= 3600) {
               let h = Math.floor(time / 3600);
               let p = Math.floor((time % 3600) / 60);
               let g = (time % 3600) % 60;
               return (
                    <p>{h} : {p >= 10 ? p : `0` + p} : {g >= 10 ? g : `0` + g}</p>
               )
          }
     }

     return (
          <div>
               <div className={clsx(style.headerPage)}>
                    <div className={clsx(style.titleHead)}>
                         <Link href="./home" title="Home page">
                              <div className={clsx(style.titlePage)}>
                                   <p className="text-teal-300">TUNE</p>
                                   <p className="text-red-700">S</p>
                                   <p className="text-rose-500">OUND</p>
                              </div>
                         </Link>
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
                                        <Link href="/songs">
                                             Bài hát
                                        </Link>
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
                                                       <Link href="/chill-list">
                                                            Chill &#9756;
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/remix-list">
                                                            Remix &#9756;
                                                       </Link>
                                                  </li>
                                                  <li>
                                                       <Link href="/hiphop-rap-list">
                                                            Hip-Hop & Rap &#9756;
                                                       </Link>
                                                  </li>
                                             </ul>
                                        }
                                   </li>
                                   <li className={clsx(style.itemListDisplay)}>
                                        <Link href="/liked">
                                             Yêu thích
                                        </Link>
                                   </li>
                                   <li className={clsx(style.itemListDisplay)}>
                                        <Link href="">
                                             Theo dõi
                                        </Link>
                                   </li>

                                   <li onClick={handlePush} className={clsx(style.itemListDisplay)}>
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
                                   </li>
                              </ul>
                         </div>
                    }

                    <div className={clsx(style.categoryHead)}>
                         <ul className={clsx(style.listCategory)}>
                              <li className={clsx(style.itemList)}>
                                   <Link href="/songs" title="song">
                                        Bài hát
                                   </Link>
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
                                                  <Link href="chill-list">
                                                       Chill &#9756;
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="remix-list">
                                                       Remix &#9756;
                                                  </Link>
                                             </li>
                                             <li>
                                                  <Link href="hiphop-rap-list">
                                                       Hip-Hop & Rap &#9756;
                                                  </Link>
                                             </li>
                                        </ul>
                                   }
                              </li>
                              <li className={clsx(style.itemList)}>
                                   <Link href="/liked">
                                        Yêu thích
                                   </Link>
                              </li>
                              <li className={clsx(style.itemList)}>
                                   <Link href="">
                                        Theo dõi
                                   </Link>
                              </li>
                         </ul>
                    </div>

                    <div onClick={handlePush} className={clsx(style.upSoundBtn)}>    
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
                                        <svg width="24" height="24" fill="none" viewBox="-.855 -.855 24 24" xmlns="http://www.w3.org/2000/svg">
                                             <path 
                                                  d="m9.0386 19.835a2.3882 2.3882 0 0 0 4.2128 0" 
                                                  stroke="#786566" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="1.71">
                                             </path>
                                             <path 
                                                  d="m6.7857 2.9996a6.1648 6.1648 0 0 1 10.524 4.3593c0 0.96165 0.15921 1.8644 0.39804 2.7894 
                                                  0.065278 0.21016 0.14011 0.40759 0.21812 0.59387 0.36938 0.86772 1.3868 1.1654 2.1462 1.7259 
                                                  1.132 0.83906 0.91389 2.6334-0.028659 3.3308 0 0-1.5221 1.3167-8.8985 1.3167-7.378 
                                                  0-8.8985-1.3167-8.8985-1.3167-0.94255-0.69736-1.1623-2.4917-0.028659-3.3308 0.75945-0.56043 
                                                  1.7768-0.85817 2.1462-1.7259 0.36779-0.86613 0.61616-1.9743 0.61616-3.3833 0-1.6351 0.64959-3.2034 
                                                  1.8055-4.3593z" 
                                                  fill="#5eead4" 
                                                  strokeWidth="1.71">
                                             </path>
                                             <path 
                                                  d="m6.7857 2.9996a6.1648 6.1648 0 0 1 10.524 4.3593c0 0.96165 0.15921 1.8644 0.39804 2.7894 0.065278 
                                                  0.21016 0.14011 0.40759 0.21812 0.59387 0.36938 0.86772 1.3868 1.1654 2.1462 1.7259 1.132 0.83906 
                                                  0.91389 2.6334-0.028659 3.3308 0 0-1.5221 1.3167-8.8985 1.3167-7.378 
                                                  0-8.8985-1.3167-8.8985-1.3167-0.94255-0.69736-1.1623-2.4917-0.028659-3.3308 0.75945-0.56043 1.7768-0.85817 
                                                  2.1462-1.7259 0.36779-0.86613 0.61616-1.9743 0.61616-3.3833 0-1.6351 0.64959-3.2034 1.8055-4.3593z" 
                                                  stroke="#786566" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="1.71">
                                             </path>
                                        </svg>

                                        <span 
                                             className="
                                                  top-[-3px] left-3.5 absolute  w-[10px] h-[10px] bg-rose-600 border-2 
                                                  border-white dark:border-rose-600 rounded-full"
                                        >
                                        </span>
                                   </li>
                                   <li className={clsx(style.notiAdmin, "relative")}>
                                        <svg width="24" height="24" fill="none" viewBox="-.855 -.855 24 24" xmlns="http://www.w3.org/2000/svg">
                                             <path 
                                                  d="m1.6431 16.776a3.3308 3.3308 0 0 0 2.9486 2.8881c2.116 0.2229 4.3067 0.45535 6.5533 0.45535 2.2449 
                                                  0 4.4373-0.23404 6.5533-0.45535a3.3276 3.3276 0 0 0 2.9486-2.8881c0.22608-1.8214 0.44898-3.7033 
                                                  0.44898-5.6314 0-1.9265-0.2229-3.81-0.44898-5.6314a3.3308 3.3308 0 0 
                                                  0-2.9486-2.8897c-2.116-0.21972-4.3083-0.45217-6.5533-0.45217-2.2449 0-4.4373 0.23404-6.5533 
                                                  0.45535a3.3276 3.3276 0 0 0-2.9486 2.8881c-0.22608 1.8198-0.44898 3.7033-0.44898 5.6298s0.2229 3.81 
                                                  0.44898 5.6314z" 
                                                  fill="#5eead4" 
                                                  strokeWidth="1.71">
                                             </path>
                                             <path 
                                                  d="m1.6431 16.776a3.3308 3.3308 0 0 0 2.9486 2.8881c2.116 0.2229 4.3067 0.45535 6.5533 0.45535 2.2449 
                                                  0 4.4373-0.23404 6.5533-0.45535a3.3276 3.3276 0 0 0 2.9486-2.8881c0.22608-1.8214 0.44898-3.7033 
                                                  0.44898-5.6314 0-1.9265-0.2229-3.81-0.44898-5.6314a3.3308 3.3308 0 0 
                                                  0-2.9486-2.8897c-2.116-0.21972-4.3083-0.45217-6.5533-0.45217-2.2449 0-4.4373 0.23404-6.5533 
                                                  0.45535a3.3276 3.3276 0 0 0-2.9486 2.8881c-0.22608 1.8198-0.44898 3.7033-0.44898 5.6298s0.2229 
                                                  3.81 0.44898 5.6314z" 
                                                  stroke="#786566" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="1.71">
                                             </path>
                                             <path 
                                                  d="m1.6877 5.1012 7.4863 5.9037a3.1843 3.1843 0 0 0 3.9421 0l7.4863-5.9037" 
                                                  stroke="#786566" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="1.71">
                                             </path>
                                        </svg>

                                        <span 
                                             className="
                                                  top-[-3px] left-4 absolute  w-[10px] h-[10px] bg-rose-600 border-2 border-white 
                                                  dark:border-rose-600 rounded-full"
                                        >
                                        </span>
                                   </li>
                              </ul>
                         </div>
                         <div className={clsx(style.avtUser)}>
                              <Link href="/profile">
                              <div className="relative">
                                   <img className="w-10 h-10 rounded-full p-[2px] ring-2 ring-gray-300 dark:ring-gray-500" src="/yuta.jpg" alt=""/>
                              </div>
                              </Link>
                         </div>
                    </div>
               </div>

               <div className={clsx(style.SoundDisplay)}>
                    <div className={clsx(style.infoSoundDisplay)}>
                         <div className={clsx(style.imgSound)}>
                              <img className={clsx(style.imageSound)} src="/yuta.jpg" />
                         </div>
                         <div className={clsx(style.nameSound)}>
                              <div className={clsx(style.titleSound)}>
                                   <h4>Full Album Đánh Đổi</h4>
                              </div>
                              <div className={clsx(style.titleAuthor)}>
                                   <p>Obito - MCK</p>
                              </div>
                         </div>
                    </div>
                    <div className={clsx(style.statusSoundDisplay)}>
                         <ul className={clsx(style.listStatusSound)}>
                              <li onClick={handleChangeLike} className={clsx(style.likeSound, isLiked && style.addActive)}>                         
                                   <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="26" height="26" viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="feather feather-heart">
                                             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 
                                             7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                             </path>
                                   </svg>
                              </li>
                              <li className={clsx(style.followAuthor)}>                       
                                   <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="26" height="26" viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="feather feather-user-plus">
                                             <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                             <circle cx="8.5" cy="7" r="4"></circle>
                                             <line x1="20" y1="8" x2="20" y2="14"></line>
                                             <line x1="23" y1="11" x2="17" y2="11"></line>
                                   </svg>
                              </li>
                              <li className={clsx(style.showNextSound)}>                     
                                   <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="26" height="26" viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="feather feather-align-right">
                                             <line x1="21" y1="10" x2="7" y2="10"></line>
                                             <line x1="21" y1="6" x2="3" y2="6"></line>
                                             <line x1="21" y1="14" x2="3" y2="14"></line>
                                             <line x1="21" y1="18" x2="7" y2="18"></line>
                                   </svg>
                              </li>
                         </ul>
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
                                             strokeWidth="0.9" 
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
                                             strokeWidth="0.7" 
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
                                                  strokeWidth="0.9" 
                                                  d="M8 7v6m4-6v6m7-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg> :
                                        <svg 
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                             fill="none" viewBox="0 0 16 18">
                                             <path 
                                                  stroke="currentColor" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round"
                                                  strokeWidth="0.9" 
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
                                             strokeWidth="0.7" 
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
                                                  strokeWidth="1" 
                                                  d="M11.484 6.166 13 4h6m0 0-3-3m3 3-3 3M1 14h5l1.577-2.253M1 4h5l7 10h6m0 0-3 3m3-3-3-3"/>
                                        </svg> : 
                                        <svg 
                                             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                             fill="none" viewBox="0 0 16 14">
                                             <path 
                                                  stroke="currentColor" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="0.7" 
                                                  d="M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3"/>
                                        </svg>
                                   }
                              </li>
                         </ul>
                    </div>
                    <div className={clsx(style.timeLineSound)}>
                         <div className={clsx(style.timeStartSound)}>
                              <PrintStart />
                         </div>
                         <div className={clsx(style.lineTime)}>
                         <input 
                              className={clsx(style.inputRangeTime)}
                              type="range" 
                              min="0" 
                              max={time} 
                              value={start} 
                              onChange={handleRangeChange}
                         />
                         </div>
                         <div className={clsx(style.timeEndSound)}>
                              <PrintEnd />
                         </div>
                    </div>
                    <div onClick={handleChangeMute} className={clsx(style.soundSound)}>                
                         {!isMute ?
                              <svg 
                                   xmlns="http://www.w3.org/2000/svg" 
                                   width="27" height="27" viewBox="0 0 24 24" 
                                   fill="none" 
                                   stroke="currentColor" 
                                   strokeWidth="1" 
                                   strokeLinecap="round" 
                                   strokeLinejoin="round" 
                                   className="feather feather-volume-2">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              </svg>   :              
                              <svg 
                                   xmlns="http://www.w3.org/2000/svg" 
                                   width="27" height="27" viewBox="0 0 24 24" 
                                   fill="none" 
                                   stroke="currentColor" 
                                   strokeWidth="1" 
                                   strokeLinecap="round" 
                                   strokeLinejoin="round" 
                                   className="feather feather-volume-x">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                        <line x1="23" y1="9" x2="17" y2="15"></line>
                                        <line x1="17" y1="9" x2="23" y2="15"></line>
                              </svg>
                         }
                    </div>
                    <div className={clsx(style.infoSound)}>
                         <div className={clsx(style.imgSound)}>
                              <img className={clsx(style.imageSound)} src="/danh-doi.jpg" />
                         </div>
                         <div className={clsx(style.nameSound)}>
                              <div className={clsx(style.titleSound)}>
                                   <h4>Full Album Đánh Đổi</h4>
                              </div>
                              <div className={clsx(style.titleAuthor)}>
                                   <p>Obito - MCK</p>
                              </div>
                         </div>
                    </div>
                    <div className={clsx(style.statusSound)}>
                         <ul className={clsx(style.listStatusSound)}>
                              <li onClick={handleChangeLike} className={clsx(style.likeSound, isLiked && style.addActive)}>                         
                                   <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="26" height="26" viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="feather feather-heart">
                                             <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 
                                             7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                             </path>
                                   </svg>
                              </li>
                              <li className={clsx(style.followAuthor)}>                       
                                   <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="26" height="26" viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="feather feather-user-plus">
                                             <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                             <circle cx="8.5" cy="7" r="4"></circle>
                                             <line x1="20" y1="8" x2="20" y2="14"></line>
                                             <line x1="23" y1="11" x2="17" y2="11"></line>
                                   </svg>
                              </li>
                              <li className={clsx(style.showNextSound)}>                     
                                   <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="26" height="26" viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="feather feather-align-right">
                                             <line x1="21" y1="10" x2="7" y2="10"></line>
                                             <line x1="21" y1="6" x2="3" y2="6"></line>
                                             <line x1="21" y1="14" x2="3" y2="14"></line>
                                             <line x1="21" y1="18" x2="7" y2="18"></line>
                                   </svg>
                              </li>
                         </ul>
                    </div>
                    </div>
               {children}
       </div>
     )
   }