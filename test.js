const test = "geeks";

String.prototype.subString = function () {
  var subset = [];
  for (var m = 0; m < this.length; m++) {
    for (var n = m + 1; n < this.length + 1; n++) {
      subset.push(this.slice(m, n));
    }
  }
  return subset;
};
console.log(test.subString());