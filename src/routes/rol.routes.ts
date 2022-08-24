import { Router } from 'express'
import passport from 'passport'

import Login from '../controllers/auth/login.controller'
import logOut from '../controllers/auth/logout.controller'
import recoveryPassword from '../controllers/auth/recoveryPassword.controller'
import validatorHandler from '../middlewares/validator.handler';
import { createRoleSchema, updateRoleSchema, getRoleSchema} from '../schemas/role.schema';
import changePassword from '../controllers/auth/changePassword.controller';
import refreshToken from '../controllers/auth/refreshToken.controller'


const router = Router()





//Ruta para crear rol
router.post('/', validatorHandler(createRoleSchema, 'body'), recoveryPassword )


//Ruta para listar los roles
router.get('/' , changePassword)


//Ruta para ver el detalle de un  rol
router.get('/:id',validatorHandler(getRoleSchema, 'params') , refreshToken )

//Ruta para actualizar un rol
router.put('/:id', validatorHandler(updateRoleSchema, 'body'), validatorHandler(getRoleSchema, 'params'), recoveryPassword )

//Ruta para eliminar rol
router.delete('/:id', validatorHandler(getRoleSchema, 'body'), recoveryPassword )

export default router

