import { Router } from "express";

import ControllerProduct from './controllers/ControllerProduct';
import ControllerCategoy from './controllers/ControllerCategory';
import ControllerProductCategory from './controllers/ControlerProductCategory';

const routes = Router();

routes.get('/products', ControllerProduct.index);
routes.post('/products', ControllerProduct.create);
routes.get('/categories', ControllerCategoy.index);
routes.post('/categories', ControllerCategoy.create);
routes.get('/productscategories', ControllerProductCategory.index);
routes.post('/productscategories', ControllerProductCategory.create);

export { routes };

