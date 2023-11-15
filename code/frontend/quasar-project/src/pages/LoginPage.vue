<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="pt-0-important bg-auth">
      <q-page>
        <div class="row" style="height: 100vh">
          <div class="col-12 flex content-center justify-center">
                  
            <q-card class="q-ma-xl">
              <div class="row">
                <div class="col-0 col-sm-5 bg-primary rounded-left-borders xs-hide">
                  <div class="row q-ml-sm q-mt-sm">
                    <div class="col-12 justify-center fredoka text-subtitle1">
                      <div class="text-white" style="text-decoration: none" to="/">
                      </div>
                    </div>
                  </div>
                  <div class="row  q-px-xl q-pb-xl flex flex-center">
                    <div class="">
                      <q-img
                        src="../assets/coffee.jpg"
                       
                      />
                      <div class="text-subtitle1 text-uppercase text-white fredoka" >WELCOME TO UNTITLED CAFE!</div>
                      <div class="text-white q-my-sm text-subtitle6"></div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-7">
                  <div class="row q-pa-sm-sm q-pa-md">
                    <div class="col-12">
                      <q-card-section>
                        <div class="q-mb-xl">
                          <div class="flex justify-center">
                            <div class="text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka">Login</div>
                          </div>
                        </div>
                        <q-form class="q-gutter-md" @submit="submitForm">
                          <!-- <q-input  label="Nome de usuário"
                                  v-bind="$input"/>
                          <q-input  label="Senha" 
                                  name="password" type="password" v-bind="$input"/> -->
                        <q-input
                          v-model="form.id"
                          label="ID"
                          outlined
                        />
                        <q-input
                          v-model="form.password"
                          label="Password"
                          type="password"
                          outlined
                        />
                          <div>
                            <q-btn class="full-width fredoka" color="primary" label="Login" @click="login()"
                                  type="submit">
                            </q-btn>
                           
                          </div>
                        </q-form>
                      </q-card-section>
                    </div>
                  </div>
                </div>
              </div>
            </q-card>

          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>



<script>
import { api } from 'boot/axios';
import store from 'src/store/index';
export default {
  name: "loginPage",
  data() {
    return {
      title: "Login",
      email: "",
      password: "",
      regEmail: "",
      regPassword: "",
      regRePassword: "",
      register: false,
      passwordFieldType: "password",
      btnLabel: "Log in",
      visibility: false,
      visibilityIcon: "visibility",
      rePasswordFieldType: "password",
      revisibility: false,
      revisibilityIcon: "visibility",
      forget: false,
      name: "",
      form: {
        id: '',
        password: ''
      }
    };
  },
  watch: {
    regRePassword() {
      if (this.regPassword) {
        this.diffPassword;
      }
    },
  },
  methods: {
    required(val) {
      return (val && val.length > 0) || "Email is required";
    },
    diffPassword(val) {
      const val2 = this.regPassword;
      return val === val2 || "Repeated Password is not the same as Password!";
    },
    short(val) {
      return (val && val.length > 3) || "Password is too short";
    },
    isEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Please enter a valid email address";
    },
    async getUserRole() {
      try {
        const sessionToken = store.state.sessionToken;
        const response = await api.get('http://116.87.140.63:5000/api/v1/getUserProfile', {
          headers: {
            Authorization: `Bearer ${sessionToken}`,
          },
        });

        if (response.status === 200) {
          const userType = response.data.message.Type;
          switch (userType) {
            case 'Administrator':
              return 'administrator';
            case 'Staff':
              return 'staff';
            case 'Owner':
              return 'owner';
            default:
              return 'manager';
          }
        } else {
          console.error(`Failed to retrieve user profile. Status: ${response.status}`);
          return 'unknown';
        }
      } catch (error) {
        console.error('Error retrieving user profile:', error);
        return 'unknown';
      }
    },
    onSubmit() {
      
      this.$q.notify({
        icon: "done",
        color: "positive",
        message: "done",
        position: "top",
      });
      this.$router.push("/profile");

      //  }
    },
    async login() {
      const payload = {
        ID: this.form.id,
        Password: this.form.password,
      };
      try {
        const response = await api.post('http://116.87.140.63:5000/api/v1/login',
         payload, {
          headers: { "Content-Type": "application/json" },
        });
        const sessionToken = response.data.sessionToken;
        console.log('test')
        console.log(sessionToken)
        // Dispatch the action to set the session token in the store
        this.$store.dispatch('setSessionToken', sessionToken);
       
        const userRole = await this.getUserRole();

        // Redirect based on user role
        switch (userRole) {
          case 'administrator':
            this.$router.push("/admin/profile");
            break;
          case 'staff':
            this.$router.push("/staff/profile");
            break;
          case 'owner':
            this.$router.push("/owner/profile");
            break;
          default:
            this.$router.push("/manager/profile");
            break;
        }
      } catch (error) {
        console.error("Error occurred during login:", error);
        // Handle the error, such as displaying an error message to the user.
      }
    },

    goLoginPage() {
      this.register = true;
      this.forget = false;
      this.switchTypeForm();
    },
    switchTypeForm() {
      this.register = !this.register;
      this.title = this.register ? "Sign up" : "Login";
      this.btnLabel = this.register ? "Register" : "Login";
    },
    forgetPassword() {
      this.forget = !this.forget;
      this.title = "Forgot Your Password ?";
      this.btnLabel = "Send Email";
    },
    switchVisibility() {
      this.visibility = !this.visibility;
      this.passwordFieldType = this.visibility ? "text" : "password";
      this.visibilityIcon = this.visibility ? "visibility_off" : "visibility";
    },
    switchrePassVisibility() {
      this.revisibility = !this.revisibility;
      this.rePasswordFieldType = this.revisibility ? "text" : "password";
      this.revisibilityIcon = this.revisibility
        ? "visibility_off"
        : "visibility";
    },
  },
};
</script>
<style lang="sass" scoped>
.bg-image
  background: white
.full-height
  height:100%
  background: white

.loginForm
  position:absolute
  width: 634px
  height: 60px
  padding-left: 103px
  padding-right: 103px
.loginimgStyle
  padding-top: 17%
  padding-left: 10%
  padding-right: 10%
  min-height: 681px
.forgetremember
  display: flex
  justify-content: space-between

.remember-me
  padding-top: 8px
</style>
