'use strict';

const Controller = require('egg').Controller;
let addedUser = false
class ChatController extends Controller {
  /**
   * check
   */
  async check() {
    const {ctx, app} = this
    const nsp = app.io.of('/')
    const message = ctx.args[0] || {}
    app.redis.set(message.id, message.checked)
    ctx.socket.broadcast.emit('check', message)
  }
}

module.exports = ChatController;
