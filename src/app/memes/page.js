import Memes from "./Memes"


const memes = async () => {
    const response=await fetch('https://api.imgflip.com/get_memes')
    
       const result=await response.json()
       
    
 
    
        
  return (
    <Memes memes={result}/>
  )
}

export default memes