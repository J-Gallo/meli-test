import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

class Breadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumb: []
    }
  }

  render() {
    return (
      <div className="melitest-breadcrumb-container">
        <ul>
          {this.props.breadcrumbId.map((category, i) => {
            return (  
              <li key={i}> 
                <span>{category.name}</span>
              </li>
            );
          })}
        </ul>
        <style jsx>{`
          .melitest-breadcrumb-container {
              max-width: 1000px;
              margin: auto;
          }
          ul {
            list-style: none;
            margin-top: 70px;
            margin-bottom: 16px;
            padding: 0;
            color: #999;
            font-size: 14px;
          }
          li {
            display: inline-block;
          }
          ul li span {
              margin: 0 5px 0 10px;
          }
          ul li:after {
              content: '>';
              margin-left: 5px;
          }
          ul li:last-child {
              font-weight: bold;
          }
          ul li:last-child:after {
            content: ""; 
          }
        `}</style>
      </div>
    )
  }
}

export default Breadcrumb;