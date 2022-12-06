<template>
    <v-app>
        <v-content>
            <v-container  class="fill-heigth" fluid>
                <v-row align="center" justify="center">
                    <v-col align="center" cols="12" sm="5" md="5">
                        <v-card  class="elevation-12">
                            <v-window class="col" v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col  cols="12" md="8">
                                            <v-card-text  class="mt-12">
                                                <h1 class="text-center display-2 teal--text text--accent-5">Recover Password</h1>
                                                <h4 class="text-center mlt-4">Enter the following data</h4>
                                                <v-form >
                                                
                                                    <v-text-field
                                                        v-model="email"
                                                        label="Email"
                                                        name="Email"
                                                        prepend-icon="email"
                                                        type="text"
                                                        color="teal accent-5"
                                                        :rules="emailRules"
                                                        required
                                                    />
                                                    <v-text-field
                                                        v-model="password"
                                                        :rules="passwordRules"
                                                        id="password"
                                                        label="Enter your new password"
                                                        name="password"
                                                        prepend-icon="lock"
                                                        type="password"
                                                        color="teal accent-5"
                                                        :counter="8"
                                                        required
                                                    />
                                                </v-form>
                                            </v-card-text>
                                            <div class="text-center mt-3">
                                                <router-link class="li" to="/SignIn">
                                                    <v-btn  rounded color="teal accent-5" dark>CHANGE PASSWORD</v-btn>
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
  export default {
    data: () => ({
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
.li{
    text-decoration-line: none;
}
</style>

