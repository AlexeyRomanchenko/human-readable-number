const digits = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const teens = [ 'eleven', 'twelve', 'thirteen','fourteen', 'fifteen','sixteen','seventeen','eighteen','nineteen'];
const decimals = ['twenty', 'thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (num) {
    if(num === 0) {
        return 'zero';
    }
    if(typeof(num) == "undefined") return;
    switch(num.toString().length) {
      case 1 :
        return digits[num];
      case 2 :
        return showDecimals(num);
      case 3: 
      return `${digits[num.toString()[0]]} hundred ${showDecimals(num.toString().slice(1,3))}`.trim();
    }
}

const showDecimals = (num) => {
    num = +num;
   if (num < 11) {
     return showSimpleDigits(num);
   }else if (num < 20) {
     return teens[num.toString().slice(1,2)-1];
   } else if(num === 20) {
     return decimals[0];
   } else {
     return `${decimals[num.toString()[0]-2]} ${digits[num.toString()[1]]}`.trim();
   }
  };

  const showSimpleDigits = (num) => {
   return digits[+num];
  };
