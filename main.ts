const wasmCode = await Deno.readFile("./target/wasm32-unknown-unknown/debug/wasm_deno_example.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const age = wasmInstance.exports.age as CallableFunction
const yourAge = age(2020, 1994)
console.log(yourAge);
