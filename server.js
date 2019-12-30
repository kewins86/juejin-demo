const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
     //将/p/:id的路径切换成/post?title=req.params.id的路径
    server.get('/p/:id', (req, res) => {
      app.render(req, res, '/post', {title: req.params.id})
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> 启动')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })