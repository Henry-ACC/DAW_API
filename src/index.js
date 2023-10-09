const express = require('express');
const bodyParser = require('body-parser');
const { carreras, materiasTecnico, materiasIngenieria, prerequisitos } = require('./materiasData');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());

// Rutas de la API
//Llamamos la ruta inicial para mostrar HTML
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/HTML/index.html');
});

//Metodos GET para mostrar datos en formato JSON
app.get('/carreras', (req, res) => {
  res.json(carreras);
});

app.get('/materiasTecnico', (req, res) => {
  res.json(materiasTecnico);
});

app.get('/materiasIngenieria', (req, res) => {
  res.json(materiasIngenieria);
});

//Metodos GET y POST para cumplir cierta validacion e ingresar materias
//Muestra los requisitos de cierta materia con el codigo de materia
app.get('/prerequisitos/:codigoMateria', (req, res) => {
  const codigoMateria = req.params.codigoMateria;
  const prerequisitosMateria = prerequisitos.filter(prerequisito => prerequisito.materia_codigo === codigoMateria);

  if (prerequisitosMateria.length === 0) {
    res.status(404).json({ mensaje: 'No se encontraron prerrequisitos para esta materia.' });
  } else {
    res.json(prerequisitosMateria);
  }
});

//Muestra las materias del ciclo dependiendo la carrera y el ciclo que quiere verificar
app.get('/materiasCiclo/:carrera/:ciclo', (req, res) => {
  const carrera = req.params.carrera;
  const ciclo = parseInt(req.params.ciclo);
  let materiasCiclo = [];

  // Filtra las materias según la carrera y el ciclo asignados por los parametros del GET
  if (carrera === 'tecnico') {
      materiasPorCiclo = obtenerMateriasCiclo(materiasTecnico, ciclo, 2); // 2 ciclos por año
  } else if (carrera === 'ingenieria') {
      materiasPorCiclo = obtenerMateriasCiclo(materiasIngenieria, ciclo, 2); // 2 ciclos por año
  } else {
      return res.status(404).json({ mensaje: 'Carrera no válida.' });
  }
  res.json(materiasPorCiclo);
});

// Función para obtener las materias por ciclo
function obtenerMateriasCiclo(materias, ciclo, ciclosPorAnio) {
  const materiasPorCiclo = [];
  const materiasPorAnio = Math.ceil(materias.length / ciclosPorAnio);

  if (ciclo < 1 || ciclo > ciclosPorAnio) {
      return materiasPorCiclo;
  }

  for (let i = (ciclo - 1) * materiasPorAnio; i < ciclo * materiasPorAnio && i < materias.length; i++) {
      materiasPorCiclo.push(materias[i]);
  }

  return materiasPorCiclo;
}

//++++++ INSCRIPCION DE MATERIA ++++++//
//Llamamos la ruta inscribir para mostrar HTML incribir materia
app.get('/inscripcion', (req, res)=>{
  res.sendFile(__dirname + '/HTML/inscripcion.html');
});

app.post('/inscribir', (req, res) => {
  const materia = {
      id: req.body.id,
      nombre: req.body.nombre,
      codigo: req.body.codigo,
      UV: req.body.UV
  };

  const materiasInscritas = []; 
  const UVTotal = materiasInscritas.reduce((total, materia) => total + materia.UV, 0);

  const limiteUV = 16;

  if (UVTotal + materia.UV > limiteUV) {
      return res.status(400).json({ mensaje: 'No te alcanzan las unidades valorativas.' });
  }

  materiasInscritas.push(materia);

  res.json({ mensaje: 'Materia inscrita exitosamente.' });
});

// Iniciar el servidor

app.listen(PORT, () => {

  console.log(`Servidor corriendo en el puerto ${PORT}`);

});