let appVue = new Vue({
    el: ".app-vue",
    data: {
        searchResults: []
    },

    created: function(){
        //this.loadPosts();
    },

    methods:{
        /*loadPosts: function(){
            let self = this;
            let type = this.getUrlParameter('type');
            let filter = (type) ? '&filter[meta_key]=categoria_imdb&filter[meta_value]=' + type : '';

            console.log(type);

            $.ajax({
                url: self.wpApi + "entretenimento?author=" + self.user + filter,
                success: function(result){
                    let id = '';

                    $.each(result, function(index, card){
                        id = card.acf.id_imdb;
                        $.ajax({
                            url: self.imdbApi + "i=" + id,
                            success: function(cardItem){
                                self.posts.push(cardItem);
                            }
                        });
                    });
                }
            });
        }*/
    },

    watch: {
    }
});