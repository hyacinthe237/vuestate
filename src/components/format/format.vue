<template lang="html">
    <td>{{ format() }}</td>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        val: {
            type: Object,
            default: () => {}
        }
    },

    methods: {
        format () {
            return moment(this.val.created_at).format('DD/MM/YYYY HH:ss')
        }
    }
}
</script>
