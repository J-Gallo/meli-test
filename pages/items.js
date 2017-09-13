import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import Router from 'next/router'
import 'isomorphic-fetch'
import config from '../config'

class Items extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({req, query}) {
    const baseUrl = config()(process.env.NODE_ENV);
    let q,
      items = [];
    
    
    if (req) {
      q = req.query['search'];
    } else {
      q = query.search;
    }

    if (q && q != "") {
      const responseJson = await fetch(baseUrl + '/api/items?query=' + q)
      const json = await responseJson.json();
      items = json.items;
      
    }

    return {items: items}
  }

  render() {
    return (
      <div>
        <Header />
        <div className="melitest-main-container">
          {this.props.items.map((item, i) => {
            const itemUrl = "/items/" + item.id,
              pageUrl = "/product?id=" + item.id,
              free_shipping = item.free_shipping == false ? 'hide': '';

            return (
              <Link prefetch key={i} href={pageUrl} as={itemUrl}>
                <a>
                  <div  className="melitest-item-container">
                    <div className="melitest-item-img">
                      <img src={item.picture} />
                    </div>
                    <div className="melitest-item-data">
                      <div className="melitest-item-left-data">
                        <span>$ {item.price.amount}</span> 
                        <img className={free_shipping} src="/static/ic_shipping@2x.png" />
                        <h3>{item.title}</h3>
                      </div>
                      <div className="melitest-item-right-data">
                        <span>{item.address}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
                
        <style jsx>{`
          .hide {
            visibility: hidden;
          }
          .melitest-main-container {
            max-width: 1000px;
            min-width: 1000px;
            margin: 60px auto;
            background-color: #ffffff;
            border-radius: 3px;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          .melitest-item-container {
            max-width: calc(100% - 32px);
            height: 214px;
            margin: auto;
            border-bottom: 2px solid #F8F8F8;
            display: flex;
            position: relative;
          }
          .melitest-item-container .melitest-item-img {
            display: inline-block;
            height: 180px;
            width: 180px;
            border-radius: 4px;
            margin-top: 16px;
            margin-bottom: 16px;
          }
          .melitest-item-container .melitest-item-img img {
            height: 100%;
          }
          .melitest-item-container .melitest-item-data {
            display: inline-block;
            margin-left: 16px;
            margin-top: 32px;      
          }
          .melitest-item-container .melitest-item-data .melitest-item-left-data {
            max-width: 370px;
            color: #333;
            display: inline-block;
          }
          .melitest-item-container .melitest-item-data .melitest-item-left-data img {
            width: 20px;
            margin-left: 10px;
          }
          .melitest-item-container .melitest-item-data .melitest-item-left-data span {
            font-size: 24px;
          }
          .melitest-item-container .melitest-item-data .melitest-item-left-data h3 {
            font-size: 18px;
            font-weight: lighter;
            margin-top: 32px;
          }
          .melitest-item-container .melitest-item-data .melitest-item-right-data {
            position: absolute;
            top: 65px;
            right: 0px;
            font-size: 12px;
            color: #999;
            width: 150px;
            text-align: left;
          }
        `}</style>
        <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #eeeeee;
            font-family: Arial;
          }
        `}</style>
      </div>
    )
  }
}

export default Items;