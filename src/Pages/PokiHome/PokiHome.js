import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Container, Button,} from 'react-bootstrap'
import { useState } from 'react'




function PokiHome() {

    const [input, setInput] = useState(" ");

    return (
        <>
            <input onChange={(event) => {
                setInput(event.target.value);   
            }}></input>

            <Button onClick={() => input = 0}>api call</Button>

        </>
    );
}



export default PokiHome;