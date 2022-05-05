
-- ##### Cosultas ##### 


-- #Estudiantes 
-- select id_estudiante as Id, concat(apellidos," ",nombres) as Nombre, cedula as Cedula, telefono as Telefono, direccion as Direccion from Estudiantes;

-- #Profesores
-- select id_profesor as Id, concat(apellidos," ",nombres) as Nombre, cedula as Cedula, telefono as Telefono, direccion as Direccion, titulacion Titulo, password as Password from Profesores; 

-- #Administradores
-- select id_administrador as Id, concat(apellidos," ",nombres) as Nombre, cedula as Cedula, telefono as Telefono, direccion as Direccion, password as Password from Administradores; 


-- #Cursos 
-- select id_curso as Id, grado as Grado, paralelo as Paralelo from Cursos;

-- #Materias
-- select id_materia as Id, nombre_materia as Materia from Materias;

-- #Calificaciones
select 
	id_calificacion as Id,
	concat(Estudiantes.apellidos," ",Estudiantes.nombres) as Estudiante, 
	Cursos.grado as Curso, 
	concat(Profesores.apellidos," ",Profesores.nombres) as Profesor, 
    Profesores.cedula as CedulaProfesor,
	Materias.nombre_materia as Materia,
    parcial_1 as p1,
    parcial_2 as p2,
    examen_quimestral_1 as exq1,
    promedio_quimestral_1 as pq1,
    parcial_3 as p3,
    parcial_4 as p4,
	examen_quimestral_2 as exq2, 
    promedio_quimestral_2 as pq2,
    promedio_anual as pa,
    conducta_1 as c1,
    conducta_2 as c2,
    conducta_quimestral_1 as cq1,
    conducta_3 as c3,
    conducta_4 as c4,
    conducta_quimestral_2 as cq2,
    enabled,
    fecha_creacion,
    fecha_edicion
from Calificaciones 
inner join Estudiantes on fk_id_estudiante=id_estudiante
inner join Cursos on fk_id_curso=id_curso
inner join Profesores on fk_id_profesor=id_profesor
inner join Materias on fk_id_materia=id_materia;


