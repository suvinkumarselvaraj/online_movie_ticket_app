
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import CallCards from './CallCards';
import ValimaiBooking from './ValimaiBooking';
import DisplaySeats from './DisplaySeats';
import Payment from './Payment';
import { StateProvider, useStateValue } from './StateProvider';
import CardElement from './CardElement';
import Login from './Login';
import CompletePayment from './CompletePayment';
import DisplayBookings from './DisplayBookings';
import DisplayBooking from './DisplayBooking';
import SendTickets from './SendTickets';

function App() {

  const [{movie__clicked,movies},dispatch] = useStateValue();
  console.log('clicked '+movie__clicked);
  const movie__id = parseInt(movie__clicked);
  console.log('movie id '+movie__id);
  function findElement(movies,its_id){
    return movies.find((element)=>{
      return element.its_id == movies.id;
    })
  }
  let movie = findElement(movies,movie__clicked);
  console.log('title'+movie.title);
  return (
    <Router>
    <div className="App">
      <Switch>  
          <Route path = "/DisplayBooking">
            <DisplayBooking/>
          </Route>
          <Route path = {"/movies/"+movie__id}>
            <Header />
            <CallCards id = {movie__id}/>
          </Route>  
          
          <Route path = "/movies/book_now">
            <Header />
              <ValimaiBooking />
          </Route>

          <Route path = "/movies/seats">
            <Header />
            <DisplaySeats />
          </Route>
          <Route path = "/movies/payment">
            <Header/>
            <Payment/>
          </Route>
          <Route path = "/login">
            
            <Login />
          </Route>
          <Route path = "/complete/payment">
            <Header />
            <CompletePayment />
          </Route>
          <Route path = "/checking">
            <Header />
           <SendTickets />
         </Route>
          <Route path = "/">
          <Header></Header>
          <Home />
          <Footer></Footer>
          </Route>
         
          </Switch>
    </div>
    </Router>
  );
}

export default App;
