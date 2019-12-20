<template>
    <div class="">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 30px">
            <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>借用归还</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col>
                <el-card>
                    <template>
                        <el-tabs>
                            <el-tab-pane label="借用">
                                <el-row>
                                    <el-col :span="10" >
                                        <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogFormVisible = true">新增</el-button>
                                        <el-button type="primary" size="small" icon="el-icon-delete">归还</el-button>
                                        <el-button type="" size="small" icon="el-icon-delete">打印</el-button>
                                        <el-button type="" size="small" icon="el-icon-delete">导出</el-button>
                                    </el-col>
                                    <el-col :span="7" :offset="7">
                                        <el-date-picker
                                                type="datetimerange"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期" style="margin-right: 20px;">
                                        </el-date-picker>
                                        <el-button #append icon="el-icon-search"></el-button>
                                    </el-col>
                                </el-row>
                                <el-row style="margin-top: 15px">
                                    <template>
                                        <el-table
                                                :data="tableData"
                                                border
                                                style="width: 100%">
                                            <el-table-column
                                                    fixed="left"
                                                    type="selection"
                                                    width="55">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="state"
                                                    label="状态"
                                                    width="180">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="jydh"
                                                    label="借用单号"
                                                    width="180">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="jytime"
                                                    label="借用时间">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="jypeo"
                                                    label="借用人">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="jcpeo"
                                                    label="接触处理人"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="ghpeo"
                                                    label="归还处理人">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="yghtime"
                                                    label="预计归还时间"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="ghtime"
                                                    label="归还时间"
                                                    width="500"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    label="操作">
                                                <el-button type="text">查看</el-button>
                                            </el-table-column>
                                        </el-table>
                                    </template>
                                </el-row>
                            </el-tab-pane>
                        </el-tabs>
                    </template>
                </el-card>
            </el-col>
        </el-row>
        <el-dialog title="借用单" :visible.sync="dialogFormVisible" width="75%">
            <el-form label-width="100px">
                <el-col :span="12">
                    <el-form-item label="供应商">
                        <el-input value="" placeholder="供应商"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="供应人" >
                        <el-input value="" placeholder="供应人"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系方式" >
                        <el-input value="" placeholder="联系方式" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="维保到期时间">
                        <el-date-picker  placeholder="维保到期时间">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="维保说明" >
                        <el-input type="textarea" value="" placeholder="维保说明" >
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                dialogFormVisible:false,
                tableData:[{
                    state:1,
                    jydh:'024696',
                    jytime:'2019-10-26',
                    jypeo:'是谁都',
                    jcpeo:'大大',
                    ghpeo:'大额点',
                    yghtime:'2019-11-26',
                    ghtime:'2019-11-28'
                },{
                    state:1,
                    jydh:'024696',
                    jytime:'2019-10-26',
                    jypeo:'是谁都',
                    jcpeo:'大大',
                    ghpeo:'大额点',
                    yghtime:'2019-11-26',
                    ghtime:'2019-11-28'
                }]
            }
        },
        methods: {},
        created() {

        },
        mounted() {

        },
    }
</script>
<style scoped>

</style>