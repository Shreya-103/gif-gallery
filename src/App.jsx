import { fetchPhotos } from "./api/mediaAPI";

const App = () => {
  return (
    <>
     <button onClick={async () =>{
      const data = await fetchPhotos('dog')
      console.log(data.results)}}>get pics</button>
    </>
  )  
}
export default App;