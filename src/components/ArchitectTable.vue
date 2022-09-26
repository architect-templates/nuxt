
<template>
    <div>
        <p v-if="$fetchState.pending">Loading....</p>
        <p v-else-if="$fetchState.error">Error while fetching movies</p>
        <table class="table table-striped table-bordered" v-else>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(movie, index) in movies" :key="index">
                    <td>{{movie.name}}</td>
                    <td>{{movie.rating}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ArchitectTable extends Vue {
    movies: any;

    async fetch() {
      this.movies = await fetch(
        'https://api.localhost.architect.sh/'
      ).then(res => res.json())
    }
}
</script>
