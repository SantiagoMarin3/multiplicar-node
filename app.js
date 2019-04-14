const argv = require('./Config/yargs').argv;
const { crearArchivo } = require('./Multiplicar/multiplicar');
const { listarTabla } = require('./Multiplicar/multiplicar');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

//let argv2 = process.argv;
// console.log(argv.base);
// console.log('Limite', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];