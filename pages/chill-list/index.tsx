"use client";
import React, {useState, useEffect} from "react";
import clsx from "clsx";
import style from "./chillList.module.css";
import '/public/globals.css';
import Layout from "../layout";
import Link from "next/link";
import Pagination from "@/layout/pagination";
import API from "@/dataSongs.json"

export default function ChillListPage () {

     const dataSongsServer= API;


     return (
          <>
               <Layout>
               </Layout>
               <div className={clsx(style.chillListPage)}>
                    <div className={clsx(style.titlePage)}>
                         <h4>Bài hát thuộc thể loại : Chill</h4>
                         <div className={clsx(style.lineBtTitle)}></div>
                    </div>

                    <div className={clsx(style.listSoundChill)}>
                         {dataSongsServer.map((data, index) => {
                              if(data.category_sound === "Chill") {
                                   return (
                                        <div key={index} className={clsx(style.itemSoundChill)}>
                                             <div className={clsx(style.infoItemSound)}>
                                                  <img src={data.image_sound} alt="" />
                                                  <div className={clsx(style.titleItemSound)}>
                                                       <div className={clsx(style.nameItemSound)}>
                                                            {data.name_sound}
                                                       </div>
                                                       <div className={clsx(style.nameItemAttribute)}>
                                                            {data.attribute_sound}
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className={clsx(style.operateItemSound)}>
                                                  <div className={clsx(style.playItemSound)}>
                                                       <svg fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.676.02a1.74 1.74 0 0 0-.845.218 1.64 1.64 0 0 0-.895 
                                                                 1.433V12.34l0 .008a1.64 1.64 0 0 0 .895 1.433 1.74 1.74 0 0 0 
                                                                 1.718-.016l8.63-5.338a1.61 1.61 0 0 0-.001-2.876L3.548.253A1.74 
                                                                 1.74 0 0 0 2.676.02Z" 
                                                                 clipRule="evenodd" 
                                                                 fill="#969699" 
                                                                 fillRule="evenodd"/>
                                                       </svg>
                                                       <span>
                                                            {
                                                                 data.total_played >= 1000 ?
                                                                 data.total_played/1000 + `k` :
                                                                 data.total_played
                                                            }
                                                       </span>
                                                  </div>

                                                  <div className={clsx(style.likeItemSound)}>
                                                       <svg fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.024 1.085c.98.071 2.002.55 2.98 1.517.978-.968 1.999-1.445 
                                                                 2.978-1.514 1.106-.079 2.083.368 2.79 1.073 1.39 1.386 1.827 3.895.102 
                                                                 5.62a.48.48 0 0 1-.018.017L7.34 12.795a.5.5 0 0 1-.672 0L1.152 
                                                                 7.798a.495.495 0 0 1-.018-.017c-1.734-1.734-1.3-4.243.095-5.628.709-.704 
                                                                 1.688-1.148 2.795-1.068Z" 
                                                                 clipRule="evenodd" 
                                                                 fill="#969699" 
                                                                 fillRule="evenodd"/>
                                                       </svg>
                                                       <span>
                                                            {
                                                                 data.total_liked >= 1000 ?
                                                                 data.total_liked/1000 + `k` : 
                                                                 data.total_liked
                                                            }
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   )
                              }
                         })}
                    </div>

                    <div className={clsx(style.paginationPage)}>
                         <Pagination />
                    </div>
               </div>
               
          </>
     )
}