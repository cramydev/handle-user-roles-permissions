const checkPermission = (allowedActionsBy) => {
  /**
   * 🇪🇸 "allowedActionsBy" es el arreglo de la acción enviada por parámetro.
   * 🇺🇸 "allowedActionsBy" is the array of the action sent for parameters.
   */

  return function (req, res, next) {
    /**
     * 🇪🇸 Validamos que el rol del usuario "logueado" este dentro de "allowedActionsBy"
     * 
     * "req.user.role" es un valor (id del rol) tomado del token decodificado. Antes de ejecutar este middleware
     * debe existir otro middleware que realice este proceso.
     * 
     * 🇺🇸 Here we validate that the logged user role is inside of "allowedActionsBy"
     * 
     * "req.user.role" is a value (role id) took from a decoded token. Before this middleware execution, it must
     * exist another middleware that does this process.
     */
    let role = allowedActionsBy.find(item => item == req.user.role)


     if (role === req.user.role) {
      /**
       * 🇪🇸 Si "role" es igual a "req.user.role", entonces tiene permiso.
       * 🇺🇸 If "role" is equal to "req.user.role", then this user is allowed to do this action.  
       */ 

      next()
    } else {
      return res.status(406).json({
        message: 'No tienes permiso para realizar esta acción / Not allowed to do this action.'
      })
    }
  }
}