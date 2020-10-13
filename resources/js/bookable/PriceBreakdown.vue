<template>
    <div>
        <h6 class="text-uppercase text-secondary font-weight-bolder">
            Price Breakdown
        </h6>

        <div
            v-for="(days, price) in price.breakdown"
            :key="price"
            class="py-2 border-bottom border-top d-flex justify-content-between"
        >
            <span>{{ days }} x ${{ price }}</span>
            <div>${{ days * price }}</div>
        </div>

        <div class="font-weight-bolder d-flex justify-content-between pt-2">
            <span>Total</span>
            <span>${{ price.total }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        price: Object
    }
};
</script>

<style lang="scss" scoped></style>
