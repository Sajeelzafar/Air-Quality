import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom"
import { fetchCities, fetchLatLon } from "../Redux/reducers/cities";
import { v4 as uuidv4 } from 'uuid';
import './city.css';

const City = () => {
    const dispatch = useDispatch();
    let location = useLocation();
    let countryInfo = location.state.info;
    useEffect(() => {
        dispatch(fetchCities(countryInfo.name));
        dispatch(fetchLatLon());
      }, [dispatch]);
    const cities = useSelector((state) => state.citiesReducer);

    return(
        <Container className="countryDisplayBlock" fluid>
            <div className="card bg-dark text-white">
                <img src={countryInfo.flag} className="card-img" alt="..." />
                <div className="card-img-overlay countryDisplay">
                    <h5 className="card-title">{countryInfo.name}</h5>
                    <p className="card-text">Capital: {countryInfo.capital[0]}<br />No. of cities: {cities.data?.length}<br /></p>
                    <p className="card-text">Region: {countryInfo.region}</p>
                </div>
            </div>
            {cities.data?.map((city) => (
                    <div className="cityContainer" key={uuidv4()}>
                        <div className="leftSidecityContainer">
                            {city}
                        </div>
                        <div className="rightSidecityContainer">
                            <Button variant="light"><NavLink className="nav-link" to="/pollutiondata" state= {{
                                cityname: city,
                                countryname: countryInfo.countrycode,
                                }}>Load Data</NavLink></Button>
                        </div>
                        
                    </div>
                ))}
               
            
        </Container>

        // <Container fluid>
        //     <Card mb={3} className="countryDisplay" style={{ width: '18rem' }}>
        //         <Row className="row-no-gutters">
        //             <Col sm={1}><Card.Img className="countryDisplayImage" src={countryInfo.flag} /></Col>
        //             <Col md={8}>
        //         <Card.Body>
        //             <Card.Title>{countryInfo.name}</Card.Title>
        //             <Card.Text>
        //             Some quick example text to build on the card title and make up the
        //             bulk of the card's content.
        //             </Card.Text>
        //         </Card.Body>
        //         </Col>
        //         </Row>
        //     </Card>        
        // </Container>
    )
}

export default City;