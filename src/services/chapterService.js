import api from "@/services/api";

export default {
    fetchChapterPages(payload) {
        return api.post(`chapters/get_chapter_pages`, payload)
        .then(response => response.data );
    },
};