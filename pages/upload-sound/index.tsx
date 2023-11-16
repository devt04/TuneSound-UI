"use client";
import React, {useState, useEffect, useRef} from "react";
import clsx from "clsx";
import '/public/globals.css';
import style from "./uploadSound.module.css";
import Layout from "../layout";
import Link from "next/link";
import API from "@/dataSongs.json"

export default function UploadSound () {

     // function handle change value image sound

     const [valueImgSound, setValueImgSound] = useState<string>("");               
     const [fileSound, setFileSound] = useState<File | null>(null);
     const fileImgSoundRef = useRef<HTMLInputElement>(null);
     const handleValueImgSound = (e: any) => {
          setValueImgSound(e.target.value);
          setFileSound(null);
     }

     const handleUploadFileSound = (e: any) => {
          const fileImgs = e.target.files;
          if (fileImgs && fileImgs.length > 0) {
               const reader = new FileReader();
               reader.onload = function () {
                    const fileData = reader.result as string;
                    setLinkImgDemo(fileData);
               };
               reader.readAsDataURL(fileImgs[0]);
          }
          setFileSound(fileImgs ? fileImgs[0] : null);
          setValueImgSound("");
          console.log(fileImgs.length);
     };

     const handleCancelImgSound = () => {
          setFileSound(null);
          if (fileImgSoundRef.current) {
               fileImgSoundRef.current.value = "";
          }
     }

     // function handle change value image attribute

     const [valueImgAttribute, setValueImgAtttribute] = useState<string>("");
     const [fileAttribute, setFileAttribute] = useState<File | null>(null);
     const fileImgAttributeRef = useRef<HTMLInputElement>(null)

     const handleUploadFileAtribute = (e:any) =>  {
          setFileAttribute(e.target.files[0]);
          setValueImgAtttribute("");
     }

     const handleImgAtribute = (e:any) => {
          setFileAttribute(null);
          setValueImgAtttribute(e.target.value);
     }

     // function start when delete File 

     const handleCancelImgAttribute = () => {
          setFileAttribute(null);
          if(fileImgAttributeRef.current) {
               fileImgAttributeRef.current.value = "";
          }
     }

     // function preview sound 

     const [linkImgDemo, setLinkImgDemo] = 
          useState<string>("https://raw.githubusercontent.com/Palexer/image-viewer/main/ImageViewer/data/icon.png");
     useEffect(() => {
          if(valueImgSound !== "" && fileSound == null) {
               setLinkImgDemo(`${valueImgSound}`);
          }
          if(valueImgSound === "" && fileSound == null) {
               setLinkImgDemo("https://raw.githubusercontent.com/Palexer/image-viewer/main/ImageViewer/data/icon.png");
          }
          if(fileSound !== null && valueImgSound == "") {
               setLinkImgDemo(`${localStorage.getItem("fileImgSound")}`)
          }
     }, [valueImgSound, fileSound])

     const [nameSound, setNameSound] = useState<string>("");
     const handleChangeNameSound = (e: any) => {
          setNameSound(e.target.value);
     }
     const [nameSoundDemo, setNameSoundDemo] = useState<string>("Name Sound demo");
     useEffect(() => {
          if(nameSound !== "") {
               setNameSoundDemo(`${nameSound}`);
          }
          if (nameSound == "") {
               setNameSoundDemo("Name Sound demo");
          }
     }, [nameSound]);
     
     const [nameAttribute, setNameAttribute] = useState<string>("");
     const handleChangeNameAttribute = (e:any) => {
          setNameAttribute(e.target.value);
     };

     const [nameAttributeDemo, setNameAttributeDemo] = useState<string>("Attribute demo");
     useEffect(() => {
          if(nameAttribute !== "") {
               setNameAttributeDemo(`${nameAttribute}`);
          }
          if(nameAttribute === "") {
               setNameAttributeDemo("Attribute demo");
          }
     });


     // function action with form input file

     const handleResetForm = () => {
          setFileSound(null);
          setValueImgSound("");
          setFileAttribute(null);
          setValueImgAtttribute("");
          setNameAttribute("");
          setNameSound("");
          if (fileImgSoundRef.current) {
               fileImgSoundRef.current.value = "";
          }
          if(fileImgAttributeRef.current) {
               fileImgAttributeRef.current.value = "";
          }
     }

     return (
          <>
          <Layout>
          </Layout>
          <div className={clsx(style.uploadSoundPage)}>
               <div className={clsx(style.titlePage)}>
                    <h2>UPLOAD SOUND</h2>
               </div>
               <div className={clsx(style.lineBt)}></div>
               <div className={clsx(style.formUpload)}>
                    <form className={clsx(style.containerFormUp)} action="" id="form_input_file">
                         <div className={clsx(style.infoTextFile)}>
                              <div className={clsx(style.nameFile, style.ipText)}>
                                   <label className="mb-[20px]" htmlFor="">Nhập tên bài hát</label>
                                   <input 
                                        onChange={handleChangeNameSound}
                                        value={nameSound} 
                                        type="text" />
                              </div>

                              <div className={clsx(style.nameAttribute, style.ipText)}>
                                   <label className="mb-[20px]" htmlFor="">Nhập tên ca sĩ</label>
                                   <input 
                                        value={nameAttribute}
                                        onChange={handleChangeNameAttribute}
                                        type="text" />
                              </div>
                         </div>

                         <div className={clsx(style.infoImgFile)}>
                              <div className={clsx(style.imgSound, style.ipFile)}>
                                   <label htmlFor="">Chọn Thumb bài hát</label>
                                   <div className={clsx(style.selectFile)}>
                                        <label htmlFor="">Chọn file : </label>
                                        <input 
                                             ref={fileImgSoundRef}
                                             disabled={valueImgSound!==""}
                                             type="file" 
                                             id="imgSound" 
                                             accept="image/*"    
                                             placeholder="" 
                                             onChange={handleUploadFileSound}
                                        />
                                        {fileSound !== null && 
                                             <svg 
                                                  onClick={handleCancelImgSound}
                                                  id={clsx(style.cancelFileIcon)}
                                                  className="feather feather-x" 
                                                  fill="none" 
                                                  stroke="currentColor" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="2" 
                                                  viewBox="0 0 24 24" 
                                                  xmlns="http://www.w3.org/2000/svg">
                                             <line x1="18" x2="6" y1="6" y2="18"/>
                                             <line x1="6" x2="18" y1="6" y2="18"/>
                                             </svg> 
                                        }
                                   </div>

                                   <p className="ml-[5px] mt-[10px] mb-[10px] font-medium opacity-90">Hoặc</p>

                                   <div className={clsx(style.selectLink)}>
                                        <label htmlFor="">Link ảnh :</label>
                                        <input 
                                             value={valueImgSound} 
                                             onChange={handleValueImgSound} 
                                             disabled={fileSound !== null} 
                                             type="text"/>
                                   </div>
                              </div>

                              <div className={clsx(style.imgAttribute, style.ipFile)}>
                                   <label htmlFor="">Chọn ảnh ca sĩ</label>
                                   <div className={clsx(style.selectFile)}>
                                        <label htmlFor="">Chọn file : </label>
                                        <input 
                                             ref={fileImgAttributeRef}
                                             disabled={valueImgAttribute!==""}
                                             type="file" 
                                             id="imgAttribute" 
                                             accept="image/*" 
                                             placeholder="" 
                                             onChange={handleUploadFileAtribute }
                                        />
                                        {fileAttribute !== null && 
                                            <svg 
                                                  onClick={handleCancelImgAttribute}
                                                  id={clsx(style.cancelFileIcon)}
                                                  className="feather feather-x" 
                                                  fill="none" 
                                                  stroke="currentColor" 
                                                  strokeLinecap="round" 
                                                  strokeLinejoin="round" 
                                                  strokeWidth="2" 
                                                  viewBox="0 0 24 24" 
                                                  xmlns="http://www.w3.org/2000/svg">
                                                  <line x1="18" x2="6" y1="6" y2="18"/>
                                                  <line x1="6" x2="18" y1="6" y2="18"/>
                                             </svg> 
                                        }
                                   </div>

                                   <p className="ml-[5px] mt-[10px] mb-[10px] font-medium opacity-90">Hoặc</p>

                                   <div className={clsx(style.selectLink)}>
                                        <label htmlFor="">Link ảnh :</label>
                                        <input 
                                             value={valueImgAttribute} 
                                             onChange={handleImgAtribute} 
                                             disabled={fileAttribute!==null} 
                                             type="text"/>
                                   </div>
                              </div>
                         </div>

                         <div className={clsx(style.infoOtherFile)}>
                              <div className={clsx(style.chooseCategorySound)}>
                                   <label htmlFor="">Chọn thể loại : </label>
                                   <select name="category_sound">
                                        <option value="Chill">Chill</option>
                                        <option value="Remix">Remix</option>
                                        <option value="HipHop & Rap">HipHop & Rap</option>
                                   </select>
                              </div>

                              <div className={clsx(style.previewSound)}>
                                   <div className={clsx(style.itemSound)}>
                                        <div className={clsx(style.infoItemSound)}>
                                             <img src={linkImgDemo} alt="" />
                                             <div className={clsx(style.textItemSound)}>
                                                  <div className={clsx(style.titleSound)}>{nameSoundDemo}</div>
                                                  <div className={clsx(style.titleAttribute)}>{nameAttributeDemo}</div>
                                             </div>
                                        </div>
                                        
                                        <div className={clsx(style.actionItemSound)}>
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
                                                  <span>1.2k</span>
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
                                                  <span>1.1k</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </form>

                    <div className={clsx(style.btnActionForm)}>
                         <button 
                              onClick={handleResetForm}
                              type="reset"
                              form="form_input_file"
                              className={clsx(style.cancelForm)}>
                                   Hủy bài hát
                         </button>
                         <button 
                              type="submit" 
                              form="form_input_file" 
                              value="Post"
                              className={clsx(style.postForm)}>
                                   Đăng bài hát
                         </button>
                    </div>
               </div>
          </div>
          </>
     )
}