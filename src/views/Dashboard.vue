<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" style="height: 30px">
            <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>仪表盘</el-breadcrumb-item>
        </el-breadcrumb>
<!--        六栅格-->
        <el-row :gutter="30">
            <el-col :span="4" >
                <div class="el-col-item">

                </div>
            </el-col>
            <el-col :span="4" :gutter="30">
                <div class="el-col-item">

                </div>
            </el-col>
            <el-col :span="4" >
                <div class="el-col-item">

                </div>
            </el-col>
            <el-col :span="4" :gutter="30">
                <div class="el-col-item">

                </div>
            </el-col>
            <el-col :span="4" >
                <div class="el-col-item">

                </div>
            </el-col>
            <el-col :span="4" :gutter="30">
                <div class="el-col-item">

                </div>
            </el-col>
        </el-row>
<!--        卡片布局-->
        <el-row :gutter="30" style="margin-top: 30px ">
            <el-col :span="12">
                <el-card class="box-card" style="height: 250px">
                    <template #header>
                        <div  class="clearfix">
                            <i class="iconfont icon-cz-fsdjb"></i>
                            <span>资产概况</span>
                        </div>
                    </template>
                    <el-row>
                        <el-col :span="12"><div id="main" style="width: 380px;height:160px; margin-left: 50px"></div></el-col>
                        <el-col :span="12"><div id="main2" style="width: 380px;height:160px; float:right;"></div></el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card" style="height: 250px">
                    <template #header>
                        <div class="clearfix">
                            <i class="iconfont icon-wodetouzi"></i>
                            <span>资产状态占比</span>
                        </div>
                    </template>
                    <el-row>
                        <el-col :span="16" :offset="5">

                            <div id="main3" style="height: 180px ;width: 480px"></div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-card class="box-card" style="height: 400px;margin-top: 30px;">
                    <template #header>
                        <div  class="clearfix">
                            <i class="iconfont icon-cz-fsdjb"></i>
                            <span>资产分类统计</span>
                        </div>
                    </template>
                    <el-row>
                        <el-col :span="20" >
                            <div id="zhexian" style="height:330px; width: 1800px">

                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        data() {
            return {}
        },
        methods: {},
        created() {

        },
        mounted() {
            //图表一
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                },
                series: [
                    {
                        name:'资产概况',
                        type:'pie',
                        radius: ['60%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'再用'},
                            {value:310, name:''},
                        ]
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            //图标2
            var myChart = echarts.init(document.getElementById('main2'));
            // 指定图表的配置项和数据
            var option2 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',

                },
                series: [
                    {
                        name:'资产概况',
                        type:'pie',
                        radius: ['60%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'闲置'},
                            {value:310, name:''},
                        ]
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option2);
            //图标3
            var myChart = echarts.init(document.getElementById('main3'));
            // 指定图表的配置项和数据
            var option2 = {
                title : {

                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'right',
                    data: ['闲置','再用','报废']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'闲置'},
                            {value:310, name:'再用'},
                            {value:234, name:'报废'},

                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option2);
            //图标4
            var myChart = echarts.init(document.getElementById('zhexian'));
            // 指定图表的配置项和数据
            var option2 = {

                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option2);
        },
    }
</script>
<style scoped>
    .el-col-item{
        width: 100%;
        height: 90px;
        background: #0baee4;
    }
</style>