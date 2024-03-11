import { defineStore } from "pinia";



export const useStoreEssays = defineStore('storeEssays', {
  state: () => {
    return {
      essays: [{}],
      essaysLoaded: false,
    }
  },
  actions: {
    init() {

    },
    getEssays() {
      this.essaysLoaded = false;
      const essay = {
        id: 1,
        title: "The name given",
        abstract: "This is the story about the name that was given",
        content: "Once upon a time there was a person. Who knew who this person was, where this person came from, or what this person's name was even? Thus this person was given a name. It is a bit unfortunate, because no one can remember the name anymore.",
      }
      this.essays.push(essay);
    }
  }
})