*----- 🇪🇸 ESPAÑOL -----*

Esto es un ejemplo o forma de como realizar el manejo de validación de permisos según un rol de usuario de forma estática. Al ser estático se hace referencia a que los permisos no pueden modificarse fuera del código, por tanto es algo que antes de implementarlo debe hablar y confirmar al 💯, o al menos intentar hacerlo 😅.

Esto está enfocado para aplicarlo en el lado del servidor, principlamente haciendo uso del framework ExpressJS, pero la idea creo que igual puede aplicarse para otros frameworks.

[Archivos]
  - /utils/actions.js
    En este archivo se colocan las diversas acciones que puede tener el backend de una aplicación, junto con algunos roles para usar como ejemplo.
  - /middleware/check-permission.js
    Este archivo sería un middleware; realmente es una función que retorna un middleware. Este middleware se usará para validar el permiso del usuario que intente ejecutar X endpoint.
  - /route/index.js
    En este archivo se muestra un ejemplo de implementación del middleware.

[Notas]
  - No colocaré la parte del package.json ni la instalación de las dependencias porque no es en lo que quiero enfocarme. Este ejemplo quizás sea más algo teórico que práctico.
  - Estoy casi seguro que existe una forma más optima de hacerlo, sin embargo se me ocurrió esta (primera vez que me toca realizar este tipo de validación) y quise compartirla. Si consigo una mejor forma de hacerlo o realizo algún ajuste, lo estaré compartiendo igualmente.

Espero que sea de ayuda 👍😁.

*----- 🇺🇸 ENGLISH -----*

This is an example or a way to handle the validations for user roles permissions in a static way. By been static I mean that this permissions can't change outside the code so, because of this, it is important to talk and confirm the permissions by user role at 💯 before the implementation. Or at least try to do it 😅.

This is focused to applying on the server side, mainly using the ExpressJS framework, but I think the idea can work for other frameworks. 

[Files]
  - /utils/actions.js
    In this file are the diverse actions that can have an application backend, with some user roles for using them as example.
  - /middleware/check-permission.js
    This file would be like a middleware, well, actually is a function that returns a middleware. This middleware is used for validate the user role and the permission in X endpoint.
  - /route/index.js
    In this file we'll see an example of the middleware implementation. 

[Notes]
  - I won't include the part of the package.json or the dependencies installations because is not what I want to focuse in. Maybe this example is something more theorical than practical.
  - I'm almost sure that there is better way to handle this, but I had to do this activity in a project (first time in doing something like this) and I wanted to share it. If I find a better way to do this or I do any modification, I'll be sharing it.

Hope you find it helpful 👍😁.