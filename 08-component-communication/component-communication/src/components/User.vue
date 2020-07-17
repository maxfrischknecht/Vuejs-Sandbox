<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <hr>
        <button @click="changeName()">Change Name</button>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- @nameWasReset is a function of the child returning a new name -->
                <app-user-detail 
                    v-bind:myName="name" 
                    :userAge="age"
                    v-bind:resetFn="resetName"
                    @nameWasReset="name = $event">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge="age"  
                    @ageWasEdited="age = $event"
                ></app-user-edit>
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
                name: "Max",
                age: 27
            }
        },
        methods: {
            changeName(){
                this.name = "Anja"
            },
            resetName(){
                this.name = "Max"
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
