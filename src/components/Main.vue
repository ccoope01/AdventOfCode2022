<template>
  <div class="container-fluid">
    <div class="row menu">
      <div class="menu-col">
        <SideBarMenu @load-component="loadFromMenu"> </SideBarMenu>
      </div>
      <div class="col">
        <Header />
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Header from "./Header.vue";
import SideBarMenu from "./SideBarMenu.vue";
import { loadFromMenu } from "@/navState.js";

export default {
  name: "Dashboard",
  components: {
    SideBarMenu,
    Header,
  },
  data() {
    return {
      active: false,
      menuItems: {
        home: "home",
        day1: "day1",
        day2: "day2",
      },
    };
  },
  methods: {
    loadFromMenu: loadFromMenu,
    selectMenu(menu_item) {
      this.loadFromMenu(menu_item);
    },
  },
  mounted() {},
};
</script>
<style>
body {
}

h2 {
  color: #fff;
}

.menu.row {
  margin-bottom: 0 !important;
}

.menu-col {
  width: 300px;
  display: flex;
}
</style>
  