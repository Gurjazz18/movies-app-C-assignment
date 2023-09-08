import React from 'react'
import { useSelector } from 'react-redux'

const WatchList = () => {
    const data=useSelector((store)=>store.watchLater)
    console.log(data)

  return (
     <>

      <div>
         <h1>WatchList</h1>
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
                           
                           

                           
                        </div>
                    </div>
                </div>


           
            ))

        }


      </div>


   
   </>
  )
}

export default WatchList
