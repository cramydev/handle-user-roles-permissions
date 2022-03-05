/**
 * 🇪🇸 Aplicando el middleware para validar permisos de usuario
 * 🇺🇸 Applying the middleware for user permissions validation
 */

const checkPermission = require('../middleware/check-permission')
const {
  publicUserActions,
  productActions,
  salesActions
} = require('../utils/actions')

/**
 * 🇪🇸 Supongamos que este es el middleware para el token
 * 🇺🇸 Let supose this is the token middleware
 */
let checkToken;

// controladores fake - fake controllers
let createProduct;
let blockingPublicUser;
let generatePDF;

/**
 * "route", in here, thecnically doesn't exists as a variable or something
 */

// ⚠️ "route", in here, thecnically doesn't exists as a variable or something

// product module
route.post('/create-product', checkToken, checkPermission(productActions.CREATE_PRODUCT), createProduct)

// public user module
route.patch('/blocking-public-user', checkToken, checkPermission(publicUserActions.BLOCKING_PUBLIC_USER), blockingPublicUser)

// sales module
route.get('/generate-pdf/:salesId', checkToken, checkPermission(salesActions.GENERATE_PDF), generatePDF)