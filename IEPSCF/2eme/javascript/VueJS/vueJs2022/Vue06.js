const app = Vue.createApp ({
    data() {
      return {
        nbre1: 0,
        nbre2: 0,
        
        operation: "+",
      };
    },
    methods: {},
    computed: {
      resultat() {
        // return Number(this.nbre1) + Number(this.nbre2);
        // méthode - pseudo avriable calculée automatiquement, depéndante de nb1 ou nb2. Un des deux change et il recalcule

        let res;
        switch(this.operation){
          case "+" :
            res = Number(this.nbre1) + Number(this.nbre2);
            break;
          case "-" :
            res = Number(this.nbre1) - Number(this.nbre2);
            break;
          case "/" :
            res = Number(this.nbre1) / Number(this.nbre2);
            break;
          case "*" :
            res = Number(this.nbre1) * Number(this.nbre2)            
        }
        return res;
      }
    }
});
app.mount('#app');