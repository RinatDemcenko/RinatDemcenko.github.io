const calculateEngravingPrice = function (message, pricePerWord) {
    return(message.split(" ").length*pricePerWord)
  };
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  );
