<template>
  <div class="daily-work">
    <div class="add-area">
      <el-form inline>
        <el-form-item label="添加日程">
          <el-input
            v-model="name"
            @keyup.enter.native="handleAddItem"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleAddItem"> 添加 </el-button>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="danger" @click="handleClearItem">清空日程</el-button>
      </div>
    </div>
    <el-divider>一起跃入人海做一朵奔涌的浪花</el-divider>
    <el-row>
      <el-col :span="12">
        <el-card class="mg-r-10">
          <div slot="header">
            <span>待完成事项</span>
          </div>
          <el-table :data="unDoneList" empty-text="任务都已经完成啦">
            <el-table-column label="编号" type="index"></el-table-column>
            <el-table-column
              label="日程"
              prop="name"
              min-width="150px"
            ></el-table-column>
            <el-table-column label="操作" min-width="150px">
              <template v-slot="{ row }">
                <el-button type="primary" size="small" @click="handleDone(row)"
                  >已经完成</el-button
                >
                <el-button type="danger" size="small" @click="handleRemove(row)"
                  >删除日程</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="mg-l-10">
          <div slot="header">
            <span>已完成事项</span>
          </div>
          <el-table :data="doneList" empty-text="加油把左边的项目都拖到这里">
            <el-table-column label="编号" type="index"></el-table-column>
            <el-table-column
              label="日程"
              prop="name"
              min-width="150px"
            ></el-table-column>
            <el-table-column label="操作" min-width="150px">
              <template v-slot="{ row }">
                <el-button
                  type="warning"
                  size="small"
                  @click="handleCancelDone(row)"
                  >撤销完成</el-button
                >
                <el-button type="danger" size="small" @click="handleRemove(row)"
                  >删除日程</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "DailyWork",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapGetters(["unDoneList", "doneList", "currentMaxId"]),
  },
  methods: {
    handleAddItem() {
      if (this.name.trim().length === 0) {
        return this.$message({
          type: "warning",
          message: "请填入日程名称",
        });
      }
      const newItem = {
        id: this.currentMaxId + 1,
        name: this.name,
        done: false,
      };
      this.$store.commit("addItemMutation", newItem);
      this.name = "";
    },
    handleDone(row) {
      this.$store.commit("doneMutation", row.id);
    },
    handleRemove(row) {
      this.$store.commit("removeMutation", row.id);
    },
    handleCancelDone(row) {
      this.$store.commit("cancelDone", row.id);
    },
    async handleClearItem() {
      try {
        await this.$confirm("确定清空日程吗？", "确定");
      } catch (e) {
        return;
      }
      this.$store.commit("clearAll");
    },
  },
};
</script>

<style lang="less">
.daily-work {
  .add-area {
    display: flex;
    justify-content: space-between;
  }
}
</style>