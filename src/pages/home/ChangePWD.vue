<template>
    <div>
        <page-layout>
        </page-layout>
        <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
            <a-form>
            <a-form-item
                label="旧密码"
                :labelCol="{span: 7}"
                :wrapperCol="{span: 10}"
            >
                <a-input placeholder="请输入您的旧密码" />
            </a-form-item>

            <a-form-item
                label="新密码"
                :labelCol="{span: 7}"
                :wrapperCol="{span: 10}"
            >
                <a-input placeholder="请输入您的新密码" />
            </a-form-item>

            <a-form-item
                label="确认新密码"
                :labelCol="{span: 7}"
                :wrapperCol="{span: 10}"
            >
                <a-input placeholder="请再次输入您的新密码" />
            </a-form-item>

            <a-form-item :wrapperCol="{span: 10, offset: 7}">
                <a-button type="primary">保存</a-button>
                <a-button style="margin-left: 8px">清空</a-button>
            </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<script>
import PageLayout from '../../layouts/PageLayout'

export default {
  name: 'change-pwd',
  data () {
    return {
      desc: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
      value: 1
    }
  },
  components: {PageLayout}
}
</script>

<style scoped>

</style>
