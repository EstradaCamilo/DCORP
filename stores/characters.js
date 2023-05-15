import { defineStore } from "pinia";
import { fetchWrapper } from "~/helpers/fetch-wrapper";

export const useCharactersStore = defineStore("characters", {
  state: () => ({
    characters: [],
    offset: 0,
    limit: 5,
    total: 0,
    pages: 0,
    loading: false,
  }),
  getters: {
    disabledBack: (state) => state.offset == 0 || state.loading,
    disabledNext: (state) => state.offset == state.pages || state.loading,
  },
  actions: {
    setCharactersAndPagination(payload) {

      let pages = Math.ceil(payload.total / payload.limit);

      this.characters = payload.results;
      this.offset = payload.offset;
      this.limit = payload.limit;
      this.total = payload.total;
      this.pages = Math.ceil(payload.total / payload.limit);
    },
    setLoading(payload) {
      this.loading = payload
    },
    async getCharacters() {
      try {
        this.setLoading(true)
        const response = await fetchWrapper.get(`/characters?offset=${this.offset}&limit=${this.limit}`);
        this.setCharactersAndPagination(response.data)
        this.setLoading(false)
      } catch (error) {
        console.error(error);
      }
    },
    async handlerBack() {
      if (this.offset != 0) {
        this.offset--
        await this.getCharacters()
      }
    },
    async handlerNext() {
      if (this.offset < this.pages) {
        this.offset++
        await this.getCharacters()
      }
    }
  },
});

