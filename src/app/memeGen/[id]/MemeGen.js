"use client"
import { Modal, Spinner } from 'flowbite-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import Link from 'next/link'
import {saveAs} from "file-saver";
const MemeGen = ({searchmeme,generate}) => {
    const [text1, settext1] = useState('')
    const [text2, settext2] = useState('')
    const [text3, settext3] = useState('')
    const [text4, settext4] = useState('')
    const [text5, settext5] = useState('')

    const [openModal, setOpenModal] = useState(false);
    const [boxlst, setboxlst] = useState([settext1,settext2,settext3,settext4,settext5])
    const [editedmeme, seteditedmeme] = useState(null)
    
//    const addallboxes=()=>{
// for (let index = 0; index < searchmeme.box_count; index++) {
//   const boxlst2=[]
//   boxlst2.push('<div className="mb-6"> <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text 2</label> <input onChange={(e)=>{settext2(e.target.value)}} type="text" id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></div>' )
// setboxlst(boxlst2)
           
         
        
    
    
// }
//    }
//    useEffect(() => {
//      addallboxes()
   
   
//    }, [searchmeme.box_count])
   
   console.log(boxlst)
    const changeinp=(e)=>{
        e.preventDefault();
        generate(searchmeme.id,text1,text2,text3,text4,text5).then((res)=>seteditedmeme(res?.url))
setOpenModal(true)
    }
    const handleClick = (meme)=>{
        saveAs(meme, "meme-logo");
       }
    

  return (
    <div key={searchmeme.id} className='flex max-h-[600px] absolute top-1/2 left-1/4 translate-x-[0%] translate-y-[-50%] p-10 justify-evenly w-[50vw] border-solid border-2 border-black items-center'>
        <div className='w-full flex flex-col items-center'>

    <Image width="200" height='200'    className='border-2 border-solid border-black' src={searchmeme.url} alt={searchmeme.name} />
   {/* <Image width='300' height='300' src={editedmeme}/> */}
    <p className='text-center break-all flex items-center w-[200px] '>{searchmeme.name}</p>
        </div>
        <form onSubmit={(e)=>{changeinp(e)}}  className="w-full flex flex-col gap-3">
        {/* <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text 1</label>
    <input onChange={(e)=>{settext1(e.target.value)}} type="text" id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text 2</label>
    <input onChange={(e)=>{settext2(e.target.value)}} type="text" id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div> */}
{
    [...Array(searchmeme.box_count)].map((e, i) => {return <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text {i+1}</label>
    <input onChange={(e)=>{boxlst[i](e.target.value)}} type="text" id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div> })

}

       <button   type='submit' className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Generate</button>
       
        </form>
        <Modal size='4xl' className=''  dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Image Generation</Modal.Header>
<Modal.Body  className="  flex flex-col items-center gap-5 justify-center ">

{editedmeme!=null?<Image src={editedmeme} className=' mt-10'  alt="" width='150' height='300' />:<Spinner aria-label="Default status example" />}
{/* <Link

href={editedmeme!=null?editedmeme:""}
        download="meme-genned.png"
        target="_blank"
        rel="noreferrer"
      >
      </Link> */}

       {editedmeme!=null? <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded' onClick={()=>{handleClick(editedmeme)}}>Download file</button>:''}
</Modal.Body>
</Modal>
    </div>
  )
}

export default MemeGen