# ¿Cómo implementarías las acciones del frontend utilizando redux?
### Utilicé redux para:
1) Mantener una única fuente de veracidad (One Source Of Truth) en cuando a los JWT necesarios
para autenticar a los usuarios y llamar a las APIs a los que estos tiene acceso. 
Generando que todos los llamados a APIs se realicen con el JWT del login de la sesion y evitando que expiren.
2) Guardar dicho token en el store para que a la hora del login se realice un renderizado ternario que sólo
te dé acceso al dashboard con los datos del cliente si la app reconoce que dentro del store hay un JWT.
### Lo utilizaría para:
3) Hacer llamados asíncronos a las APIs y así conseguir que los componentes de las tablas 
no tengan ese delay generado porque el useEffect se bloquea hasta que se cumple la promesa del fetch 
y retorna con la data del bot. 
4) Incluso, aprovecharía el cambio de estado y pondría una loading bar o alguna animación que mejore la UX
para invitar a la espera mientras los datos llegan al Redux Store. Dándole más feedback al operario.
5) Cuando se seleccione un bot/cliente en la sidebar, haga la fetch dependiendo del id del cliente seleccionado.
Trayendo datos de más endpoints, en un contexto de uso real.

# Si quisiéramos agregar una ruta nueva a la app, ¿Cómo reestructurarías el index.js?
### Reestructuré el index.js:
Al momento de crear la pantalla del login con renderizado condicional en base al JWT, tuve que primero
wrappear al index.js con el provider de react-router. 
De la misma manera que tuve que hacerlo con el de Redux y Material UI.
