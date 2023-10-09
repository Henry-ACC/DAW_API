//Establecemos los arreglos correspondientes y sus datos a usar posteriormente

//++++++ ARREGLO DE CARRERAS ++++++//
const carreras = [
    {
        id:1, 
        nombre:'Ingenieria',
        ciclos:4
    },
    {
        id:2, 
        nombre:'Tecnico',
        ciclos:10
    }  

];

const materiasTecnico =[
    {
        id:1,
        nombre:'Algebra Vectorial',
        codigo:'ALG',
        UV:4,
        carrera_id:2
    },
    {
        id:2,
        nombre:'Antropologia Filosofica',
        codigo:'ANF',
        UV:3,
        carrera_id:2
    },
    {
        id:3,
        nombre:'Lenguaje de Marcado y Estilo web',
        codigo:'LME',
        UV:4,
        carrera_id:2
    },
    {
        id:4,
        nombre:'Programacion de Algoritmos',
        codigo:'PAL',
        UV:4,
        carrera_id:2
    },
    {
        id:5,
        nombre:'Redes de Comunicacion',
        codigo:'REC',
        UV:4,
        carrera_id:2
    },
    {
        id:6,
        nombre:'Desarrollo de Aplicaciones web',
        codigo:'DAW',
        UV:4,
        carrera_id:2
    },
    {
        id:7,
        nombre:'Programacion Orientada a objetos',
        codigo:'POO',
        UV:4,
        carrera_id:2
    },
    {
        id:8,
        nombre:'Desarrollo para Moviles',
        codigo:'DSM',
        UV:4,
        carrera_id:2
    },
    {
        id:9,
        nombre:'Seguridad en Redes',
        codigo:'SDR',
        UV:4,
        carrera_id:2
    },
    {
        id:10,
        nombre:'Servidores de plataformas',
        codigo:'SPP',
        UV:4,
        carrera_id:2
    }
];

const materiasIngenieria = [
    { 
        id:1, 
        nombre: 'Algebra Vectorial', 
        codigo: 'ALG', 
        UV: 4, 
        carrera_id: 1 
    },
    { 
        id:2, 
        nombre: 'Antropologia Filosofica', 
        codigo: 'ANF', 
        UV: 3, 
        carrera_id: 1 
    },
    { 
        id:3, 
        nombre: 'Pensamiento Social Cristiano', 
        codigo: 'PSC', 
        UV: 3, 
        carrera_id: 1 
    },
    { 
        id:4, 
        nombre: 'Calculo Diferencial', 
        codigo: 'CAD', 
        UV: 4, 
        carrera_id: 1 
    },
    { 
        id:5, 
        nombre: 'Ecuaciones Diferenciales', 
        codigo: 'EDI', 
        UV: 4, 
        carrera_id: 1 
    },
    { 
        id:6, 
        nombre: 'Aplicaciones de Metodos', 
        codigo: 'APN', 
        UV: 4, 
        carrera_id: 1 
    },
    { 
        id:7, 
        nombre: 'Arquitectura de Computadoras', 
        codigo: 'ACO', 
        UV: 4, 
        carrera_id: 1 
    },
    { 
        id:8, 
        nombre: 'Gestion Ambiental', 
        codigo: 'GEA', 
        UV: 4, 
        carrera_id: 1 
    },
    { 
        id:9, 
        nombre: 'Programacion Estructurada', 
        codigo: 'PRE', 
        UV: 4, 
        carrera_id: 1 
    },
    { 
        id:10, 
        nombre: 'Quimica General', 
        codigo: 'QUG', 
        UV: 4, 
        carrera_id: 1 
    }
];

//++++++ ARREGLO DE PREREQUISITOS ++++++//
const prerequisitos = [

//++++++++++ MATERIAS PARA LOS TECNICOS ++++++++++//
    {
        materia_codigo: 'ALG',
        prerequisito_codigo: ''
    },
    {
        materia_codigo: 'ANF',
        prerequisito_codigo: ''
    },
    {
        materia_codigo: 'POO',
        prerequisito_codigo: 'PAL'
    },
    {
        materia_codigo: 'REC',
        prerequisito_codigo: ''
    },
    {
        materia_codigo: 'PAL',
        prerequisito_codigo: ''
    },
    {
        materia_codigo: 'SDR',
        prerequisito_codigo: 'REC'
    },
    {
        materia_codigo: 'SPP',
        prerequisito_codigo: 'REC'
    },
    {
        materia_codigo: 'DAW',
        prerequisito_codigo: 'LME'
    },
    {
        materia_codigo: 'DSM',
        prerequisito_codigo: 'DAW'
    },
    {
        materia_codigo: 'LME',
        prerequisito_codigo: ''
    },


    //++++++++++ MATERIAS PARA INGENIERIA ++++++++++//

    {
        materia_codigo: 'ALG',
        prerequisito_codigo: ''
    },
    {
        materia_codigo: 'ANF',
        prerequisito_codigo: ''
    },
    {
        materia_codigo: 'PSC',
        prerequisito_codigo: ''
    },
    {
        materia_codigo: 'CAD',
        prerequisito_codigo: 'MAT2'
    },
    {
        materia_codigo: 'EDI',
        prerequisito_codigo: 'MAT2'
    },
    {
        materia_codigo: 'APN',
        prerequisito_codigo: 'MAT2'
    },
    {
        materia_codigo: 'ACO',
        prerequisito_codigo: 'MAT2'
    },
    {
        materia_codigo: 'GEA',
        prerequisito_codigo: 'MAT2'
    },
    {
        materia_codigo: 'PRE',
        prerequisito_codigo: 'MAT2'
    },
    {
        materia_codigo: 'QUG',
        prerequisito_codigo: 'MAT2'
    },
];

module.exports = {
    carreras,
    materiasTecnico,
    materiasIngenieria,
    prerequisitos,
  };