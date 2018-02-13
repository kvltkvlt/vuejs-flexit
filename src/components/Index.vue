<template>

    <div>
        <p>NEWS: {{content}}</p>
        <hr>
        <p>Date: {{date}}</p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                content: [],
                date: [],
                errors: []
            };
        },

        created() {
            axios.get('http://localhost:7080/')
                .then(response => {
                    this.msg = response.data;
                    this.content = this.msg.content;
                    this.date = this.msg.date;
                })
                .catch(e => {
                    this.errors.push(e);
                })
        }
    }
</script>