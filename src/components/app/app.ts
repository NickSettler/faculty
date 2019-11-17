import Vue from "vue";
import Component from "vue-class-component";

import HeaderComponent from "../header/header.vue";

@Component({
    components: {
        Header: HeaderComponent
    }
})

export default class AppComponent extends Vue{
    
}