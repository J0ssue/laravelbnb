<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else class="container">
            <div class="row" v-for="(row, i) in rows" :key="'row-' + i">
                <div
                    class="col mb-4 d-flex align-items-stretch"
                    v-for="(bookable, i) in bookablesInRow(row)"
                    :key="'col-' + i"
                >
                    <bookable-list-item v-bind="bookable" />
                </div>
                <div
                    class="col"
                    v-for="p in placeholdersInRow(row)"
                    :key="'placeholder' + row + p"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
    name: "Bookables",
    components: {
        BookableListItem
    },
    data() {
        return {
            bookables: null,
            loading: false,
            columns: 3
        };
    },
    computed: {
        rows() {
            return this.bookables === null
                ? 0
                : Math.ceil(this.bookables.length / this.columns);
        }
    },
    methods: {
        bookablesInRow(row) {
            return this.bookables.slice(
                (row - 1) * this.columns,
                row * this.columns
            );
        },
        placeholdersInRow(row) {
            return this.columns - this.bookablesInRow(row).length;
        }
    },
    created() {
        this.loading = true;

        const data = axios
            .get("http://laravelbnb.test/api/bookables")
            .then(response => {
                this.bookables = response.data.data;
                this.loading = false;
            });
    }
};
</script>
