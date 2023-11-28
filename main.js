const app = Vue.createApp({
    data() {
        return {
            number: 0,        // De waarde voor het eerste inputveld
            secondNumber:0,
            isDisabled:false
        };
    },
    watch:{
       number(newVal){
           this.secondNumber= newVal;
       }
    },
    methods: {
        increment() {
            this.secondNumber += 1;
            this.isDisabled=true;
        },
        decrement() {
            if(this.secondNumber >0){
                this.secondNumber -= 1;
                this.isDisabled=true;
            }
        }
    }
})