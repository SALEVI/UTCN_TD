function perfumes() {
    get = function () {
      return axios.get('http://localhost:3000/perfumes');
    };
  
    remove = function (index) {
      return axios.delete('http://localhost:3000/perfumes/'+index);
    };
  
    return {
      get: get,
      remove: remove
    };
  }
  