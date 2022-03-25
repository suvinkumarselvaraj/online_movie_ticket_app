import React ,{useEffect,useState} from 'react'
import MovieCards from './MovieCards';
import './Home.css';
import { useStateValue } from './StateProvider';
function Home() {
  var total_movies = 0;
 
  var len;
  const [datas, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch(
        'http://localhost:8080/tickets/testingjson',
      );
      const json = await res.json();
        console.log(json);
      setData(json);
    };
    fetchData();
  },[setData]);

    // function fetchHomeInformation(datas){
    //   return(
    //     <MovieCards 
    //             id = {datas.index}
    //             image = {datas.image}
    //             title = "Etharkum Thuninthavan"
    //             genre = "Action/Commercial/Thriller"
    //             />
    //   )
    //}

   const [{user},dispatch] = useStateValue();
  return (
    <div className='home'>
        <h1>Hey {user?user :'Your Recommended Movies'}</h1>
        <div className='home__row__1'> 
                {datas?.map(data =>(
                                <MovieCards id = {data.id}
                          image = {data.image}
                          title = {data.name}
                          genre = {data.genre} />
          ))}
        </div>
         
    </div>
  )
  }
 


export default Home;
