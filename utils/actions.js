/**
 * 🇪🇸 Supongamos que tenemos un backend donde se manejen los siguientes roles de usuario.
 * 🇺🇸 Let supose we have a backend and we have to handle this user roles.
 * 
 * Administrator,
 * Manager,
 * The coffee guy,
 * The cool guy
 */

const userRoles = {
  /**
   * 🇪🇸 En esta constante guardamos los roles de usuarios y le asignamos un número o id
   * 🇺🇸 In this constant we save the user roles and assign them a number or id
   */

  ADMINISTRATOR: 1,
  MANAGER: 2,
  THE_COFFEE_GUY: 3,
  THE_COOL_GUY: 4

  /**
   * 🇪🇸 Si estás usando TypeScript, una alternativa que puede ser más fácil de manejar sería usando enums.
   * 🇺🇸 If you're using TypeScript, an alternative that can be an easy way to handle this, would be enums.
   * 
   * emun UserRoles {
   *    ADMINISTRATOR=1,
   *    MANAGER,
   *    THE_COFFEE_GUY,
   *    THE_COOL_GUY,
   * }
   * 
   * TypeScript enums: https://www.typescriptlang.org/docs/handbook/enums.html
   */
}

/**
 * 🇪🇸 Ahora hablemos de las acciones. Las acciones serían los endpoints de algún módulo de la aplicación; no todos los endpoints obligatoriamente.
 * 
 * Supongamos que este es el backend de la capa administrativa de una tienda. Algunos módulos serían:
 * - Usuario público
 * - Producto
 * - Ventas
 * 
 * Crearemos una constante de las acciones por cada módulo.
 * 
 * 🇺🇸 Now let's talk about the actions. Actions would be the endpoints of an application module; not all endpoint obligatorily
 * 
 * Let supose that this backend is for the administration of an e-commerce. Some of the modules would be:
 * - Public user
 * - Product
 * - Sales
 * 
 * We will create a constant of the actions by each module.
 * 
 */

const publicUserActions = {
  /**
   * 🇪🇸 Acción para manejo de bloqueo usuario. Solo podrán realizarla el usuario con rol ADMINISTRATOR o MANAGER
   * 
   * 🇺🇸 Action for blocking handle of a public user. This action can be executed only for users with ADMINISTRATOR or MANAGER rol.
   */
  BLOCKING_PUBLIC_USER: [
    userRoles.ADMINISTRATOR,
    userRoles.MANAGER
  ],

  // cualquier otra acción - any other action
  ACTION2: [
    // otros roles de usuario - other user roles
  ]
  
  // ...
}

const productActions = {
  /**
   * 🇪🇸 Acción para crear producto. Básicamente la pueden ejecutar todos los usuarios según los roles del ejemplo.
   * 
   * 🇺🇸 Action for product creation. Basically this action can be executed by any user by the example user roles.
   */
  CREATE_PRODUCT: [
    userRoles.ADMINISTRATOR,
    userRoles.MANAGER,
    userRoles.THE_COFFEE_GUY,
    userRoles.THE_COOL_GUY,
  ],

  // cualquier otra acción - any other action
  ACTION2: [
    // otros roles de usuario - other user roles
  ]
  
  // ...
}

const salesActions = {
  /**
   * 🇪🇸 Acción para generar un archivo PDF de una venta. Solo podrán realizarla el usuario con rol ADMINISTRATOR
   * 
   * 🇺🇸 Action for generate a PDF file. This action can be executed only for users with ADMINISTRATOR rol.
   */
  GENERATE_PDF: [
    userRoles.ADMINISTRATOR,
  ],

  // cualquier otra acción - any other action
  ACTION2: [
    // otros roles de usuario - other user roles
  ]
  
  // ...
}

module.exports = {
  publicUserActions,
  productActions,
  salesActions
}