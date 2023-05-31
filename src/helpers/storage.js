export const saveMovieOnStorage = pelicula => {
    let peliculas = [];

    if(localStorage.getItem('peliculas') != null) {
        peliculas = JSON.parse(localStorage.getItem('peliculas'));
    }

    peliculas.push(pelicula);
    
    updateStorage(peliculas);
}

export const updateStorage = (peliculas = []) => {    
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
}

export const getMoviesFromStorage = (text = '') => {
    let peliculas = [];

    if(localStorage.getItem('peliculas') != null) {
        peliculas = JSON.parse(localStorage.getItem('peliculas'));
    }    
    const founded = peliculas.filter(p => p.titulo.toUpperCase().includes(text.toUpperCase()) || p.descripcion.toUpperCase().includes(text.toUpperCase()));
    
    if(founded)
        return founded;
    else
        return [];
}