import React, { useState } from 'react'
import { getMoviesFromStorage, updateStorage } from '../helpers/storage';

export const PeliculaComponent = ({movie, updateListdHandler}) => {
    const [editState, setEditState] = useState(0);

    const deletedMovie = (e, id) => {
        let list = getMoviesFromStorage('');
        list = list.filter(p => p.id !== id);
        updateStorage(list)
        updateListdHandler(list);
        setEditState(0);
    }

    const updateMovie = (e, id) => {
        e.preventDefault();

        const form = e.target;

        let list = getMoviesFromStorage('');
        const index = list.findIndex(p => p.id === id);
        const edited = {
            id,
            titulo: form.titulo.value,
            descripcion: form.descripcion.value
        }
        
        list[index] = edited;
        updateStorage(list);
        updateListdHandler(list);
        setEditState(0);
    }


    return (
        <article className="peli-item">
            <h3 className="title">{movie.titulo}</h3>
            <p className="description">{movie.descripcion}</p>

            <button className="edit" onClick={ e => setEditState(1)}>Editar</button>
            <button className="delete" onClick={e => deletedMovie(e, movie.id)}>Borrar</button>

            {(editState === 1) && (
                <>
                    <h3 className="title">Editar Pelicula</h3>
                    <form className='edit_form' onSubmit={ e => updateMovie(e, movie.id) }>
                        <input type="text" id="Titulo" placeholder="Titulo" name="titulo" defaultValue={movie.titulo} />
                        <textarea id="description" placeholder="Descripción" name="descripcion" defaultValue={movie.descripcion}></textarea>
                        <input type="submit" id="save" value="Guardar" />
                    </form>
                </>
                

            )
            }
            
        </article>
    )
}
