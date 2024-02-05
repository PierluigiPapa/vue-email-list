const {createApp} = Vue;

createApp({
    data(){
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            cpuGeneratorMail : null,
            emailList: [],
        };
    },
    methods: {
        generateEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get(this.apiUrl).then((data) => {
                    const result = data.data.response;
                    this.emailList.push(result);
                });
            }
        }
    },
    mounted() {
        }
    }).mount('#app');