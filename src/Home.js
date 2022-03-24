import React from 'react'
import MovieCards from './MovieCards';
import './Home.css';
import { useStateValue } from './StateProvider';
function Home() {
  var total_movies = 0;
function fetchInformation(){
  fetch('http://localhost:8080/tickets/testingjson')
  .then(data =>{
      console.log(JSON.parse(data.array));
      // total_movies = data.items;
      // console.log(total_movies);
      // console.log('success');
      // for(var i= 0; i<items;i++)
      // return(
      //   <MovieCards 
      //           id = {data.movie_id}
      //           image = {data.movie_image}
      //           title = {data.movie_name}
      //           genre = {data.movie_genre}
      //           />
      // )
      //console.log(JSON.parse(data.array));
    
  })
  }
   const [{user},dispatch] = useStateValue();
  return (
    <div className='home'>
        <h1>Hey {user?user :'Your Recommended Movies'}</h1>
        <div className='home__row__1'>
            {
           
              fetchInformation() 
           
            }
                 {/* <MovieCards 
                id = {2}
                image = "https://moviegalleri.net/wp-content/uploads/2021/07/Actor-Suriya-Etharkkum-Thunindhavan-Movie-Second-Look-Poster-HD.jpg"
                title = "Etharkum Thuninthavan"
                genre = "Action/Commercial/Thriller"
                /> */}
                {/* <MovieCards 
                id = {3}
                image = "https://www.filmibeat.com/ph-big/2020/10/radhe-shyam_160326902360.jpg"
                title = "Radhe Shyam"
                genre = "Commercial/Romance"
                />
                <MovieCards 
                id = {4}
                image = "https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
                title = "The Batman"
                genre = "Adventure/Thriller"
                />
        </div>
        <div className='home__row__1'>
            <MovieCards 
                id = {5}
                image = "https://m.media-amazon.com/images/M/MV5BMjQ2ZDk2NTMtYzg0ZC00NmIyLTk2ZTQtOTkzYzI1ZjM4YTJkXkEyXkFqcGdeQXVyMjA4OTI5NDQ@._V1_.jpg"
                title = "FIR"
                genre = "Action/Thriller"
                />
                 <MovieCards 
                id = {6}
                image = "https://m.media-amazon.com/images/M/MV5BYWFmYWEzMzItOWNjZC00NjExLWFiMzktYWU1NzY5NjdjNzgyXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg"
                title = "GanguBai"
                 genre = "Biography/Crime/Drama"
                />
                <MovieCards 
                id = {7}
                image = "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Hridayam.jpg/220px-Hridayam.jpg"
                title = "Hridayam"
                genre = "Commercial/Romance"
                /> */}
        </div>
    </div>
  )
  }

export default Home;
