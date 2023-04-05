const Router = require('express'); //1
const routes = Router(); // 2

routes.get('/rotateste',(req,res) => {
    return res.status(200).json({message:"Olá mundo 1"});
})

routes.get('/nome/', (req,res)=> {
    res.send(req.query.nome + " " +  req.query.idade);
})

routes.get('/soma/', (req,res) => {
    n1 = parseInt(req.query.n1);
    n2 = parseInt(req.query.n2);
    soma=0;
    soma = n1 + n2;
    res.json("Soma =  " + (soma));
})

routes.get('/nome/', (req,res) =>{
    req.send(req.query.nome);
})

routes.get('/',(req,res)=>{
    let obj = {
       'nome': req.query.nome,
       'idade':req.query.idade,
       mostrar:true,
       disciplinas:[
        {nome:'TDP', qtd:'20 aulas'},
        {nome:'POO', qtd:'18 aulas'}
       ],
       professores:['Luiz','joão','marcos'],
       teste:'<strong> Teste de Negrito </strong>'
   }
   res.render('home',obj)
})


module.exports = routes;