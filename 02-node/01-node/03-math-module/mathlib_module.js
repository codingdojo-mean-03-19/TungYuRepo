module.exports = function (){
    return {
      add: function(num1, num2) { 
           // add code here 
           console.log("Answer:", num1 + num2)
      },
      multiply: function(num1, num2) {
           // add code here
           console.log("Answer:", num1 * num2) 
      },
      square: function(num) {
           // add code here
           console.log("Answer:", num * num)
      },
      random: function(num1, num2) {
           // add code here
           console.log("The random number is:", Math.floor(Math.random() * num2) + num1);
      }
    }
  };
  


//   module.exports = function () {
// 	return {
// 		add: function(a, b) {
// 			return a + b;
// 		},
// 		multiply: function(a, b) {
// 			return a * b;
// 		},
// 		square: function(a) {
// 			return a * a;
// 		},
// 		random: function(a, b) {
// 			return Math.floor(Math.random() * 35) + 1;
// 		}
// 	};
// };