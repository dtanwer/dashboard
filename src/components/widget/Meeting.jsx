import React from 'react'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './Meeting.scss';
export default function Meeting() {
    return (
            <div className="widget" style={{minHeight:"240px",minWidth:"350px"}} >
                <div className="main">
                    <h1>Today’s schedule</h1>
                    <div id='m1' className="meet">
                        <h2>Meeting with suppliers from Kuta Bali</h2>
                        <p>14.00-15.00</p>
                        <p>at Sunset Road, Kuta, Bali </p>
                    </div>
                    <div id='m2' className="meet">
                        <h2>Meeting with suppliers from Kuta Bali</h2>
                        <p>14.00-15.00</p>
                        <p>at Sunset Road, Kuta, Bali </p>
                    </div>
                </div>
                <div className="right">
                    <p>See All <ArrowForwardIosOutlinedIcon style={{width:"20px"}}/></p>
                </div>
            </div>
    )
}
