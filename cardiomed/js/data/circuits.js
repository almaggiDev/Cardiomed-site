// js/data/circuits.js
const CIRCUITOS = [
  {
    id: 'basico',
    name: 'Circuito Básico',
    sub: 'Prequirúrgicos y control preventivo',
    time: '45 min',
    best: false,
    items: [
      'Electrocardiograma 12 derivaciones',
      'Consulta cardiológica completa',
      'Análisis de factores de riesgo',
    ],
  },
  {
    id: 'integral',
    name: 'Circuito Integral',
    sub: 'Diagnóstico cardiovascular completo',
    time: '< 2 h',
    best: true,
    items: [
      'Eco Doppler color cardíaco',
      'Ergometría computarizada',
      'Estudio de Edad Arterial',
      'Análisis de factores de riesgo',
    ],
  },
  {
    id: 'deportivo',
    name: 'Circuito Deportivo',
    sub: 'Runners, ciclistas y deportistas',
    time: '90 min',
    best: false,
    items: [
      'Ergometría computarizada',
      'Bioimpedancia corporal',
      'Evaluación aptitud física',
      'Cálculo de Edad Arterial',
    ],
  },
];

const NOVEDADES = [
  {
    tag: 'Nueva especialidad',
    title: 'Dermatología',
    desc: 'Diagnóstico y tratamiento dermatológico integral. Biopsias, procedimientos y seguimiento clínico.',
    who: 'Dra. Paula Castro',
    init: 'PC',
  },
  {
    tag: 'Nuevo servicio',
    title: 'Medicina Regenerativa',
    desc: 'Proloterapia, plasma rico en plaquetas y células madre para el tratamiento del dolor crónico.',
    who: 'Dra. Noelia Grana',
    init: 'NG',
  },
  {
    tag: 'Nuevo servicio',
    title: 'Evaluación Cognitiva',
    desc: 'Evaluación neuropsicológica para diagnóstico de trastornos del aprendizaje, atención y memoria.',
    who: 'Lic. Yanina Alberti',
    init: 'YA',
  },
];
