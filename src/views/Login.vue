<template>
    <div class="bg">
        <el-row type="flex" justify="center" align="middle">
            <el-col :span="6">

                <h3>后台管理系统</h3>
                <el-form ref="form" :rules="rules" :model="form" label-width="80px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="form.username" ></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button  type="primary" style="width: 100%" @click="submit">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form:{
                    username:"",
                    password:""
                },
                rules:{
                    username:{required: true, message: '请输入用户名', trigger: 'blur'},
                    password:{required: true, message: '请输入密码', trigger: 'blur'}
                }

            }
        },
        methods: {
            submit(){
                this.$refs.form.validate((ref)=>{
                   if(ref){
                     //与后台交互的部分
                       this.$message.success("登陆成功");
                       sessionStorage.setItem("login","yes");
                       this.$router.push({name:"main"});
                   }
                });
            }
        },
        created() {

        },
        mounted() {

        },
    }
</script>
<style scoped>
    .bg {
        width: 100%;
        height: 100%;
        background: url("../assets/bj.jpg") no-repeat 100%/100%;
    }
    .el-row{
        height: 100%;

    }
    .el-col{
        background: rgba(193, 202, 214, 0.8);
        padding: 40px;
    }
    .el-form-item{
        width: 90%;
    }
    h3{
        text-align: center;
    }

</style>