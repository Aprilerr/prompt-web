<template>
  <div style="padding: 100px; display: flex;flex-wrap: wrap" class="app-container">
    <div :style="{zIndex:zIndex,height:height,width:width}" class="avatar-container">
      <div :style="{backgroundImage: `url(${avatar})`}" class="avatar-image"></div>
    </div>
    <div class="text-container">
      <div style="display: block;" class="text-content">
        <h1> {{ name }} </h1>
      </div>
      <div style="display: block;" class="text-content">
        <h2>role: {{ roles }} </h2>
      </div>
    </div>
    <div class="function-container">
      <el-button style="position: absolute; top: calc(300px - 40px); left: calc(300px - 40px)" type="primary" icon="el-icon-edit" circle @click="imagecropperShow=true"></el-button>
      <el-button type="primary" icon="el-icon-upload" style="margin-right:50px" @click="imagecropperShow=true">
        Change profile
      </el-button>
      <el-button type="primary" icon="el-icon-upload" style="margin-right:50px" @click="imagecropperShow=true">
        Change password
      </el-button>
    </div>
    <!--<div style="display:inline-block;height: 200px;height: 100%" class="text-container">
      <div style="display: block; margin:20px;">{{name}}</div>
    </div>

    <el-button type="primary" icon="el-icon-upload" style="margin-left:50px" @click="imagecropperShow=true">
      Change Avatar
    </el-button>-->
  </div>
</template>

<script>
export default {
  name: 'UserPanel',
  data() {
    return {
      zIndex: {
        type: Number,
        default: 1
      },
      width: {
        type: String,
        default: '150px'
      },
      height: {
        type: String,
        default: '150px'
      }
    }
  },
  computed: {
    avatar() {
      return this.$store.getters.avatar
    },
    name() {
      return this.$store.getters.name
    },
    roles() {
      return this.$store.getters.roles
    }
  }
}
</script>

<style scoped>
.avatar-container {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  cursor: default;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.avatar-image {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
}
.text-container {
  background-color: white;
  height: 200px;
  width: calc(100% - 200px);
  padding: 30px;
}
.function-container {
  display: block;
  background-color: white;
  height: calc(100%);
  width: 100%;
  padding-top: 50px;
}
.text-content {
  margin: 10px;
}
</style>
