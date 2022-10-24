// tsc.cmd - init
// tsc.cmd -- watch
// tsc.cmd  compiles [ts to js]
// "target":"es6"  "lib" default will have all necessary values
// "rootDir" to store ts files
// "outDir" to store js files
// "onEmitOnError":true not create javascript file if have error on typscript file

//  we guarantee that class  button exists "!"
const button = document.querySelector('button')!;

button?.addEventListener('click',()=>{
    console.log('Clicked');
})

