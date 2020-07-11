<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <hr>
        <button @click="changeName()">Change Name</button>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail v-bind:myName="name" @nameWasReset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return {
                name: "Max"
            }
        },
        methods: {
            changeName(){
                this.name = "Anja"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div.component {
        background-color: lightblue;
    }
</style>
