const divide = (a, b) => {
    const p = new Promise(
        //executor function
        (resolveFnRef, rejectFnRef) => {
            const res = a / b
            if (res === Infinity) {
                const error = new Error('divisor should not be zero')
                //throw error
                rejectFnRef(error)
            }
            //return res
            resolveFnRef(res)
        }
    )
    return p
}

const add = (a, b) => a + b

const divResPromise = divide(12, 3)
divResPromise
    .then((data) => {
        console.log(data);        
    })
    .catch((err) => { console.log(err); })

const addRes = add(12, 3)
console.log(addRes);