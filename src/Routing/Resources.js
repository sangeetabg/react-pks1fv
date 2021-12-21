import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    let url = 'https://reqres.in/api/unknown';
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({ data: parseData.data });
  }
  SelectHAndler = (element) => {
    console.log('get data from fun', element);
    this.props.selectedHandler(element);
  };
  render() {
    return (
      <div className="container mt-5 my-10">
        <div className="row">
          {this.state.data.map((element) => (
            <Link to="id" className="col-md-4" key={element.id}>
              <div
                onClick={this.SelectHAndler.bind(this, element)}
                className="col-md-3"
                style={{
                  width: '16rem',
                  backgroundColor: element.color,
                  margin: '20px',
                  padding: '10px',
                }}
              >
                <h1
                  className="hone"
                  style={{
                    textAlign: 'center',
                    fontSize: '22px',
                    textTransform: 'capitalize',
                    padding: '22px',
                  }}
                >
                  {element.name}
                </h1>
                <h2
                  className="htwo"
                  style={{
                    textAlign: 'center',
                    fontSize: '20px',
                    padding: '25px',
                  }}
                >
                  {element.year}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Resources;
