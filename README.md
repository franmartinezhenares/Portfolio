# Informe Accesibilidad
* Debido a los cambios realizados el proyecto ya no se puede abrir con Parcel, ya que da problemas a la hora de mostrar el contenido de el modal dinámico.

**En los siguientes enlaces podemos comprobar el estado de la página antes de solucionar los problemas de accesibilidad y buenas prácticas y el informe final**

* [Informe inicial](/Lighthouse/Lighthouse_inicial.html)
* [Informe final](/Lighthouse/Lighthouse_final.html)
## Problemas detectados automáticamente por Lighthouse
* Hay encabezados que no siguen el orden lógico descendente
* Hay imágenes que se muestran con una relación de aspecto incorrecta
## Problemas a revisar manualmente sugeridos por Lighthouse
* La página tiene un órden lógico de navegación con tabulado (*Navegación con teclado)
* Los elementos interactivos son seleccionables con teclado (*Navegación con teclado)
* Los elementos interactivos indican su propósito y estado (Ok)
* El foco del usuario se dirige hacia el nuevo contenido (*Navegación con teclado)
* La navegación no puede quedarse atrapada en una zona. (Ok)
* Los controles tienen etiquetas asociadas (Se ha incluído un area label para el botón de cerrar ventana)
* Los controles tienen roles de ARIA (Ok)
* El órden visual sigue el órden de DOM (Ok)
* El contenido no mostrado en pantalla está oculto a tecnologías asistivas (*Navegación por teclado)
* Las etiquetas de HTML se usan para mejorar la navegación (Ok)

## Problemas detectados manualmente
* La página no es navegable sólo con teclado
* La página no está adaptada a tecnologías asistivas
* La página no es responsive
## Solución de problemas
### **Encabezados**
Se han revisado y cambiado las cabeceras para que sigan un orden lógico y la página sea usable con tecnologías asistivas.
### **Imágenes**
Todas las imágenes se han recortado con la misma proporción y se ha ajustado el tamaño en píxeles de sus respectivas etiquetas para mostrarse correctamente.
### **Navegación con teclado**
Esta ha sido la parte más complicada de adaptar, ya que la página estaba pensada para usarse con una combinación de teclado y ratón. He tratado los siguientes puntos:

---

* En un principio todo el HTML estaba contenido en la página index.html y separado en una serie de modales a los que se les añadía una clase "show" cuando eran llamados (desde el menú superior o moviendo el personaje sobre una casilla concreta del mapa). Esto provocaba que al tabular nos desplazáramos sobre enlaces que no se mostraban en pantalla pero figuraban como elementos del DOM.
    * Solución: Se ha movido el contenido de los modales a archivos HTML separados. Ahora en la página principal sólo tenemos un modal vacío y su contenido cambia dinámicamente cuando se llama al archivo correspondiente. De esta manera podemos tabular y sólo nos desplazaremos por los enlaces que se estén mostrando en ese momento en pantalla.

---

* Para acceder a la sección de "Contact" dentro de la pantalla de juego debíamos situarnos frente al buzón y hacer click sobre un DIV emergente para abrir el modal. Este DIV no era accesible desde la navegación por teclado.
    * Solución: Ahora al mostrarse el modal se le añade un tabindex para que sea accesible y un focus para que esté seleccionado. Se ha añadido un evento para poder acceder pulsando la tecla Enter además de haciendo click.

---

* Algunos modales desbordaban la pantalla y era necesario hacer scroll para verlos enteros.
    * Solución: Se han anadido tabindex a las diferentes secciones de los modales permitiendo una navegación cómoda con tabulador.

### **Tecnologías asistivas**

Una vez arreglada la navegación por teclado la página se puede navegar sin problemas con screen reader.

### **Responsive**

Para la fecha de entrega del proyecto del Portfolio no tuve tiempo de pulir que todos los elementos se mostrasen correctamente en todos los dispositivos. He añadido media-querys para que las imágenes y textos se muestren siempre de un tamaño adecuado a la resolución.