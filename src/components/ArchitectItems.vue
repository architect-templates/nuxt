<template>
  <v-container>
    <h2>Favorite movies</h2>
    <div class="user_inputs">
      <label
        class="form-label">
        Movie Title
      </label>
      <input
        placeholder="Movie Title"
        type="text"
        class="form-control"
        maxlength="80"
        v-model="movie_name"
      >
    </div>
    <div class="user_inputs">
      <label
        class="form-label">
        Rating
      </label>
      <input
        placeholder="Rating 1-5"
        type="number"
        class="form-control"
        value=""
        min="1"
        max="5"
        v-model="movie_rating"
      >
    </div>
    <div class="d-grid gap-2">
      <button @click="sendData">
        Submit
      </button>
    </div>

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
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class ArchitectItems extends Vue {
  movie_name = '';
  movie_rating: string | null = null;

  movies: { name: string, rating: string }[] = [];
  loading_movies: boolean = true;

  async mounted() {
    this.movies = await this.$axios.$get('/items');
    this.loading_movies = false;
  }

  async sendData() {
    const movie = {
      name: this.movie_name,
      rating: this.movie_rating!,
    };
    await this.$axios.$post('/items', movie);
    this.movies.push(movie);
    this.movie_name = '';
    this.movie_rating = '';
  }
}
</script>
