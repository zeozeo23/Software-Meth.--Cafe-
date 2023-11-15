<template>
  <q-layout
    view="lHh Lpr lFf"
    
    class="shadow-2 rounded-borders"
  >
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
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
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white text-black"
      :width="300"
      :breakpoint="400"
    >
     
        <q-list style="
         
          margin-top: 180px;
        
        ">
          <q-item-label header> </q-item-label>
         
          <q-item clickable v-ripple to="/profile">
            <q-item-section avatar>
              <q-icon name="format_size" />
            </q-item-section>

            <q-item-section style="font-size: 18px"
              >Profile Setting</q-item-section
            >
          </q-item>
          <!-- <q-item clickable v-ripple to="/keyManage">
            <q-item-section avatar>
              <q-icon name="format_size" />
            </q-item-section>

            <q-item-section style="font-size: 18px"
              >Key Management</q-item-section
            >
          </q-item> -->
          <q-item clickable v-ripple to="/workslot">
            <q-item-section avatar>
              <q-icon name="format_size" />
            </q-item-section>

            <q-item-section style="font-size: 18px"
              >Work Slot</q-item-section
            >
          </q-item>
          <q-item clickable v-ripple to="/approveShift">
            <q-item-section avatar>
              <q-icon name="format_size" />
            </q-item-section>

            <q-item-section style="font-size: 18px"
              >Review Shift</q-item-section
            >
          </q-item>
          <q-item clickable v-ripple to="/userPage">
            <q-item-section avatar>
              <q-icon name="format_size" />
            </q-item-section>

            <q-item-section style="font-size: 18px"
              >All User Profile</q-item-section
            >
          </q-item>
          <q-item clickable v-ripple to="/myBid">
            <q-item-section avatar>
              <q-icon name="format_size" />
            </q-item-section>

            <q-item-section style="font-size: 18px"
              >My Bids</q-item-section
            >
          </q-item>
          <q-item clickable v-ripple to="/staffTest">
            <q-item-section avatar>
              <q-icon name="format_size" />
            </q-item-section>

            <q-item-section style="font-size: 18px"
              >Staff API</q-item-section
            >
          </q-item>
          <q-item clickable v-ripple to="/managerTest">
            <q-item-section avatar>
              <q-icon name="format_size" />
            </q-item-section>

            <q-item-section style="font-size: 18px"
              >ManagerAPI</q-item-section
            >
          </q-item>
        </q-list>
      
      <!-- <q-img class="absolute-top q-mt-md" src="../assets/MainLogo.png" style="height: auto width: auto">
        
        </q-img> -->
      <q-img class="absolute-top" >
        <div class="absolute-bottom">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../assets/cafe.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
      </q-img>
    </q-drawer>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
// import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",

  // components: {
  //   EssentialLink,
  // },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
    
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
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