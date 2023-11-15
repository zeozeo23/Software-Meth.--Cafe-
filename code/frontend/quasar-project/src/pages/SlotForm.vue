<template>
  <div class="center">
    <q-card class="my-card" flat>
      <div class="q-pl-md q-mt-md" style="font-size: 25px">Slot Form</div>
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="Name"
            :dense="dense"
            :rules="[(val) => !!val || 'Name is required']"
          />
          <q-input
            filled
            v-model="email"
            type="email"
            label="Email"
            :dense="dense"
            :rules="[(val) => !!val || 'Email is required']"
          >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
          <q-input
            filled
            v-model="phone"
            type="tel"
            label="Phone"
            :dense="dense"
          />
          <div>Change Password:</div>
          <q-input
            ref="password"
            filled
            clearable
            v-model="password"
            :type="passwordFieldType"
            lazy-rules
            :rules="[(val) => val.length > 4 || 'Password is too short']"
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
            ref="rePassword"
            filled
            clearable
            v-model="rePassword"
            :type="rePasswordFieldType"
            lazy-rules
            :rules="[(val) => val === this.password || 'Different']"
            label="Repeat Password"
          >
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
          <div class="row justify-end">
            <q-btn outline label="Submit" type="submit" color="secondary" />
            <q-btn label="Reset" type="reset" color="primary" class="q-ml-sm" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      visibility: false,
      visibilityIcon: "visibility",
      phone: "",
      rePassword: "",
      register: false,
      passwordFieldType: "password",
      rePasswordFieldType: "password",
      revisibility: false,
      revisibilityIcon: "visibility",
    };
  },
  watch: {
    rePassword() {
      if (this.password) {
        this.diffPassword;
      }
    },
  },
  methods: {
    required(val) {
      return (val && val.length > 0) || "Field is required";
    },
    diffPassword(val) {
      const val2 = this.$refs.password.value;
      return (
        (val && val === val2) ||
        "Repeated Password is not the same as Password!"
      );
    },
    ConfirmPWD() {
      return [
        (v) => v == this.$refs.password.value || "Mots de passe différents",
      ];
    },
    short(val) {
      return (val && val.length > 3) || "Password is too short";
    },
    isEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Please enter a valid email address";
    },
    submit() {
      if (this.register) {
        this.$refs.regEmail.validate();
        this.$refs.regPassword.validate();
        this.$refs.regRePassword.validate();
      } else {
        this.$refs.email.validate();
        this.$refs.password.validate();
      }

      if (!this.register)
        if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
          this.$q.notify({
            icon: "done",
            color: "positive",
            message: "done",
            position: "top",
          });
          this.$router.push("/xx");
        }
    },
    resetValidate() {
      if (!val) {
        rePassword.value.resetValidation();
      }
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
.my-card
  width: 100%
  max-width: 600px


.center
  display: flex
  justify-content: center
  color: black
  font-family: Arial, Helvetica, sans-serif
</style>
