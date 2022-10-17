/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.
    
    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

function r2d2Speaks(code) {
    if (code.length === 0) return;
    let totalTime = 0;
    let firstEl = code.shift();
    if (firstEl === 0) {
        console.log('beep');
        totalTime += 400;
        // console.log(totalTime);
        setTimeout(() => r2d2Speaks(code, totalTime), 400);
    } else if (firstEl === 1) {
        console.log('boop');
        totalTime += 800;
        // console.log(totalTime);
        setTimeout(() => r2d2Speaks(code, totalTime), 800);
    }
}

    // if (!code.length) return;
    // let first = code[0];
    // r2d2Speaks(code.slice(1))
    // if (first === 0) {
    //     setTimeout(function () {
    //         r2d2Speaks = () {
    //             console.log('beep');
    //         }
    //     }, 400)
    // } else if (first === 1) {
    //     console.log('boop')
    //     setTimeout(r2d2Speaks, 800)
    // }

    // for (let el of code) {
    //     if (el === 0) {
    //         console.log('beep')
    //     } else if (el === 1) {
    //         console.log('boop')
    //     }
    // }
    // setTimeout(r2d2Speaks, 400)   



let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
