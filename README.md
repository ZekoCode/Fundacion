# This is documentation for this project

Atomic designe => web components
    components
        atoms       // Small components example: titles, buttons, textbox, links
        molecules   // Group of two atoms or more
        organisms   // Group of two molecules or more with or outwith atoms
        templates   // Group of two organisms or more 
        pages       // Is a template with data from api rest
    context 
        adminContext
        profesorContext
    index.js
    app.jsx

BEM => css
    container__chield--elemente

redux or apiContex?

# Reglas
1) Los identificadores de los componentes tiene que ser en "UpperCamelCase". Example: MyComponent
2) Los identificadores de las constantes seran en "camelCase" con un guion bajo al inicio. Example: _thisIsMyCosnt
3) Los identificadores de las funciones seran con "camelCase". Example: checkOutSession()
4) Solo hacer componentes reutilizables siempre y cuando este se repita mas de tres veces
5) Solo se puede desarrollar a patir de la rama development
6) Las ramas creadas a partir de la rama development tienen que tener el nombre de la funcionalidad a implementar
7) Cuando se trabaje en una implementacion procurar no editar o eliminar codigo anterior de otros components a menos que sea necesario hacer una refactorizacion
8) la extencion de los archivos de componentes sera .jsx y la extancion de la funciones normales sera .js
9) Queda prohibido hacer push a otra rama que no sea la rama development

# Lista de comando con git y github
git restore . // Para descartar todo los cambios del staging area
git pull [nombre de la rama]   //Para traer los cambios actuales de una rama remota
git clone // Para clonar repositorio remoto
git fetch origin // Para sincronizar el repositorio remoto con el repositorio local y traer datos que no tengamos

git branch // Para ver la lista de ramas 
git branch -r // Para ver la lista de ramas remotas 
git branch [nombre de la rama] // Para crear una nueva rama a partir de la rama actual
git checkout [nombre de la rama] // Para moverse a una rama existente ya sea una rama local o remota
git checkout -b [nombre de la rama]  // Crea una nueva rama a partir de la rama actual y se traslada a esa nueva rama

git push origin [nombre de la rama a pushear]