let math;

//---------------------------PART 1--------------------------------------------------------
// Let's create a function called loadWebAssembly that converts given file into binary array buffer.
function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.compile(buffer)) // Buffer converted to Web Assembly 
    .then(module => {return new WebAssembly.Instance(module) }); // Instance of Web assmebly module is returened 
};   

//We call the function for math.wasm for the given Instance. 
loadWebAssembly('math.wasm')
  .then(instance => {
    fibc = instance.exports._Z3fibi;
    console.log('Call your functions !');
  });


//---------------------------PART 2 -----------------------------------------------
// Function written in Javascript for nth fibonacci 
function fibj(n) {
  if (n <= 1)
    return n;
  return fibj(n - 1) + fibj(n - 2);
}

//This function gives the time required for C++ function
function perfoc(n) {
  var startTime = performance.now()
  var c = fibc(n)
  var endTime = performance.now()
  console.log(`Calculating nth Fibonacci with WASM took ${endTime - startTime} milliseconds,nth fibonacci is ${c}`)
}

// This function gives the time required for Javascript function
function perfoj(n) {
  var startTime = performance.now()
  var j = fibj(n)
  var endTime = performance.now()
  console.log(`Calculating nth Fibonacci with JS took ${endTime - startTime} milliseconds, nth fibonacci is ${j}`)
}

//perfoc(36)
//perfoj(36)

//fibj(45)
//fibc(45)