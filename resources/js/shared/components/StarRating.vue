<template>
    <div class="d-flex">
        <i
            class="fas fa-star"
            v-for="star in fullStars"
            :key="'full' + star"
        ></i>
        <i class="fas fa-star-half-alt" v-if="halfStar"></i>
        <i
            class="far fa-star"
            v-for="star in emptyStars"
            :key="'empty' + star"
        ></i>
    </div>
</template>

<script>
export default {
    name: "StarRating",
    props: {
        rating: Number
    },
    computed: {
        halfStar() {
            const fraction =
                this.rating - Math.round(Math.floor(this.rating) * 100);
            return fraction > 0 && fraction > 50;
        },
        fullStars() {
            // > 4.5 = 5 stars
            // 4.3 = 4 and half
            return Math.round(this.rating);
        },
        emptyStars() {
            // if rating would be 1.9 ceil(1.9) = 2, 5 - 2 = 3,
            // render 3 empty stars
            return 5 - Math.ceil(this.rating);
        }
    }
};
</script>

<style lang="scss" scoped></style>
