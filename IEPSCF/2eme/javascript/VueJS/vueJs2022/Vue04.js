const app = Vue.createApp({
  data() {
    return {
      listeTaches: [
        { nom: "faire du café", terminee: true },
        { nom: "écouter la radio", terminee: false },
      ],
    };
  },
  methods: {},
});
app.mount("#app");
