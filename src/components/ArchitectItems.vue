<template>
  <v-container>
    <h1>Favorite Movie</h1>
    <form @submit.prevent="sendData">
      <v-row justify="center">
        <v-col cols="3">
          <input
            placeholder="Movie Title*"
            type="text"
            class="form-control"
            maxlength="80"
            v-model="movie_name"
            required
          />
        </v-col>
        <v-col cols="3">
          <input
            placeholder="Rating 1-5*"
            type="number"
            class="form-control"
            value=""
            min="1"
            max="5"
            v-model="movie_rating"
            required
          />
        </v-col>
      </v-row>
      <p v-if="error_message" style="color: red;">{{ error_message }}</p>
      <v-row justify="center">
        <v-col cols="4">
          <button type="submit">
            Submit
          </button>
        </v-col>
      </v-row>
    </form>

    <div class="mt-4">
      <p v-if="loading_movies">Loading....</p>
      <p v-else-if="!movies.length">No movies found</p>
      <table v-else class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(movie, index) in movies" :key="index">
            <td>{{ movie.name }}</td>
            <td>{{ movie.rating }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ArchitectItems extends Vue {
  movie_name = '';
  movie_rating: string | null = null;
  error_message: string | null = null;

  movies: { name: string, rating: string }[] = [];
  loading_movies: boolean = true;

  async mounted() {
    this.movies = await this.$axios.$get('/items');
    this.loading_movies = false;
  }

  async sendData() {
    this.error_message = null;
    const movie = {
      name: this.movie_name,
      rating: this.movie_rating!,
    };
    try {
      await this.$axios.$post('/items', movie);
      this.movies.push(movie);
      this.movie_name = '';
      this.movie_rating = '';
    } catch(err: any) {
      if (err.response.status === 409) {
        this.error_message = 'That movie already exists in our list';
      } else {
        this.error_message = 'Error submitting movie rating';
      }
    }
  }
}
</script>
