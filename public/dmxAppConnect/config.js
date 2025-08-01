dmx.config({
  "main": {
    "localStorage": [
      {
        "type": "text",
        "name": "user_nome"
      },
      {
        "type": "text",
        "name": "user_filial"
      }
    ]
  },
  "backoffice": {
    "localStorage": [
      {
        "type": "text",
        "name": "Nome"
      },
      {
        "type": "text",
        "name": "Codigo"
      },
      {
        "type": "text",
        "name": "filial"
      }
    ],
    "verificacao": {
      "meta": {},
      "local": [
        {
          "type": "boolean",
          "metaData": {
            "condition": {
              "meta": [
                {
                  "type": "text",
                  "name": "Nome"
                },
                {
                  "type": "text",
                  "name": "Codigo"
                },
                {
                  "type": "text",
                  "name": "filial"
                }
              ],
              "outputType": "object"
            }
          }
        }
      ]
    }
  },
  "tabeladepreco": {
    "repeat1": {
      "meta": [],
      "outputType": "object"
    }
  }
});
