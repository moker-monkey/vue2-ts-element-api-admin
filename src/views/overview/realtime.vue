<template>
  <el-row class="wrap" :gutter="10">
    <el-row class="item header">
      <search-bar @search="handler_search" :showList="['channel']"></search-bar>
    </el-row>
    <card-group></card-group>
    <el-col :span="24" class="item">
      <card1 :data="card_data.newUser" :options="{ tool: false, size: 'big' }">
        <template #content>
          <lineCharts style="width: 100%; height: 200px"></lineCharts>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <!-- -------------------------------- -->
    <el-col :span="12" class="item">
      <card1
        :data="card_data.sharingAddUser"
        :options="{ tool: false, size: 'middle' }"
      >
        <template #content>
          <lineCharts style="width: 100%; height: 200px"></lineCharts>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <el-col :span="12" class="item">
      <card1
        :data="card_data.sharingOldUser"
        :options="{ tool: false, size: 'middle' }"
      >
        <template #content>
          <lineCharts style="width: 100%; height: 200px"></lineCharts>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <!-- ---------------------- -->
    <el-col :span="12" class="item">
      <card1
        :data="card_data.sharingUser"
        :options="{ tool: false, size: 'middle' }"
      >
        <template #content>
          <lineCharts style="width: 100%; height: 200px"></lineCharts>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <el-col :span="12" class="item">
      <card1
        :data="card_data.sharingCount"
        :options="{ tool: false, size: 'middle' }"
      >
        <template #content>
          <lineCharts style="width: 100%; height: 200px"></lineCharts>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <!-- ----------------------------------------- -->
    <el-col :span="12" class="item">
      <card1
        :data="card_data.recharge"
        :options="{ tool: false, size: 'middle' }"
      >
        <template #content>
          <lineCharts style="width: 100%; height: 200px"></lineCharts>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
    <el-col :span="12" class="item">
      <card1 :data="card_data.draw" :options="{ tool: false, size: 'middle' }">
        <template #content>
          <lineCharts style="width: 100%; height: 200px"></lineCharts>
        </template>
        <template #dialog> </template>
      </card1>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import {
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Watch,
  Component,
} from 'vue-property-decorator';

import searchBar from '../components/searchBar/searchBar.vue';
import cardGroup from './realtimeCard.vue';
import lineCharts from '@/example/charts/lineCharts.vue';
import card1 from '../components/chartsCard/card-1.vue';

@Component({
  components: {
    searchBar,
    cardGroup,
    lineCharts,
    card1,
  },
})
export default class extends Vue {
  public card_data = {};
  public mounted() {
    this.$api.realtime.GET().then((res: any) => {
      this.card_data = res.data.results;
    });
  }
  public handler_search(value: any) {
    console.log(value);
  }
}
</script>
<style lang="scss" scoped>
.item {
  margin: 10px 0 0;
}
// .content-item:not(:first-child) {
//   margin-top: 40px;
// }
</style>