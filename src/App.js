import { useEffect, useState } from "react";
import { BuscadorComponent } from "./components/BuscadorComponent";
import { CabeceraComponent } from "./components/CabeceraComponent";
import { CrearComponent } from "./components/CrearComponent";
import { FooterComponent } from "./components/FooterComponent";
import { ListadoComponent } from "./components/ListadoComponent";
import { getMoviesFromStorage } from "./helpers/storage";

function App() {
    const [movieslist, setMovieList] = useState([]);

    useEffect(() => {
        const movies = getMoviesFromStorage();
        setMovieList(movies);
    }, [])


    const updateList = (list) => {
        setMovieList(list);
    }

    return (

        <div className="layout">
            {/* Cabecera */}
            <CabeceraComponent />

            {/* Barra de navegación */}
            <nav className="nav">
                <ul>
                    <li><a href="/#">Inicio</a></li>
                    <li><a href="/#">Peliculas</a></li>
                    <li><a href="/#">Blog</a></li>
                    <li><a href="/#">Contacto</a></li>
                </ul>
            </nav>

            {/* Contenido principal */}
            <section id="content" className="content">

                {/* aqui van las peliculas */}
                <ListadoComponent list={movieslist} updateList={updateList} />

            </section>

            {/* Barra lateral */}
            <aside className="lateral">
                <BuscadorComponent setMovieList={setMovieList} />

                <CrearComponent setMovieList={setMovieList} />
            </aside>

            {/* Pie de página */}
            <FooterComponent />

        </div>

    );
}

export default App;
