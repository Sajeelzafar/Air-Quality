import { useLocation } from "react-router-dom"

const City = () => {
    let location = useLocation();
    return(
        <div>
            This is a City page
        </div>
    )
}

export default City;