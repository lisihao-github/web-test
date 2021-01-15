import { map } from './src/4.fn'


it('测试 map 方法', () => {
    // jest.fn 模拟一个方法, 让用户调用, 用户调用这个函数的所有信息 都会被记录到 当前mock属性上

    let fn = jest.fn() // 模拟函数 可以记录被执行的过程
    map([1, 2, 3], fn)

    // console.log(fn)
    expect(fn.mock.calls[0][0]).toBe(1)
    expect(fn.mock.calls[0][1]).toBe(0)

    expect(fn).toHaveBeenCalled()
    expect(fn).toHaveBeenCalledTimes(3)
})
