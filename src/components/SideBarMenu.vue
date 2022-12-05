<template>
  <div class="sidebar">
    <div class="sidebar-panel">
      <a
        class="items-center justify-center mt-3 menu-link"
        href="#home"
        @click="selectMenu(menuItems.home)"
      >
        <span class="menu-text">Home</span>
      </a>
      <a
        class="items-center justify-center mt-3 menu-link"
        href="#day1"
        @click="selectMenu(menuItems.day1)"
      >
        <span class="menu-text">Day 1</span>
      </a>
      <a
        class="items-center justify-center mt-3 menu-link"
        href="#day2"
        @click="selectMenu(menuItems.day2)"
      >
        <span class="menu-text">Day 2</span>
      </a>
      <a
        class="items-center justify-center mt-3 menu-link"
        href="#day3"
        @click="selectMenu(menuItems.day3)"
      >
        <span class="menu-text">Day 3</span>
      </a>
      <a
        class="items-center justify-center mt-3 menu-link"
        href="#day4"
        @click="selectMenu(menuItems.day4)"
      >
        <span class="menu-text">Day 4</span>
      </a>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuItems: {
        home: "home",
        day1: "day1",
        day2: "day2",
      },
    };
  },
  components: {},
  methods: {
    selectMenu(menu_item) {
      this.$emit("load-component", menu_item);
    },
  },
};
</script>
<style>
.menu-link {
  padding-left: 0.5em;
}

.sidebar-panel {
  min-height: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-color: rgb(30, 1, 1);
  display: flex;
  flex-direction: column;
  z-index: 999;
  padding: 1rem;
  width: 410px;
  position: fixed;
  left: 0;
  top: 0;
}

.sidebar-panel a:hover .menu-text {
  background: rgb(181, 242, 140);
  color: rgb(216, 89, 106);
}

.sidebar-panel a .menu-text {
  font-size: 30px;
  color: rgb(216, 89, 106);
  transition: 0.3s;
  text-align: left;
  display: inline-block;
  align-items: center;
  text-decoration: none;
  height: 55px;
  background-color: rgb(30, 1, 1);
  border-radius: 30px;
  white-space: nowrap;
  margin-left: 30px;
  margin-top: 10px;
  padding: 5px 15px;
}
</style>