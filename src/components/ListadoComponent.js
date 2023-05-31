import React from 'react'
import { PeliculaComponent } from './PeliculaComponent'

export const ListadoComponent = ({list, updateList}) => {
    let movies = [];
    movies = list;

    const updateListdHandler = (list) => {
        updateList(list);
    }
    
    return (
        <>
            {
                movies.map((mv) => {
                    return <PeliculaComponent key={mv.id} movie={mv} updateListdHandler={updateListdHandler} />
                })
            }
        </>
    )
}
