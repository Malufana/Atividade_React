import axios from "axios";
import React, {useState, useEffect} from "react";
import { Card } from './Card';
import estilo from './Lista.module.css';

const API_key = '71d8752cf0fa8d9a66b6a6954c8a35db';
const API_URL = 'https://api.themoviedb.org/3';

export function Lista(){
    const [movies, setMovies] = useState([]); //state: controla o estado da variavel (movies)

    //hook que controla o efeito dele na pagina
    //recebe os paramentos() faz o script e controla a dependencia
    useEffect(() => {
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)

        .then(response => {
            console.log(response.data.results);
            setMovies(response.data.results);
        })
        .catch(error => {
            console.log('Error', error);
        });

    }, []);

    return(
        <div className={estilo.container}>
            <figure style={{display: 'fllex', flexWrap: 'wrap'}}>
                {movies.map(movie => (
                    <div className={estilo.containerItem}>
                        <Card key={movie.id} movie={movie} />   
                    </div>
                    

                ))}
            </figure>
        </div>
    )
}