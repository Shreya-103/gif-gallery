import { useDispatch } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";
const Tabs =()=>{

    const tabs = ['photos','videos']
      const dispatch = useDispatch();
    return(
        <div>
            {tabs.map(function(elem, idx){
                return <button key={idx} onClick={dispatch(setActiveTabs(elem))}>{elem}</button>
            })}
        </div>
    )
}
export default Tabs