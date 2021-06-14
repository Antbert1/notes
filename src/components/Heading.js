import React, { useState } from 'react';

function Heading() {

  const a = "asdfasdf";
  const [time, setTime] = useState(a);

  function updateTime() {
    setTime("asldkfjasdf");
  }

  return (
    <div className="row">
      <div className="col-md-6">
        Test
      </div>
      <div className="col-md-6">
        <h1>{time}</h1>
        <button  onClick={updateTime}>Change</button>
      </div>
    </div>
  );
}

export default Heading;
