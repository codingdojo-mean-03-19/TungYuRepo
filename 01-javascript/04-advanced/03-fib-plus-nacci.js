function fib() {
    // Some variables here
    let fib0 = 0;
    let fib1 = 1;
    function nacci() {
      // do something to those variables here
      const temp = fib0; 
      console.log(fib1);

      fib0 = fib1;
      fib1 = fib1 + temp;
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  