/**
 * 
 * @param {Number} msec 
 * @returns 
 */
export function sleep(msecs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, msecs);
    })
}