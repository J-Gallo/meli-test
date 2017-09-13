const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const itemsController = require('./controllers/ItemsController'),
  itemsService = require('./services/ItemsService'),
  apiClient = require('./clients/ApiClient');

const itemsInstance = new itemsController(new itemsService(new apiClient(2000)));

app.prepare() 
.then(() => {
  const server = express();

  server.get('/items/:id', (req, res) => {
    return app.render(req, res, '/product' , req.query)
  });

  server.get('/api/items', (req, res) => itemsInstance.search(req, res));

  server.get('/api/items/:id', (req, res) => itemsInstance.getProduct(req, res));
  
  server.get('/api/items/:id/description', (req, res) => itemsInstance.getDescription(req, res));

  server.get('/api/breadcrumb/:id', (req, res) => itemsInstance.getBreadcrumb(req, res));
  
  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`)
  })
});