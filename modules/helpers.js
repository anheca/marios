const formatoMexico = (number) => {
  let arr = number.toString().split('.');
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1,';

  arr[1] === undefined
    ? arr[1] = '00'
    : arr[1].length === 1
      ? arr[1] += '0'
      : arr[1] = arr[1]

  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function trunc(x, posiciones = 0) {
  var s = x.toString()
  var l = s.length
  var decimalLength = s.indexOf('.') + 1

  if (l - decimalLength <= posiciones) {
    return x
  }
  // Parte decimal del número
  var isNeg = x < 0
  var decimal = x % 1
  var entera = isNeg ? Math.ceil(x) : Math.floor(x)

  var decimalFormated = Math.floor(
    Math.abs(decimal) * Math.pow(10, posiciones)
  )

  var finalNum = entera +
    ((decimalFormated / Math.pow(10, posiciones)) * (isNeg ? -1 : 1))

  return finalNum
}


function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export { formatoMexico, trunc, capitalize }