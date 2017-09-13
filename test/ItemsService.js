const chai = require('chai'),
  expect = require('chai').expect;
  nock = require('nock'),
  server = require('../server'),
  itemsService = require('../services/ItemsService'),
  apiClient = require('../clients/ApiClient');


describe('getProduct function', () => {
  const itemsInstance = new itemsService(new apiClient(2000));
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

    itemsInstance.getProduct(123).catch((err) => {
      
      expect(err.response.statusCode).to.be.equal(404);
      done();
    })
  })
  it('Getting item: Success', (done) => {

    nock('https://api.mercadolibre.com').get('/items/MLA675243373').reply(200, response);
    
    itemsInstance.getProduct('MLA675243373').then((data) => {
      expect(data.item.id).to.be.equal('MLA675243373');
      done()
    })
  })
  it('Response format: author', (done) => {
    nock('https://api.mercadolibre.com').get('/items/MLA675243373').reply(200, response);
    itemsInstance.getProduct('MLA675243373').then((data) => {
      expect(data).to.have.property('author');
      done();
    })
  })
  it('Response format: items', (done) => {
    nock('https://api.mercadolibre.com').get('/items/MLA675243373').reply(200, response);
    itemsInstance.getProduct('MLA675243373').then((data) => {
      expect(data).to.have.property('item');
      done();
    })
  })
  it('Response format: is object', (done) => {
    nock('https://api.mercadolibre.com').get('/items/MLA675243373').reply(200, response);
    itemsInstance.getProduct('MLA675243373').then((data) => {
      expect(data).to.be.an('object');
      done();
    })
  })
});

describe('getDescription function', () => {
  const itemsInstance = new itemsService(new apiClient(2000));
  const response = {
    "text": "",
    "plain_text": "Envío gratis a todo el país",
    "last_updated": "2017-07-20T12:51:00.000Z",
    "date_created": "2017-07-20T12:51:00.000Z",
    "snapshot": {}
  };

  it('Getting description: Not found', (done) => {
    nock('https://api.mercadolibre.com').get('/items/123/description').reply(404, 'not found');

    itemsInstance.getDescription(123).catch((err) => {
      
      expect(err.response.statusCode).to.be.equal(404);
      done();
    })
  })
  it('Getting description: Success', (done) => {

    nock('https://api.mercadolibre.com').get('/items/MLA675243373/description').reply(200, response);
    
    itemsInstance.getDescription('MLA675243373').then((data) => {
      expect(data).to.be.equal("Envío gratis a todo el país");
      done()
    })
  })
  it('Response format: is string', (done) => {
    nock('https://api.mercadolibre.com').get('/items/MLA675243373/description').reply(200, response);
    
    itemsInstance.getDescription('MLA675243373').then((data) => {
      expect(data).to.be.a("string");
      done()
    })
  })
});

describe('getBreadcrumb function', () => {
  const itemsInstance = new itemsService(new apiClient(2000));
  const response = {
    "id": "MLA352542",
    "name": "16GB",
    "picture": null,
    "permalink": null,
    "total_items_in_this_category": 2286,
    "path_from_root": [
      {
        "id": "MLA1051",
        "name": "Celulares y Teléfonos"
      },
      {
        "id": "MLA1055",
        "name": "Celulares y Smartphones"
      },
      {
        "id": "MLA32089",
        "name": "iPhone"
      },
      {
        "id": "MLA352540",
        "name": "iPhone 6"
      },
      {
        "id": "MLA352542",
        "name": "16GB"
      }
    ],
    "children_categories": [
    ],
    "attribute_types": "attributes",
    "settings": {
      "adult_content": false,
      "buying_allowed": true,
      "buying_modes": [
        "auction",
        "buy_it_now"
      ],
      "catalog_domain": "MLA-CELLPHONES",
      "coverage_areas": "not_allowed",
      "currencies": [
        "ARS"
      ],
      "fragile": false,
      "immediate_payment": "required",
      "item_conditions": [
        "new",
        "used",
        "not_specified"
      ],
      "items_reviews_allowed": false,
      "listing_allowed": true,
      "max_description_length": 50000,
      "max_pictures_per_item": 12,
      "max_pictures_per_item_var": 10,
      "max_sub_title_length": 70,
      "max_title_length": 60,
      "maximum_price": null,
      "minimum_price": null,
      "mirror_category": null,
      "mirror_master_category": null,
      "mirror_slave_categories": [
      ],
      "price": "required",
      "reservation_allowed": null,
      "restrictions": [
      ],
      "rounded_address": false,
      "seller_contact": "not_allowed",
      "shipping_modes": [
        "not_specified",
        "me2",
        "me1",
        "custom"
      ],
      "shipping_options": [
        "custom",
        "carrier"
      ],
      "shipping_profile": "optional",
      "show_contact_information": false,
      "simple_shipping": "optional",
      "stock": "required",
      "sub_vertical": "smartphones",
      "subscribable": null,
      "tags": [
      ],
      "vertical": "consumer_electronics",
      "vip_subdomain": "articulo"
    },
    "meta_categ_id": 43882,
    "attributable": false
  };
  it('Getting breadcrumb: Not found', (done) => {
    nock('https://api.mercadolibre.com').get('/categories/123').reply(404, 'not found');
    
    itemsInstance.getBreadcrumb(123).catch((err) => {
      expect(err.response.statusCode).to.be.equal(404);
      done()
    })
  })
  it('Getting breadcrumb: Success', (done) => {
    nock('https://api.mercadolibre.com').get('/categories/MLA352542').reply(200, response);
    
    itemsInstance.getBreadcrumb('MLA352542').then((data) => {
      expect(data).not.to.be.empty;
      done()
    })
  })
  it('Response format: is array', (done) => {
    nock('https://api.mercadolibre.com').get('/categories/MLA352542').reply(200, response);
    
    itemsInstance.getBreadcrumb('MLA352542').then((data) => {
      expect(data).to.be.an('array');
      done()
    })
  })
})

describe('search function', () => {
  const itemsInstance = new itemsService(new apiClient(2000));
  const response = {
    "site_id": "MLA",
    "query": "iphone",
    "paging": {
      "total": 22402,
      "offset": 0,
      "limit": 1,
      "primary_results": 1000
    },
    "results": [
      {
        "id": "MLA632591345",
        "site_id": "MLA",
        "title": "Iphone 6 16gb Lte 4g Libres Nuevos Caja Sellados",
        "seller": {
          "id": 223521468,
          "power_seller_status": "platinum",
          "car_dealer": false,
          "real_estate_agency": false,
          "tags": [
          ]
        },
        "price": 9700,
        "currency_id": "ARS",
        "available_quantity": 46,
        "sold_quantity": 1288,
        "buying_mode": "buy_it_now",
        "listing_type_id": "gold_special",
        "stop_time": "2037-01-26T14:19:04.000Z",
        "condition": "new",
        "permalink": "http://articulo.mercadolibre.com.ar/MLA-632591345-iphone-6-16gb-lte-4g-libres-nuevos-caja-sellados-_JM",
        "thumbnail": "http://mla-s2-p.mlstatic.com/532505-MLA25018939647_082016-I.jpg",
        "accepts_mercadopago": true,
        "installments": {
          "quantity": 12,
          "amount": 1023.51,
          "rate": 26.62,
          "currency_id": "ARS"
        },
        "address": {
          "state_id": "AR-C",
          "state_name": "Capital Federal",
          "city_id": "TUxBQlBVRTQ5NjBa",
          "city_name": "Puerto Madero"
        },
        "shipping": {
          "free_shipping": true,
          "mode": "me2",
          "tags": [
          ]
        },
        "seller_address": {
          "id": 190195864,
          "comment": "",
          "address_line": "",
          "zip_code": "",
          "country": {
            "id": "AR",
            "name": "Argentina"
          },
          "state": {
            "id": "AR-C",
            "name": "Capital Federal"
          },
          "city": {
            "id": "TUxBQlBVRTQ5NjBa",
            "name": "Puerto Madero"
          },
          "latitude": -34.5967821,
          "longitude": -58.3707325
        },
        "attributes": [
          {
            "attribute_group_id": "MAIN",
            "attribute_group_name": "Atributos Principales",
            "id": "BRAND",
            "name": "Marca",
            "value_id": "9344",
            "value_name": "Apple",
            "value_struct": null
          },
          {
            "attribute_group_id": "MAIN",
            "attribute_group_name": "Atributos Principales",
            "id": "MODEL",
            "name": "Modelo",
            "value_id": "59833",
            "value_name": "6",
            "value_struct": null
          }
        ],
        "original_price": null,
        "category_id": "MLA352542",
        "official_store_id": null,
        "catalog_product_id": "MLA6055012",
        "reviews": {
          "rating_average": 4.5,
          "total": 424
        }
      }
    ]
  }

  it('Getting search: Error', (done) => {
    nock('https://api.mercadolibre.com').get('/sites/MLA/search?offset=0&limit=4&q=iphone').reply(500, {});
    
    itemsInstance.search('iphone').catch((err) => {
      expect(err.response.statusCode).to.be.equal(500);
      done()
    })
  })

  it('Getting search: Success', (done) => {
    nock('https://api.mercadolibre.com').get('/sites/MLA/search?offset=0&limit=4&q=iphone').reply(200, response);
    
    itemsInstance.search('iphone').then((data) => {
      expect(data).not.to.be.empty;
      done()
    })
  })

  it('Response format: items', (done) => {
    nock('https://api.mercadolibre.com').get('/sites/MLA/search?offset=0&limit=4&q=iphone').reply(200, response);
    
    itemsInstance.search('iphone').then((data) => {
      expect(data).to.have.property('items');
      done()
    })
  })

  it('Response format: items to be an array', (done) => {
    nock('https://api.mercadolibre.com').get('/sites/MLA/search?offset=0&limit=4&q=iphone').reply(200, response);
    
    itemsInstance.search('iphone').then((data) => {
      expect(data.items).to.be.an('array');
      done()
    })
  })
})