import { AdditionalExternalData } from "../interfaces-types/search-pqrs.interface";

export const DATA_DUMMY_SERVICE = {
  "pqrs": {
    "id": 33,
    "applicant_type": 1,
    "description_facts": "PRUEBA INICIO",
    "is_anonymous": 0,
    "created_at": "2024-05-07T15:11:23.000000Z",
    "updated_at": "2024-05-07T15:15:40.000000Z",
    "state": "Cerrado",
    "applicant_type_name": "Externo",
    "color_state": {
      "id": 3,
      "name": "Ok",
      "color": "#92D151",
      "applicant_type": 1
    },
    "additional_external_data": {
      "id": 32,
      "pqrs_id": 33,
      "first_name": "LAURA",
      "second_name": null,
      "first_last_name": "MALAGÓN",
      "second_last_name": null,
      "phone": "1234567878",
      "created_at": "2024-05-07T15:11:23.000000Z",
      "updated_at": "2024-05-07T15:11:23.000000Z",
      "created_by": 0,
      "cel_phone": "1234567",
      "email": "LAURA.M@MONTECHELO.COM.CO",
      "sub_incident": null,
      "document_type": {
        "id": 1,
        "name": "CÉDULA DE CIUDADANÍA"
      },
      "gender": {
        "id": 1,
        "name": "FEMENINO"
      },
      "claimant_type": {
        "id": 1,
        "name": "TRABAJADOR RETIRADO"
      },
      "company": {
        "id": 3,
        "name": "MONTECHELO INVERSIONES SAS"
      }
    },
    "applicant": {
      "id": 3,
      "name": "LAURA VIVIANA MALAGÓN MATEUS",
      "document": "1101174755",
      "email": "LAURA.M@MONTECHELO.COM.CO",
      "phone": "1234567"
    },
    "survey": null,
    "procedure": {
      "id": 1,
      "name": "PQRS"
    },
    "incident": {
      "id": 3,
      "name": "Reclamo"
    },
    "pqrs_state": {
      "id": 4,
      "name": "Solucionado"
    },
    "attachments": [
      {
        "id": 112,
        "name": "Paz_y_salvo (5).pdf"
      }
    ],
    "managements": [
      {
        "id": 32,
        "response": "OBSERVACION CIERRE",
        "responsible": {
          "id": 4,
          "rrhh_id": 20805,
          "ciu_role": "admin_pqrs",
          "name": "EDWIN SANCHEZ",
          "document": "CC-1032443628",
          "email": "E.DAVID.SANCHEZ.B@GMAIL.COM",
          "phone": null
        },
        "attachments": [],
        "management_state": {
          "id": 3,
          "name": "PQRS Resuelta",
          "description": "PQRS Resuelta",
          "pqrs_state": {
            "id": 4,
            "name": "Solucionado",
            "description": "durante su gestión se elige PQRS resuelta"
          }
        },
        "prioritie": {
          "id": 2,
          "name": "Media",
          "description": "Media"
        }
      },
      {
        "id": 31,
        "response": "Voy a solucionar.",
        "responsible": {
          "id": 4,
          "rrhh_id": 20805,
          "ciu_role": "admin_pqrs",
          "name": "EDWIN SANCHEZ",
          "document": "CC-1032443628",
          "email": "E.DAVID.SANCHEZ.B@GMAIL.COM",
          "phone": null
        },
        "attachments": [
          {
            "id": 26,
            "name": "06-05-2024 - soul_public_login - 3.pdf"
          }
        ],
        "management_state": {
          "id": 4,
          "name": "Pendiente Verificación",
          "description": "Pendiente Verificación",
          "pqrs_state": {
            "id": 8,
            "name": "Devuelta gerstor",
            "description": "Cuando está pendiente por verificacion"
          }
        },
        "prioritie": {
          "id": 2,
          "name": "Media",
          "description": "Media"
        }
      },
      {
        "id": 30,
        "response": "PRUEBA ESCALAMIENTO",
        "responsible": {
          "id": 2,
          "rrhh_id": 24973,
          "ciu_role": "soluciona_externas",
          "name": "FABIAN DURAN",
          "document": "CC-1015438482",
          "email": "laura.m@montechelo.com.co",
          "phone": null
        },
        "attachments": [
          {
            "id": 25,
            "name": "Paz_y_salvo (5).pdf"
          }
        ],
        "management_state": {
          "id": 1,
          "name": "Pendiente Respuesta",
          "description": "Pendiente Respuesta",
          "pqrs_state": {
            "id": 5,
            "name": "Pendiente solución",
            "description": "durante su gestión se elige Pendiente respuesta, es decir, se reasigna"
          }
        },
        "prioritie": {
          "id": 2,
          "name": "Media",
          "description": "Media"
        }
      }
    ],
    "traffic_light": {
      "id": 3,
      "name": "Ok",
      "color": "#92D151",
      "applicant_type": 1
    }
  }
};

export const DATA_DUMMY: AdditionalExternalData[] = [
  {
    "id": 32,
    "pqrs_id": 33,
    "first_name": "LAURA",
    "second_name": null,
    "first_last_name": "MALAGÓN",
    "second_last_name": null,
    "phone": "1234567878",
    "created_at": "07/05/2024 - 10:11",
    "updated_at": "2024-05-07T15:11:23.000000Z",
    "created_by": 0,
    "cel_phone": "1234567",
    "email": "LAURA.M@MONTECHELO.COM.CO",
    "document_type": {
      "id": 1,
      "name": "CÉDULA DE CIUDADANÍA"
    },
    "gender": {
      "id": 1,
      "name": "FEMENINO"
    },
    "claimant_type": {
      "id": 1,
      "name": "TRABAJADOR RETIRADO"
    },
    "company": {
      "id": 3,
      "name": "MONTECHELO INVERSIONES SAS"
    },
    "document_type_id": 1,
    "num_document": "1101174755",
    "incident_id": 3,
    "sub_incident": null,
    "text_incident": "Reclamo",
    "is_anonymous": 0,
    "description_facts": "PRUEBA INICIO",
    "gender_id": 1,
    "claimant_type_id": 1,
    "company_id": 3,
    "files": [
      {
        "id": 112,
        "name": "Paz_y_salvo (5).pdf"
      }
    ],
    "managements": [
      {
        "id": 32,
        "response": "OBSERVACION CIERRE",
        "responsible": {
          "id": 4,
          "rrhh_id": 20805,
          "ciu_role": "admin_pqrs",
          "name": "EDWIN SANCHEZ",
          "document": "CC-1032443628",
          "email": "E.DAVID.SANCHEZ.B@GMAIL.COM",
          "phone": null
        },
        "attachments": [],
        "management_state": {
          "id": 3,
          "name": "PQRS Resuelta",
          "description": "PQRS Resuelta",
          "pqrs_state": {
            "id": 4,
            "name": "Solucionado",
            "description": "durante su gestión se elige PQRS resuelta"
          }
        },
        "prioritie": {
          "id": 2,
          "name": "Media",
          "description": "Media"
        }
      },
      {
        "id": 31,
        "response": "Voy a solucionar.",
        "responsible": {
          "id": 4,
          "rrhh_id": 20805,
          "ciu_role": "admin_pqrs",
          "name": "EDWIN SANCHEZ",
          "document": "CC-1032443628",
          "email": "E.DAVID.SANCHEZ.B@GMAIL.COM",
          "phone": null
        },
        "attachments": [
          {
            "id": 26,
            "name": "06-05-2024 - soul_public_login - 3.pdf"
          }
        ],
        "management_state": {
          "id": 4,
          "name": "Pendiente Verificación",
          "description": "Pendiente Verificación",
          "pqrs_state": {
            "id": 8,
            "name": "Devuelta gerstor",
            "description": "Cuando está pendiente por verificacion"
          }
        },
        "prioritie": {
          "id": 2,
          "name": "Media",
          "description": "Media"
        }
      },
      {
        "id": 30,
        "response": "PRUEBA ESCALAMIENTO",
        "responsible": {
          "id": 2,
          "rrhh_id": 24973,
          "ciu_role": "soluciona_externas",
          "name": "FABIAN DURAN",
          "document": "CC-1015438482",
          "email": "laura.m@montechelo.com.co",
          "phone": null
        },
        "attachments": [
          {
            "id": 25,
            "name": "Paz_y_salvo (5).pdf"
          }
        ],
        "management_state": {
          "id": 1,
          "name": "Pendiente Respuesta",
          "description": "Pendiente Respuesta",
          "pqrs_state": {
            "id": 5,
            "name": "Pendiente solución",
            "description": "durante su gestión se elige Pendiente respuesta, es decir, se reasigna"
          }
        },
        "prioritie": {
          "id": 2,
          "name": "Media",
          "description": "Media"
        }
      }
    ],
    "state": "Cerrado",
    "text_sub_incident": "N/R",
    "date": "07/05/2024 - 10:11"
  }
];