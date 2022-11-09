import venusImagem from "./imagem/venus.png"
import mercurioImagem from "./imagem/mercurio.png"

const todasViagens = [
  {
  id: Math.ceil(Math.random() * 100000),
  planeta: "Vênus",
  descricao: "É o planeta mais próximo da terra, então se você está procurando aquela viagem rápida essa é a sua opção!",
  preco: 12000,
  quantidadePessoas: 1,
  tempoDeViagem: "3 dias",
  imagem: venusImagem
},
{
id: Math.ceil(Math.random() * 100000),  
planeta: "Mercúrio",
descricao: "Se você gosta de calor essa pode ser a sua melhor opção! Como ele é o planeta mais próximo do sol, sempre é quente, sem tempo ruim! Vamos lá!",
preco: 13000,
quantidadePessoas: 1,
tempoDeViagem: "5 dias",
imagem: mercurioImagem}
]

export default todasViagens