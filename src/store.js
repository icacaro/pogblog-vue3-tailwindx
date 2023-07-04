import { reactive } from 'vue'

export const store = reactive({
    posts: [
    {
        id: 1,
        tittle: 'Meu primeiro artigo de blog!',
        description: 'Apenas LETS',
        date: new Date()

    }, {
        id: 2,
        tittle: 'Será uma boa idéia criar um blog para estudar novas tecnologias? ',
        description: 'é claro!!!',
        date: new Date()
    },{
        id: 3,
        tittle: 'Vue > React ? ',
        description: 'o que o cu tem com as calças?',
        date: new Date()
    },{
        id: 4,
        tittle: 'Tec e Economia por James Bond',
        description: 'A tecnologia proporciona diversos benefícios aos indivíduos e suas comunidades. De acordo com a ONU, a inclusão da tecnologia é uma forma de garantir um modelo sustentável a sociedade, assim como apoiar o seu desenvolvimento econômico e ampliar sua infraestrutura. Sob essa perspectiva, se faz imprescindível destacar a tecnologia como um assunto de viés profissional e econômico no território brasileiro, o mercado de T.I destaca-se por possuir um excelente desenvolvimento, pois mesmo diante de crises, a área contínua sob constante expansão. De acordo com uma pesquisa feita pela Associação das Empresas Brasileiras de Tecnologia da Informação do Paraná (Assespro-PR), houve um crescimento de 80% no número de criação de vagas no setor de TI entre 2011 e 2021, diante disso, denota-se a área de tecnologia e informação com um possível propulsor da economia brasileira.',
        date: new Date()
    }
]
})

export default store

