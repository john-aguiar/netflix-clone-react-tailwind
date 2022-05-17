import React, { useEffect, useState } from "react"
import { requests, imagePath } from "../Requests"



export const Main = () => {
    const [movies, setMovies] = useState<any>([]) 

    const movie = movies[Math.floor(Math.random() * movies.length)]

    
    async function fetchMovies(){
        const response = await fetch(requests.requestPopular);
        const jsonMovies = await response.json();
        setMovies(jsonMovies.results)
    }
    useEffect( ()=>{
        fetchMovies(); 
    }, [])
 

    const  truncateString = async (str:string) => {
        if(str.length > 150 )
            str.slice(0, 50) + '...'
        return str;
    }

    return(
        <div className="text-white w-full h-[550px]">
            <div className="w-full h-full">
                <div className="w-full h-[550px] bg-gradient-to-r from-black absolute"></div>
                <img className="w-full h-full object-cover" src={`${imagePath}${movie?.backdrop_path}`} alt='' />
                <div className="absolute w-full top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
                  <div className="my-4">
                    <button className="border ml-2 text-black bg-gray-300 border-gray-300 py-2 px-5">
                        Play
                    </button>
                    <button className="border ml-2 text-white border-gray-300 py-2 px-5">
                        Watch Later
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Released: {movie?.release_date}
                  </p>
                  <p className="w-full md:max-w-[70%] lg:max-w-[35%] text-gray-200">
                    {movie?.overview}
                  </p>
                </div>
            </div>
         </div>
    )
}