# Caso TechnoGym, inc.

Su cliente, TechnoGym, inc. (https://www.technogym.com/) fue fundada en 1983 por Nerio Alessandri, a la edad de 22 años. Desde esa época la empresa ha venido creciendo y adquiriendo mayor prestigio, cosechando grandes logros empresariales, como convertirse en el Official Supplier para entrenamiento atlético en las Olimpiadas de Sidney en el 2000, donde más de 2000 atletas utilizaron equipos Technogyms. En el año 2012, se lanzó mywellness (https://www.mywellness.com/), el primer cloud platform en el sector de fitness y wellness, ofreciendo la posibilidad de acceder a programas personales desde cualquier lugar y en cualquier momento, a la vez que se permite a los operadores conectarse con sus clientes utilizando web o mobile systems, dentro o fuera del gimnasio. Para ello ofrece un website donde los developers pueden registrarse para obtener acceso al mywellness cloud API o al Unity SDK (el SDK permite crear aplicaciones para los equipos de ejercicio con display, como los Treadmills, Bikes o Ellipticals).
Como parte de su estrategia de negocio, ellos desean implementar el evento Indoor Marathon, una competencia en la que pueden participar individuos o equipos, donde un porcentaje de los ingresos se destinaría a causas benéficas.
El proyecto de Indoor Marathon contempla la implementación de 6 centros de competición ubicados cada uno en una ciudad (Los Angeles, New York, Sidney, Montreal, París y Madrid). Cada Indoor Marathon Center, contará con 42 Treadmills Technogym Run (https://www.technogym.com/en- US/product/technogym-run_DGK0.html), tres pantallas gigantes en alta definición en tres lados del ambiente donde se realizará la maratón. Los participantes contarán con una aplicación disponible para Móvil Android o iOS, o wearable la cual, utilizando Bluetooth o NFC, permitirá que se autentiquen en la máquina en que decidan realizar la maratón. En caso que exista algún inconveniente y decida cambiar de Treadmill, se enlazará con el otro de los 42 equipos disponibles en el centro y continuará en la Maratón.
Cada Technogym Run cuenta con conectividad WiFi (ver especificaciones en https://www.technogym.com/en-US/product/technogym-run_DGK0.html#specifications-table), lo cual permitirá el envío de información a un Edge Gateway que contendrá una Edge Application elaborada con Unity SDK, la cual estará enlazada con las tres pantallas gigantes para la presentación del ranking local de participantes en tiempo real y gráficos analíticos de desempeño. La información de ranking de los 7 ganadores (7 mejores records) de cada Indoor Marathon Center, será enviada por la Edge Application hacia una base de datos Cloud FireStore de Google, la cual servirá de fuente de datos para el Website Oficial del concurso, elaborado con Vue y publicado en Firebase Hosting, donde se publicarán los rankings generales a nivel de todos los Marathon Centers. Adicionalmente, TechnoGym desea que el Edge Gateway centralice la información periódica (cada 20 segundos) de health check de cada uno de los 42 Treadmills (incluyendo en cada envío individual el id del equipo, timestamp, voltaje en voltios, potencia de consumo en Watts, Horse Power, temperatura en grados Centígrados, tiempo de uso acumulado desde el inicio del evento). Al cierre del evento, estos datos serán consolidados en mywellness para ser analizados posteriormente por el equipo técnico de TechnoGym. Para tal fin, cada equipo Technogym Run contará con una aplicación elaborada en Unity SDK que recolectará esa información y la enviará al Edge Gateway.
Página 2 de 6
Como beneficio adicional, los deportistas que deseen, podrán conectar su dispositivo compatible con Apple GymKit para que se sincronice los datos (https://support.apple.com/guide/watch/use-gym- equipment-with-apple-watch-apdf855bb3c0/watchos) que recolecta el Technogym Run que esté utilizando. La información de los manuales de producto de los equipos de TechnoGym se encuentran en https://support.technogym.com/product-manuals/all1.
En paralelo al equipo de desarrollo del proyecto del website de ganadores, Technogym desea encargarle el desarrollo de una aplicación dirigida al equipo técnico de investigación y desarrollo de Technogym. Para ello, un equipo se encuentra desarrollando para TechnoGym, una plataforma de backend para presentar la información de estado de los Treadmills Technogym Run. Mientras tanto, su equipo se encargará del desarrollo de la web application para analytics sobre los datos de health check de los equipos Technogym Run instalados en cada Marathon Center. Esto permitirá al equipo de investigación y desarrollo, identificar oportunidades de mejora en el diseño y proceso de fabricación de los equipos.
La evaluación tiene un empaquetado adjunto conteniendo dos archivos: db.json y routes.json, los cuales pueden ser usados por json-server (https://www.npmjs.com/package/json-server) para simular un backend con las características indicadas.
Al ejecutar json-server en el terminal, utilizando los archivos de configuración mencionados (debe ubicar los archivos en la carpeta server de su proyecto), con los comandos:

## Developer information

Student Name: Mathias Alejandro Jave Diaz (U202212721)

## Dependencies
<ul>
 <li> i18n: npm install vue-i18n@9 </li>
 <li> axios: npm install axios </li>
 <li> vue-router: npm install vue-router </li>
 <li> primevue: npm install primevue</li>
 <li> primeflex: npm install primeflex</li>
</ul>

## Run Json Server
 <ul>
  <li> install json server: npm install -g json-server@0.17.4 </li>
    <li> json server: json-server --watch db.json </li>
</ul>



### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


