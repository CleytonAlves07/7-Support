import { Router } from 'express';
import expressAsyncWrap from 'express-async-wrap'
import { findAllProductsController } from '../controllers/find/findAllProductsController';
import { registerProductController } from '../controllers/register/registerProductController';
import { findByIdProductController } from '../controllers/find/findByIdProductController';
import { putUpdateProductController } from '../controllers/update/putUpdateProductController';
import { patchUpdateProductController } from '../controllers/update/patchUpdateProductController';
import { deleteProductController } from '../controllers/delete/deleteProductController';
import { findProductsByNameController } from '../controllers/find/findProductsByNameController';


const productRouter = Router()

productRouter.post('/admin/register/product', expressAsyncWrap(registerProductController))

productRouter.get('products', expressAsyncWrap(findAllProductsController));

productRouter.get('/admin/search/product', expressAsyncWrap(findProductsByNameController));

productRouter.get('/product/:id', expressAsyncWrap(findByIdProductController));

productRouter.put('/product/:id', expressAsyncWrap(putUpdateProductController));

productRouter.patch('/product/:id', expressAsyncWrap(patchUpdateProductController));

productRouter.delete('/product/:id', expressAsyncWrap(deleteProductController));

export { productRouter }