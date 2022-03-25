import React ,{useEffect,useState} from 'react'
import MovieCards from './MovieCards';
import './Home.css';
import { useStateValue } from './StateProvider';
function Home() {
  const [datas, setData] = useState([]);

  useEffect(()=>{
    console.log('hey im in');
    fetch('http://localhost:8080/tickets/testingjson')
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      setData(data);
    })
  },[]);

   const [{user},dispatch] = useStateValue();
  return (
    <div className='home'>
        <h1>Hey {user?user :'Your Recommended Movies'}</h1>
        <div className='home__row__1'> 
          {datas?.map(data =>(
              <MovieCards 
              id = {data.index}
              image = {data.image}
              title = {data.name}
              genre = {data.genre}

              />
          ))}
        </div>
    </div>
  )
  }
 


export default Home;
