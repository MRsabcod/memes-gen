"use client"
import { Modal, Spinner } from 'flowbite-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Loading from '../Loading'

const MemeGen = ({data,searchmeme,generate}) => {
    const [text1, settext1] = useState('')
    const [text2, settext2] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const [editedmeme, seteditedmeme] = useState(null)
    console.log(searchmeme)
    const changeinp=(e)=>{
        e.preventDefault();
        generate(searchmeme.id,text1,text2).then((res)=>seteditedmeme(res?.url))
setOpenModal(true)
    }

  return (
    <div key={searchmeme.id} className='flex absolute top-1/2 left-1/4 translate-x-[0%] translate-y-[-50%] p-5 justify-evenly w-[50vw] h-[50vh] border-solid border-2 border-black items-center'>
        <div className='w-full flex flex-col items-center'>
<Modal/>
    <Image width="200" height='200'    className='border-2 border-solid border-black' src={searchmeme.url} alt={searchmeme.name} />
   {/* <Image width='300' height='300' src={editedmeme}/> */}
    <p className='text-center break-all flex items-center w-[200px] '>{searchmeme.name}</p>
        </div>
        <form onSubmit={(e)=>{changeinp(e)}}  className="w-full flex flex-col gap-3">
        <div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text 1</label>
    <input onChange={(e)=>{settext1(e.target.value)}} type="text" id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>
<div className="mb-6">
    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text 2</label>
    <input onChange={(e)=>{settext2(e.target.value)}} type="text" id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
</div>

       <button   type='submit' className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded'>Generate</button>
       
        </form>
        <Modal  dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Image Generation</Modal.Header>
<Modal.Body className="h-[450px] flex items-center justify-center overflow-y-auto">

{editedmeme!=null?<Image src={editedmeme} alt="" width='300' height='300' />:<Spinner aria-label="Default status example" color='blue'/>}
</Modal.Body>
</Modal>
    </div>
  )
}

export default MemeGen