import { addNode, removeNode } from './src/2.dom'

it('测试能否正常添加节点', () => {
    document.body.innerHTML = `<div id="wrapper"></div>`
    let botton = document.createElement('button')
    let wrapper = document.querySelector('#wrapper')
    addNode(botton, wrapper)
    wrapper = document.querySelector('#wrapper')
    let btn = wrapper.querySelector('button')
    expect(btn).not.toBeNull()
})


it('测试是否能够正常删除', () => {
    document.body.innerHTML = `<div id="wrapper"><button id="button"></button></div>`
    let btn = document.querySelector('#button');
    expect(btn).not.toBeNull()

    removeNode(btn)
    btn = document.querySelector('#button')
    expect(btn).toBeNull()
})