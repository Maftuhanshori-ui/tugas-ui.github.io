import React from 'react'
import '../index.css';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <span className="brand"><strong>Muhammad Maftuh</strong> Anshori</span>
                        <p className="brand-tagline font weight-light">
                            <strong>Frontend</strong> Developer
                        </p>
                    </div>
                    <div className="col-3 mr-5">
                        <h6 className="mt-2">
                            Explore Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Our careers
                            </li>
                            <li className="list-group-item">
                                Privacy
                            </li>
                            <li className="list-group-item">
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 mr-5">
                        <h6 className="mt-2">
                            Connnect us
                        </h6>
                        <ul className="list-group list-group-flush" >
                            <li className="list-group-item">
                                maftuhanshori02@gmail.com
                            </li>
                            <li className="list-group-item">
                                0896-5751-4613
                            </li>
                            <li className="list-group-item">
                                <span>
                                    Majalengka, Jawa Barat
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col text-center copyrights">
                        Copyright 2021 • All rights reserved •
                    </div>
                </div>
            </div>
        </footer>
    )
}