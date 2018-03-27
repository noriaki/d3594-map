const extractPoint = (input) => {
  const matcherWithParans = /^\((\d{1,4}),\s*?(\d{1,4})\)$/;
  const matchWithParans = input.match(matcherWithParans);
  if (matchWithParans) {
    return {
      x: parseInt(matchWithParans[1], 10),
      y: parseInt(matchWithParans[2], 10),
    };
  }

  const matcherNoParans = /^(\d{1,4}),\s*?(\d{1,4})$/;
  const matchNoParans = input.match(matcherNoParans);
  if (matchNoParans) {
    return {
      x: parseInt(matchNoParans[1], 10),
      y: parseInt(matchNoParans[2], 10),
    };
  }

  return null;
};

export default extractPoint;
