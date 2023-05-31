import React, { useState } from 'react'
import { getMoviesFromStorage, saveMovieOnStorage } from '../helpers/storage';

export const CrearComponent = ({ setMovieList }) => {

    const tituloComponente = "Añadir pelicula";

    const [movieState, setMovieState] = useState({
        id: 0,
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = movieState;

    const CreateMovie = e => {
        e.preventDefault();

        const form = e.target;
        const titulo = form.titulo.value;
        const descripcion = form.descripcion.value;

        const pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        setMovieState(pelicula);

        saveMovieOnStorage(pelicula);
        
        form.reset();

        const list = getMoviesFromStorage('');

        setMovieList(list);

    }

    

    return (
        <div className="add">
            <h3 className="title">{ tituloComponente }</h3>
            <form onSubmit={ CreateMovie }>
                <input type="text" id="Titulo" placeholder="Titulo" name="titulo" />
                <textarea id="description" placeholder="Descripción" name="descripcion"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}
