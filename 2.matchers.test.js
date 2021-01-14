// 匹配器我一般把他分成三类 （方便记忆）



it('测试相等情况  （全等） （长得一样） 是不是真的 是不是假的', () => {
    expect(1 + 1).toBe(2);
    expect({ name: 'lsh' }).toEqual({ name: 'lsh' });
    expect(true).toBeTruthy();
    expect(false).toBeFalsy()
})


it('测试不相等 （大于 小于 大于等于 小于等于）', () => {
    expect(1 + 1).not.toBe(3)
    expect(1 + 1).toBeLessThan(3)
    expect(1 + 1).toBeGreaterThanOrEqual(0)
})


it.only('是否包含 是否匹配', () => { // it.only只测试当前文件的这个用例
    expect('hello').toContain('o')
    expect('hello').toMatch(/hello/)
})