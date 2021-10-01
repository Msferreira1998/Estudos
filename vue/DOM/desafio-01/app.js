new Vue({
    el: '#desafio',
    data:{
        SEU_NOME: 'Matheus Ferreira',
        IDADE: 23,
        jojoImg: 'https://i.ytimg.com/vi/1hclmYoxgg0/maxresdefault.jpg'
    },
    methods:{
        idadeX3() {
            return (this.IDADE * 3)
        },

        RandomNum: () => Math.random().toFixed(2)
    }
})