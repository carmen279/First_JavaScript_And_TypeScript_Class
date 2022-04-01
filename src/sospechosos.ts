/*
  Vamos a tener una clase que describe a los sospechosos.
  Cada instancia almacena los datos fisicos de un sospechoso.
  Cada sospechoso tiene un dato de la persona culpable
  Nadie miente
  El tip es privado, para que confiese necesitaremos un método
  Vamos a tener una clase detective
  El detective va a tener un método para investigar
  El metodo de investigar recibe un array de sospechosos
  Y devuelve al único culpable que hay
  OPCIONAL: Podeis ponerle datos personales si quereis pero no es obligatorio. Podeis implementar
  una clase persona de la que heredan el detective y los sospechosos.
*/

// Con estos datos vais a tener que montar las instancias
const names = ["Willy", "Ivan", "Ramiro"];
const eyeColor = ["azul", "marron", "azul"];
const height = ["bajo", "alto", "alto"];
const tattooed = [true, false, false];
const tip = [
    {
        height: "alto",
    },
    {
        eyeColor: "marron",
    },
    {
        tattooed: false,
    },
];

// Aqui están los objetos ya montados
const suspects = [
    {
        name: "Willy",
        eyeColor: "azul",
        height: "bajo",
        tattooed: true,
        tip: {
            height: "alto",
        },
    },
    {
        name: "Ivan",
        eyeColor: "marron",
        height: "alto",
        tattooed: false,
        tip: {
            eyeColor: "marron",
        },
    },
    {
        name: "Ramiro",
        eyeColor: "azul",
        height: "alto",
        tattooed: false,
        tip: {
            tattooed: false,
        },
    },
];

class Suspect {
    name:string
    eyeColor:string
    height:string
    tattooed:boolean
    private tip:Object

    constructor(personName:string = '', eyeColor:string = '', height:string = '', tattooed:boolean = false, tip:Object = null) {
        this.name = personName;
        this.eyeColor = eyeColor;
        this.height = height;
        this.tattooed = tattooed;
        this.tip = tip;
    }

    interrogate(){
        return this.tip;
    }
}

class Detective {

    investigate(suspects:Suspect[]):string{
        let guilty :Suspect = null
        let remainingSuspects = [...suspects]

        for (const investigated of suspects){
          const hint = investigated.interrogate();
          const hintkey = Object.keys(hint)[0]
          remainingSuspects = remainingSuspects.filter(suspect => suspect[hintkey] === hint[hintkey])
        }

        guilty = remainingSuspects[0]
        return guilty.name;
    }
}

export function playInvestigation (){
    const suspects = generateSuspects()
    const detective = new Detective()

    console.log(`${detective.investigate(suspects)} was found guilty!`);
}

function generateSuspects(){
    let suspectsarray = []
    for (let suspect of suspects){
        let suspectObj = new Suspect(suspect.name, suspect.eyeColor, suspect.height, suspect.tattooed, suspect.tip)
        suspectsarray = [...suspectsarray, suspectObj]
    }

    return suspectsarray
}