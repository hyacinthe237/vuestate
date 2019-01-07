<template>
    <div class="stats">
        <h1>A different component</h1>
        <p>There are currently {{ countLinks }} links</p>

        <button @click="removeAllLinks" class="rm-all">Remove all links</button>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Stats',
    data() {
        return {
            msg: ''
        }
    },
    computed: {
        ...mapGetters([
            'getLinks'
        ]),

        ...mapMutations(['REMOVE_ALL']),

        ...mapActions(['removeAll'])

    },
    methods: {
        removeAllLinks() {
            this.removeAll().then(() => {
                this.msg = 'They have been removed'
            });
        }
    }
}
</script>

<style>
.rm-all {
    text-transform: uppercase;
    font-size: .8em;
    background: green;
    border: none;
    padding: 5px;
    color: white;
    cursor:pointer;
    width: 100%;
}
</style>
