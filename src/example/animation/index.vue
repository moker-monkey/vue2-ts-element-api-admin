<template>
  <div class="home">
    <Container direction="row" justify="space-between">
      <Container
        direction="col"
        justify="space-between"
        v-animation="{
          name: 'animate__tada',
          trigger: 'click',
        }"
      >
        <Card
          size="middle"
          grow="1"
          v-animation="{
            name: 'animate__tada',
            trigger: 'hover',
          }"
        >
          <img alt="Vue logo" src="@/assets/logo.png" />
        </Card>
        <Card
          size="mini"
          v-animation="{
            name: 'animate__backInUp',
            trigger: 'once',
            delay: 2000,
          }"
        >
          <img alt="Vue logo" src="@/assets/logo.png" />
        </Card>
      </Container>
    </Container>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Container from '@/components/api-card/gridCard/container.vue';
import Card from '@/components/api-card/gridCard/card.vue';

import { Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';

@Component({
  name: 'Home',
  components: {
    HelloWorld,
    Container,
    Card,
  },
})
export default class Home extends Vue {
  public state: string = 'running';
  public checkList: any = ['选中且禁用', '复选框 A'];
  public star() {
    this.state = 'running';
    console.log('click');
  }
}
</script>
<style lang="scss">
$marginTop: 10px;
.home {
  height: calc(100% - #{$marginTop});
  background: #fff;
  margin-top: $marginTop;
}
</style>
