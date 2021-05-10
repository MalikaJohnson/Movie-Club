import { Carousel } from 'antd';
import React from "react";
import ReactDOM from "react-dom";

function Carousell() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (
    <div>
ReactDOM.render(
      <Carousel autoplay>
        <div>
          <iframe src="https://youtu.be/W6Mm8Sbe__o">Silence of the Lambs</iframe>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>,
  mountNode,
);

    </div>
  )

}

export default Carousell;


// silence of the lambs https://youtu.be/W6Mm8Sbe__o
// clueless https://youtu.be/Mgjwq1ZzdPQ
// space jam https://youtu.be/oKNy-MWjkcU
// the fifth element https://youtu.be/oKNy-MWjkcU
// edward scissorhands https://youtu.be/TBHIO60whNw
// fight club https://youtu.be/SUXWAEX2jlg