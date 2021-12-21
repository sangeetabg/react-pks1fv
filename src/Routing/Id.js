import React from 'react';
const ComponentOnChoice = (props) => {
  // let data=props.selectedData
  // const [data,setData]=useState({})
  const { id, name, color, year, pantone_value } = props.selectedData;
  return (
    <>
      <div className="container mt-4 center">
        <div
          className="col-md-3"
          style={{ backgroundColor: color, margin: '20px', padding: '10px' }}
          key={id}
        >
          <h1
            style={{
              textAlign: 'center',
              fontSize: '22px',
              textTransform: 'capitalize',
              padding: '22px',
            }}
          >
            {name}
          </h1>
          <h2
            style={{ textAlign: 'center', fontSize: '20px', padding: '25px' }}
          >
            {year}
          </h2>
          <p>Pentone Value</p>
          <h2 style={{ textAlign: 'center', fontSize: '20px' }}>
            {pantone_value}
          </h2>
        </div>
      </div>
    </>
  );
};
export default ComponentOnChoice;
