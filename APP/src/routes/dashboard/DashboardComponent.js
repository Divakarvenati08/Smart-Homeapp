import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import '../dashboard/dashboardstyle.css'

function DashboardComponent() {
    return (
        <div className="dashboard-container">
            <div className="staus-dashboard">Status <span className='online-status'> Online</span></div>
            <Carousel showArrows={false} infiniteLoop autoPlay>
                <div>
                    <img src="https://placekitten.com/408/287" />
                </div>
                <div>
                    <img src="https://placekitten.com/408/287" />
                </div>
            </Carousel>
        </div>
    );
}

export default DashboardComponent;