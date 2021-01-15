
import { getDataByCallback, getDataByPromise } from './src/3.async'

// 1.异步回调方式可以传入 done 函数 什么时候完成什么时候调用
// 2.使用 mockTimer 的方式 替换掉定时器 (代码就变成了同步的代码)


it('测试回调函数 获取数据', (done) => {
    // 默认不会等待异步执行完毕后在测试

    // jest.useFakeTimers() // 使用假的定时器

    getDataByCallback((data) => {
        expect(data).toEqual({ name: 'lsh' })
        done()
    })

    // jest.runAllTimers() // 运行所有的定时器
    // jest.runOnlyPendingTimers(); // 只运行当前等待队列的一个
    // jest.advanceTimersByTime(1000000100)
})


// 如果是promise done 、 async+await
it('测试promise获取数据', async () => {
    let data = await getDataByPromise()
    expect(data).toEqual({
        name: 'lsh'
    });
});