<template>
    <div class="card w-100">
        <div class="card-body">
            <router-link :to="{ name: 'bookable', params: { id: id } }">
                <h5 class="card-title">{{ title }}</h5>
            </router-link>
            <p class="card-text">{{ description }}</p>
            <p class="card-text">price: {{ price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "BookableListItem",
    props: {
        title: String,
        description: String,
        price: [String, Number],
        id: [Number, String]
    }
};
</script>

<style lang="scss" scoped></style>
