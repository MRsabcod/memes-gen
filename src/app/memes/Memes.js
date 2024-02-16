"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const Memes = ({ memes }) => {
  const [memelst, setmemelst] = useState([...memes?.data?.memes])
   
    return (
        <div>
            <h1>Memes</h1>
            <div className='flex  flex-wrap justify-evenly items-center'>

            {memes?.data.memes?.map(meme =>
                <div key={meme.id} className='mb-4'>
                    <Image width="200" height="200"  className='border-2 border-solid border-black' src={meme.url} alt={meme.name} />
                    <div className='flex gap-3 justify-center flex-col items-center'>

                    <p className='text-center break-all w-[200px] '>{meme.name}</p>
                    <Link href={`/memeGen/${meme?.id}`} className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded'  >Edit Meme</Link>
                    </div>


                </div>
            )
        }
        </div>
</div>
    );
};

export default Memes;
          