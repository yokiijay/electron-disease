const Koa = require('koa')
const app = new Koa()
const axios = require('axios')
const koaStatic = require('koa-static')
const path = require('path')

app.use(koaStatic(path.resolve(__dirname, 'build')))

app.use(async ctx=>{
  const res = await axios.get('https://view.inews.qq.com'+ctx.url)
  const {data} = res.data

  ctx.body = JSON.parse(data)
})

function serverReady(callback){
  app.listen(5000, ()=>callback&&callback())
}

module.exports = serverReady