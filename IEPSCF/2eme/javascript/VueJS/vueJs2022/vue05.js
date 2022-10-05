const app = Vue.createApp({
    data() {
      return {
        listeTaches: [
          { nom: "faire du café", terminee: true },
          { nom: "écouter la radio", terminee: false },
        ],

        nomNouvelleTache: "",
        filtrageTaches: false,
      };
    },
    methods: {
        ajouterNouvelleTache: function(){
            // console.log("Ajout d'une nouvelle tache"); Pour tester si le bouton fonctionne 
           this.nomNouvelleTache = this.nomNouvelleTache.trim();
           if(this.nomNouvelleTache == "") return;
           if(this.listeTaches.findIndex(t => t.nom == this.nomNouvelleTache) >= 0) return;
           // boucle while (pour chaque élément du tableau...)
           // pour une tâche, si le nom de cette tâche = le nom de la nouvelle tâche en xième position, on return
           this.listeTaches.push({nom:this.nomNouvelleTache, terminee:false});
           this.nomNouvelleTache= "";
        }
    },
  });
  app.mount("#app");
  