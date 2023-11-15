<template>
  <div>
    <q-layout view="lHh Lpr lff" >
      <q-header elevated >
        <q-toolbar>
          <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
          />
          <q-toolbar-title> </q-toolbar-title>
          <q-btn
            flat
            dense
            round
            icon="logout"
            aria-label="Menu"
            @click="logout"
          />
        </q-toolbar>
          
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        bordered
        class="bg-white text-black"
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/admin/profile">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section style="font-size: 18px"
              >My Profile</q-item-section
            >
          </q-item>
          <q-item clickable v-ripple to="/admin/userPage">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section style="font-size: 18px"
              >List of Users</q-item-section
            >
          </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/untitled.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <!-- <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div> -->
          </div>
        </q-img>
      </q-drawer>

      <q-page-container class="page-container">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
// import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  setup () {
    return {
      drawer: ref(false)
    }
  },
  methods: {
    logout() {
      this.$router.push("/");
    },
  },
});
</script>

<style lang="sass" scoped>


</style>