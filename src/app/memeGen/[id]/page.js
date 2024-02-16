'use client'
import React, { useState } from 'react'
import MemeGen from './MemeGen'

const memeGen = (props) => {
   
   
//     function change(text_1,text_2) {
        
   
//     text1=(text_1)
//     text2=text_2
    
//     console.log(text1,text2)
// }
const [result, setresult] = useState({})
const memegen=async(id,text1,text2) => { 
        const  memegenresp=await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=pefitoc&password=sabeeb12&text0=${text1}&text1=${text2}`)
    const memegenresult=await memegenresp.json()
   return ( memegenresult.data)  

 }
 const get_memes=async() => {  
    const response=await fetch('https://api.imgflip.com/get_memes')
    
    
    const result=await response.json()
    return result
 }
 
 get_memes().then((res)=>setresult(res))
    console.log(result)
    let memedetail={}
    const searchmeme=(id)=>{
        result?.data?.memes?.map(element => {
            if(element.id==id)
            memedetail=element
        });
       }
       searchmeme(props?.params?.id)
  return (
    <MemeGen data={result} generate={memegen}  searchmeme={memedetail}/>
  )
}

export default memeGen