/**
 * GEN EMAIL LIST
 */

/**
 * Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
 *  generare 10 indirizzi email e stamparli in pagina all'interno di una lista con Vue JS e Axios.
 *
 * 
 *  Bonus
 * Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */

const app = new Vue({
    el: '#app',
    data: {
        contEmail: [],
        loading: false,
    },
    computed: {
        loadingStatus() {
                if (this.contEmail.length === 10) {
                   return this.loading = true;
                }
            console.log(this.contEmail.length);
            },
    },
   
    created() {
        //AJAX REQUEST  
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(emailList => {
                //SUCCESS
                //console.log(emailList.data.response);
                return this.contEmail.push(emailList.data.response);
            })
            .catch(err => {
                //ERROR
                console.log(err);
            })
        }

       
        console.log(this.contEmail);
    }
    
});