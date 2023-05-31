import React from 'react'
import { getMoviesFromStorage } from '../helpers/storage';

export const BuscadorComponent = ({ setMovieList }) => {
    const componentTitle = 'Buscador';

    const searchParameter = e => {
        e.preventDefault();

        const form = e.target;
        const list = getMoviesFromStorage(form.search_field.value);
        setMovieList(list);
    }


    return (
        <div className="search">
            <h3 className="title">{ componentTitle }</h3>
            <form onSubmit={ searchParameter }>
                <input type="text" id="search_field" name='search_field' />
                <button type="submit" id="search">Buscar</button>
            </form>
        </div>
    )
}
