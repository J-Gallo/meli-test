const chai = require('chai'),
  expect = require('chai').expect;
  nock = require('nock'),
  server = require('../server'),
  itemsService = require('../services/ItemsService'),
  apiClient = require('../clients/ApiClient');


describe('getProduct function', () => {
  const itemsIntance = new itemsService(new apiClient(2000));
  const response = {
    "id": "MLA675243373",
    "site_id": "MLA",
    "title": "Celular Iphone 5 S 4g Lte Libre 16gb ",
    "subtitle": null,
    "seller_id": 261940282,
    "category_id": "MLA121410",
    "official_store_id": null,
    "price": 6500,
    "base_price": 6500,
    "original_price": null,
    "currency_id": "ARS",
    "initial_quantity": 30,
    "available_quantity": 17,
    "sold_quantity": 13,
    "sale_terms": [
    ],
    "buying_mode": "buy_it_now",
    "listing_type_id": "gold_special",
    "start_time": "2017-07-20T12:51:00.000Z",
    "historical_start_time": "2017-07-20T12:51:00.000Z",
    "stop_time": "2037-07-15T12:51:08.000Z",
    "condition": "new",
    "permalink": "http://articulo.mercadolibre.com.ar/MLA-675243373-celular-iphone-5-s-4g-lte-libre-16gb-_JM",
    "thumbnail": "http://mla-s1-p.mlstatic.com/698537-MLA25770694462_072017-I.jpg",
    "secure_thumbnail": "https://mla-s1-p.mlstatic.com/698537-MLA25770694462_072017-I.jpg",
    "pictures": [
      {
        "id": "698537-MLA25770694462_072017",
        "url": "http://mla-s1-p.mlstatic.com/698537-MLA25770694462_072017-O.jpg",
        "secure_url": "https://mla-s1-p.mlstatic.com/698537-MLA25770694462_072017-O.jpg",
        "size": "500x333",
        "max_size": "1200x800",
        "quality": ""
      },
      {
        "id": "951765-MLA25770695251_072017",
        "url": "http://mla-s2-p.mlstatic.com/951765-MLA25770695251_072017-O.jpg",
        "secure_url": "https://mla-s1-p.mlstatic.com/951765-MLA25770695251_072017-O.jpg",
        "size": "500x367",
        "max_size": "1148x843",
        "quality": ""
      },
      {
        "id": "803353-MLA25770696298_072017",
        "url": "http://mla-s2-p.mlstatic.com/803353-MLA25770696298_072017-O.jpg",
        "secure_url": "https://mla-s2-p.mlstatic.com/803353-MLA25770696298_072017-O.jpg",
        "size": "500x500",
        "max_size": "1000x1000",
        "quality": ""
      }
    ],
    "video_id": null,
    "descriptions": [
      {
        "id": "MLA675243373-1396322889"
      }
    ],
    "accepts_mercadopago": true,
    "non_mercado_pago_payment_methods": [
    ],
    "shipping": {
      "mode": "me2",
      "free_methods": [
        {
          "id": 73328,
          "rule": {
            "free_mode": "country",
            "value": null
          }
        }
      ],
      "tags": [
      ],
      "dimensions": null,
      "local_pick_up": false,
      "free_shipping": true,
      "logistic_type": "drop_off",
      "store_pick_up": false
    },
    "international_delivery_mode": "none",
    "seller_address": {
      "comment": "",
      "address_line": "",
      "zip_code": "",
      "city": {
        "id": "TUxBQ0NBTmRkY2Vh",
        "name": "Candelaria"
      },
      "state": {
        "id": "AR-N",
        "name": "Misiones"
      },
      "country": {
        "id": "AR",
        "name": "Argentina"
      },
      "search_location": {
        "neighborhood": {
          "id": "",
          "name": ""
        },
        "city": {
          "id": "TUxBQ0NBTmRkY2Vh",
          "name": "Candelaria"
        },
        "state": {
          "id": "TUxBUE1JU3MzNjIx",
          "name": "Misiones"
        }
      },
      "latitude": "",
      "longitude": "",
      "id": 278482351
    },
    "seller_contact": null,
    "location": {
    },
    "geolocation": {
      "latitude": "",
      "longitude": ""
    },
    "coverage_areas": [
    ],
    "attributes": [
      {
        "id": "CAMERA_RESOLUTION",
        "name": "Resolución de la cámara digital",
        "value_id": null,
        "value_name": "8 Mpx",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "CPU",
        "name": "Procesador",
        "value_id": null,
        "value_name": "Apple A7",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "DIGITAL_CAMERA",
        "name": "Cámara digital",
        "value_id": "242085",
        "value_name": "Sí",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "DISPLAY_RESOLUTION",
        "name": "Resolución de la pantalla",
        "value_id": null,
        "value_name": "1136 px - 640 px",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "DUAL_SIM",
        "name": "Dual SIM",
        "value_id": "242084",
        "value_name": "No",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "GPS",
        "name": "GPS",
        "value_id": "242085",
        "value_name": "Sí",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "INTERNAL_MEMORY",
        "name": "Memoria interna",
        "value_id": null,
        "value_name": "16 GB",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "MP3",
        "name": "MP3",
        "value_id": "242085",
        "value_name": "Sí",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "OPERATING_SYSTEM",
        "name": "Sistema operativo",
        "value_id": "296859",
        "value_name": "iOS",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "OPERATING_SYSTEM_VERSION",
        "name": "Versión del sistema operativo",
        "value_id": null,
        "value_name": "10",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "QWERTY_KEYBOARD",
        "name": "Teclado QWERTY",
        "value_id": "242085",
        "value_name": "Sí",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "SCREEN_SIZE",
        "name": "Tamaño de pantalla",
        "value_id": null,
        "value_name": "4 in",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "SIM_SIZE",
        "name": "Tamaño de SIM",
        "value_id": "80453",
        "value_name": "Nano-SIM",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "TOUCH_SCREEN",
        "name": "Pantalla táctil",
        "value_id": "242085",
        "value_name": "Sí",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "TV_TUNER",
        "name": "Sintonizador de TV",
        "value_id": "242084",
        "value_name": "No",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "WEIGHT",
        "name": "Peso",
        "value_id": null,
        "value_name": "112 g",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "WIFI_CONNECTION",
        "name": "Wi-Fi",
        "value_id": "242085",
        "value_name": "Sí",
        "value_struct": null,
        "attribute_group_id": "DFLT",
        "attribute_group_name": "Otros"
      },
      {
        "id": "BRAND",
        "name": "Marca",
        "value_id": "9344",
        "value_name": "Apple",
        "value_struct": null,
        "attribute_group_id": "MAIN",
        "attribute_group_name": "Atributos Principales"
      },
      {
        "id": "LINE",
        "name": "Línea",
        "value_id": "58993",
        "value_name": "iPhone",
        "value_struct": null,
        "attribute_group_id": "MAIN",
        "attribute_group_name": "Atributos Principales"
      },
      {
        "id": "MODEL",
        "name": "Modelo",
        "value_id": "58517",
        "value_name": "5S",
        "value_struct": null,
        "attribute_group_id": "MAIN",
        "attribute_group_name": "Atributos Principales"
      }
    ],
    "warnings": [
    ],
    "listing_source": "",
    "variations": [
    ],
    "status": "active",
    "sub_status": [
    ],
    "tags": [
      "good_quality_thumbnail",
      "good_quality_picture",
      "immediate_payment"
    ],
    "warranty": null,
    "catalog_product_id": "MLA5513986",
    "domain_id": "MLA-CELLPHONES",
    "parent_item_id": null,
    "differential_pricing": null,
    "deal_ids": [
    ],
    "automatic_relist": false,
    "date_created": "2017-07-20T12:51:00.000Z",
    "last_updated": "2017-09-12T13:57:14.000Z"
  }
  it('Getting item: Not found', (done) => {
    nock('https://api.mercadolibre.com').get('/items/123').reply(404, 'not found');

    itemsIntance.getProduct(123).catch((err) => {
      
      expect(err.response.statusCode).to.be.equal(404);
      done();
    })
  })
  it('Getting item: Success', (done) => {

    nock('https://api.mercadolibre.com').get('/items/MLA675243373').reply(200, response);
    
    itemsIntance.getProduct('MLA675243373').then((data) => {
      expect(data.item.id).to.be.equal('MLA675243373');
      done()
    })
  })
  it('Response format: author', (done) => {
    nock('https://api.mercadolibre.com').get('/items/MLA675243373').reply(200, response);
    itemsIntance.getProduct('MLA675243373').then((data) => {
      expect(data).to.have.property('author');
      done();
    })
  })
  it('Response format: items', (done) => {
    nock('https://api.mercadolibre.com').get('/items/MLA675243373').reply(200, response);
    itemsIntance.getProduct('MLA675243373').then((data) => {
      expect(data).to.have.property('item');
      done();
    })
  })
  it('Response format: is object', (done) => {
    nock('https://api.mercadolibre.com').get('/items/MLA675243373').reply(200, response);
    itemsIntance.getProduct('MLA675243373').then((data) => {
      expect(data).to.be.an('object');
      done();
    })
  })
});

describe('getDescription function', () => {
  const itemsIntance = new itemsService(new apiClient(2000));
  const response = {
    "text": "",
    "plain_text": "Envío gratis a todo el país",
    "last_updated": "2017-07-20T12:51:00.000Z",
    "date_created": "2017-07-20T12:51:00.000Z",
    "snapshot": {}
  };

  it('Getting description: Not found', (done) => {
    nock('https://api.mercadolibre.com').get('/items/123/description').reply(404, 'not found');

    itemsIntance.getDescription(123).catch((err) => {
      
      expect(err.response.statusCode).to.be.equal(404);
      done();
    })
  })
  it('Getting description: Success', (done) => {

    nock('https://api.mercadolibre.com').get('/items/MLA675243373/description').reply(200, response);
    
    itemsIntance.getDescription('MLA675243373').then((data) => {
      expect(data).to.be.equal("Envío gratis a todo el país");
      done()
    })
  })
  it('Response format: is string', (done) => {
    nock('https://api.mercadolibre.com').get('/items/MLA675243373/description').reply(200, response);
    
    itemsIntance.getDescription('MLA675243373').then((data) => {
      expect(data).to.be.a("string");
      done()
    })
  })
});
