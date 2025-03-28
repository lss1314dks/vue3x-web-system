//创建假接口
function createUserList() {
    return [
        {
            userId: 1,
            avatar:
                "https://img.yzcdn.cn/vant/cat.jpeg",
            username: "admin",
            password: "123456",
            desc: "超级管理员",
            roles: ["admin"],
            buttons: ['cuser', 'ruser', 'uuser', 'duser'],
            routers: ['home'],
            token: 'Admin Token'
        },
        {
            userId: 2,
            avatar:
                "https://img.yzcdn.cn/vant/cat.jpeg",
            username: "editor",
            password: "123456",
            desc: "普通管理员",
            roles: ["editor"],
            buttons: ['cuser', 'ruser', 'uuser'],
            routers: ['home'],
            token: 'Editor Token'
        }

    ]
}

//对外暴露一个数组,数据里面包含2个接口
//第一个接口是:获取用户信息的接口,第二个接口是:登录接口
export default [
    //用户登录接口
    {
        url: '/api/user/login',
        method: 'post',
        response: ({ body }) => {
            const { username, password } = body
            //调用获取用户信息函数
            const userList = createUserList().find(
                (item) => item.username == username && item.password == password
            )
            //没有用户返回失败信息
            if (!userList) {
                return { code: 201, data: { message: '账户或密码不正确' } }
            }
            //如果有返回成功的信息
            const { token } = userList
            return { code: 200, data: { token } }
        },
    },

    //获取用户信息接口
    {
        url: '/api/user/info',
        method: 'get',
        response: ({ headers }) => {
            //获取token
            const token = headers.token
            //调用获取用户信息函数
            const userList = createUserList().find(
                (item) => item.token == token
            )
            //没有用户返回失败信息
            if (!userList) {
                return { code: 201, data: { message: '用户不存在' } }
            }
            //如果有返回成功的信息
            return { code: 200, data: { userList } }
        },
    },
]