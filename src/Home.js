import React from 'react'
import MovieCards from './MovieCards';
import './Home.css';
import { useStateValue } from './StateProvider';
function Home() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className='home'>
        <h1>Hey {user?user :'Your Recommended Movies'}</h1>
        <div className='home__row__1'>
            <MovieCards 
                id = {1}
                image = "https://www.filmibeat.com/fanimg/movie/17919/valimai-photos-images-74581.jpg"
                title = "Valimai"
                genre = "Action/Thriller"
                />
                 <MovieCards 
                id = {2}
                image = "https://moviegalleri.net/wp-content/uploads/2021/07/Actor-Suriya-Etharkkum-Thunindhavan-Movie-Second-Look-Poster-HD.jpg"
                title = "Etharkum Thuninthavan"
                genre = "Action/Commercial/Thriller"
                />
                <MovieCards 
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
                />
        </div>
    </div>
  )
  }

export default Home;
