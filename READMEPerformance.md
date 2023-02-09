# **Performance**

* Podemos acceder a la página desde este enlace
    * http://tomcat.z109.alumnes-esliceu.tk/

## Acciones:

* [Performance inicial](/Lighthouse/Performance_inicial.html)

> Se ha cambiado el formato de las imágenes de PNG a WebP.

> Se le ha añadido el atributo "loading=lazy" para no bloquear la página con la carga de las imágenes.

> Se ha configurado el servidor Apache para cachear los elementos de la página.

> Se ha activado el mod deflate en el servidor para habilitar la compresión gzip.

* [Performance final](/Lighthouse/Performance_final.html)

> Sigue habiendo un par de "falsos positivos" como Javascript sin uso o no minificado. De esto debía encargarse el build de Parcel.