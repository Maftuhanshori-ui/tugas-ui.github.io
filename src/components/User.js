import React from 'react'
import { Col, Card } from "reactstrap";

const User = ({ user }) => {
    return (

        <Col className="justify-content-center">

            <Card style={{ width: '17rem' }} className="mb-4 text-center shadow">
                <img style={{ marginTop: '5%' }} src={`${user.picture.large}`} />
                <h4 style={{ marginTop: '5%' }}><strong>{` ${user.name.first}`}</strong> {` ${user.name.last}`}</h4>
                <hr />
                <h5>Telp. {`${user.phone}`}</h5>
                <h5><i>{`${user.email}`}</i></h5>
                <h5>{` ${user.location.country}`}</h5>
            </Card>

        </Col >

    )
}

export default User