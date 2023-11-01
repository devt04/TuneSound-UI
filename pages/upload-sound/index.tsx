"use client";
import clsx from "clsx";
import '/public/globals.css'
import style from "./upload-sound.module.css"
import { useState, useEffect } from "react";
import React from "react";

import Layout from "../layout";

export default function Home() {

     return (
          <Layout>
               <div className={clsx(style.uploadPage)}>
               </div>
          </Layout>
     )
}