<template>
  <div class="objectWrap">
    <object
      ref="getSize"
      tabindex="-1"
      type="text/html"
      aria-hidden="true"
      data="about:blank"
      :style="style"
    ></object>
  </div>
</template>
<script lang="ts">
// 使用方法，将该组件当做标签放置在任何父元素中，当父元素的大小改变，就会触发resize方法
import {
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Watch,
  Component,
} from "vue-property-decorator";

@Component
export default class extends Vue {
  public style: any = {
    display: "block",
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    border: "none",
    padding: "0px",
    margin: "0px",
    opacity: 0,
    "z-index": -1000,
    "pointer-event": "none",
  };
  @Emit("resize")
  public resize(this: any, size: any) {
    return size;
  }
  public mounted() {
    (this.$refs.getSize as
      | HTMLObjectElement
      | any).contentDocument.defaultView.addEventListener(
      "resize",
      (event: any) => {
        this.$nextTick(() => {
          this.resize({
            width: event.currentTarget.innerWidth,
            height: event.currentTarget.innerHeight,
            event: event,
          });
        });
      }
    );
  }
}
</script>
<style lang="scss" scoped>
.objectWrap {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>