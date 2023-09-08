



import{GET_DATA_REQUEST,
      GET_DATA_SUCCESS,
      GET_DATA_ERRORR
} from "./actionType";


 const initialState={

        isLoading:false,
        movies:[],
        singleMovie:[],
        favarites:[],
        watchLater:[],
        isError:false,
       

 }

const reducer=(oldstate=initialState,action)=>{

    const{type,payload}=action

    switch (type) {

        case GET_DATA_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
               
                isError:false

            }
        
            case GET_DATA_SUCCESS:
                return{
                    ...oldstate,
                    isLoading:false,
                    movies:payload,
                   
                    isError:false
    
                }    

                case GET_DATA_ERRORR:
                    return{
                        ...oldstate,
                        isLoading:false,
                        isError:true
                     
                       
        
                    } 
                    case "findDataById":
                        
                        return{

                            ...oldstate,
                            singleMovie:oldstate.movies.filter((el)=>el.id==Number(payload))

                          
                        
                        
                        }
                 
                        case "FavratesMovies":
                        
                        return{

                            ...oldstate,
                            favarites:[...oldstate.favarites,payload]

                          
                        
                        
                        }        
                        case "watchListMovie":
                        
                        return{

                            ...oldstate,
                            watchLater:[...oldstate.watchLater,payload]

                          
                        
                        
                        }       
                       
                              


                    
                default:
                     return oldstate;

                    }

}


export {reducer}