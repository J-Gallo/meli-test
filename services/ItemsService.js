"use strict";
const Q = require('q'),
  format = require('format-number');

class ItemsService {
  constructor(ApiClient) {
    this.apiClient = ApiClient;
    this.limit = 4;
  }

  search(query) {
    const deferred = Q.defer(),
      options = {
        cache: {
          ttl: 300 //5 minutes
        }
      },
      that = this;

      this.apiClient.get('https://api.mercadolibre.com/sites/MLA/search?offset=0&limit=' + this.limit + '&q=' + query, options).then((result) => {
        let responseObj = {
          author: {
            "name": "Juan",
            "lastname": "Gallo"
          },
          categories: [],
          items: []
        };
          
        result.results.forEach((item) => {
          responseObj.categories.push(item.category_id);
          let itemResponse = {
            id: item.id,
            title: item.title,
            price: that._formatPrice(item.price),
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            address: item.address.state_name
          };
              
          responseObj.items.push(itemResponse);
        })
        responseObj.filters = result.filters;
        
        deferred.resolve(responseObj);        
      }).catch((err) => {
        deferred.reject(err);
      })
      
      return deferred.promise;
  }

  getProduct(id) {
    const deferred = Q.defer(),
      options = {
        cache: {
          ttl: 300
        }
      },
      that = this;

    this.apiClient.get('https://api.mercadolibre.com/items/' + id).then((result) => {
      let responseObj = {
        author: {
          "name": "Juan",
          "lastname": "Gallo"
        },
        item: {
          id: result.id,
          title: result.title,
          price: that._formatPrice(result.price),
          picture: result.pictures[0] ? result.pictures[0].secure_url : '',
          condition: result.condition == 'new' ? 'Nuevo' : 'Usado',
          free_shipping: result.shipping.free_shipping,
          sold_quantity: result.sold_quantity,
          category_id: result.category_id
        }
      }
        
      deferred.resolve(responseObj);
    }).catch((err) => {
      deferred.reject(err);
    })

    return deferred.promise;
  }

  getDescription(id) {
    const deferred = Q.defer();
    this.apiClient.get('https://api.mercadolibre.com/items/' + id + '/description').then((description) => {
      deferred.resolve(description.plain_text);
    }).catch((err) => {
      deferred.reject(err);
    })

    return deferred.promise;
  }

  getBreadcrumb(id) {
    const deferred = Q.defer();
    this.apiClient.get('https://api.mercadolibre.com/categories/' + id).then((category) => {
      deferred.resolve(category.path_from_root);
    }).catch((err) => {
        deferred.reject(err);
    })

    return deferred.promise;
  }

  _formatPrice(price) {
    const splittedPrice = price.toString().split('.');

    const formattedPrice = {
      amount: format({integerSeparator:'.'})(splittedPrice[0]),
      decimals: splittedPrice[1] ? splittedPrice[1] : '00'
    };

    return formattedPrice;
  }
}

module.exports = ItemsService;
