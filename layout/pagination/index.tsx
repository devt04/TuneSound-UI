"use client"
import clsx from "clsx"
import React from "react"
import style from "./pagination.module.css"
import '/public/globals.css'


export default function Pagination (start: any, limit:any) {


     return (
          <div className={clsx(style.pagination)}>
               <ul className={clsx(style.containerPagination)}>
                    <li>
                         <a href="">&#60;</a>
                    </li>
                    <li className={clsx(style.active)}>
                         <a href="">1</a>
                    </li>
                    <li>
                         <a href="">&#62;</a>
                    </li>
               </ul>
          </div>
     )
}