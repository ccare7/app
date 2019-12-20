<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 30px">
            <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>资产登记</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row :span="20">
            <el-card class="box-card">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="资产登记" name="first">
                    </el-tab-pane>
                </el-tabs>
                <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogFormVisible = true">新增</el-button>
                <el-button type="danger" size="small" icon="el-icon-delete">删除</el-button>
                <el-dropdown split-button type="primary" size="small" style="margin-left: 10px">
                    <i class="el-icon-upload2"></i>导入/导出
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown split-button type="primary" size="small" style="margin-left: 10px">
                    <i class="el-icon-printer"></i>打印
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-col :span="6" style="float: right">
                    <el-input placeholder="请输入内容"  v-model="content" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"  @click="search"></el-button>
                    </el-input>
                </el-col>
                <el-row style="margin-top: 15px;">
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
                                    label="资产状态"
                            >
                                <template #default="obj">
                                    <el-button type="primary" v-if="obj.row.state===1" size="mini" round>闲置</el-button>
                                    <el-button type="success" v-else-if="obj.row.state===2" size="mini" round>再用</el-button>
                                    <el-button type="info" v-else-if="obj.row.state===3" size="mini" round>借用</el-button>
                                    <el-button type="danger" v-else-if="obj.row.state===4" size="mini" round>报废</el-button>
                                    <el-button type="warning" v-else-if="obj.row.state===5" size="mini" round>维修中</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="code"
                                    label="资产条码"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="资产类型"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="type"
                                    label="地址"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="size"
                                    label="邮编"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="series"
                                    label="姓名"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="unit"
                                    label="计量单位"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="price"
                                    label="金额"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="company"
                                    label="使用公司"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="department"
                                    label="使用部门"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="date"
                                    label="购买时间"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="使用人"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="manager"
                                    label="管理员"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="location"
                                    label="存放地点"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="expires"
                                    label="使用期限"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="source"
                                    label="来源"
                            >
                            </el-table-column>

                            <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="100">
                                <template>
                                    <el-button type="text" size="small">查看</el-button>
                                    <el-button type="text" size="small">编辑</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="block" style="margin-top: 20px">
                            <el-pagination
                                    background
                                    layout="sizes,prev, pager, next"
                                    :page-sizes="[10, 20, 30, 40]"
                                    :page-size.sync=size
                                    :current-page.sync=page
                                    :total=total>
                            </el-pagination>
                        </div>
                    </template>
                </el-row>
            </el-card>
        </el-row>
        <el-dialog title="资产登记" :visible.sync="dialogFormVisible" width="75%">

                <el-tabs tab-position="left">
                    <el-tab-pane label="用户管理">
                        <el-form label-width="80px">
<!--                        第一行-->
                        <el-col :span="8">
                            <el-form-item label="资产条码">
                                <el-input :disabled="true" placeholder="自动生成"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="资产名称">
                                <el-input value="" placeholder="资产名称" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="资产类型">
                                <el-select  placeholder="资产类型" >
                                    <el-option label="区域一" value="sss"></el-option>
                                    <el-option label="区域二" value="sss"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
<!--                       第二行-->
                        <el-col :span="8">
                            <el-form-item label="规格型号">
                                <el-input value="" placeholder="规格型号" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="SN号">
                                <el-input value="" placeholder="SN号" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" >
                            <el-form-item label="计量单位">
                                <el-input value="" placeholder="计量单位" ></el-input>
                            </el-form-item>
                        </el-col>
<!--                        第三行-->
                        <el-col :span="8">
                            <el-form-item label="金额" >
                                <el-input value="" placeholder="金额"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="使用公司">
                                <el-select placeholder="使用公司">
                                    <el-option label="区域一" value="sss"></el-option>
                                    <el-option label="区域二" value="sss"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="使用部门">
                                <el-select placeholder="使用部门" >
                                    <el-option label="区域一" value="sss"></el-option>
                                    <el-option label="区域二" value="sss"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
<!--                        第四行-->
                        <el-col :span="8" >
                            <el-form-item label="购买时间">
                                    <el-date-picker  placeholder="选择日期">
                                    </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="使用人">
                                <el-select  placeholder="使用人">
                                    <el-option label="区域一" value="sss"></el-option>
                                    <el-option label="区域二" value="sss"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="管理员">
                                <el-select  placeholder="管理员" >
                                    <el-option label="区域一" value="sss"></el-option>
                                    <el-option label="区域二" value="sss"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
<!--                        第五行-->
                        <el-col :span="8">
                            <el-form-item label="存放地方">
                                <el-select  placeholder="存放地方" >
                                    <el-option label="区域一" value="sss"></el-option>
                                    <el-option label="区域二" value="sss"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="使用期限">
                                <el-input placeholder="使用期限(月)" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="来源">
                                <el-select  placeholder="来源" >
                                    <el-option label="区域一" value="sss"></el-option>
                                    <el-option label="区域二" value="sss"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
<!--                        第六行-->
                        <el-col :span="16">
                            <el-form-item label="备注" >
                            <el-input type="textarea" value="" placeholder="备注">
                            </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="资产照片">
                            <el-upload
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    list-type="picture-card"
                                    :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                                <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                            </el-form-item>
                        </el-col>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="配置管理">
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
                    </el-tab-pane>
                </el-tabs>

            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                activeName:"first",
                dialogImageUrl: '',
                dialogVisible: false,
                tableData:[],
                dialogFormVisible:false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                total:100,
                size:100,
                page:1,
                content:''
            }
        },
        methods: {
            open(){

            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            fetchData(){
                axios.get("https://www.easy-mock.com/mock/5d2d4250113a00460bcc35a3/dingai/property",{
                    params:{
                        page:this.page,
                        size:this.size,
                        content:this.content
                    }
                }).then((res)=>{
                    console.log(this.total);
                    this.tableData=res.data.data.data;
                    this.total=res.data.data.total;
                    this.size=res.data.data.size;
                })
            },
            search(){
                this.page=1;
                this.size=5;
                this.fetchData()
            }
        },

        created() {
            this.fetchData()
        },
        mounted() {

        },
    }
</script>
<style scoped>

</style>