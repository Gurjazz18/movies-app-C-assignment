import React ,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../Redux/action';
import "./movie.css"
import { Link, NavLink } from 'react-router-dom';

const Movies = () => {
    const[query,setQuery]=useState("")
    const dispatch=useDispatch()
    let data=useSelector((store)=>store.movies)
    console.log(data)

  
    if(query){
        data=data.filter((elem)=>elem.title.toLowerCase().includes(query))
        
       }
    
  

    
     
    



    useEffect(() => {

        dispatch(getdata())
      
    }, []);


    const handlefav=(fav)=>{

        dispatch({
            type:"FavratesMovies",
            payload:fav
        })

        alert("Your FavratesMovies is Added")
       

    }


    const handleMovie=(watch)=>{

        dispatch({
            type:"watchListMovie",
            payload:watch
        })

        alert("Movie added in WatchList")
       

    }


   
  return (
    <>

      <div className='inputbox'>
         <input placeholder='search'
           type="text"
           onChange={(e)=>setQuery(e.target.value)}


         />
      </div>

      <div className="main">
     
       
        {
           data.map((elem)=>(

            
            <div className="cards_item" key={elem.id}>
                    <div className="card">

                        <div className="card_image">
                            <img src=
                                {`https://image.tmdb.org/t/p/w500/${elem.poster_path}`}
                                  alt='image'
                                  
                                 />
                        </div>
                        <div className="card_content">
                            <h2 className="card_title">{elem.title}</h2>
                             
                            <div className='iconbtnn'>
                                <button onClick={()=>handlefav(elem)}>❤️</button>
                                <button  onClick={()=>handleMovie(elem)}>👁️</button>
                            </div>
                           
                            <button className="btn card_btn" >
                            <NavLink to={`/${elem.id}`} 
                            className="nav-links">show more</NavLink>
                            </button>

                           
                        </div>
                    </div>
                </div>


           
            ))

        }


      </div>


   
   </>
  )
}

export default Movies
