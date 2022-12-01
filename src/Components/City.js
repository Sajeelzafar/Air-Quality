import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom"
import { fetchCities } from "../Redux/reducers/cities";


const City = () => {
    const dispatch = useDispatch();
    let location = useLocation();
    useEffect(() => {
        dispatch(fetchCities(location.state.info.name));
      }, [dispatch]);
    return(
        <div>
            This is a City page
        </div>
    )
}

export default City;