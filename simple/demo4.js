const Vue = require('vue');
const serverRender = require('vue-server-renderer');
const express = require('express');
const server = express();
const App = require('./demo4.vue');



const render = serverRender.createRenderer({
    template: require('fs').readFileSync('./simple/template.html','utf-8')
});
const context = {
    title:"Vue SSR!",
    meta:`
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="description" content="Vue.js 服务端渲染指南">
    `
}


server.get('*' , (req,res) =>{
    const  app = new Vue({
        render:h=> h(App)
    })

    render.renderToString(app , context).then(html=>{
        res.end(html);
    }).catch(error =>{
        res.status(500).end('500!');
    })

})

server.listen(3000);
