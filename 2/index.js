var addTwoNumbers = function(l1, l2) {
  var l3 = []
  for (let i = 0; i < l1.length; i++) {
    var sum = l1[i] + l2[i]
    l3[i] = sum % 10
    l3[i + 1] = (sum + l2[i + 1]) / 10
  }
  return l2
}