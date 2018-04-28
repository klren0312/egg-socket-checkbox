'use strict'
let usernum = 0
module.exports = app => {
  return async (ctx, next) => {
    ++usernum 
    console.log('connect',usernum)
    ctx.socket.emit('old', [
      {name:'v1',checked:await app.redis.get('v1')},
      {name:'v2',checked:await app.redis.get('v2')},
      {name:'v3',checked:await app.redis.get('v3')},
      {name:'v4',checked:await app.redis.get('v4')},
      {name:'v5',checked:await app.redis.get('v5')},
      {name:'v6',checked:await app.redis.get('v6')}
    ])
    app.io.emit('user joined', 'user joined')
    // 用户退出
    await next()
    --usernum
    app.io.emit('user left', 'user left')
  }
}