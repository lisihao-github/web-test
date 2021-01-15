import { fetchData } from './src/6.ajax'
jest.mock('./src/6.ajax'); // 替换整个文件

it('测试能否正常获取用户数据', async () => {
    let r = await fetchData();
    expect(r).toEqual(['张三', '李四'])
})