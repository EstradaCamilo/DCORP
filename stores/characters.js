import { defineStore } from "pinia";
import { fetchWrapper } from "~/helpers/fetch-wrapper";

export const useCharactersStore = defineStore("characters", {
  state: () => ({
    characters: {},
  }),
  actions: {
    setCharacters(payload) {
      this.characters = payload
    },
    async getCharacters() {
      try {
        const response = await fetchWrapper.get('/characters');
        console.log(response);

      } catch (error) {
        console.error(error);
      }
    },
  }
});
