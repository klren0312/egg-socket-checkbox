'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  io.of('/').route('new message', io.controller.chat.newMsg)
  io.of('/').route('add user', io.controller.chat.addUser)
  io.of('/').route('stop typing', io.controller.chat.stopTyping)
  io.of('/').route('typing', io.controller.chat.typing)
  io.of('/').route('check', io.controller.chat.check)
};
