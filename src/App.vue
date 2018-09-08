<template>
  <div>
    <el-row >
      <el-col :span="24">
        <div class=" grid-content">
        <el-card class="box-card panel">
          <div slot="header" class="clearfix">
            <span>猜数字游戏</span>
            <el-button style="float: right; padding: 3px 0" type="text">重新开始</el-button>
          </div>
          <el-col :offset="8">
            <div  class="progress">
            <el-progress type="circle" :percentage='time' color="#8e71c7"></el-progress>
            </div>
          </el-col>
        </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  export default {
  name: 'App',
  computed: mapState([
    // 映射 this.count 为 store.state.count
    'count',
    'msg',
    'time'
  ]),
  methods:{
    ...mapActions([
      'add' // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      ,'timer'
    ])
  },
    mounted(){
    this.timer();
    }
}
</script>

<style>
.msg{
  color:red;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}

.panel{
    margin: 80px auto;
  opacity: 0.7;
}
  body{
    background-color: black;
  }
  .progress{
    margin: 0 auto;
  }
</style>
