<template>
    <div class="base-padding">
        <h6 class="text-uppercase text-secondary font-weight-bolder pt-4">
            Review List
        </h6>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div
                class="border-bottom d-none d-md-block"
                v-for="(review, i) in reviews"
                :key="i"
            >
                <div class="row pt-4">
                    <div class="col-md-6">Josue Diaz</div>
                    <div class="col-md-6 d-flex justify-content-end">
                        <star-rating :rating="review.rating" class="fa-lg" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        {{ review.created_at | fromNow }}
                    </div>
                </div>
                <div class="row py-4">
                    <div class="col-md-12">{{ review.content }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReviewList",
    props: {
        bookableId: String
    },
    data() {
        return {
            loading: false,
            reviews: null
        };
    },
    async created() {
        this.loading = true;
        let { data } = await axios.get(
            `/api/bookables/${this.bookableId}/reviews`
        );
        this.reviews = data.data;
        this.loading = false;
    }
};
</script>

<style lang="scss" scoped>
.base-padding {
    padding: 1.25rem;
}
</style>
