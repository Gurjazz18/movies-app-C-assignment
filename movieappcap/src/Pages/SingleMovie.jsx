import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";




const SingleMovie = () => {
  const[isLoading,setIsLoading]=useState(false)
  const { id } = useParams();
  const dispatch=useDispatch()
  const data=useSelector((store)=>store.singleMovie)
  console.log(data)
  
   
  useEffect(()=>{
    dispatch({
      type:"findDataById",
      payload:id
    })
  },[id])
 

 

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (

    <div  style={{display:"flex",justifyContent:"center"}}>
     
       
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
                            <p className="card_text">{elem.overview}</p>
                            <p className="card_text">{elem.release_date}</p>
                            <p className="card_text">{elem.popularity}</p>
                             
                          
                           
                           
                           
                        </div>
                    </div>
                </div>


           
            ))

        }


      </div>

   
  );
};

export default SingleMovie;