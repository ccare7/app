<template>
    <div class="">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 30px">
            <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>领用退库</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="24">
                <el-card>
                    <template>
                        <el-tabs v-model="activeName">
                            <el-tab-pane label="领用" name="first">
                                <el-row>
                                   <el-col :span="10" >
                                    <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogFormVisible = true">新增</el-button>
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
                                <el-row style="margin-top: 15px  "  >
                                    <template>
                                        <el-table
                                                :data="tableData"
                                                border
                                                style="width: 100%; ">
                                            <el-table-column
                                                    fixed="left"
                                                    type="selection"
                                                    width="55">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="date"
                                                    label="领用单号"
                                                    width="180">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="name"
                                                    label="领用时间"
                                                    width="180">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="领用人">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="领用部门">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="领用公司"
                                                    width="700"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                                    prop="address"
                                                    label="预计退库时间">
                                            </el-table-column>
                                            <el-table-column
                                                    label="操作">
                                                <el-button type="text">查看</el-button>
                                            </el-table-column>
                                        </el-table>
                                    </template>

                                </el-row>
                            </el-tab-pane>
                            <el-tab-pane label="退库" name="second">
                                <el-row>
                                    <el-col :span="10" >
                                        <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogFormVisible = true">新增</el-button>
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

                                <el-row>
                                    <template>
                                        <el-table
                                                :data="tableData2"
                                                border
                                                style="width: 100%">
                                            <el-table-column
                                                    fixed="left"
                                                    type="selection"
                                                    width="55">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="danhao"
                                                    label="退库单号"
                                                    width="180">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="tktime"
                                                    label="退库时间"
                                                    width="180">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="ckname"
                                                    label="仓库名称">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="tkcomp"
                                                    label="退库使用公司">
                                            </el-table-column>
                                            <el-table-column
                                                    prop="clpeo"
                                                    label="处理人"
                                                    width="700"
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
        <el-dialog title="领用单" :visible.sync="dialogFormVisible" width="75%">
               <el-form label-width="100px">
                   <el-row>
                       <el-col :span="8">
                           <el-form-item label="领用人" style="width: 300px">
                               <el-col :span="20"> <el-input></el-input></el-col>
                               <el-col :span="4">
                                   <el-button type=""><i class="el-icon-share"></i></el-button>
                               </el-col>
                           </el-form-item>

                       </el-col>
                   </el-row>


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
                activeName:'first',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                tableData2:[{
                    danhao: '1112111',
                    tktime:'2016-05-01',
                    ckname:'ppt仓库',
                    tkcomp:'憨憨集团',
                    clpeo:'jdkajs'
                    },{
                    danhao: '1112111',
                    tktime:'2016-05-01',
                    ckname:'ppt仓库',
                    tkcomp:'憨憨集团',
                    clpeo:'jdkajs'
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