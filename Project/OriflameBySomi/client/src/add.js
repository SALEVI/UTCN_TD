function run() {
    new Vue({
      el: '#add',
      data: {
        id: '',
        message: '',
        perfume: {}
      },
      created: function () {
      },
      methods: {
       add: function(){
            console.dir(this.perfume);
            return axios.put('http://localhost:3000/perfumes', this.perfume).then(
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