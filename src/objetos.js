import venusImagem from "./imagem/venus.png"
import mercurioImagem from "./imagem/mercurio.png"
import marteImagem from "./imagem/marte.png"
import jupiterImagem from "./imagem/jupiter.png"
import saturnoImagem from "./imagem/saturno.png"
import uranoImagem from "./imagem/urano.png"
import netunoImagem from "./imagem/netuno.png"

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
  imagem: mercurioImagem
},
{
  id: Math.ceil(Math.random() * 100000),  
  planeta: "Marte",
  descricao: "O planeta vermelho é a melhor opção para você viajante que procura um lugar com clima mais ameno!",
  preco: 13480,
  quantidadePessoas: 1,
  tempoDeViagem: "9 dias",
  imagem: marteImagem},
{
  id: Math.ceil(Math.random() * 100000),  
  planeta: "Júpiter",
  descricao: "Ele eé o maior planeta do Sistema Solar, então você vai ter muitas opções de lazer! É o planeta ideal para vpcê que quer uma viagem mais longa!",
  preco: 13000,
  quantidadePessoas: 1,
  tempoDeViagem: "11 dias",
  imagem: jupiterImagem
},
{
  id: Math.ceil(Math.random() * 100000),  
  planeta: "Saturno",
  descricao: "É a sua chance de conhecer esses anéis tão famosos! É um planeta para quem gosta de frio! Lá o dia dura apenas 10h e 14 minutos então corre!!!!",
  preco: 16990,
  quantidadePessoas: 1,
  tempoDeViagem: "23 dias",
  imagem: saturnoImagem
},
{
  id: Math.ceil(Math.random() * 100000),  
  planeta: "Urano",
  descricao: "Você gosta de frio? Tem certeza?? Então este é o seu lugar!!!! Urano é o planeta mais frio do sistema solar! Bora lá!",
  preco: 18750,
  quantidadePessoas: 1,
  tempoDeViagem: "26 dias",
  imagem: uranoImagem
},
{
  id: Math.ceil(Math.random() * 100000),  
  planeta: "Netuno",
  descricao: "Curte ventos fortes? Então este é o seu planeta! Netuno tem os ventos mais fortes do Sistema Solar, podendo chegar à 2.100 km/h!",
  preco: 23000,
  quantidadePessoas: 1,
  tempoDeViagem: "42 dias",
  imagem: netunoImagem
},
]

export default todasViagens