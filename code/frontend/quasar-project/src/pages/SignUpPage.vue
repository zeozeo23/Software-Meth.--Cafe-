<template>
  <q-page>
    <div class="container">
      <q-card square flat style="min-height: 100%">
        <div class="loginForm">
          <div
            class="q-pb-md text-blue-8 text-weight-bolder"
            style="font-size: 48px"
          >
            Create your account
          </div>
          <span>Let's get started!</span>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <!-- <q-input
              filled
              v-model="name"
              label="Username"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Please type Username',
              ]"
            /> -->
            <q-input outlined v-model="name" placeholder="Enter your email" />
            <!-- <q-input
              filled
              type="password"
              v-model="password"
              label="Password"
              lazy-rules
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Please type your password',
                (val) =>
                  (val > 0 && val < 100) || 'Please type a real age',
              ]"
            /> -->
            <q-input
              outlined
              type="password"
              v-model="password"
              placeholder="Enter your Password"
            />
            <q-input
              outlined
              type="password"
              v-model="password"
              placeholder="Confirm your Password"
            />
            <div class="forgetremember row">
              <div class="remember-me">
                <input
                  class="styled-checkbox"
                  id="styled-checkbox-1"
                  type="checkbox"
                  value="value1"
                />
                <span for="styled-checkbox-1" style="padding-left: 10px"
                  >By registering you agree with our
                  <q-btn
                    flat
                    rounded
                    color="primary"
                    no-caps
                    label="Terms & Conditions"
                  />
                </span>
              </div>
            </div>

            <div>
              <q-btn
                class="full-width"
                label="Login"
                type="submit"
                color="primary"
              />

              <!-- <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              /> -->
            </div>
            <div class="row" style="justify-content: center">
              <div>
                Already have an account?
                <q-btn
                  flat
                  rounded
                  color="primary"
                  @click="loginPage"
                  no-caps
                  label="Log in"
                />
              </div>
            </div>
          </q-form>
        </div>
      </q-card>
    </div>
    <!-- <div class="row">
      
      <q-card round class="shadow-24" style="width:400px;height:540px;">
        <div class="text-h4 q-pt-lg primary text-center text-weight-bold">
          {{ title }}
        </div>
        <div v-if="forget" class="text-center q-mt-md">
          Enter your email to below to receive your password reset instructions
        </div>
        <q-card-section>
          <q-form class="q-px-sm q-pt-md">
            <q-input 
                v-if="forget"
                ref="email"
                square 
                clearable 
                v-model="email" 
                type="email"
                lazy-rules
                :rules="[this.required,this.isEmail,this.short]"
                label="Email">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input 
                v-if="!register  && !forget"
                ref="email"
                square 
                clearable 
                v-model="email" 
                type="email"
                lazy-rules
                :rules="[this.required,this.isEmail,this.short]"
                label="Email">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input  
                v-if="!register && !forget"
                ref="password"
                square 
                clearable 
                v-model="password"                                                        
                :type="passwordFieldType"  
                lazy-rules
                :rules="[val => !!val || 'Password is required',this.short]"
                label="Password"
              >
              
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon 
                :name="visibilityIcon"                                 
                @click="switchVisibility"                             
                class="cursor-pointer" 
                />
              </template>
            </q-input>
            <div class="row justify-end q-pb-none q-pt-none">
              <q-btn flat no-caps v-if="!register && !forget"  class="text-grey-9" @click="forgetPassword" >Forgot Password?</q-btn>
            </div>
            
            <q-input 
                v-if="register"
                ref="regEmail"
                square 
                clearable 
                v-model="regEmail" 
                type="email"
                lazy-rules
                :rules="[val => !!val || 'Email is required',this.isEmail,this.short]"
                label="Email">
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input
                v-if="register"
                ref="regPassword"
                square 
                clearable 
                v-model="regPassword"                                                        
                :type="passwordFieldType"  
                lazy-rules
                :rules="[val => !!val || 'Password is required',this.short]"
                label="Password"
              >
              
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon 
                :name="visibilityIcon"                                 
                @click="switchVisibility"                             
                class="cursor-pointer" 
                />
              </template>
            </q-input>
            <q-input 
                ref="regRePassword"
                v-if="register" 
                square 
                clearable 
                v-model="regRePassword"                                                       
                :type="rePasswordFieldType" 
                lazy-rules
                :rules="[val => !!val || 'Repeat Password is required',this.short,this.diffPassword]"
                label="Repeat Password">
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
              <q-icon 
                    :name="revisibilityIcon"                                
                    @click="switchrePassVisibility"                              
                    class="cursor-pointer" 
              />
              </template>
            </q-input>
            
          </q-form>
        </q-card-section>
        
        <q-card-actions class="q-px-lg q-pt-none">
          <q-btn 
            no-caps
            unelevated 
            size="lg" 
            style="background: #AD974F" 
            @click="submit"
            class="full-width text-white"                          
            :label="btnLabel" />
        </q-card-actions>
        <q-card-actions align="around">
          <div class="row" v-if="register">
            <div class="q-mt-sm text-grey-9">Have an account?</div>
            <q-btn flat no-caps v-if="register"  class="text-grey-9" @click="switchTypeForm" >Log in</q-btn>
          </div>
          <div class="row" v-if="!register  && !forget ">
          <div class="q-mt-sm text-grey-9">Don't have an account?</div>
          <q-btn flat no-caps class="text-grey-9" @click="switchTypeForm" >Sign up</q-btn>
          </div>
        
        </q-card-actions>
        <q-card-actions v-if="forget" align="right">
        <div class="row" v-if="forget">
            <q-btn flat no-caps v-if="forget"  class="text-grey-9" @click="goLoginPage" >Back to Login Page</q-btn>
          </div>
        </q-card-actions>
      </q-card>
    </div> -->
  </q-page>
</template>

<script>
export default {
  name: "SignupPage",
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
    loginPage() {
      this.$router.push("/");

      //  }
    },
    isEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Please enter a valid email address";
    },
    onSubmit() {
      //   if (this.register){
      //       this.$refs.regEmail.validate()
      //       this.$refs.regPassword.validate()
      //       this.$refs.regRePassword.validate()
      //    } else {
      //       this.$refs.email.validate()
      //       this.$refs.password.validate()
      //    }

      //    if (!this.register)
      //      if (!this.$refs.email.hasError && (!this.$refs.password.hasError))
      //  {
      this.$q.notify({
        icon: "done",
        color: "positive",
        message: "done",
        position: "top",
      });
      this.$router.push("/workslot");

      //  }
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
  background: linear-gradient(180deg, #1D4797 0%, #02418E 26.56%, #0BC2FF 100%)
.full-height
  height:100%
  background: linear-gradient(180deg, #1D4797 0%, #02418E 26.56%, #0BC2FF 100%)
// .imageDesign {
//   position: absolute;
// width: 960px;
// height: 1024px;
// left: 0px;
// top: 0px;

// }
.container
  display: flex
  justify-content: center
  align-items: center
  height: 100vh /* Adjust to fit your needs */

.loginForm
  position:absolute
  width: 634px

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
</style>
