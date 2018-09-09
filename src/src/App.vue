<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class=" grid-content">
          <el-card class="box-card panel" ref="panel">
            <div slot="header" class="clearfix">
              <span>猜数字游戏</span>
              <el-button style="float: right; padding: 3px 0" type="text">重新开始</el-button>
            </div>
            <el-col :offset="8">
              <div class="progress">
                <el-progress type="circle" :percentage='time' :color="color" :status="status"
                             ref="progress"></el-progress>
              </div>
            </el-col>
          </el-card>
        </div>
      </el-col>
      <el-col>
        <el-dialog
          title="游戏开始"
          :visible.sync="dialogVisible"
          width="30%">
          <span>请在1-10内猜测随机数</span>
          <el-input placeholder="请输入您的猜测" v-model="content1"></el-input>
          <span slot="footer" class="dialog-footer">
    <el-button @click="close">取 消</el-button>
    <el-button type="primary" @click="close(content1)">确 定</el-button>
  </span>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'App',
    data() {
      return {
        content1: ''
      }
    },
    computed: mapState([
      // 映射 this.count 为 store.state.count
      'count',
      'msg',
      'time',
      'status',
      'color',
      'dialogVisible',
      'content',
      'types'
    ]),
    methods: {
      ...mapActions([
        'add' // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
        , 'timer',
        'close'
      ]),
      openErr() {
        this.$message({
          showClose: true,
          message: '错了哦，再试一次',
          type: 'error'
        });
      },
      openSuc() {
        this.$message({
          showClose: true,
          message: '恭喜你，猜对了',
          type: 'success'
        });
      }
    },
    mounted() {
      this.timer();
    },
    watch: {
      time: function () {
        if (this.time == 100) {
          document.querySelector('.panel').style.opacity = 1
        }
      },
      types: function () {
        if (Object.is(this.types,'right')) {
          this.openSuc();
        } else if (Object.is(this.types,'wrong')) {
          this.openErr();
        }
      }
    }
  }
</script>

<style>
  .msg {
    color: red;
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

  .panel {
    margin: 80px auto;
    opacity: 0.7;
  }

  body {
    background-color: black;
  }

  .progress {
    margin: 0 auto;
  }
</style>
