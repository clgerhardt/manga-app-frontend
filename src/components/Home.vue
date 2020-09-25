<template>
    <div>
        <v-container>
            <v-row v-for="image in images" v-bind:key="image.id" justify="center" >
                <v-col cols="6" style="padding-top: 0%; padding-bottom: 0%;">
                    <v-img :src="'data:image/png;base64,'+image.page">
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
// import chapterService from '@/services/chapterService'
// import axios from "axios";
import { mapActions } from "vuex";

export default {
    data: () => {
        return {
            images: []
        }
    },
    mounted() {
        // let chapterId = `af6ada3c-f628-11ea-8b89-049226c275e4`
        // axios.get(
        //     `http://localhost:8000/chapters/get_chapter_pages?id=${chapterId}`,
        // )
        // .then(response => {
        //     console.log(response)
        //     this.images = response.data.pages
        // })
        this.fetchChapterPages({id: `af6ada3c-f628-11ea-8b89-049226c275e4`})
    },
    methods: {
        ...mapActions("chapters", ["fetchChapterPages"])
    }   
}
</script>