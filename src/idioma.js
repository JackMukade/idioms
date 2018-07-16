export default function platzom(str){

    //Se modifica esto en vez del str
    let translation = str 


    const reverse = (str) => { str.split('').reverse().join('') }

    const minMay = (str) => { 
    
        const length = str.length
        let translation = ''
        let capitalize = true

        for(let i = 0; i < length; i++){
            const char = str.chartAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize =  !capitalize

        }
        return translation
    }

    if(str === reverse(str)){
        return minMay(str)
    }



    //no modifica el str, genera uno nuevo que pregunta si termina en ar
    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0, -2)
    }

    if(str.toLowerCase().startsWith('z')){
        translation += 'pe'
    }

    if(translation.length >= 10){
        const first  = translation.slice(0, Math.round(translation.length / 2))
        const second = translation.slice(Math.round(translation.length / 2))
        translation = `${first}-${second}`
    }

    return translation
}

//necesitan usar la funcion import platzom from 'idioma.js'
//para importar se escribe el export default o export
//para requirer import{platzom} from 'idioma.js'

//se va a babel SETUPT CLI, https://babeljs.io/setup#installation

//Para test se usan mocha(corre test) y chai(valor que se requiere) npm install --save-dev mocha chai