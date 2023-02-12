// rhombus
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  const space = "<span style='color: white;'>" + pSymbol + "</span>";
  const evenSymbol =
    "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
  const oddSymbol =
    "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
  let r = "";

  // top half
  for (let i = 1; i <= pHeight; i++) {
    for (let j = 1; j <= pHeight - i; j++) {
      r += space;
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k % 2 == 0) {
        r += evenSymbol;
      } else {
        r += oddSymbol;
      }
    }
    r += "<br>"
  }

  // bottom half 
  for (let i = pHeight - 1; i >= 1; i--) {
    for (let j = 1; j <= pHeight - i; j++) {
      r += space;
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k % 2 == 0) {
        r += evenSymbol;
      } else {
        r += oddSymbol;
      }
    }
    r += "<br>"
  }

  document.getElementById("rhombus").innerHTML = r;
}
