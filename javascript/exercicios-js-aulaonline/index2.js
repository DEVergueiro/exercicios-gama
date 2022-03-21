const empresa = "Sistema Omma";
console.log(`Seja Bem Vindo ao ${empresa}`);

const receitas = [
    {
        id: 1,
        titulo: "Cachorro quente",
        dificuldade: "simples",
        ingredientes: ["um pão de leite", "uma salsicha", "maionese"],
        preparo: "sdvsvnnl smllnlsnlv knlfnlsng",
        link: "youtube.com",
        vegano: true,
    },
];
console.log(receitas);

function cadastrarReceita(id,titulo,dificuldade,ingredientes,preparo,link,vegano) {
    const novaReceita = {id,titulo,dificuldade,ingredientes,preparo,link,vegano}
    receitas.push(novaReceita)
    console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
}
cadastrarReceita (2,'Cocada','intermediário',["coco ralado", 'leite condensado'],'hddshsfllglg nkfnknkngkngk', 'youtube', true);
console.log(receitas);

function exibirReceitas (){
    for(let i = 0; i < receitas.length;i++){
       console.log("Receita de: ",receitas[i].titulo);
       console.log("Ingredientes: ",receitas[i].ingredientes);
       console.log("Receita vegana: ",receitas[i].vegano);
       console.log("______________________________");
    };
};
exibirReceitas();

function deletarReceita(id) {
    for (let i = 0; i < receitas.length; i++) {
        if (id === receitas[i].id) {
            receitas.splice(i,1);
            console.log('\nReceita Deletada!\n');
        }else{
            console.log('\nReceita não Encontrada!\n');
        } 
    }
}
deletarReceita(1)