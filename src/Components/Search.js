import { useLocation } from "react-router-dom"

const Search = () => {
    let location = useLocation();
return(
    <h1>This is the page {console.log(location)}</h1>
)
}

export default Search;