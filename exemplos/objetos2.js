const filmes = [
    { 
        id          :   1,
        titulo      :   "Dilema das Redes",
        descricao   :  "Um Documentário sobre tecnologia",
        duracao     :   120
    },
    { 
        id          :   2,
        titulo      :   "Us",
        descricao   :  "Um filme de terror legal",
        duracao     :   130
    },
    { 
        id          :   3,
        titulo      :   "Corra",
        descricao   :  "Um filme de suspense legal",
        duracao     :   90
    }
]

const [{id, titulo, descricao, duracao}] = filmes

filmes.map(filme => console.log(filme.descricao))

