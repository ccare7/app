<template>
    <el-container>
        <el-aside width="auto">
            <el-menu
                    :collapse="collapse"
                    background-color="#2f3e4e"
                    text-color="#fff"
                    style="height: 100vh"
                    :router="true"
            >
                <el-menu-item index="1" :route="{name:'dashboard'}"
font-size="34px" active-text-color="#ffd04b" >
                    <i class="iconfont icon-panel"></i>
                    &nbsp
                    <span>仪表盘</span>
                </el-menu-item>
                <el-menu-item index="2" :route="{name:'property'}"  active-text-color="#ffd04b">
                    <i class="iconfont icon-cz-fsdjb"></i>&nbsp
                    <span slot="title">资产登记</span>
                </el-menu-item>

                <el-menu-item index="3" :route="{name:'collaruse'}" active-text-color="#ffd04b">
                    <i class="iconfont icon-xinxi"></i>&nbsp
                    <span slot="title">领用退库</span>
                </el-menu-item>

                <el-menu-item index="4" :route="{name:'borrow'}" active-text-color="#ffd04b">
                    <i class="iconfont icon-dayinji"></i>&nbsp
                    <span slot="title">借用归还</span>
                </el-menu-item>

                <el-menu-item index="5" active-text-color="#ffd04b">
                    <i class="iconfont icon-zhanghaoxinxi-xiugai"></i>&nbsp
                    <span slot="title">信息修改</span>
                </el-menu-item>

                <el-menu-item index="6" active-text-color="#ffd04b">
                    <i class="iconfont icon-weixiu"></i>&nbsp
                    <span slot="title">维修管理</span>
                </el-menu-item>

                <el-menu-item index="7" active-text-color="#ffd04b">
                    <i class="iconfont icon-lajitong"></i>&nbsp
                    <span slot="title">报废管理</span>
                </el-menu-item>
                <el-submenu index="8">
                    <template slot="title" active-text-color="#ffd04b">
                        <i class="iconfont icon-tongjitu1"></i>&nbsp
                        <span slot="title">资产统计</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item  active-text-color="#ffd04b">
                            <i class="iconfont icon-wodetouzi"></i>&nbsp
                            <span slot="title">资产清单</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header style="background: #fff">
                <el-row>
                    <el-col :span="4">
                <i :class="['iconfont','icon-liebiao','caidan',{rote:state}]" @click="toggle"></i>
                    </el-col>
                    <el-col :span="6" :offset="13">
                        <el-menu
                                mode="horizontal"
                                style="border-bottom: none; height: 59px">
                            <el-submenu index="1">
                                <template #title>
                                    <i class="iconfont icon-wodetouzi"></i>
                                    消息
                                </template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template #title>
                                    <i class="iconfont icon-wodetouzi"></i>
                                    管理员
                                </template>
                                <el-menu-item index="2-1">
                                    修改密码
                                </el-menu-item>
                                <el-menu-item index="2-2">
                                    修改资料
                                </el-menu-item>
                                <el-menu-item index="2-3">
                                    退出登录
                                </el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template #title>
                                    <i class="iconfont icon-wodetouzi"></i>
                                    帮助
                                </template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                    <el-col :span="1">
                        <el-button type="text" @click="logOut" style="height: 58px">退出</el-button>
                    </el-col>

                </el-row>
            </el-header>
            <el-main style="height: calc(100vh - 60px); overflow: auto">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                state:false,
                collapse:false
            }
        },
        methods: {
            toggle(){
                this.state=!this.state;
                this.collapse=!this.collapse
            },
            logOut(){
                sessionStorage.removeItem("login");
                this.$router.push({name:"login"})
            }
        },
        created() {

        },
        mounted() {

        },
    }
</script>
<style scoped>
    .caidan{
        width: 30px;
        text-align: center;
        line-height: 60px;
        height: 60px;
        /*background: red;*/
        display: block;
        text-align: center;
        line-height: 60px;
        transition: all 0.5s;
    }
    .el-header{
        border-bottom: 1px solid #ccc;
    }
    .rote{
        transform: rotate(90deg);
    }
</style>