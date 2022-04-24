### ¿Cómo implementarías las acciones del frontend utilizando redux?
Utilizaría redux para:
1) Hacer llamados asíncronos a las APIs y así conseguir que los componentes de 
las tablas por ejemplo no tengan ese delay generado porque el useEffect se bloquea
hasta que retorna la promesa del fetch con la data. 
Incluso pondría una loading bar o alguna animación para invitar a la espera mientras 
los datos llegan al Redux Store.
2) También lo usaría para mantener One Source Of Truth en cuando a los JWT necesarios
para autenticar a los usuarios. Generando que todos los llamados a APIs se realicen 
con el JWT del login de la sesion.

### Si quisiéramos agregar una ruta nueva a la app, ¿Cómo reestructurarías el index.js?
Trabajaría con un provider de react router para que dentro del componente
App se pueda acceder a el manejo de rutas.