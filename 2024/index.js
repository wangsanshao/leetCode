
const T = 'T'.charCodeAt(0), F = 'F'.charCodeAt(0)
var maxConsecutiveAnswers = function(answerKey, k) {
    let ans = 0
    for(let left = 0, right = 0, cntsT = 0, cntsF = 0; right < answerKey.length; right++) {
        //从左向右开始滑动，维护两个数组，分别为滑动过程中T和F的连续存在的个数
        cntsT += answerKey.charCodeAt(right) === T ? 1 : 0
        cntsF += answerKey.charCodeAt(right) === F ? 1 : 0
        // 为什么是这个判断终止条件？
        // 因为只能替换k次，超过k次，多余的T或F就不能替换了，此时就舍弃最左边的指针
        while(cntsT > k && cntsF > k) {
            // 个数减一
            cntsT -= answerKey.charCodeAt(left) === T ? 1 : 0
            cntsF -= answerKey.charCodeAt(left) === F ? 1 : 0
            // 左侧指针后移
            left++
        }
        // 最右边指针减去最左边指针加一，就是此子串的长度， 每次存起来子串长度，循环后再比较哪个长
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};

const result = maxConsecutiveAnswers("TTFF", 1)

console.log('result: ', result)