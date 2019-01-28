const commander = require('commander');
const service = require('./service');
const Personagens = require('./personagens');

async function main(){
    commander.version('V-1.0')
    .option('-n, --nome [value]',"Nome do Personagem")
    .option('-b, --buscar',"Buscar personagem")
    .parse(process.argv);

    const personagem = new Personagens(commander);
    console.log(personagem.nome);
    try {
        if(commander.buscar){
             const result = await service.getPersonagens(personagem.nome);
             console.log(result);
            return; 
        }
    } catch (error) {
        console.error('Deu erro -> ',error);
    }
}
main();