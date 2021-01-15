// 异步代码

const getDataByCallback = (cb) => {
    setTimeout(() => {
        cb({
            name: 'lsh'
        })
    }, 1000);
}


const getDataByPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'lsh'
            })
        }, 1000);
    })
}

export {
    getDataByCallback,
    getDataByPromise
}