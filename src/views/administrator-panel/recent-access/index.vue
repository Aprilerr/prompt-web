<template>
  <div style="display: flex; flex-wrap: wrap" class="app-container">
    <div class="text-container sub-container">
      <h1>RecentAccess</h1>
    </div>
    <div class="filter-container sub-container">
      <el-date-picker
        v-model="input.date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        class="button-item"
      />
      <el-input
        v-model="input.username"
        placeholder="请输入内容"
        class="button-item"
        style="width: 150px;"
        size="medium"
        clearable
      />
      <el-input
        v-model="input.role"
        placeholder="请输入内容"
        class="button-item"
        style="width: 150px;"
        size="medium"
        clearable
      />
      <el-button type="primary" class="button-item">Search</el-button>
    </div>
    <div class="table-container sub-container">
      <el-table
        :data="access_data"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="Date"
          min-width="200px"
        />
        <el-table-column
          prop="username"
          label="Username"
          min-width="200px"
        />
        <el-table-column
          prop="role"
          label="Role"
          min-width="200px"
        />
        <el-table-column
          prop="access_log"
          label="Access log"
          min-width="200px"
        >
          <template slot-scope="scope">
            <el-tag
              type="primary"
              disable-transitions
            >
              {{ scope.row.access_log }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="operation"
          label="Operation"
          min-width="200px"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
import access_data from '@/views/administrator-panel/recent-access/data'
export default {
  name: 'RecentAccess',
  data() {
    return {
      input: {
        date: '',
        username: '',
        role: ''
      },
      access_data: access_data
    }
  }
}
</script>

<style scoped>
.sub-container {
  margin-bottom: 10px;
}
.filter-container {
  width: 100%;
}
.button-item {
  margin-right: 10px;
}
</style>
