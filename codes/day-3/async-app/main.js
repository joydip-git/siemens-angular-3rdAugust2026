const divide = async (a, b) => {
    const res = a / b
    if (res === Infinity) {
        const error = new Error('divisor should not be zero')
        throw error
        //Promise.reject(error)
    }
    return res
    //Promise.resolve(res)
}

const add = (a, b) => a + b

async function call() {
    try {
        const divResPromise = divide(12, 3)
        const data = await divResPromise
        console.log(data);        
    } catch (error) {
        console.log(error);
    }
}

call()

const addRes = add(12, 3)
console.log(addRes);