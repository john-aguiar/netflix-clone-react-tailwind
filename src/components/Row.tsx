
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import React, { useEffect, useState, useTransition } from "react";
import { imagePath } from "../Requests";
import { Movie } from './Movie';

interface RowProps {
    title: string,
    fetchURL: string,
    rowId: string;
}

export const Row = ({title, fetchURL, rowId}: RowProps) => {
    const [movies, setMovies] = useState<any>([])

useEffect(()=> {
    axios.get(fetchURL).then((response)=> {
        setMovies(response.data.results)
    })
    console.log(movies)
}, [fetchURL])


const slideLeft = () => {
    let slider: HTMLElement = document.getElementById('slider' + rowId)!
    slider.scrollLeft = slider.scrollLeft - 500;
    console.log(slider)
}

const slideRight = () => {
    let slider: HTMLElement = document.getElementById('slider'+ rowId)!;
    slider.scrollLeft = slider.scrollLeft + 500;
}

    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center group">
            <MdChevronLeft 
            onClick={slideLeft}
            size={40} className='absolute bg-white rounded-full  opacity-50 hover:opacity-100 cursor-pointer z-10  hidden group-hover:block'/> 
              <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item: any, id:any) => (
                    <Movie key={id} item={item} />
                ))}
                </div> 
            <MdChevronRight 
            onClick={slideRight}
            size={40} className='bg-white rounded-full absolute right-0  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block '/>
            </div>
        </>
    )
}