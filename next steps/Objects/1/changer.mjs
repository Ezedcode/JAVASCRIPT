function fn_capitalize(vector) {
  var array = [];
  for (let x in vector) {
    let star = vector[x].charAt(0).toUpperCase();
    let restTx = vector[x].slice(1);
    array[x] = star + restTx;
  }
  return array;
}

function fn_order(vector) {
  return vector.sort(function (a, b) {
    return a.localeCompare(b);
  });
}

export default {
  capitalize: fn_capitalize,
  order: fn_order,
};
