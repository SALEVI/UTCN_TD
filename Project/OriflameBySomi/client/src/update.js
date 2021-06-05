function run() {
    new Vue({
      el: '#update',
      data: {
        id: '',
        message: '',
        perfume: {}
      },
      created: function () {

        let uri = window.location.search.substring(1);
        let params = new URLSearchParams(uri);
        this.id = params.get("id");

        axios.get('http://localhost:3000/perfumes/'+this.id).then(
            (response) => {
                this.perfume = response.data;
            }
        );
      },
      methods: {
        update: function(){
            console.dir(this.perfume);

            return axios.post('http://localhost:3000/perfumes', this.perfume).then(
                (response) => {
                    this.message = response.data; // saved
                }
            );
        }
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    run();
  });
  