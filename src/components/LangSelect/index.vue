<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <!-- <svg-icon name="language" class="international-icon" /> -->
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LayoutModule } from '@/store/modules/layout';
@Component({
  name: 'Login',
})
export default class extends Vue {
  get language() {
    return LayoutModule.language;
  }
  private handleSetLanguage(lang: string) {
    this.$i18n.locale = lang;
    LayoutModule.SetLanguage(lang);
    this.$message.info('Switch Language Success');
  }
}
</script>