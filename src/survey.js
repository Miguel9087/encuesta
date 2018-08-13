const config  =
{
 locale: undefined,
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "radiogroup",
     name: "Inv",
     title: "Investigador",
     isRequired: true,
     choices: [
      {
       value: "1",
       text:{
         es: "Investigador 1",
         en: "Investigator 1"
        }
      },
      {
       value: "2",
       text: "Investigador 2"
      },
      {
       value: "3",
       text: "Investigador 3"
      },
      {
       value: "4",
       text: "Investigador 4"
      },
      {
       value: "5",
       text: "Investigador 5"
      },
      {
       value: "6",
       text: "Investigador 6"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question1",
     choices: [
      {
       value: "item1",
       text: {
        es: "test",
        en: "testing"
       }
      },
      "item2",
      "item3"
     ]
    }
   ]
  },
  {
   name: "page2",
   elements: [
    {
     type: "radiogroup",
     name: "PunPar",
     title: "Punto de levantamiento",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: {
         es:"Punto de levantamiento 1",
         en:"Point get up 2"
       }
      },
      {
       value: "2",
       text: {
         es:"Punto de levantamiento 2",
         en:"Point get up 2"
       }
      },
      {
       value: "3",
       text: {
         es:"Punto de levantamiento 3",
         en:"Point get up 3"
       }
      },
      {
       value: "4",
       text: {
         es:"Punto de levantamiento 4",
         en:"Point get up 4"
       }
      },
      {
       value: "5",
       text: {
         es:"Punto de levantamiento 5",
         en:"Point get up 5"
       }
      },
      {
       value: "6",
       text: {
         es:"Punto de levantamiento 6",
         en:"Point get up 6"
       }
      },
      {
       value: "7",
       text: "Punto de levantamiento 7"
      }
     ]
    }
   ]
  },
  {
   name: "page3",
   elements: [
    {
     type: "html",
     name: "Bienvenido",
     html: "Buenos días, mi nombre es {Inv} y pertenezco a Inbox Market Research una empresa que está realizando esta encuesta como parte de un proyecto de investigación para conocer información de consumo. Le pedimos pueda apoyarnos con su opinión, comentandole de antemano que toda la información que nos dé es confidencial.\tAntes de iniciar la encuesta principal, le haré un par de preguntas para asegurar que tenga el perfil adecuado para participar. Si es seleccionado, se le pedirá que complete la encuesta (llevará aproximadamente 20 minutos).\n"
    }
   ]
  },
  {
   name: "page4",
   elements: [
    {
     type: "radiogroup",
     name: "PA1",
     title: "Por favor selecciones su genero",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: {
        es: "Masculino",
        en: "Male",
        "{Idioma}": "Masculino"
       }
      },
      {
       value: "2",
       text: {
        es: "Femenino",
        en: "Famela",
        "{Idioma}": "Femanino"
       }
      }
     ]
    }
   ]
  },
  {
   name: "page5",
   elements: [
    {
     type: "radiogroup",
     name: "PA2",
     title: "Por favor indique en que intervalo se encuentra su edad:",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Menos o igual a 17 años"
      },
      {
       value: "2",
       text: "Entre 18 y 24 años"
      },
      {
       value: "3",
       text: "Entre 25 y 30 años"
      },
      {
       value: "4",
       text: "Entre 31 y 35 años"
      },
      {
       value: "5",
       text: "Entre 36 y 40 años"
      },
      {
       value: "6",
       text: "Entre 41 y 45 años"
      },
      {
       value: "7",
       text: "Entre 46 y 55 años"
      },
      {
       value: "8",
       text: "Entre 56 y 65 años"
      },
      {
       value: "9",
       text: "66 años o más"
      }
     ]
    }
   ]
  },
  {
   name: "page6",
   elements: [
    {
     type: "radiogroup",
     name: "PA3",
     title: "¿tiene usted hijos?",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Sí"
      },
      {
       value: "2",
       text: "No"
      }
     ]
    }
   ]
  },
  {
   name: "page7",
   elements: [
    {
     type: "radiogroup",
     name: "PA4",
     title: "Dígame por favor ¿cuantos hijos tiene de entre 4 y 14 años?",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Ninguno"
      },
      {
       value: "01",
       text: "1"
      },
      {
       value: "02",
       text: "2"
      },
      {
       value: "03",
       text: "3"
      },
      {
       value: "04",
       text: "4"
      },
      {
       value: "5",
       text: "5 o más"
      }
     ]
    }
   ]
  },
  {
   name: "page8",
   elements: [
    {
     type: "radiogroup",
     name: "PA5_1",
     visibleIf: "{PA4} >= \"01\"",
     title: "Dígame por favor ¿Dentro de qué rango de edades se encuentra cada uno de sus hijos?Registrar la edad de cada uno de los hijos del más pequeño al mayor. \nHijo 1",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Entre 4 y 6 años."
      },
      {
       value: "2",
       text: "Entre 6 y 8 años."
      },
      {
       value: "3",
       text: "Entre 8 y 10 años"
      },
      {
       value: "4",
       text: "Entre 10 y 12 años."
      },
      {
       value: "5",
       text: "Entre 12 y 14 años."
      }
     ]
    },
    {
     type: "radiogroup",
     name: "PA5_2",
     visibleIf: "{PA4} >= \"02\"",
     title: "Hijo 2",
     choices: [
      {
       value: "1",
       text: "Entre 4 y 6 años."
      },
      {
       value: "2",
       text: "Entre 6 y 8 años."
      },
      {
       value: "3",
       text: "Entre 8 y 10 años."
      },
      {
       value: "4",
       text: "Entre 10 y 12 años."
      },
      {
       value: "5",
       text: "Entre 12 y 14 años."
      }
     ]
    },
    {
     type: "radiogroup",
     name: "PA5_3",
     visibleIf: "{PA4} >= \"03\"",
     title: "Hijo 3",
     choices: [
      {
       value: "1",
       text: "Entre 4 y 6 años."
      },
      {
       value: "2",
       text: "Entre 6 y 8 años."
      },
      {
       value: "3",
       text: "Entre 8 y 10 años."
      },
      {
       value: "5",
       text: "Entre 10 y 12 años."
      },
      {
       value: "4",
       text: "Entre 12 y 14 años."
      }
     ]
    },
    {
     type: "radiogroup",
     name: "PA5_4",
     visibleIf: "{PA4} >= \"04\"",
     title: "Hijo 4",
     choices: [
      {
       value: "1",
       text: "Entre 4 y 6 años."
      },
      {
       value: "2",
       text: "Entre 6 y 8 años."
      },
      {
       value: "3",
       text: "Entre 8 y 10 años."
      },
      {
       value: "5",
       text: "Entre 12 y 14 años."
      }
     ]
    },
    {
     type: "radiogroup",
     name: "PA5_5",
     visibleIf: "{PA4} >= \"5\"",
     title: "Hijo 5",
     choices: [
      {
       value: "1",
       text: "Entre 4 y 6 años."
      },
      {
       value: "2",
       text: "Entre 6 y 8 años."
      },
      {
       value: "3",
       text: "Entre 8 y 10 años."
      },
      {
       value: "4",
       text: "Entre 10 y 12 años."
      },
      {
       value: "5",
       text: "Entre 12 y 14 años."
      }
     ]
    }
   ]
  },
  {
   name: "page9",
   elements: [
    {
     type: "radiogroup",
     name: "PA6",
     title: "Dígame por favor, ¿cual es su estado civil?",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Soltero"
      },
      {
       value: "2",
       text: "Casado"
      },
      {
       value: "3",
       text: "Otro"
      }
     ]
    }
   ]
  },
  {
   name: "page10",
   elements: [
    {
     type: "radiogroup",
     name: "A1",
     title: "Ahora le haré algunas preguntas que servirán solo para clasificación:\n ¿Cuál es el total de cuartos, piezas o habitaciones con que cuenta su hogar? Por favor no incluya baños, medios baños, pasillos, patios y zotehuelas.",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "1"
      },
      {
       value: "00",
       text: "2"
      },
      {
       value: "000",
       text: "3"
      },
      {
       value: "0000",
       text: "4"
      },
      {
       value: "8",
       text: "5"
      },
      {
       value: "08",
       text: "6"
      },
      {
       value: "14",
       text: "7"
      }
     ]
    }
   ]
  },
  {
   name: "page11",
   elements: [
    {
     type: "radiogroup",
     name: "A2",
     title: "¿Cuántos baños completos con regadera y W.C. (excusado) hay para uso exclusivo de los integrantes de su hogar? ",
     isRequired: true,
     choices: [
      "0",
      {
       value: "16",
       text: "1"
      },
      {
       value: "32",
       text: "2"
      },
      {
       value: "032",
       text: "3"
      },
      {
       value: "56",
       text: "4 o más"
      }
     ]
    }
   ]
  },
  {
   name: "page12",
   elements: [
    {
     type: "radiogroup",
     name: "A3",
     title: "¿En su hogar cuenta con regadera funcionando en alguno de los baños? ",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Sí"
      },
      {
       value: "10",
       text: "No"
      }
     ]
    }
   ]
  },
  {
   name: "page13",
   elements: [
    {
     type: "radiogroup",
     name: "A4",
     title: "Contando todos los focos que utiliza para iluminar su hogar, incluyendo los de techos, paredes y lámparas de buró o piso, dígame ¿cuántos focos tiene su vivienda? ",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "De entre 0 a 5 focos"
      },
      {
       value: "15",
       text: "De entre 6 a 10 focos "
      },
      {
       value: "27",
       text: "De entre 10 a 15 años"
      },
      {
       value: "32",
       text: "De entre 16 a 20 focos"
      },
      {
       value: "46",
       text: "De entre 21 o más focos"
      }
     ]
    }
   ]
  },
  {
   name: "page14",
   elements: [
    {
     type: "radiogroup",
     name: "A5",
     title: "¿El piso de su hogar es predominantemente de tierra, o de cemento, o \t\t\tde algún otro tipo de acabado?",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Tierra o cemento"
      },
      {
       value: "11",
       text: "Otro tipo de material o acabado"
      }
     ]
    }
   ]
  },
  {
   name: "page15",
   elements: [
    {
     type: "radiogroup",
     name: "A6",
     title: "¿Cuántos automóviles propios, excluyendo taxis, tienen en su hogar? \u2028",
     isRequired: true,
     choices: [
      "0",
      {
       value: "32",
       text: "1"
      },
      {
       value: "42",
       text: "2"
      },
      {
       value: "58",
       text: "3 o más"
      }
     ]
    }
   ]
  },
  {
   name: "page16",
   elements: [
    {
     type: "radiogroup",
     name: "A7",
     title: "¿En este hogar cuentan con estufa de gas o eléctrica? ",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "Sí tiene"
      },
      {
       value: "20",
       text: "No tiene"
      }
     ]
    }
   ]
  },
  {
   name: "page17",
   elements: [
    {
     type: "radiogroup",
     name: "A8",
     title: "Pensando en la persona que aporta la mayor parte del ingreso en este hogar, \t¿cuál fue el último año de estudios que completó?(espere respuesta, y pregunte) ¿Realizó otros estudios? (reclasificar en caso necesario).",
     isRequired: true,
     choices: [
      {
       value: "0",
       text: "No estudió"
      },
      {
       value: "00",
       text: "Primaria incompleta"
      },
      {
       value: "22",
       text: "Primaria completa"
      },
      {
       value: "022",
       text: "Secundaria incompleta"
      },
      {
       value: "0022",
       text: "secundaria completa"
      },
      {
       value: "38",
       text: "Carrera comercial"
      },
      {
       value: "038",
       text: "Carrera técnica"
      },
      {
       value: "0038",
       text: "Preparatoria incompleta"
      },
      {
       value: "00038",
       text: "Preparatoria completa"
      },
      {
       value: "52",
       text: "Licenciatura incompleta"
      },
      {
       value: "052",
       text: "Licenciatura completa"
      },
      {
       value: "72",
       text: "Diplomado o maestría"
      },
      {
       value: "072",
       text: "Doctorado"
      }
     ]
    },
    {
     type: "expression",
     name: "NSE",
     title: "sumatoria",
     expression: "{A1} + {A2} + {A3} + {A4} + {A5} + {A6} + {A7} + {A8}",
     displayStyle: "none"
    }
   ]
  },
  {
   name: "page19",
   elements: [
    {
     type: "matrixdropdown",
     name: "P8",
     title: "De las siguientes actividades dígame por favor ¿Cuáles de ellas realiza a manera de entretenimiento? Además dígame si las realiza junto con toda su familia (incluyendo hijos) o solo o con su pareja. ",
     isRequired: true,
     columns: [
      {
       name: "REALIZA",
       title: "¿Lo realiza?",
       cellType: "radiogroup",
       isRequired: true,
       choices: [
        {
         value: "1",
         text: "Sí"
        },
        {
         value: "2",
         text: "No"
        }
       ]
      },
      {
       name: "CON_QUIEN",
       title: "¿Con quien?",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.REALIZA} = 1",
       choices: [
        {
         value: "1",
         text: "Con familia"
        },
        {
         value: "2",
         text: "Sólo o con pareja"
        },
        {
         value: "3",
         text: "Ambas"
        }
       ]
      }
     ],
     rows: [
      {
       value: "1",
       text: "Salir a comer a algún restaurante."
      },
      {
       value: "2",
       text: "Ir al cine."
      },
      {
       value: "3",
       text: "Salir a algún parque de la ciudad."
      },
      {
       value: "4",
       text: "Acudir a algún museo."
      },
      {
       value: "5",
       text: "Ir al teatro o alguna actividad cultural."
      },
      {
       value: "6",
       text: "Salir a pasear a algún centro comercial."
      },
      {
       value: "7",
       text: "Ir de compras."
      }
     ]
    }
   ]
  },
  {
   name: "page20",
   elements: [
    {
     type: "text",
     name: "P8_8",
     title: "Además de las que ya mencionó anteriormente, ¿Qué otras actividades les gusta realizar en familia para pasar un rato de entretenimiento y esparcimiento? Alguna otra? Alguna más?"
    },
    {
     type: "radiogroup",
     name: "P8_8_QUIEN",
     visibleIf: "{P8_8} notempty",
     title: "¿Con quien?",
     choices: [
      {
       value: "1",
       text: "Con familia"
      },
      {
       value: "2",
       text: "Sólo o con pareja"
      },
      {
       value: "3",
       text: "Ambas"
      }
     ]
    },
    {
     type: "text",
     name: "P8_9",
     visibleIf: "{P8_8_QUIEN} notempty",
     title: "Además de las que ya mencionó anteriormente, ¿Qué otras actividades les gusta realizar en familia para pasar un rato de entretenimiento y esparcimiento? Alguna otra? Alguna más?"
    },
    {
     type: "radiogroup",
     name: "P8_9_QUIEN",
     visibleIf: "{P8_9} notempty",
     title: "¿Con quien?",
     choices: [
      {
       value: "1",
       text: "Con familia"
      },
      {
       value: "2",
       text: "Sólo o con pareja"
      },
      {
       value: "3",
       text: "Ambas"
      }
     ]
    },
    {
     type: "text",
     name: "P8_10",
     visibleIf: "{P8_9_QUIEN} notempty",
     title: "Además de las que ya mencionó anteriormente, ¿Qué otras actividades les gusta realizar en familia para pasar un rato de entretenimiento y esparcimiento? Alguna otra? Alguna más?"
    },
    {
     type: "radiogroup",
     name: "P8_10_QUIEN",
     visibleIf: "{P8_10} notempty",
     title: "¿Con quien?",
     choices: [
      {
       value: "1",
       text: "Con familia"
      },
      {
       value: "2",
       text: "Sólo o con pareja"
      },
      {
       value: "3",
       text: "Ambas"
      }
     ]
    }
   ]
  },
  {
   name: "page21",
   elements: [
    {
     type: "checkbox",
     name: "P10",
     title: "De las actividades que mencionó anteriormente, ordene por favor en orden descendente ordenando de la actividad que más acostumbra realizar a la que menos realiza con su familia",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Salir a comer  algún restaurante",
       visibleIf: "{P8.1.REALIZA} = \"1\""
      },
      {
       value: "2",
       text: "Ir al cine",
       visibleIf: "{P8.2.REALIZA} = \"1\""
      },
      {
       value: "3",
       text: "Salir a algún parque de la ciudad",
       visibleIf: "{P8.3.REALIZA} = \"1\""
      },
      {
       value: "4",
       text: "Acudir a algún museo",
       visibleIf: "{P8.4.REALIZA} = \"1\""
      },
      {
       value: "5",
       text: "Ir al teatro o a alguna otra actividad cultural",
       visibleIf: "{P8.5.REALIZA} = \"1\""
      },
      {
       value: "6",
       text: "Salir a pasear a algún centro comercial",
       visibleIf: "{P8.6.REALIZA} = \"1\""
      },
      {
       value: "7",
       text: "Ir de compras",
       visibleIf: "{P8.7.REALIZA} = \"1\""
      },
      {
       value: "8",
       text: {
        default: "{P8_8}",
        en: "{P8_8}"
       },
       visibleIf: "{P8_8} notempty"
      },
      {
       value: "9",
       text: {
        default: "{P8_9}",
        en: "{P8_9}"
       },
       visibleIf: "{P8_9} notempty"
      },
      {
       value: "10",
       text: {
        default: "{P8_10}",
        en: "{P8_10}"
       },
       visibleIf: "{P8_10} notempty"
      }
     ]
    }
   ]
  },
  {
   name: "page22",
   elements: [
    {
     type: "panel",
     name: "P11",
     elements: [
      {
       type: "html",
       name: "question16",
       html: "De un 100% de las actividades que realiza a manera de diversión o esparcimiento con su familia, dígame por favor, ¿Qué porcentaje de ellas realiza en la ciudad de Pachuca y qué porcentaje fuera de la ciudad? "
      },
      {
       type: "text",
       name: "P11_1",
       title: "Pachuca",
       isRequired: true,
       validators: [
        {
         type: "numeric",
         text: "Ingrese un número del 0 al 100",
         minValue: 0,
         maxValue: 100
        },
        {
         type: "expression",
         text: "La suma de los porcentajes no es 100",
         expression: "{P11_1} + {P11_2} == 100"
        }
       ]
      },
      {
       type: "text",
       name: "P11_2",
       title: "Foráneo",
       isRequired: true,
       validators: [
        {
         type: "numeric",
         text: "ingrese un número de entre 0 al 100",
         minValue: 0,
         maxValue: 100
        }
       ]
      }
     ]
    }
   ]
  },
  {
   name: "page23",
   elements: [
    {
     type: "text",
     name: "P12_1",
     visibleIf: "{P11_2} > 0",
     title: "De las actividades que realiza afuera ¿Dígame por favor en qué ciudad acostumbra realizarlas?",
     isRequired: true
    },
    {
     type: "text",
     name: "P12_2",
     visibleIf: "{P12_1} notempty",
     title: "¿Alguna otra?"
    },
    {
     type: "text",
     name: "P12_3",
     visibleIf: "{P12_2} notempty",
     title: "¿Alguna más?"
    }
   ]
  },
  {
   name: "page24",
   elements: [
    {
     type: "radiogroup",
     name: "P13_1",
     visibleIf: "{P8.1.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Con qué frecuencia realiza Salir a comer a algún restaurante? ",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Diario"
      },
      {
       value: "2",
       text: "Cada tercer día"
      },
      {
       value: "3",
       text: "Dos veces por semana"
      },
      {
       value: "4",
       text: "Una vez a la semana"
      },
      {
       value: "5",
       text: "Cada 15 días"
      },
      {
       value: "6",
       text: "Cada mes"
      },
      {
       value: "7",
       text: "Cada mes y medio o más"
      }
     ]
    },
    {
     type: "matrixdropdown",
     name: "P14_1",
     visibleIf: "{P8.1.REALIZA} = \"1\"",
     title: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: Salir a comer a algún restaurante",
     isRequired: true,
     columns: [
      {
       name: "LUGAR",
       title: "Lugar",
       cellType: "text",
       isRequired: true
      },
      {
       name: "UBICACION",
       title: "Ubicación",
       cellType: "text",
       isRequired: true
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5
     ],
     cellType: "text",
     rows: [
      {
       value: "1",
       text: "Primero"
      },
      {
       value: "2",
       text: "Segundo",
       visibleIf: "{P14_1.1.UBICACION} notempty"
      }
     ]
    },
    {
     type: "text",
     name: "P15_1",
     visibleIf: "{P8.1.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que salen a comer a algún restaurante?",
     isRequired: true,
     validators: [
      {
       type: "numeric",
       text: "Ingresa la cantidad en número",
       minValue: 0
      }
     ]
    }
   ]
  },
  {
   name: "page25",
   elements: [
    {
     type: "html",
     name: "Continua1",
     visibleIf: "{P8.1.REALIZA} = \"1\"",
     html: "En relación con la actividad salir a comer a algún restaurante, conteste lo siguiente:"
    },
    {
     type: "matrixdropdown",
     name: "P16_1",
     visibleIf: "{P8.1.REALIZA} = \"1\"",
     title: "Dígame por favor, ¿Qué días son los que acostumbra, en qué horario acostumbra realizarlo y cuánto tiempo le dedica a cada actividad?",
     isRequired: true,
     columns: [
      {
       name: "TIEMPO",
       title: "Tiempo",
       cellType: "radiogroup",
       choices: [
        {
         value: "1",
         text: "En la mañana"
        },
        {
         value: "2",
         text: "En la tarde"
        },
        {
         value: "3",
         text: "En la noche"
        }
       ]
      },
      {
       name: "HORARIO",
       title: "Horario",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.TIEMPO} notempty",
       choices: [
        {
         value: "1",
         text: "1 a 2 Horas"
        },
        {
         value: "2",
         text: "2 a 3 Horas"
        },
        {
         value: "3",
         text: "3 a 4 Horas"
        },
        {
         value: "4",
         text: "Todo el día"
        }
       ]
      }
     ],
     choices: [
      1
     ],
     rows: [
      {
       value: "LUNES",
       text: "Lunes"
      },
      {
       value: "MEARTES",
       text: "Martes"
      },
      {
       value: "MIERCOLES",
       text: "Miércoles"
      },
      {
       value: "JUEVES",
       text: "Jueves"
      },
      {
       value: "VIERNES",
       text: "Viernes"
      },
      {
       value: "SABADO",
       text: "Sábado"
      },
      {
       value: "DOMINGO",
       text: "Domingo"
      }
     ]
    }
   ]
  },
  {
   name: "page26",
   elements: [
    {
     type: "radiogroup",
     name: "P13_2",
     visibleIf: "{P8.2.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Con qué frecuencia realiza Ir al cine ? ",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Diario"
      },
      {
       value: "2",
       text: "Cada tercer día"
      },
      {
       value: "3",
       text: "Dos veces por semana"
      },
      {
       value: "4",
       text: "Una vez a la semana"
      },
      {
       value: "5",
       text: "Cada 15 días"
      },
      {
       value: "6",
       text: "Cada mes"
      },
      {
       value: "7",
       text: "Cada mes y medio o más"
      }
     ]
    },
    {
     type: "matrixdropdown",
     name: "P14_2",
     visibleIf: "{P8.2.REALIZA} = \"1\"",
     title: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: Ir al cine ",
     isRequired: true,
     columns: [
      {
       name: "LUGAR",
       title: "Lugar",
       cellType: "text"
      },
      {
       name: "UBICACION",
       title: "Ubicación",
       cellType: "text"
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5
     ],
     cellType: "text",
     rows: [
      {
       value: "1",
       text: "Primero"
      },
      {
       value: "2",
       text: "Segundo",
       visibleIf: "{P14_2.1.UBICACION} notempty"
      }
     ]
    },
    {
     type: "text",
     name: "P15_2",
     visibleIf: "{P8.2.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que van al cine ?",
     isRequired: true,
     validators: [
      {
       type: "numeric",
       text: "Ingresa la cantidad en número",
       minValue: 0
      }
     ]
    }
   ]
  },
  {
   name: "page27",
   elements: [
    {
     type: "html",
     name: "Continua2",
     visibleIf: "{P8.2.REALIZA} = \"1\"",
     html: "En relación con la actividad \"ir al cine\", conteste lo siguiente:"
    },
    {
     type: "matrixdropdown",
     name: "P16_2",
     visibleIf: "{P8.2.REALIZA} = \"1\"",
     title: "Dígame por favor, ¿Qué días son los que acostumbra, en qué horario acostumbra realizarlo y cuánto tiempo le dedica a cada actividad?",
     isRequired: true,
     columns: [
      {
       name: "TIEMPO",
       title: "Tiempo",
       cellType: "radiogroup",
       choices: [
        {
         value: "1",
         text: "En la mañana"
        },
        {
         value: "2",
         text: "En la tarde"
        },
        {
         value: "3",
         text: "En la noche"
        }
       ]
      },
      {
       name: "HORARIO",
       title: "Horario",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.TIEMPO} notempty",
       choices: [
        {
         value: "1",
         text: "1 a 2 Horas"
        },
        {
         value: "2",
         text: "2 a 3 Horas"
        },
        {
         value: "3",
         text: "3 a 4 Horas"
        },
        {
         value: "4",
         text: "Todo el día"
        }
       ]
      }
     ],
     choices: [
      1
     ],
     rows: [
      {
       value: "LUNES",
       text: "Lunes"
      },
      {
       value: "MARTES",
       text: "Martes"
      },
      {
       value: "MIERCOLES",
       text: "Miércoles"
      },
      {
       value: "JUEVES",
       text: "Jueves"
      },
      {
       value: "VIERNES",
       text: "Viernes"
      },
      {
       value: "SABADO",
       text: "Sábado"
      },
      {
       value: "DOMINSGO",
       text: "Domingo"
      }
     ]
    }
   ]
  },
  {
   name: "page28",
   elements: [
    {
     type: "radiogroup",
     name: "P13_3",
     visibleIf: "{P8.3.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Con qué frecuencia realiza: Salir a algún parque en la ciudad ? ",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Diario"
      },
      {
       value: "2",
       text: "Cada tercer día"
      },
      {
       value: "3",
       text: "Dos veces por semana"
      },
      {
       value: "4",
       text: "Una vez a la semana"
      },
      {
       value: "5",
       text: "Cada 15 días"
      },
      {
       value: "6",
       text: "Cada mes"
      },
      {
       value: "7",
       text: "Cada mes y medio o más"
      }
     ]
    },
    {
     type: "matrixdropdown",
     name: "P14_3",
     visibleIf: "{P8.3.REALIZA} = \"1\"",
     title: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: Salir a algún parque en la ciudad",
     isRequired: true,
     columns: [
      {
       name: "LUGAR",
       title: "Lugar",
       cellType: "text",
       isRequired: true
      },
      {
       name: "UBICACION",
       title: "Ubicación",
       cellType: "text",
       isRequired: true
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5
     ],
     cellType: "text",
     rows: [
      {
       value: "1",
       text: "Primero"
      },
      {
       value: "2",
       text: "Segundo",
       visibleIf: "{P14_3.1.UBICACION} notempty"
      }
     ]
    },
    {
     type: "text",
     name: "P15_3",
     visibleIf: "{P8.3.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que salen a algún parque en la ciudad ?",
     isRequired: true,
     validators: [
      {
       type: "numeric",
       text: "Ingresa la cantidad en número",
       minValue: 0
      }
     ]
    }
   ]
  },
  {
   name: "page29",
   elements: [
    {
     type: "html",
     name: "Continuar3",
     visibleIf: "{P8.3.REALIZA} = \"1\"",
     html: "En relación con la actividad \"salir a algún parque en la ciudad\", conteste lo siguiente:"
    },
    {
     type: "matrixdropdown",
     name: "P16_3",
     visibleIf: "{P8.3.REALIZA} = \"1\"",
     title: "Dígame por favor, ¿Qué días son los que acostumbra, en qué horario acostumbra realizarlo y cuánto tiempo le dedica a cada actividad?",
     isRequired: true,
     columns: [
      {
       name: "TIEMPO",
       title: "Tiempo",
       cellType: "radiogroup",
       choices: [
        {
         value: "1",
         text: "En la mañana"
        },
        {
         value: "2",
         text: "En la tarde"
        },
        {
         value: "3",
         text: "En la noche"
        }
       ]
      },
      {
       name: "HORARIO",
       title: "Horario",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.TIEMPO} notempty",
       choices: [
        {
         value: "1",
         text: "1 a 2 Horas"
        },
        {
         value: "2",
         text: "2 a 3 Horas"
        },
        {
         value: "3",
         text: "3 a 4 Horas"
        },
        {
         value: "4",
         text: "Todo el día"
        }
       ]
      }
     ],
     choices: [
      1
     ],
     rows: [
      {
       value: "LUNES",
       text: "Lunes"
      },
      {
       value: "MARTES",
       text: "Martes"
      },
      {
       value: "MIERCOLES",
       text: "Miércoles"
      },
      {
       value: "JUEVES",
       text: "Jueves"
      },
      {
       value: "VIERNES",
       text: "Viernes"
      },
      {
       value: "SABADO",
       text: "Sábado"
      },
      {
       value: "DOMINGO",
       text: "Domingo"
      }
     ]
    }
   ]
  },
  {
   name: "page30",
   elements: [
    {
     type: "radiogroup",
     name: "P13_4",
     visibleIf: "{P8.4.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Con qué frecuencia realiza: Acudir a algún museo ? ",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Diario"
      },
      {
       value: "2",
       text: "Cada tercer día"
      },
      {
       value: "3",
       text: "Dos veces por semana"
      },
      {
       value: "4",
       text: "Una vez a la semana"
      },
      {
       value: "5",
       text: "Cada 15 días"
      },
      {
       value: "6",
       text: "Cada mes"
      },
      {
       value: "7",
       text: "Cada mes y medio o más"
      }
     ]
    },
    {
     type: "matrixdropdown",
     name: "P14_4",
     visibleIf: "{P8.4.REALIZA} = \"1\"",
     title: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: Acudir a algún museo",
     isRequired: true,
     columns: [
      {
       name: "LUGAR",
       title: "Lugar",
       cellType: "text",
       isRequired: true
      },
      {
       name: "UBICACION",
       title: "Ubicación",
       cellType: "text",
       isRequired: true
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5
     ],
     cellType: "text",
     rows: [
      {
       value: "1",
       text: "Primero"
      },
      {
       value: "2",
       text: "Segundo",
       visibleIf: "{P14_4.1.UBICACION} notempty"
      }
     ]
    },
    {
     type: "text",
     name: "P15_4",
     visibleIf: "{P8.4.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que acuden a algún museo?",
     isRequired: true,
     validators: [
      {
       type: "numeric",
       text: "Ingresa la cantidad en número",
       minValue: 0
      }
     ]
    }
   ]
  },
  {
   name: "page31",
   elements: [
    {
     type: "html",
     name: "Continuar4",
     visibleIf: "{P8.4.REALIZA} = \"1\"",
     html: "En relación con la actividad \"acudir a algún museo\", conteste lo siguiente:"
    },
    {
     type: "matrixdropdown",
     name: "P16_4",
     visibleIf: "{P8.4.REALIZA} = \"1\"",
     title: "Dígame por favor, ¿Qué días son los que acostumbra, en qué horario acostumbra realizarlo y cuánto tiempo le dedica a cada actividad?",
     isRequired: true,
     columns: [
      {
       name: "TIEMPO",
       title: "Tiempo",
       cellType: "radiogroup",
       choices: [
        {
         value: "1",
         text: "En la mañana"
        },
        {
         value: "2",
         text: "En la tarde"
        },
        {
         value: "3",
         text: "En la noche"
        }
       ]
      },
      {
       name: "HORARIO",
       title: "Horario",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.TIEMPO} notempty",
       choices: [
        {
         value: "1",
         text: "1 a 2 Horas"
        },
        {
         value: "2",
         text: "2 a 3 Horas"
        },
        {
         value: "3",
         text: "3 a 4 Horas"
        },
        {
         value: "4",
         text: "Todo el día"
        }
       ]
      }
     ],
     choices: [
      1
     ],
     rows: [
      {
       value: "LUNES",
       text: "Lunes"
      },
      {
       value: "MARTES",
       text: "Martes"
      },
      {
       value: "MIERCOLES",
       text: "Miércoles"
      },
      {
       value: "JUEVES",
       text: "Jueves"
      },
      {
       value: "VIERNES",
       text: "Viernes"
      },
      {
       value: "SABADO",
       text: "Sábado"
      },
      {
       value: "DOMINGO",
       text: "Domingo"
      }
     ]
    }
   ]
  },
  {
   name: "page32",
   elements: [
    {
     type: "radiogroup",
     name: "P13_5",
     visibleIf: "{P8.5.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Con qué frecuencia realiza: Ir al teatro o alguna otra actividad cultural ? ",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Diario"
      },
      {
       value: "2",
       text: "Cada tercer día"
      },
      {
       value: "3",
       text: "Dos veces por semana"
      },
      {
       value: "4",
       text: "Una vez a la semana"
      },
      {
       value: "5",
       text: "Cada 15 días"
      },
      {
       value: "6",
       text: "Cada mes"
      },
      {
       value: "7",
       text: "Cada mes y medio o más"
      }
     ]
    },
    {
     type: "matrixdropdown",
     name: "P14_5",
     visibleIf: "{P8.5.REALIZA} = \"1\"",
     title: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: Ir al teatro o alguna otra actividad\n  cultural",
     isRequired: true,
     columns: [
      {
       name: "LUGAR",
       title: "Lugar",
       cellType: "text",
       isRequired: true
      },
      {
       name: "UBICACION",
       title: "Ubicación",
       cellType: "text",
       isRequired: true
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5
     ],
     cellType: "text",
     rows: [
      {
       value: "1",
       text: "Primero"
      },
      {
       value: "2",
       text: "Segundo",
       visibleIf: "{P14_5.1.UBICACION} notempty"
      }
     ]
    },
    {
     type: "text",
     name: "P15_5",
     visibleIf: "{P8.5.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que acuden a ir al teatro o alguna otra actividad\n  cultural?",
     isRequired: true,
     validators: [
      {
       type: "numeric",
       text: "Ingresa la cantidad en número",
       minValue: 0
      }
     ]
    }
   ]
  },
  {
   name: "page33",
   elements: [
    {
     type: "html",
     name: "Continuar5",
     visibleIf: "{P8.5.REALIZA} = \"1\"",
     html: "En relación con la actividad \"ir al teatro o alguna otra actividad\n  cultural\", conteste lo siguiente:"
    },
    {
     type: "matrixdropdown",
     name: "P16_5",
     visibleIf: "{P8.5.REALIZA} = \"1\"",
     title: "Dígame por favor, ¿Qué días son los que acostumbra, en qué horario acostumbra realizarlo y cuánto tiempo le dedica a cada actividad?",
     isRequired: true,
     columns: [
      {
       name: "TIEMPO",
       title: "Tiempo",
       cellType: "radiogroup",
       choices: [
        {
         value: "1",
         text: "En la mañana"
        },
        {
         value: "2",
         text: "En la tarde"
        },
        {
         value: "3",
         text: "En la noche"
        }
       ]
      },
      {
       name: "HORARIO",
       title: "Horario",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.TIEMPO} notempty",
       choices: [
        {
         value: "1",
         text: "1 a 2 Horas"
        },
        {
         value: "2",
         text: "2 a 3 Horas"
        },
        {
         value: "3",
         text: "3 a 4 Horas"
        },
        {
         value: "4",
         text: "Todo el día"
        }
       ]
      }
     ],
     choices: [
      1
     ],
     rows: [
      {
       value: "LUNES",
       text: "Lunes"
      },
      {
       value: "MARTES",
       text: "Martes"
      },
      {
       value: "MIERCOLES",
       text: "Miércoles"
      },
      {
       value: "JUEVES",
       text: "Jueves"
      },
      {
       value: "VIERNES",
       text: "Viernes"
      },
      {
       value: "SABADO",
       text: "Sábado"
      },
      {
       value: "DOMINGO",
       text: "Domingo"
      }
     ]
    }
   ]
  },
  {
   name: "page34",
   elements: [
    {
     type: "radiogroup",
     name: "P13_6",
     visibleIf: "{P8.6.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Con qué frecuencia realiza: Salir a pasear a algún centro comercial  ? ",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Diario"
      },
      {
       value: "2",
       text: "Cada tercer día"
      },
      {
       value: "3",
       text: "Dos veces por semana"
      },
      {
       value: "4",
       text: "Una vez a la semana"
      },
      {
       value: "5",
       text: "Cada 15 días"
      },
      {
       value: "6",
       text: "Cada mes"
      },
      {
       value: "7",
       text: "Cada mes y medio o más"
      }
     ]
    },
    {
     type: "matrixdropdown",
     name: "P14_6",
     visibleIf: "{P8.6.REALIZA} = \"1\"",
     title: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: Salir a pasear a algún centro comercial ",
     isRequired: true,
     columns: [
      {
       name: "LUGAR",
       title: "Lugar",
       cellType: "text",
       isRequired: true
      },
      {
       name: "UBICACION",
       title: "Ubicación",
       cellType: "text",
       isRequired: true
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5
     ],
     cellType: "text",
     rows: [
      {
       value: "1",
       text: "Primero"
      },
      {
       value: "2",
       text: "Segundo",
       visibleIf: "{P14_6.1.UBICACION} notempty"
      }
     ]
    },
    {
     type: "text",
     name: "P15_6",
     visibleIf: "{P8.6.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que acuden a salir a pasear a algún centro comercial ?",
     isRequired: true,
     validators: [
      {
       type: "numeric",
       text: "Ingresa la cantidad en número",
       minValue: 0
      }
     ]
    }
   ]
  },
  {
   name: "page35",
   elements: [
    {
     type: "html",
     name: "Continuar6",
     visibleIf: "{P8.6.REALIZA} = \"1\"",
     html: "En relación con la actividad \"salir a pasear a algún centro comercial \", conteste lo siguiente:"
    },
    {
     type: "matrixdropdown",
     name: "P16_6",
     visibleIf: "{P8.6.REALIZA} = \"1\"",
     title: "Dígame por favor, ¿Qué días son los que acostumbra, en qué horario acostumbra realizarlo y cuánto tiempo le dedica a cada actividad?",
     isRequired: true,
     columns: [
      {
       name: "TIEMPO",
       title: "Tiempo",
       cellType: "radiogroup",
       choices: [
        {
         value: "1",
         text: "En la mañana"
        },
        {
         value: "2",
         text: "En la tarde"
        },
        {
         value: "3",
         text: "En la noche"
        }
       ]
      },
      {
       name: "HORARIO",
       title: "Horario",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.TIEMPO} notempty",
       choices: [
        {
         value: "1",
         text: "1 a 2 Horas"
        },
        {
         value: "2",
         text: "2 a 3 Horas"
        },
        {
         value: "3",
         text: "3 a 4 Horas"
        },
        {
         value: "4",
         text: "Todo el día"
        }
       ]
      }
     ],
     choices: [
      1
     ],
     rows: [
      {
       value: "LUNES",
       text: "Lunes"
      },
      {
       value: "MARTES",
       text: "Martes"
      },
      {
       value: "MIERCOLES",
       text: "Miércoles"
      },
      {
       value: "JUEVES",
       text: "Jueves"
      },
      {
       value: "VIERNES",
       text: "Viernes"
      },
      {
       value: "SABADO",
       text: "Sábado"
      },
      {
       value: "DOMINGO",
       text: "Domingo"
      }
     ]
    }
   ]
  },
  {
   name: "page36",
   elements: [
    {
     type: "radiogroup",
     name: "P13_7",
     visibleIf: "{P8.7.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Con qué frecuencia realiza: Ir de compras? ",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Diario"
      },
      {
       value: "2",
       text: "Cada tercer día"
      },
      {
       value: "3",
       text: "Dos veces por semana"
      },
      {
       value: "4",
       text: "Una vez a la semana"
      },
      {
       value: "5",
       text: "Cada 15 días"
      },
      {
       value: "6",
       text: "Cada mes"
      },
      {
       value: "7",
       text: "Cada mes y medio o más"
      }
     ]
    },
    {
     type: "matrixdropdown",
     name: "P14_7",
     visibleIf: "{P8.7.REALIZA} = \"1\"",
     title: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: Ir de compras",
     isRequired: true,
     columns: [
      {
       name: "LUGAR",
       title: "Lugar",
       cellType: "text",
       isRequired: true
      },
      {
       name: "UBICACION",
       title: "Ubicación",
       cellType: "text",
       isRequired: true
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5
     ],
     cellType: "text",
     rows: [
      {
       value: "1",
       text: "Primero"
      },
      {
       value: "2",
       text: "Segundo",
       visibleIf: "{P14_7.1.UBICACION} notempty"
      }
     ]
    },
    {
     type: "text",
     name: "P15_7",
     visibleIf: "{P8.7.REALIZA} = \"1\"",
     title: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que acuden a ir de compras?",
     isRequired: true,
     validators: [
      {
       type: "numeric",
       text: "Ingresa la cantidad en número",
       minValue: 0
      }
     ]
    }
   ]
  },
  {
   name: "page37",
   elements: [
    {
     type: "html",
     name: "Continuar7",
     visibleIf: "{P8.7.REALIZA} = \"1\"",
     html: "En relación con la actividad \"Ir de compras \", conteste lo siguiente:"
    },
    {
     type: "matrixdropdown",
     name: "P16_7",
     visibleIf: "{P8.7.REALIZA} = \"1\"",
     title: "Dígame por favor, ¿Qué días son los que acostumbra, en qué horario acostumbra realizarlo y cuánto tiempo le dedica a cada actividad?",
     isRequired: true,
     columns: [
      {
       name: "TIEMPO",
       title: "Tiempo",
       cellType: "radiogroup",
       choices: [
        {
         value: "1",
         text: "En la mañana"
        },
        {
         value: "2",
         text: "En la tarde"
        },
        {
         value: "3",
         text: "En la noche"
        }
       ]
      },
      {
       name: "HORARIO",
       title: "Horario",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.TIEMPO} notempty",
       choices: [
        {
         value: "1",
         text: "1 a 2 Horas"
        },
        {
         value: "2",
         text: "2 a 3 Horas"
        },
        {
         value: "3",
         text: "3 a 4 Horas"
        },
        {
         value: "4",
         text: "Todo el día"
        }
       ]
      }
     ],
     choices: [
      1
     ],
     rows: [
      {
       value: "LUNES",
       text: "Lunes"
      },
      {
       value: "MARTES",
       text: "Martes"
      },
      {
       value: "MIERCOLES",
       text: "Miércoles"
      },
      {
       value: "JUEVES",
       text: "Jueves"
      },
      {
       value: "VIERNES",
       text: "Viernes"
      },
      {
       value: "SABADO",
       text: "Sábado"
      },
      {
       value: "DOMINGO",
       text: "Domingo"
      }
     ]
    }
   ]
  },
  {
   name: "page38",
   elements: [
    {
     type: "radiogroup",
     name: "P13_8",
     visibleIf: "{P8_8} notempty",
     title: {
      default: "Dígame por favor ¿Con qué frecuencia realiza: {P8_8}? ",
      en: "Dígame por favor ¿Con qué frecuencia realiza: {P8_8}? "
     },
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Diario"
      },
      {
       value: "2",
       text: "Cada tercer día"
      },
      {
       value: "3",
       text: "Dos veces por semana"
      },
      {
       value: "4",
       text: "Una vez a la semana"
      },
      {
       value: "5",
       text: "Cada 15 días"
      },
      {
       value: "6",
       text: "Cada mes"
      },
      {
       value: "7",
       text: "Cada mes y medio o más"
      }
     ]
    },
    {
     type: "matrixdropdown",
     name: "P14_8",
     visibleIf: "{P8_8} notempty",
     title: {
      default: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: {P9_8}",
      en: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: {P8_8}"
     },
     isRequired: true,
     columns: [
      {
       name: "LUGAR",
       title: "Lugar",
       cellType: "text",
       isRequired: true
      },
      {
       name: "UBICACION",
       title: "Ubicación",
       cellType: "text",
       isRequired: true
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5
     ],
     cellType: "text",
     rows: [
      {
       value: "1",
       text: "Primero"
      },
      {
       value: "2",
       text: "Segundo",
       visibleIf: "{P14_8.1.UBICACION} notempty"
      }
     ]
    },
    {
     type: "text",
     name: "P15_8",
     visibleIf: "{P8_8} notempty",
     title: {
      default: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que acuden a {P8_8}?",
      en: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que acuden a {P8_8}?"
     },
     isRequired: true,
     validators: [
      {
       type: "numeric",
       text: "Ingresa la cantidad en número",
       minValue: 0
      }
     ]
    }
   ]
  },
  {
   name: "page39",
   elements: [
    {
     type: "html",
     name: "Continuar8",
     visibleIf: "{P8_8} notempty",
     html: {
      default: "En relación con la actividad \"{P8_8}\", conteste lo siguiente:",
      en: "En relación con la actividad \"{P8_8}\", conteste lo siguiente:"
     }
    },
    {
     type: "matrixdropdown",
     name: "P16_8",
     visibleIf: "{P8_8} notempty",
     title: "Dígame por favor, ¿Qué días son los que acostumbra, en qué horario acostumbra realizarlo y cuánto tiempo le dedica a cada actividad?",
     isRequired: true,
     columns: [
      {
       name: "TIEMPO",
       title: "Tiempo",
       cellType: "radiogroup",
       choices: [
        {
         value: "1",
         text: "En la mañana"
        },
        {
         value: "2",
         text: "En la tarde"
        },
        {
         value: "3",
         text: "En la noche"
        }
       ]
      },
      {
       name: "HORARIO",
       title: "Horario",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.TIEMPO} notempty",
       choices: [
        {
         value: "1",
         text: "1 a 2 Horas"
        },
        {
         value: "2",
         text: "2 a 3 Horas"
        },
        {
         value: "3",
         text: "3 a 4 Horas"
        },
        {
         value: "4",
         text: "Todo el día"
        }
       ]
      }
     ],
     choices: [
      1
     ],
     rows: [
      {
       value: "LUNES",
       text: "Lunes"
      },
      {
       value: "MARTES",
       text: "Martes"
      },
      {
       value: "MIERCOLES",
       text: "Miércoles"
      },
      {
       value: "JUEVES",
       text: "Jueves"
      },
      {
       value: "VIERNES",
       text: "Viernes"
      },
      {
       value: "SABADO",
       text: "Sábado"
      },
      {
       value: "DOMINGO",
       text: "Domingo"
      }
     ]
    }
   ]
  },
  {
   name: "page40",
   elements: [
    {
     type: "radiogroup",
     name: "P13_9",
     visibleIf: "{P8_9} notempty",
     title: {
      default: "Dígame por favor ¿Con qué frecuencia realiza:{P8_9}? ",
      en: "Dígame por favor ¿Con qué frecuencia realiza:{P8_9}? "
     },
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Diario"
      },
      {
       value: "2",
       text: "Cada tercer día"
      },
      {
       value: "3",
       text: "Dos veces por semana"
      },
      {
       value: "4",
       text: "Una vez a la semana"
      },
      {
       value: "5",
       text: "Cada 15 días"
      },
      {
       value: "6",
       text: "Cada mes"
      },
      {
       value: "7",
       text: "Cada mes y medio o más"
      }
     ]
    },
    {
     type: "matrixdropdown",
     name: "P14_9",
     visibleIf: "{P8_9} notempty",
     title: {
      default: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a:{P8_9}",
      en: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a:{P8_9}"
     },
     isRequired: true,
     columns: [
      {
       name: "LUGAR",
       title: "Lugar",
       cellType: "text",
       isRequired: true
      },
      {
       name: "UBICACION",
       title: "Ubicación",
       cellType: "text",
       isRequired: true
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5
     ],
     cellType: "text",
     rows: [
      {
       value: "1",
       text: "Primero"
      },
      {
       value: "2",
       text: "Segundo",
       visibleIf: "{P14_9.1.UBICACION} notempty"
      }
     ]
    },
    {
     type: "text",
     name: "P15_9",
     visibleIf: "{P8_9} notempty",
     title: {
      default: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que acuden a {P8_9}?",
      en: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que acuden a {P8_9}?"
     },
     isRequired: true,
     validators: [
      {
       type: "numeric",
       text: "Ingresa la cantidad en número",
       minValue: 0
      }
     ]
    }
   ]
  },
  {
   name: "page41",
   elements: [
    {
     type: "html",
     name: "continuar9",
     visibleIf: "{P8_9} notempty",
     html: {
      default: "En relación con la actividad \"{P8_9}\", conteste lo siguiente:",
      en: "En relación con la actividad \"{P8_9}\", conteste lo siguiente:"
     }
    },
    {
     type: "matrixdropdown",
     name: "P16_9",
     visibleIf: "{P8_9} notempty",
     title: "Dígame por favor, ¿Qué días son los que acostumbra, en qué horario acostumbra realizarlo y cuánto tiempo le dedica a cada actividad?",
     isRequired: true,
     columns: [
      {
       name: "TIEMPO",
       title: "Tiempo",
       cellType: "radiogroup",
       choices: [
        {
         value: "1",
         text: "Por la mañana"
        },
        {
         value: "2",
         text: "En la tarde"
        },
        {
         value: "3",
         text: "En la noche"
        }
       ]
      },
      {
       name: "HORARIO",
       title: "Horario",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.TIEMPO} notempty",
       choices: [
        {
         value: "1",
         text: "1 a 2 Horas"
        },
        {
         value: "2",
         text: "2 a 3 Horas"
        },
        {
         value: "3",
         text: "3 a 4 Horas"
        },
        {
         value: "4",
         text: "Todo el día"
        }
       ]
      }
     ],
     choices: [
      1
     ],
     rows: [
      {
       value: "LUNES",
       text: "Lunes"
      },
      {
       value: "MARTES",
       text: "Martes"
      },
      {
       value: "MIERCOLES",
       text: "Miércoles"
      },
      {
       value: "JUEVES",
       text: "Jueves"
      },
      {
       value: "VIERNES",
       text: "Viernes"
      },
      {
       value: "SABADO",
       text: "Sábado"
      },
      {
       value: "DOMINGO",
       text: "Domingo"
      }
     ]
    }
   ]
  },
  {
   name: "page42",
   elements: [
    {
     type: "radiogroup",
     name: "P13_10",
     visibleIf: "{P8_10} notempty",
     title: {
      default: "Dígame por favor ¿Con qué frecuencia realiza: {P8_10}? ",
      en: "Dígame por favor ¿Con qué frecuencia realiza: {P8_10}? "
     },
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Diario"
      },
      {
       value: "2",
       text: "Cada tercer día"
      },
      {
       value: "3",
       text: "Dos veces por semana"
      },
      {
       value: "4",
       text: "Una vez a la semana"
      },
      {
       value: "5",
       text: "Cada 15 días"
      },
      {
       value: "6",
       text: "Cada mes"
      },
      {
       value: "7",
       text: "Cada mes y medio o más"
      }
     ]
    },
    {
     type: "matrixdropdown",
     name: "P14_10",
     visibleIf: "{P8_10} notempty",
     title: {
      default: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: {P8_10}",
      en: "Dígame por favor el nombre y la ubicación de los 2 lugares a donde acude con más frecuencia a: {P8_10}"
     },
     isRequired: true,
     columns: [
      {
       name: "LUGAR",
       title: "Lugar",
       cellType: "text",
       isRequired: true
      },
      {
       name: "UBICACION",
       title: "Ubicación",
       cellType: "text",
       isRequired: true
      }
     ],
     choices: [
      1,
      2,
      3,
      4,
      5
     ],
     cellType: "text",
     rows: [
      {
       value: "1",
       text: "Primero"
      },
      {
       value: "2",
       text: "Segundo",
       visibleIf: "{P14_10.1.UBICACION} notempty"
      }
     ]
    },
    {
     type: "text",
     name: "P15_10",
     visibleIf: "{P8_10} notempty",
     title: {
      default: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que acuden a {P8_10}?",
      en: "Dígame por favor ¿Aproximadamente cuánto gasta entre usted y toda la familia cada vez que acuden a {P8_10}?"
     },
     isRequired: true,
     validators: [
      {
       type: "numeric",
       text: "Ingresa la cantidad en número",
       minValue: 0
      }
     ]
    }
   ]
  },
  {
   name: "page43",
   elements: [
    {
     type: "html",
     name: "Continuar10",
     visibleIf: "{P8_10} notempty",
     html: {
      default: "En relación con la actividad \"{P8_10}\", conteste lo siguiente:",
      en: "En relación con la actividad \"{P8_10}\", conteste lo siguiente:"
     }
    },
    {
     type: "matrixdropdown",
     name: "P16_10",
     visibleIf: "{P8_10} notempty",
     title: "Dígame por favor, ¿Qué días son los que acostumbra, en qué horario acostumbra realizarlo y cuánto tiempo le dedica a cada actividad?",
     isRequired: true,
     columns: [
      {
       name: "TIEMPO",
       title: "Tiempo",
       cellType: "radiogroup",
       choices: [
        {
         value: "1",
         text: "En la mañana"
        },
        {
         value: "2",
         text: "En la tarde"
        },
        {
         value: "3",
         text: "En la noche"
        }
       ]
      },
      {
       name: "HORARIO",
       title: "Horario",
       cellType: "dropdown",
       isRequired: true,
       visibleIf: "{row.TIEMPO} notempty",
       choices: [
        {
         value: "1",
         text: "1 a 2 Horas"
        },
        {
         value: "2",
         text: "2 a 3 Horas"
        },
        {
         value: "3",
         text: "3 a 4 Horas"
        },
        {
         value: "4",
         text: "Todo el día"
        }
       ]
      }
     ],
     choices: [
      1
     ],
     rows: [
      {
       value: "LUNES",
       text: "Lunes"
      },
      {
       value: "MARTES",
       text: "Martes"
      },
      {
       value: "MIERCOLES",
       text: "Miércoles"
      },
      {
       value: "JUEVES",
       text: "Jueves"
      },
      {
       value: "VIERNES",
       text: "Viernes"
      },
      {
       value: "SABADO",
       text: "Sábado"
      },
      {
       value: "DOMINGO",
       text: "Domingo"
      }
     ]
    }
   ]
  },
  {
   name: "page44",
   elements: [
    {
     type: "text",
     name: "P17_1",
     title: "Dígame por favor todo lo que le gusta de los lugares de esparcimiento que hay en la ciudad de Pachuca.",
     isRequired: true
    },
    {
     type: "text",
     name: "P17_2",
     visibleIf: "{P17_1} notempty",
     title: "¿Alguna otra ciudad?"
    },
    {
     type: "text",
     name: "P17_3",
     visibleIf: "{P17_2} notempty",
     title: "¿Alguna ciudad más?"
    }
   ]
  },
  {
   name: "page45",
   elements: [
    {
     type: "text",
     name: "P18_1",
     title: "Dígame por favor todo lo que no le gusta de los lugares de esparcimiento que han en la ciudad de Pachuca.",
     isRequired: true
    },
    {
     type: "text",
     name: "P18_2",
     visibleIf: "{P18_1} notempty",
     title: "¿Algún otro lugar?"
    },
    {
     type: "text",
     name: "P18_3",
     visibleIf: "{P18_2} notempty",
     title: "¿Algún lugar más?"
    }
   ]
  },
  {
   name: "page46",
   elements: [
    {
     type: "text",
     name: "P19_1",
     title: "Dígame por favor todo lo que le gusta de los lugares de esparcimiento que hay en fuera de Pachuca, en ciudades o localidades cercanas.",
     isRequired: true
    },
    {
     type: "text",
     name: "P19_2",
     visibleIf: "{P19_1} notempty",
     title: "¿Alguna otra cosa que le guste?"
    },
    {
     type: "text",
     name: "P19_3",
     visibleIf: "{P19_2} notempty",
     title: "¿Alguna otra cosa más?"
    }
   ]
  },
  {
   name: "page47",
   elements: [
    {
     type: "rating",
     name: "P20",
     title: "Dígame por favor, en una escala del 1 al 10 donde 10 es súmamente necesario y 1 poco necesario. ¿Qué tan necesario es que haya más opciones de entretenimiento en la ciudad de Pachuca? ",
     isRequired: true,
     rateMax: 10
    }
   ]
  },
  {
   name: "page48",
   elements: [
    {
     type: "checkbox",
     name: "P21",
     title: "Dígame por favor, de las siguientes actividades o ideas que le voy a mencionar, Le voy a pedir que ordene del 1 al 13 donde 1 la más necesaria y 13 la menos necesaria como formas de entretenimiento que están haciendo falta en la ciudad de Pachuca:\t",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Museo infantil iteractivo"
      },
      {
       value: "2",
       text: "Museo de arte contemporáneo y exhibiciones temporales."
      },
      {
       value: "3",
       text: "Planetario."
      },
      {
       value: "4",
       text: "Parque acuático con toboganes y albercas."
      },
      {
       value: "5",
       text: "Parque de activación física, pista de aerobics, aparatos para ejercitar al aire libre, pista de bicicletas."
      },
      {
       value: "6",
       text: "Pistas de patines."
      },
      {
       value: "7",
       text: "Parque de juegos mecánicos, carrusel, rueda de la fortuna, carros chocones."
      },
      {
       value: "8",
       text: "Parque de muros de escalada, tirolesas, retos físicos."
      },
      {
       value: "9",
       text: "Aviario"
      },
      {
       value: "10",
       text: "Parque de trampolines"
      },
      {
       value: "11",
       text: "Campamento infantil de actividades ecológicas, reciclar, reusar, fogatas, exploración, reforestación."
      },
      {
       value: "12",
       text: "Parque de gotcha"
      },
      {
       value: "13",
       text: "Parque de fútbol, escuela, entrenamiento."
      }
     ]
    }
   ]
  },
  {
   name: "page49",
   elements: [
    {
     type: "imagepicker",
     name: "I2",
     title: "A continuación le presento esta nueva propuesta de entretenimiento en Pachuca, ",
     choices: [
      {
       value: "lion",
       imageLink: "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
      }
     ]
    },
    {
     type: "html",
     name: "question37",
     html: "se trata de un parque temático donde podrás aprender jugando. Mientras entras a la naturaleza, conocerás sobre animales y plantas, y te divertirás con nuestra tirolesas y paredes de escalada. Se trata de un concepto de entretenimiento educativo para toda la familia y para todas las edades”."
    }
   ]
  },
  {
   name: "page50",
   elements: [
    {
     type: "radiogroup",
     name: "P22",
     title: "De acuerdo a lo que acaba de ver y escuchar dígame por favor: ¿Qué tan nuevo y diferente considera este concepto de entretenimiento comparado con lo que hoy existe en Pachuca?",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: {
        default: "Completamente Diferente.",
        en: "Completamente nuevo y diferente."
       }
      },
      {
       value: "2",
       text: "Mucho muy nuevo y diferente."
      },
      {
       value: "3",
       text: {
        default: "Algo y diferente.",
        en: "Algo nuevo y diferente."
       }
      },
      {
       value: "4",
       text: "Poco nuevo y diferente."
      },
      {
       value: "5",
       text: "Es igual a todo lo que ya existe."
      }
     ]
    }
   ]
  },
  {
   name: "page51",
   elements: [
    {
     type: "radiogroup",
     name: "P23",
     title: "Dígame por favor, ¿Qué tanto le gustó este concepto de entretenimiento?",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Me gustó muchísimo."
      },
      {
       value: "2",
       text: "Me gustó mucho."
      },
      {
       value: "3",
       text: "Me gustó algo."
      },
      {
       value: "4",
       text: "Me gustó poco."
      },
      {
       value: "5",
       text: "No me gustó nada."
      }
     ]
    }
   ]
  },
  {
   name: "page52",
   elements: [
    {
     type: "text",
     name: "P24",
     visibleIf: "{P23} > 3",
     title: "¿Por qué me dice que {P23} este concepto de entretenimiento?",
     isRequired: true
    }
   ]
  },
  {
   name: "page53",
   elements: [
    {
     type: "radiogroup",
     name: "P25",
     visibleIf: "{P23} < 4",
     title: "Dígame por favor, ¿Qué tan dispuesto estaría en contemplar a este lugar como parte de sus opciones de entretenimiento en Pachuca?",
     isRequired: true,
     choices: [
      {
       value: "1",
       text: "Mucho muy dispuesto."
      },
      {
       value: "2",
       text: "Muy dispuesto."
      },
      {
       value: "3",
       text: "Algo dispuesto."
      },
      {
       value: "4",
       text: "Poco dispuesto."
      },
      {
       value: "5",
       text: "Nada dispuesto."
      }
     ]
    }
   ]
  },
  {
   name: "page54",
   elements: [
    {
     type: "text",
     name: "P26",
     visibleIf: "{P25} <= 3",
     title: "¿Por qué me dice que estaría {P25} a contemplar este lugar como parte de sus opciones de entretenimiento en Pachuca?",
     isRequired: true
    }
   ]
  },
  {
   name: "page55",
   elements: [
    {
     type: "text",
     name: "P27",
     title: "Nombre",
     isRequired: true
    },
    {
     type: "text",
     name: "P28",
     title: "Teléfono",
     isRequired: true,
     validators: [
      {
       type: "regex",
       text: "Ingresa un número de 10 dígitos",
       regex: "^[0-9]{10}"
      }
     ],
     inputType: "number"
    }
   ]
  }
 ],
 triggers: [
  {
   type: "complete",
   expression: "{PA2} = \"1\" or {PA2} = \"9\""
  },
  {
   type: "complete",
   expression: "{PA3} = \"2\""
  },
  {
   type: "complete",
   expression: "{PA4} = \"0\""
  },
  {
   type: "complete",
   expression: "{NSE} < \"80\" or {NSE} > \"192\""
  }
 ],
 showProgressBar: "top",
 startSurveyText: {
  es: "Iniciar encuestas",
  en: "Star survey"
 },
 pagePrevText: {
  es: "Anterior",
  en: "Before"
 },
 pageNextText: {
  es: "Siguiente",
  en: "Next"
 },
 completeText: {
  es: "Siguiente",
  en: "Next"
 },
 requiredText: ""
}
export default config
