import{GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_ERRORR} from "./actionType";

    import axios from "axios";

    


    const getDataRequest=()=>{
        return{
            type:GET_DATA_REQUEST
        }
    }

    
    const getDataSuccess=(payload)=>{
        return{
            type:GET_DATA_SUCCESS,
            payload
        }
    }


    
    const getDataError=()=>{
        return{
            type:GET_DATA_ERRORR
        }
    }
   
    const getdata=()=>(dispatch)=>{
        dispatch(getDataRequest())

       axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=4a1cfeb1709012b142ad4bd7fb1cb8a4`)
        .then((res)=>{
           // console.log(res.data)
            dispatch(getDataSuccess(res.data.results))
        }).catch((err)=>{
            dispatch(getDataError())
        })


    }


    export {
        getDataRequest,
        getDataSuccess,
        getDataError,

        //.......................Data-Fetching-from.................................

       
        getdata
    }