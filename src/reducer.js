import { useStateValue } from "./StateProvider";

export const initialSeatState = {
    seat__array: [],
    moive__now: null,
    movie__date: null,
    movie__time: null,
    movie__theatre: null,
    movies: [
            {   id:1,title:'valimai',
                image:'https://www.filmibeat.com/fanimg/movie/17919/valimai-photos-images-74581.jpg',
                genre:'Adventure/Thriller',
                rating: 'IMDB: 86%',
                descript: 'Arjun, an IPS officer sets out for a mission on hunting down illegal bikers involving in theft and murder.',
                run__time: '2hr 58m'
            },
            {
                id:2,
                image: "https://moviegalleri.net/wp-content/uploads/2021/07/Actor-Suriya-Etharkkum-Thunindhavan-Movie-Second-Look-Poster-HD.jpg",
                title: "Etharkum Thuninthavan",
                genre : "Action/Commercial/Thriller",
                rating: "IMBD: 84%",
                descript:'A social fighter takes on a crime ring that preys on women.',
                run__time:'2h 31m'
            },
            {
                id:3,
                image:"https://www.filmibeat.com/ph-big/2020/10/radhe-shyam_160326902360.jpg",
                title:"Radhe Shyam",
                genre:"Commercial/Romance",
                rating:'IMBD: 78%',
                descript:'The film is a musical love story set in the backdrop of Europe in the 1970`s. It weaves in a heartwarming story which questions the foundations of Love, Human Nature, Science, Spirituality and Philosophy through a musical drama.',
                run__time: '2h 18m'
            },
            {
                id:4,
                image: "https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
                title : "The Batman",
                genre:"Adventure/Thriller",
                descript:'Two years of stalking the streets as the Batman (Robert Pattinson), striking fear into the hearts of criminals, has led Bruce Wayne deep into the shadows of Gotham City. With only a few trusted allies-Alfred Pennyworth (Andy Serkis), Lt. James Gordon (Jeffrey Wright) -amongst the city`s corrupt network of officials and high-profile figures, the lone vigilante has established himself as the sole embodiment of vengeance amongst his fellow citizens.',
                rating:'IMDB: 80%',
                run__time:'2h 56m'
            },
            {
                id:5,
                image:"https://m.media-amazon.com/images/M/MV5BMjQ2ZDk2NTMtYzg0ZC00NmIyLTk2ZTQtOTkzYzI1ZjM4YTJkXkEyXkFqcGdeQXVyMjA4OTI5NDQ@._V1_.jpg",
                title:"FIR",
                genre:"Action/Thriller",
                descript:'Irfan, an innocent man with an ordinary life, is portrayed as the evil incarnated by media trials. Is there a journey back to normal life for a man accused of terrorism? Is there more to Irfan than what meets the eye?',
                rating:'IMDB: 83%',
                run__time:'2h 36m'
            },
            {
                id:6,
                image:"https://m.media-amazon.com/images/M/MV5BYWFmYWEzMzItOWNjZC00NjExLWFiMzktYWU1NzY5NjdjNzgyXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg",
                title: "GanguBai",
                 genre: "Biography/Crime/Drama",
                 descript:'A true story, based on the book `Mafia Queens of Mumbai` written by S. Hussain Zaidi, is a film that celebrates the rise of a simple girl from Kathiawad who had no choice but to embrace the ways of destiny and swing it in her favour. The narrative walks through the life of young Ganga who in no time marks her ownterritory and becomes Gangubai - The Matriarch of Kamathipura. Once again, Sanjay Leela Bhansali brings to his audience a moving yet stem-winding story with a power packed performance from Alia Bhatt and Ajay Devgn featured in a special role laced in his magical musical notes. With a promise to make one and all feel inspired in 2021 as Gangubai Kathiawadi celebrates the journey of a girl who became the voice for women empowerment. ',
                 rating:'IMDB: 80%',
                 run__time:'2h 37m'
            },
            {
                id:7,
                image:"https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Hridayam.jpg/220px-Hridayam.jpg",
                title:"Hridayam",
                genre:"Commercial/Romance",
                descript:'Hridayam is an emotional journey of Arun, his carefree bachelor days in Engineering college, and how he matures through various phases of life.',
                rating:'IMDB: 90%',
                run__time:'2h 52m'
            }

        ],
    movie__clicked: null,
    user: null,
    data__set: 0
};

const reducer = (state, action)=>{
    {console.log(action.name)}
    switch(action.type){
        case 'Add_movie_name':
            return{
                ...state,
                moive__now:action.movie__name   
            }
            break;
        case 'Add__movie__date':
            return{
                ...state,
                movie__date: action.date
            }
            break;
        case 'Add__movie__theatre__info':
            return({
                ...state,
                movie__theatre: action.theatre__info
            })
            break;
        case 'Add__movie__timing':
            {
                return({
                    ...state,
                    movie__time: action.time__movie
                })
            }
            break;
        case 'Add__movie__seats':{
            console.log(action.item.id);
            let new__seat__array = [...state.seat__array];
            return({
                ...state,
                seat__array:[...state.seat__array,action.item],
              
            })
        }
        case 'Remove__movie__seats':{
            
            // const index = state.seat__array.findIndex((removed__seat)=>
            //     removed__seat.id === action.id);   
             let new__seat__array = [...state.seat__array];
             console.log(action.item.id);
             console.log(state.seat__array);
            const index = state.seat__array.findIndex((seat) => seat.id === action.item.id                                                               );
            console.log(index);
            if(index>=0)
            {
                console.log(index);
                new__seat__array.splice(index,1);
                console.log(new__seat__array );
                
            }
            return {
                ...state,
                seat__array: new__seat__array,
                
            }
        }
        break;
        case 'Add__to__count':{
            return({
                ...state,
                total__count: action.value
            })
        }
        break;
        case 'Add__to__display':{
            return({
                ...state,
                movie__clicked: action.clicked__movie
            })
        }
        break;
        case 'Add__user':{
            return({
                ...state,
                user: action.name
            })
        }
        break;
        case 'Remove__user':{
            return({
                ...state,
                user:null
            })
        }
        break;
        case 'Add__to__dataset':{
            return({
                ...state,
                data__set: count
            })
        }
        break;
        default: return state;
    }
}


export default reducer;