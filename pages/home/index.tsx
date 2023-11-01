"use client";
import clsx from "clsx";
import '/public/globals.css'
import style from "./home.module.css"
import React from "react";
import Layout from "../layout";
import Link from "next/link";

export default function Home() {

     const styles = {
          width: "100%",
          height: "300px"
     }

     const [isHover, setIsHover] = React.useState(false);
     const dataSoundServer = [
          {
               "id" : 1,
               "name_sound" : "Đánh đổi",
               "image_sound" : "/danh-doi.jpg",
               "attribute_sound" : "Obito",
               "total_liked" : 1200,
               "total_played" : 10000,
               "file_sound" : "./danh-doi.mp3",
               "image_attribute_sound" : "/obito.jpg",
               "attribute_hot" : true,
               "trends" : true,
               "new": true,
          },
          {
               "id" : 2,
               "name_sound" : "Sài Gòn ơi",
               "image_sound" : "/saigonoi.jpg",
               "attribute_sound" : "Obito",
               "total_liked" : 1200,
               "total_played" : 10000,
               "file_sound" : "./danh-doi.mp3",
               "image_attribute_sound" : "/obito.jpg",
               "attribute_hot" :false,
               "trends" : true,
               "new": true,
          },
          {
               "id" : 3,
               "name_sound" : "Khó vẽ nụ cười",
               "image_sound" : "/khovenucuoi.jpg",
               "attribute_sound" : "Đạt G",
               "total_liked" : 1200,
               "total_played" : 10000,
               "file_sound" : "./danh-doi.mp3",
               "image_attribute_sound" : "/datg.jpg",
               "attribute_hot" : true,
               "trends" : true,
               "new": true,
          },
          {
               "id" : 4,
               "name_sound" : "Không phải Gu",
               "image_sound" : "/khongphaigu.jpg",
               "attribute_sound" : "Hieu Thu Hai ft Bray",
               "total_liked" : 1200,
               "total_played" : 10000,
               "file_sound" : "./danh-doi.mp3",
               "image_attribute_sound" : "/khongphaigu.jpg",
               "attribute_hot" : true,
               "trends" : true,
               "new": true,
          },
          {
               "id" : 5,
               "name_sound" : "Đi về nhà",
               "image_sound" : "/divenha.webp",
               "attribute_sound" : "Đen vâu",
               "total_liked" : 1200,
               "total_played" : 10000,
               "file_sound" : "./danh-doi.mp3",
               "image_attribute_sound" : "/denvau.webp",
               "attribute_hot" : true,
               "trends" : true,
               "new": true,
          },
          {
               "id" : 6,
               "name_sound" : "Cô đơn trên Sofa",
               "image_sound" : "/codontrensofa.jpg",
               "attribute_sound" : "Ho Ngoc Ha",
               "total_liked" : 1200,
               "total_played" : 10000,
               "file_sound" : "./danh-doi.mp3",
               "image_attribute_sound" : "/hongocha.webp",
               "attribute_hot" : true,
               "trends" : true,
               "new": false,
          }
     ]

     return (
          <>  
          <Layout>
          </Layout>
          <div className={clsx(style.homePage)}>
               <div className={clsx(style.trendingList)}>
                    <div className={clsx(style.titleCate)}>
                         <h4 className="font-bold">Thịnh hành</h4>
                         <div className={clsx(style.lineBt)}></div>
                    </div>

                    <div className={clsx(style.listSoundTrend)}>
                         {dataSoundServer.map((data, id) => {
                              if(data.trends === true) {
                                   return (
                                        <div key={id} className={clsx(style.itemSound)}>
                                             <div className={clsx(style.infoItem)}>
                                                  <img className={clsx(style.imageItem)} src={data.image_sound}></img>
                                                  <div className={clsx(style.titleItem)}>
                                                       <div className={clsx(style.titleSoundTrend)}>
                                                            {data.name_sound}
                                                       </div>
                                                       <div className={clsx(style.titleAttributeSoundTrend)}>
                                                            {data.attribute_sound}
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className={clsx(style.statisticalItem)}>
                                                  <div className={clsx(style.statisticalPlayedTrend)}>
                                                       <svg fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2.676.02a1.74 1.74 0 0 0-.845.218 1.64 1.64 0 0 0-.895 
                                                                 1.433V12.34l0 .008a1.64 1.64 0 0 0 .895 1.433 1.74 1.74 0 0 0 
                                                                 1.718-.016l8.63-5.338a1.61 1.61 0 0 0-.001-2.876L3.548.253A1.74 
                                                                 1.74 0 0 0 2.676.02Z" 
                                                                 clip-rule="evenodd" 
                                                                 fill="#969699" 
                                                                 fill-rule="evenodd"/>
                                                       </svg>
                                                       <span>
                                                            {
                                                                 data.total_played >= 1000 ?
                                                                 data.total_played/1000 + `k` :
                                                                 data.total_played
                                                            }
                                                       </span>
                                                  </div>
                                                  <div className={clsx(style.statisticalLikedTrend)}>
                                                       <svg fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4.024 1.085c.98.071 2.002.55 2.98 1.517.978-.968 1.999-1.445 
                                                                 2.978-1.514 1.106-.079 2.083.368 2.79 1.073 1.39 1.386 1.827 3.895.102 
                                                                 5.62a.48.48 0 0 1-.018.017L7.34 12.795a.5.5 0 0 1-.672 0L1.152 
                                                                 7.798a.495.495 0 0 1-.018-.017c-1.734-1.734-1.3-4.243.095-5.628.709-.704 
                                                                 1.688-1.148 2.795-1.068Z" 
                                                                 clip-rule="evenodd" 
                                                                 fill="#969699" 
                                                                 fill-rule="evenodd"/>
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
                                   )}
                              })
                         }
                    </div>
               </div>

               <div className={clsx(style.newSoundList)}>
                    <div className={clsx(style.titleCate)}>
                         <h4 className="font-bold">Bài hát mới</h4>
                         <div className={clsx(style.lineBt)}></div>
                    </div>

                    <div className={clsx(style.listNewSound)}>
                         {dataSoundServer.map((data,index) => {
                              if (data.new === true) {
                                   return (
                                        <>
                                        <div 
                                             onMouseEnter={() => {setIsHover(true)}}
                                             onMouseLeave={() => {setIsHover(false)}}
                                             key={index} 
                                             className={clsx(style.itemNewSound)}
                                        >
                                             <div className={clsx(style.imageItemNewSound)}>
                                                  <img src={data.image_sound} alt="" />
                                             </div>
                                             <div className={clsx(style.titleItemNewSound)}>
                                                  {data.name_sound} - {data.attribute_sound}
                                             </div>
                                        </div>
                                        </>
                                   )
                              }
                         })}
                    </div>
               </div>

               <div className={clsx(style.attributeHotList)}>
                    <div className={clsx(style.titleCate)}>
                         <h4 className="font-bold">Ca sĩ nổi bật</h4>
                         <div className={clsx(style.lineBt)}></div>
                    </div>

                    <div className={clsx(style.listAttributeHot)}>
                         {dataSoundServer.map((data, index) => {
                              if(data.attribute_hot === true) {
                                   return (
                                        <>
                                             <div key={index} className={clsx(style.itemAttributeHot)}>
                                                  <img src={data.image_attribute_sound} alt=""/>
                                                  <div className={clsx(style.nameAttribute)}>
                                                       {data.attribute_sound}
                                                  </div>
                                             </div>
                                        </>
                                   )
                              }
                         })}
                    </div>
               </div>
          </div>
          </>
     )
}