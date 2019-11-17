import Vue from "vue";
import Component from "vue-class-component";

import HeaderComponent from "../header/header.vue";

@Component({
    components: {
        Header: HeaderComponent
    }
})

export default class MainComponent extends Vue{
    public message = "Hello From Main!";

    constructor(){
        super();
    }

    mounted(){
        console.log("CREATED");
    }
}