new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		userClass: 'box',
		userClass2: true,
		cor: '',
		estilo: {
			width: '100px',
			height: '100px'
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.classe1 = this.classe1 == 'destaque' ? 'encolher': 'destaque'; 
			}, 1000)
		},
		iniciarProgresso() {
			let value = 0;
			const temporizador = setInterval(()=>{
				value += Math.round(Math.random() * (5 - 1) + 1 )
				this.width = `${value}%`
				if(value == 100) clearInterval(temporizador)
			}, 500)
		},
		aumentar(e){
			if(e.target.value == 'true'){
				this.userClass2 = true
			}else if(e.target.value == 'false'){
				this.userClass2 = false
			}
			
		}
	},
})
