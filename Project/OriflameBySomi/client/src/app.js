function run() {
    let indexComponent = new Vue({
      el: '#app',
      data: {
        perfumes: [],
        perfumesService: null,
        message: ''
      },
      created: function () {
        this.perfumesService = perfumes();
        this.perfumesService.get().then(response => (this.perfumes = response.data));
      },
      methods: {
        deletePerfume: function(id) {
          console.log('HTTP DELETE spre backend, perfume: '+id);
          this.perfumesService.remove(id).then(response => {
            this.perfumesService.get().then(response => (this.perfumes = response.data));
          });
        },
      }
    });
  
    indexComponent.use(VueMaterial);
  
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    run();
  });
  