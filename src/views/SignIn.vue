<template>
    <v-app>
        <v-content>
            <v-container class="fill-heigth" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="8">
                        <v-card @submit.prevent="" class="elevation-12">
                            <v-window class="col" v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col  cols="12" md="8">
                                            <v-card-text class="mt-12">
                                                <h1 class="text-center display-2 teal--text text--accent-5">Sign In</h1>
                                                <h4 class="text-center mlt-4">Ensure your email for registration</h4>
                                                <v-form>
                                                
                                                <v-text-field
                                                v-model="registro.emailregistro"
                                                    label="Email"
                                                    name="Email"
                                                    prepend-icon="email"
                                                    type="text"
                                                    color="teal accent-5"
                                                    :rules="emailRules"
                                                    required
                                                />
                                                <v-text-field
                                                    v-model="registro.passwordregistro"
                                                    :rules="passwordRules"
                                                    id="password"
                                                    label="Password"
                                                    name="password"
                                                    prepend-icon="lock"
                                                    type="password"
                                                    color="teal accent-5"
                                                    :counter="8"
                                                    required
                                                />
                                                </v-form>
                                                    <router-link to="/RecuPass" class="btn">
                                                         <h3 class="text-center mt-4">Forgot your password ?</h3>
                                                    </router-link>
                                            </v-card-text>
                                            <div class="text-center mt-3">
                                                <v-btn  @click="addRegistro" rounded color="teal accent-5" dark>SIGN IN</v-btn>
                                            </div>
                                        </v-col>
                                        <v-col  cols="12" md="4" class="count">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Hello, Friend!</h1>
                                                <h5 class="text-center"
                                                >Enter your personal details and start journay with us</h5>
                                            </v-card-text>
                                            <div class="text-center">
                                                <router-link class="li" to="/SignUp">
                                                    <v-btn  rounded outlined dark @click="step++">SIGN UP</v-btn>
                                                </router-link>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import axios from 'axios';
  export default {
    data: () => ({
        registro:{
            emailregistro: '',
            passwordregistro: ''
        },
        email: '',
        emailRules: [ 
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        password: '',
        passwordRules: [
            v => !! v || "Password is required",
            v => (v && v.length == 8) || 'Password must be less than 8 characters, one uppercase letter, one lowercase letter, one non-alphanumeric character, no numbers or consecutive letters.',
        ],
        }),
        props: {
            source: String
        },
        methods: {
            addRegistro(){
                let newRegistro ={
                    emailregistro: this.registro.emailregistro,
                    passwordregistro: this.registro.passwordregistro
                }
                console.log(newRegistro)
                axios.post('http://localhost:8000/api/alumno',newRegistro)
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{
                    console.log(error)
                })
            },
            
        validate () {
            this.$refs.form.validate()
        }
        },
    }
</script>

<style scoped>
.count{
    background-color:cadetblue;
    
}
.btn{
    color: black;
    text-decoration-line: none;
}
.li{
    text-decoration-line: none;
}
</style>

