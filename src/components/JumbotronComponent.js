import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import '../index.css';



const JumbotronComponent = () => {
    return (
        <div>
            <Jumbotron className="jumbimg">
                <Container>
                    <div className="m-5 p-4">
                        <h4 className="display-7 " >Welcome, Muhammad Maftuh Anshori</h4>
                        <p className="lead">Untuk memenuhi tugas dari Turnkey.Id sebagai Frontend Engineer Test, saya memiliki kondisi kesehatan yang baik, berpenampilan menarik, mampu membangun komunikasi dengan baik dan mampu bekerja secara personal maupun tim. </p>
                        <hr className="my-2" />
                        <p><b>#HTML #CSS #ReactJs #GIT #GITHUB</b></p>
                        <p className="lead">
                            <Button color="primary"><FontAwesomeIcon icon={faInfoCircle} /> Learn More</Button>
                        </p>
                    </div>
                </Container>

            </Jumbotron>

        </div>
    );
};

export default JumbotronComponent;
