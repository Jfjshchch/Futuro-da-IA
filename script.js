const caixaPerguntas = document.querySelector(".caixa-pergunta");

const caixaAlternativas = document.querySelector(".caixa-alternativa");

const caixaResultado = document.querySelector(".caixa-resultado");

const caixaResultado =document.querySelector(".texto-resultado");

const perguntas = [
{
 enunciado:
  "Como a IA afetará o mercado de trabalho no futuro?"
 
  alternativas: [
    correta: "A IA pode auxiliar na analise de grandes volumes de dados medicos, aprimorando diagnostico e tratamento personalizados."

    incorreta: "substituirá completamente os medicos"
 
  ]

},
{  
    enunciado: "Como a IA afetará o trabalho?"

    alternativas:[
     correta: "substituirá algumas funções, mas criará novas oportunidades."

   incorreta: "substituirá todos os empregos humanos."
    ]
}
{
   enunciado: "A IA tomará decisões morais?" ,
     alternativas: [
   correta: "A ia ajudará, mas não entenderá toralmente a moralidade.",
   incorreta: "A ia tomará decisões morais como um ser humano."
  ]
}