import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import CtaButton from '../components/CtaButton'
import Breadcrumb from '../components/Breadcrumb'
import Router from 'next/router'
import 'isomorphic-fetch'
import classNames from 'classnames';
import config from '../config';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.env =  process.env.NODE_ENV;
    this.baseUrl;
    if (this.env == 'production') {
      this.baseUrl = config().prodUrl
    } else {
      this.baseUrl = config().devUrl;
    }
  }

  static async getInitialProps ({req,query}) {
    const baseUrl = config()(process.env.NODE_ENV);
    
    let id;

    if (req) {
      id = req.params.id;
    } else {
      id = query.id;
    }

    const responseJson = await fetch(baseUrl + '/api/items/' + id)
    const json = await responseJson.json();
        
    return {item: json.item}
  }

  render() {
    const descriptionClases = classNames({
      "melitest-description-container": true,
      "hide": this.props.item.description.length <= 0 ? true : false
    });
    
    return (
      <div>
        <Header />
        <Breadcrumb breadcrumbId={this.props.item.breadcrumb}/>
        <div className="melitest-main-container">
          <div className="melitest-data-container">
            <div className="melitest-left-contianer">
              <img src={this.props.item.picture} />
              <div className={descriptionClases}>
                <span>Descripción del producto</span>
                <div className="melitest-description">
                    <p>{this.props.item.description}</p>
                </div>
              </div>
            </div>
            <div className="melitest-right-container">
                <span className="melitest-product-condition">{this.props.item.condition} - {this.props.item.sold_quantity} vendidos</span>
                <h2 className="melitest-product-title">{this.props.item.title}</h2>
                <h3 className="melitest-product-price">$ {this.props.item.price.amount}<sup>{this.props.item.price.decimals}</sup></h3>
                <CtaButton buttonType="confirm" text="Comprar"/>
            </div>
          </div>              
        </div>
        <style jsx>{`
          .hide {
            visibility: hidden;
          }
          .melitest-main-container {
            max-width: 1000px;
            min-width: 1000px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 3px;
          }
          .melitest-data-container {
            display: flex;
          }
          .melitest-left-contianer {
            width: 680px;
            text-align: center;
            flex: auto;
            padding-top: 32px;
          }
          .melitest-right-container {
            width: 220px;
            flex: auto;
            margin-right: 32px;
            padding-top: 32px;
          }
          .melitest-description-container {
            display: block;
            width: 100%;
            margin-top: 100px;
            margin-left: 32px;
            text-align: left;
          }
          .melitest-description-container span {
            margin-bottom: 32px;
            font-size: 28px;
            font-weight: bold;
            color: #333;
          }
          .melitest-description-container p {
            font-size: 16px;
            color: #999;
            width: calc(100% - 32px);
          }
          .melitest-product-condition {
            font-size: 14px;
          }
          .melitest-product-title {
            font-size: 24px;
            font-weight: lighter;
            margin: 16px 0 0 0;
            color: #333;
          }
          .melitest-product-price {
            font-size: 46px;
            font-weight: lighter;
            margin: 32px 0;
            color: #333;
          }
          .melitest-product-price sup {
            font-size: 24px;
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