import { fetchPhotos, fetchVideos } from "./api/mediaAPI";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import { useDispatch } from "react-redux";

const App = () => {
  return (
    <>
    <SearchBar/>
    <Tabs/>
     {/* <button onClick={async () =>{
      const data = await fetchPhotos('dog')
      console.log(data.results)}}>get pics</button>

      <button onClick={async ()=>{
        const dataa = await fetchVideos('cat')
        console.log(dataa.videos)}}>get videos</button> */}
    </>
  )  
}
export default App;