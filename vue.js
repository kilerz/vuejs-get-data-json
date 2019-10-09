new Vue({
    el: '#app',
    data: {
        json: null
    },
    created: function () {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(r => r.json())
        .then(json => {
          this.json=json;
        });
    }
});