import React from 'react'
import Router from 'next/router'

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
        value: ''
    }
  }   

  handleKeyPress(event) {
    if (event.key == 'Enter') {
        this.search();
    }
  }

  handleChange(event) {
    this.setState({
        value: event.target.value
    });
  }

  search() {
      const query = this.state.value;
      Router.push('/items?search=' + query, '/items?search=' + query, { shallow: false });
  }
  render() {
    return(
      <div className="melitest-autocomplete-container">
        <div className="melitest-autocomplete-form">
          <input onKeyPress={this.handleKeyPress} value={this.state.value} onChange={this.handleChange} type="text" placeholder="Nunca dejes de buscar" className="melitest-autocomplete" name="search"/>
          <div className="melitest-searchicon-container">
            <img src="/static/ic_Search@2x.png" />
          </div>
        </div>
        <style jsx>{`
        .melitest-autocomplete-form {
            padding: 7px 5px;
            overflow: auto;
            height: 40px;
            position: relative;
            left: 89px;
            width: 747px;
        }
        .melitest-autocomplete {
            padding: 5px 60px 5px 15px;
            border-radius: 3px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            width: 100%;
            height: 100%;
            font-size: 18px;
            outline: 0 none;
        }
        .melitest-searchicon-container {
            position: absolute;
            top: 8px;
            right: 6px;
            padding: 11px 12px;
            background-color: #EEEEEE;
            height: 30%;
            cursor: pointer;
        }
        .melitest-searchicon-container img {
            height: 18px;
        }
        `}</style>
      </div>
    )
  }
}

export default Autocomplete