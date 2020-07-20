<template>
    <div>
        <div class="row">
            <div class="col-md-8 pb-4">
                <div class="card">
                    <div class="card-body">
                        <div v-if="!loading">
                            <h2 v-if="bookable.title !== null">
                                {{ bookable.title }}
                            </h2>
                            <hr />
                            <article v-if="bookable.description !== null">
                                {{ bookable.description }}
                            </article>
                        </div>
                        <div v-else>Loading...</div>
                    </div>
                </div>
                <review-list></review-list>
            </div>
            <div class="col-md-4 pb-4">
                <availability />
            </div>
        </div>
    </div>
</template>

<script>
import Availability from "./Availability";
import ReviewList from "./ReviewList";
export default {
    name: "Bookable",
    components: {
        Availability,
        ReviewList
    },
    data() {
        return {
            loading: false,
            bookable: null
        };
    },
    created() {
        this.loading = true;
        axios
            .get(
                `http://laravelbnb.test/api/bookables/${this.$route.params.id}`
            )
            .then(response => {
                this.bookable = response.data.data;
                this.loading = false;
            });
    }
};
</script>