import chapterService from "../../services/chapterService";

const state = {
    currentChapterImages: []
}

const getters = {
    currentChapterImages: state => {
        return state.currentChapterImages
    }
}

const actions = {
    fetchChapterPages({ commit }, chapterID) {
        chapterService.fetchChapterPages(chapterID).then(response => {
            console.log(response.data)
            commit("SET_PAGES", response.data)
        })
    }
}

const mutations = {
    SET_PAGES(state, pages) {
        state.currentChapterImages = pages;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}