import Vue from "vue";
import Component from "vue-class-component";
import Topic from "../../classes/topic/topic";
import Firebase from "../../classes/firebase/firebase";

@Component({
    
})

export default class TopicsComponent extends Vue{
    public topics: Array<Topic> = [];

    created(){
        console.log(this.topics);
        Firebase.db.collection("topics").get().then(query => {
            query.forEach(doc => {
                this.topics.push(new Topic(doc.data().name));
            })
            console.log("wijqw");
        }).catch(error => {
            console.error(error);
        })
    }
}