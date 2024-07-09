 import React,  { useState, useEffect } from 'react'
 import '../row/Row.css';
 import axios from '../../utils/axios';
 import YouTube from 'react-youtube';
 const base_url = 'https://image.tmdb.org/t/p/original/';

 function Row ({ title,fetchUrl,isLargeRow }) {
     const [movies, setMovies] = useState([]);
 const[trailerUrl,setTrailerUrl]=useState("");
 const base_url="https://image.tmdb.org/t/orginal";
     useEffect(() => {
         async function fetchData() {
            const request = await axios.get('http://locahost:4000/api/${fetchUrl}');
            console.log(request)
             setMovies(request.data.results);
            
        }caches(Error){console.log("error",error);}
         fetchData();
     }, [fetchUrl]);
   return (
        <div className="row">
             <h1>{title}</h1>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img 
                        key={movie.id} 
                         className="row__poster"
                         src={`${base_url}${movie.poster_path}`}
alt={movie.name || movie.title} 
                     />
                ))}           </div>       </div>    );
 }

// export default Row;
