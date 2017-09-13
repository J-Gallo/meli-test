"use strict";
const Q = require('q');

class ItemsController {
  constructor(ItemsService) {
    this.itemsService = ItemsService
  }

  search(req, res) {
    const query = req.query['query'];
    this.itemsService.search(query).then((items) => {
      return res.json(items);
    }).catch((err) => {
      return res.sendStatus(500);
    })
  }

  getProduct(req, res) {
    const productId = req.params.id;

    if (productId) {
      this.itemsService.getProduct(productId).then((product) => {
        let breadcrumb = this.itemsService.getBreadcrumb(product.item.category_id);
        let description = this.itemsService.getDescription(product.item.id);

        Q.allSettled([breadcrumb, description]).spread((breadcrumb, description) => {
          product.item.breadcrumb = breadcrumb.value;
          product.item.description = description.value;

          return res.json(product);
        })
      
      }).catch((err) => {
        return res.sendStatus(500);
      })
    } else {
      return res.sendStatus(400);
    }
  }

  getDescription(req, res) {
    const productId = req.params.id;

    if (productId) {
      this.itemsService.getDescription(productId).then((description) => {
        return res.json(description);
      }).catch((err) => {
        return res.sendStatus(500);
      })
    } else {
      return res.sendStatus(400);
    }
  }

  getBreadcrumb(req, res) {
    const categoryId = req.params.id;

    if (categoryId) {
      this.itemsService.getBreadcrumb(categoryId).then((breadcrumb) => {
        return res.json(breadcrumb);
      }).catch((err) => {
        return res.sendStatus(500);
      })
    } else {
      return res.sendStatus(400);
    }
  }
}

module.exports = ItemsController;
