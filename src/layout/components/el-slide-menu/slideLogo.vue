<template>
  <div :class="{ 'slide-logo-container': true, collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="slide-logo-link"
        to="/"
      >
        <img src="favicon.ico" class="slide-logo" />
      </router-link>
      <router-link v-else key="expand" class="slide-logo-link" to="/">
        <img src="favicon.ico" class="slide-logo" />
        <h1 class="slide-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'SidebarLogo',
})
export default class extends Vue {
  @Prop({ required: false }) private collapse!: boolean;
  @Prop({ default: 'api系统' })
  private title?: string;
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.slide-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .slide-logo-link {
    height: 100%;
    width: 100%;

    & .slide-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .slide-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .slide-logo {
      margin-right: 0px;
    }
  }
}
</style>
