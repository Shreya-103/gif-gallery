import { fetchPhotos, fetchVideos } from "./api/mediaAPI";

const App = () => {
  return (
    <>
     <button onClick={async () =>{
      const data = await fetchPhotos('dog')
      console.log(data.results)}}>get pics</button>

      <button onClick={async ()=>{
        const dataa = await fetchVideos('cat')
        console.log(dataa.videos)}}>get videos</button>
    </>
  )  
}
export default App;