let dataBase = [{
    "_id": {
      "$oid": "5968dd23fc13ae04d9000001"
    },
    "product_name": "sildenafil citrate",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"
  }, {
    "_id": {
      "$oid": "5968dd23fc13ae04d9000002"
    },
    "product_name": "Mountain Juniperus ashei",
    "supplier": "Keebler-Hilpert",
    "quantity": 292,
    "unit_cost": "$8.74"
  }, {
    "_id": {
      "$oid": "5968dd23fc13ae04d9000003"
    },
    "product_name": "Dextromathorphan HBr",
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"
  }]
  
  console.log(dataBase[0].product_name);
  console.log(dataBase[1].supplier);
  console.log(dataBase[2].product_name);

  for (const listbase of dataBase) {
    console.log(listbase);
  }