
const Vue = require('vue');
const vueServerReenderer = require('vue-server-renderer');
const app = new Vue({
    template:`<div>hello world!</div>`
});

const render = vueServerReenderer.createRenderer();

render.renderToString(app).then(
    html=> {
        console.log(html)
    }
).catch(error => {
    console.error(error)
})

