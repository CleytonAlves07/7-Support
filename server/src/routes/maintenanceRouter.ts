import { Router } from 'express';
import expressAsyncWrap from 'express-async-wrap'
import { registerMaintenanceController } from '../controllers/register/registerMaintenanceController';
import { findAllMaintenanceController } from '../controllers/find/findAllMaintenanceController';
import { findByIdMaintenanceController } from '../controllers/find/findByIdMaintenanceController';
import { putUpdateMaintenanceController } from '../controllers/update/putUpdateMaintenanceController';
import { patchUpdateMaintenanceController } from '../controllers/update/patchUpdateMaintenanceController';
import { deleteMaintenanceController } from '../controllers/delete/deleteMaintenanceController';
import { findMaintenanceByNameController } from '../controllers/find/findMaintenanceByNameController';


const maintenanceRouter = Router()

maintenanceRouter.post('/admin/register/maintenance', expressAsyncWrap(registerMaintenanceController))

maintenanceRouter.get('/maintenances', expressAsyncWrap(findAllMaintenanceController));

maintenanceRouter.get('/admin/search/maintenance', expressAsyncWrap(findMaintenanceByNameController));

maintenanceRouter.get('/maintenance/:id', expressAsyncWrap(findByIdMaintenanceController));

maintenanceRouter.put('/admin/maintenance/update/:id', expressAsyncWrap(putUpdateMaintenanceController));

maintenanceRouter.patch('/maintenance/:id', expressAsyncWrap(patchUpdateMaintenanceController));

maintenanceRouter.delete('/admin/maintenance/delete/:id', expressAsyncWrap(deleteMaintenanceController));

export { maintenanceRouter }