<template>
   <div class="modal fade" tabindex="-1" role="dialog" ref="modal_test" id="modal2">
  <div class="modal-dialog" role="document" ref="modal_dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" @click="closeTip"><span >&times;</span></button>
        <h4 class="modal-title">温馨提示</h4>
      </div>
      <div class="modal-body">
        <p>{{alertText}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary"  @click="closeTip">关闭</button>
        <button type="button" class="btn btn-primary"  @click="emitQ" v-show="isShow">确定</button>
       
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</template>

<script>
  export default {
    props: {
      alertText: String,
      showAlert:Boolean,
      isShow:Boolean
    },

    methods: {
      closeTip() {
        // 分发自定义事件(事件名: closeTip)
        
        this.$emit('closeTip')
      },
      emitQ() {
        // 分发自定义事件(事件名: closeTip)
        
        this.$emit('emitQ')
      }
    }
  }
</script>

<style lang="less">

    #modal2{

      display: block;
      opacity: 1;
      
      .modal-dialog{
        top:30%
      }
    }

</style>
