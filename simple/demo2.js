const Vue = require('vue');
const render = require('vue-server-renderer').createRenderer();
const express = require('express');
const server = express();

server.get('*', (req, res) => {
    const app = new Vue({
        data:{
            url:req.url
        },
        template:`<div>hello {{url}}!</div>`
    });

    render.renderToString(app).then(html=>{
        res.end(`
                 <!DOCTYPE html>
                <html lang="en">
                    <head><title>hello</title></head>
                    <body>${html}</body>
                </html>
            `)
    }).catch(error =>{
        res.status(500).end('Internal Server　Error!');
    })
})

server.listen(3000);