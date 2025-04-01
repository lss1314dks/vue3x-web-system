<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0">
                占位的格子
            </el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login-form" :rules="rules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到{{ setting.title
                    }}</h2>
                    <!-- 账号 -->
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username">

                        </el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item prop="password">
                        <el-input show-password :prefix-icon="Lock" type="password" v-model="loginForm.password">

                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" @click="login" class="login-btn" type="primary">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang='ts'>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import setting from '@/setting'
//引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
import { useRoute, useRouter } from 'vue-router'
import { ElNotification } from 'element-plus/es/components/index.mjs'
import { getTime } from '@/utils/time'

//获取loginform表单校验规则
let loginForms = ref();

let useStore = useUserStore();
//获取路由器
let $router = useRouter();
let $route = useRoute();

//定义变量控制按钮加载效果
let loading = ref(false)

//收集账号与密码的数据
let loginForm = reactive({ username: 'admin', password: '123456' })

//登录按钮的回调
const login = async () => {
    await loginForms.value.validate()

    loading.value = true
    //请求成功-》首页展示
    // 请求失败-》提示错误信息
    try {
        await useStore.userLogin(loginForm)
        //登录成功的提示信息
        ElNotification({
            type: 'success',
            title: `Hi ,${getTime()}好`,
            message: '欢迎回来',
        })
        //判断是否携带query参数
        let redirect: any = $route.query.redirect;
        $router.push({ path: redirect || '/' })
        loading.value = false

    } catch (error) {
        //登录失败的效果消失
        loading.value = false
        ElNotification({
            type: 'error',
            title: '账号或密码不正确',
        })
    }

}

//自定义校验规则需要的函数
const validatorUserName = async (rule: any, value: string, callback: any) => {
    //rule:即为校验规则对象
    //value:即为表单元素文本内容
    //函数：如果符合条件callback放心通过即可
    //函数：如果不符合条件callback报错即可
    // if (/^\d{5,10}$/.test(value)) {
    //     callback()
    // } else {
    //     callback(new Error('账号长度至少5位'))
    // }
    if (value.length >= 5) {
        callback()
    } else {
        callback(new Error('账号长度至少5位'))
    }
}

const validatorPassword = async (rule: any, value: string, callback: any) => {
    if (value.length >= 6) {
        callback()
    } else {
        callback(new Error('密码长度至少为6位'))
    }
}
//定义表单校验需要配置对象
const rules = {
    username: [
        // {
        //     required: true, message: '用户名不能为空', trigger: 'blur'

        // },
        // {
        //     required: true, min: 6, max: 10, message: '账号长度至少6位', trigger: 'change'
        // }
        { trigger: 'change', validator: validatorUserName }
    ],
    password: [
        // { required: true, message: '密码不能为空', trigger: 'blur' }
        // ,
        // {
        //     required: true, min: 6, max: 18, message: '密码长度至少6位', trigger: 'change'
        // }
        { trigger: 'change', validator: validatorPassword }

    ]
}


</script>
<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url("../../assets/images/login_bck.png") no-repeat;
    background-size: cover;




    .login-form {
        position: relative;
        width: 80%;
        top: 30vh;
        background-color: rgba(83,
                104,
                157, 0.2);
        padding: 40px;

        h1 {
            color: #fff;
            font-size: 30px;

        }

        h2 {
            color: #fff;
            font-size: 20px;
            margin: 20px 0px;
        }

        .login-btn {
            width: 100%;
            // background-color: rgb(63, 158, 255);
            color: #fff;
        }
    }
}
</style>
