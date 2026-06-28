import { use, useState } from "react"
import {useDispatch} from 'react-redux'
import { setQuery } from "../redux/features/searchSlice";


const SearchBar = ()=>{


    const[text, setText]= useState('');

    const dispatch = useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(setQuery(text))
        setText('');
    }
    return(
        <>
        <form onSubmit={(e)=>{
            submitHandler}}>
            <input type="text" placeholder="search..." value={text} required onChange={(e)=>{
                setText(e.target.value)
            }} />
            <button>Search</button>
        </form>
        </>
    )
}
export default SearchBar