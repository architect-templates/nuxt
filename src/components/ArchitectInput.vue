<template>
    <form @submit="sendData">
        <div class="user_inputs">
            <label for="formName" 
                class="form-label">
                Movie Title
            </label>
            <input 
                placeholder="Movie Title" 
                type="text" 
                class="form-control" 
                maxlength="80"
                v-model="movie_name">
        </div>
        <div class="user_inputs">
            <label for="forRating" 
                class="form-label">
                Rating
            </label>
            <input 
                placeholder="Rating 1-5" 
                type="number" 
                id="forRating" 
                name="forRating"
                class="form-control" 
                value=""
                min="1"
                max="5"
                v-model="rating_form"
                >
        </div>
        <div class="d-grid gap-2">
            <button type="submit">
                Submit
            </button>
        </div>
    </form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

@Component
export default class ArchitectInput extends Vue {
    movie_name = '';
    rating_form = null;

    sendData() {
        this.$axios.$post('items', {
            name: this.movie_name,
            rating: this.rating_form
        } )
    }
}

</script>
