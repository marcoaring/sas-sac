let appVue = new Vue({
    el: ".app-vue",
    data: {
        chamadas: [],
        tipo: 0,
        estado: 0,
        motivo: 0,
        mensagem: '',
        api: 'php/mostra.php'
    },

    created: function(){
        this.loadChamadas();
    },

    methods:{
        checkField: function(){
            return (this.tipo == 0 || this.estado == 0 || this.motivo == 0) ? false : true;
        },

        showMessage: function(type){
            $('.message').hide();

            if(type == 'sucess'){
                $('.message__sucess').fadeIn();
            } 

            else if(type == 'warning'){
                $('.message__warning').fadeIn();
            } 

            else{
               $('.message__error').fadeIn(); 
            }

            setTimeout(function(){
                $('.message').fadeOut();
            }, 3000);
        },

        submitForm: function(){
            let self = this;
            let validation = this.checkField();

            if(validation){
                $.ajax({
                    url: 'php/inserir.php',
                    type: 'POST',
                    data:{
                        'tipo': self.tipo,
                        'estado': self.estado,
                        'motivo': self.motivo,
                        'mensagem': self.mensagem
                    },

                    success: function(data){
                        self.tipo = 0;
                        self.estado = 0;
                        self.motivo = 0;
                        self.mensagem = '';   
                        
                        self.showMessage('sucess');
                    },

                    error: function(data){
                        self.showMessage('error');
                    }
                });
            } else{
                self.showMessage('warning');
            }
        },

        loadChamadas: function(){
            let self = this;

            $.ajax({
                dataType: 'json',
                url: self.api,
                success: function(result){
                    console.log(result);
                    self.chamadas = result;
                }
            });
        },
    }
});