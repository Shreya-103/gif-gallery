import { fetchPhotos, fetchVideos } from "../api/mediaAPI"
import { setQuery, setLoading, setError, setResults } from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
const ResultGrid = ()=>{

    const {query,activeTab,results,loading,error}= useSelector((store)=>store.search)

    const getData = async ()=>{
        if(activeTab=="photos"){
            const data = await fetchPhotos()
        }
    }
    return{

    }
}

export default ResultGrid;