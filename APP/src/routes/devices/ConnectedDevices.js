import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "../devices/devicesstyle.css"
import {Link} from "react-router-dom"

function ConnectedDevices() {
    return (
        <div>
            <div class="border d-table w-100">
                <p class="d-table-cell">Family-Room
                    <br />Desktop/Laptop <br /> 192.168.1.150</p>
                <div class="d-table-cell tar">
                <button className='view-content' ><Link to="/connectedDeviceList" className="btn btn-primary">View More</Link></button>
                </div>
            </div>

            <div class="border d-table w-100">
                <p class="d-table-cell">Stream Tv-Living room
                    <br />Desktop/Laptop <br /> 192.168.1.100</p>
                <div class="d-table-cell tar">
                    <button className='view-content' ><Link to="/connectedDeviceList" className="btn btn-primary">View More</Link></button>
                </div>
            </div>

            <div class="border d-table w-100">
                <p class="d-table-cell">NN9TL7N2H2
                    <br />Desktop/Laptop <br /> 192.168.1.168</p>
                <div class="d-table-cell tar">
                <button className='view-content' ><Link to="/connectedDeviceList" className="btn btn-primary">View More</Link></button>
                </div>
            </div>

            <div class="border d-table w-100">
                <p class="d-table-cell">Family-Room
                    <br />Desktop/Laptop <br /> 192.168.1.150</p>
                <div class="d-table-cell tar">
                <button className='view-content' ><Link to="/connectedDeviceList" className="btn btn-primary">View More</Link></button>
                </div>
            </div>

            <div class="border d-table w-100">
                <p class="d-table-cell">Family-Room
                    <br />Desktop/Laptop <br /> 192.168.1.150</p>
                <div class="d-table-cell tar">
                <button className='view-content' ><Link to="/DashboardComponent" className="btn btn-primary">View More</Link></button>
                </div>
            </div>
        </div>
    );
}

export default ConnectedDevices;