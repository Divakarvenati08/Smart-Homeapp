import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import "../devicedetaillist/devicetabstyle.css"

function connectedDeviceList() {
    return (
        <div>
           <div class="wrapper">
  <img class="center" src="https://picsum.photos/300/200" alt="a sand dune"></img>
  </div>
            <div>
                <table class="zebra">
                    <thead>
                        {/* <tr>
                        <th>Last Name</th>
                        <th>First Name</th>
                    </tr> */}
                    </thead>
                    <tbody>
                        <tr>
                            <td>Serial Number</td>
                            <td>G401119042231232</td>
                        </tr>
                        <tr>
                            <td>IPV4</td>
                            <td>192.168.2.1</td>
                        </tr>
                        <tr>
                            <td>IPV4 Address Wan</td>
                            <td>192.168.2.1</td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>g3100</td>
                        </tr>
                        <tr>
                            <td>MAC</td>
                            <td>04.5ae.123.5436.2</td>
                        </tr>
                        <tr>
                            <td>Software Version</td>
                            <td>3.1.1.17</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="button-wrap">
                <button type="button" class="button reset">RESET</button>
                <button type="button" class="button restart">RESTART</button>
                <button type="button" class="button enable">ENABLE</button>
            </div>
        </div>
    );
}

export default connectedDeviceList;