import { Router } from 'express';
import expressAsyncWrap from 'express-async-wrap'
import { registerMaintenanceController } from '../controllers/register/registerMaintenanceController';
import { findAllMaintenanceController } from '../controllers/find/findAllMaintenanceController';
import { findByIdMaintenanceController } from '../controllers/find/findByIdMaintenanceController';
import { putUpdateMaintenanceController } from '../controllers/update/putUpdateMaintenanceController';
import { patchUpdateMaintenanceController } from '../controllers/update/patchUpdateMaintenanceController';
import { deleteMaintenanceController } from '../controllers/delete/deleteMaintenanceController';


const maintenanceRouter = Router()

maintenanceRouter.post('/maintenance', expressAsyncWrap(registerMaintenanceController))

maintenanceRouter.get('/maintenances', expressAsyncWrap(findAllMaintenanceController));

maintenanceRouter.get('/maintenance/:id', expressAsyncWrap(findByIdMaintenanceController));

maintenanceRouter.put('/maintenance/:id', expressAsyncWrap(putUpdateMaintenanceController));

maintenanceRouter.patch('/maintenance/:id', expressAsyncWrap(patchUpdateMaintenanceController));

maintenanceRouter.delete('/maintenance/:id', expressAsyncWrap(deleteMaintenanceController));

export { maintenanceRouter }