一位老师正在出一场由 n 道判断题构成的考试，每道题的答案为 true （用 'T' 表示）或者 false （用 'F' 表示）。老师想增加学生对自己做出答案的不确定性，方法是 最大化 有 连续相同 结果的题数。（也就是连续出现 true 或者连续出现 false）。

给你一个字符串 answerKey ，其中 answerKey[i] 是第 i 个问题的正确结果。除此以外，还给你一个整数 k ，表示你能进行以下操作的最多次数：

每次操作中，将问题的正确答案改为 'T' 或者 'F' （也就是将 answerKey[i] 改为 'T' 或者 'F' ）。
请你返回在不超过 k 次操作的情况下，最大 连续 'T' 或者 'F' 的数目。

 

示例 1：

输入：answerKey = "TTFF", k = 2
输出：4
解释：我们可以将两个 'F' 都变为 'T' ，得到 answerKey = "TTTT" 。
总共有四个连续的 'T' 。
示例 2：

输入：answerKey = "TFFT", k = 1
输出：3
解释：我们可以将最前面的 'T' 换成 'F' ，得到 answerKey = "FFFT" 。
或者，我们可以将第二个 'T' 换成 'F' ，得到 answerKey = "TFFF" 。
两种情况下，都有三个连续的 'F' 。
示例 3：

输入：answerKey = "TTFTTFTT", k = 1
输出：5
解释：我们可以将第一个 'F' 换成 'T' ，得到 answerKey = "TTTTTFTT" 。
或者我们可以将第二个 'F' 换成 'T' ，得到 answerKey = "TTFTTTTT" 。
两种情况下，都有五个连续的 'T' 。
 

提示：

n == answerKey.length
1 <= n <= 5 * 104
answerKey[i] 要么是 'T' ，要么是 'F'
1 <= k <= n


方法一：滑动窗口
思路和算法

只要求最大连续指定字符的数目时，本题和「1004. 最大连续1的个数 III」完全一致。

在指定字符的情况下，我们可以计算其最大连续数目。具体地，我们使用滑动窗口的方法，从左到右枚举右端点，维护区间中另一种字符的数量为 sum，当 sum 超过 k，我们需要让左端点右移，直到 sum≤k。移动过程中，我们记录滑动窗口的最大长度，即为指定字符的最大连续数目。

本题的答案为分别指定字符为 T 和 F 时的最大连续数目的较大值。

题目要求统计最长的区间，这个区间内 T的数目小于等于k 或 F的数目小于等于k。
我们使用双指针维护当前指针对应的最左区间，并维护两个指针间T和F的各自的数目。
加入当前指针的T或F的数目，如果导致当前区间的数目不满足题目要求，抛去左指针T或F的数目并移动左指针直到满足为止。
统计每个指针最左的指针，就是该指针对应的最大区间长度。



const T = 'T'.charCodeAt(0), F = 'F'.charCodeAt(0)
var maxConsecutiveAnswers = function(answerKey, k) {
    let ans = 0
    for(let left = 0, right = 0, cntsT = 0, cntsF = 0; right < answerKey.length; right++) {
        cntsT += answerKey.charCodeAt(right) === T ? 1 : 0
        cntsF += answerKey.charCodeAt(right) === F ? 1 : 0
        while(cntsT > k && cntsF > k) {
            cntsT -= answerKey.charCodeAt(left) === T ? 1 : 0
            cntsF -= answerKey.charCodeAt(left) === F ? 1 : 0
            left++
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};