import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, filteredCountries } from "../Redux/reducers/city";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const [countryName, setcountryName] = useState("");
    
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.cityReducer);

    useEffect(() => {
        dispatch(fetchCountries());
      }, [dispatch]);
    
    return (
        <Container>
            <div className="countrySearchBox">
                <input className="countrySearch" type="text" placeholder="Country Name" value={countryName} onChange={e => setcountryName(e.target.value)} />
                <Button variant="secondary" type="button" onClick={async() => { 
                    await dispatch(fetchCountries());
                    dispatch(filteredCountries(countryName));
                    }
                } 
                    >
                        Search
                    </Button>
            </div>
            <Container fluid className="containerCountries">
                {countries.map((country) => (
                    <Card style={{ width: '14rem' }} key={uuidv4()} >
                    <Card.Img variant="top" src={country.flag} />
                        <Card.Body>
                            <Card.Title>{country.name}</Card.Title>
                            <Card.Text>
                                Country code: {country.countrycode} <br />
                                Region: {country.region}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))
                }
            </Container>
        </Container>
    )
}

export default Home;