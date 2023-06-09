import { defineStore } from "pinia";
import { fetchWrapper } from "~/helpers/fetch-wrapper";

export const useCharactersStore = defineStore("characters", {
  state: () => ({
    characters: [],
    currentCharacter: {},
    isOpenDetailsCharacter: false,
    offset: 0,
    limit: 5,
    total: 0,
    currentPage: 0,
    pages: 0,
    loading: false,

  }),
  getters: {
    disabledBack: (state) => state.currentPage == 0 || state.loading,
    disabledNext: (state) => state.currentPage == state.pages || state.loading,
    isSelectedCharacter: (state) => Object.keys(state.currentCharacter).length !== 0
  },
  actions: {
    setCharactersAndPagination(payload) {
      // let pages = Math.ceil(payload.total / payload.limit); 
      this.characters = payload.results;
      this.offset = payload.offset;
      this.limit = payload.limit;
      this.total = payload.total;
      this.pages = Math.ceil(payload.total / payload.limit);
    },
    setCurrentCharacter(payload) {
      this.currentCharacter = payload
    },
    setIsOpenDetailsCharacter(payload) {
      this.isOpenDetailsCharacter = payload
    },
    setLoading(payload) {
      this.loading = payload
    },
    async getCharacters() {
      try {
        this.setLoading(true)
        const response = await fetchWrapper.get(`/characters?offset=${this.limit*this.currentPage}&limit=${this.limit}`);
        this.setCharactersAndPagination(response.data)
        this.setLoading(false)
      } catch (error) {
        console.error(error);
      }
    },
    async handlerBack() {
      if (this.currentPage != 0) {
        this.currentPage--
        await this.getCharacters()
      }
    },
    async handlerNext() {
      if (this.currentPage < this.pages) {
        this.currentPage++
        await this.getCharacters()
      }
    },
    selectCharacterAndShowDetails(payload) {
      console.log('selectCharacterAndShowDetails');
      this.setCurrentCharacter(payload)
      this.setIsOpenDetailsCharacter(true)
    }
  },
});

