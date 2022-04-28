const {messageService} = require('../services')

const { validationResult } = require('express-validator');


/** CREATE */
const createMessage = async (req, res) => {
  try {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const message = {
      author: req.body.author,
      title: req.body.title,
      content: req.body.content
    }
    await messageService.createMessage(message)
    return res.status(200).json(message)
  } catch (e) {
    return res.status(500).json(e)
  }
}

/** GET all message */
const getAllMessage = async (req, res) => {
  try {
    const messages = await messageService.queryMessages()
    if(messages.length === 0) {
      return res.status(404).status('Not found any message!')
    }
    return res.status(200).json(messages)
  } catch (e) {
    return res.status(500).json(e)
  }
}

/** GET message by id */
const getMessage = async (req, res) => {
  try {
    const message = await messageService.getMessageById(req.params.messageId)
    if(!message) {
      return res.status(404).json('Message not found!')
    }
    return res.status(200).json(message)
  }catch (err) {
    return res.status(500).json(err)
  }
}

/** DELETE message by id */
const deleteMessage = async (req, res) => {
  try {
    const message = await messageService.getMessageById(req.params.messageId)
    if(!message) {
      return res.status(404).json('Message not found')
    }
    await messageService.deleteMessageById(req.params.messageId)
    return res.status(200).json('Delete successfully!')
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  createMessage,
  getAllMessage,
  getMessage,
  deleteMessage
}
