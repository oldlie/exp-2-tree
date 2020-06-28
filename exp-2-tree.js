let str = 'exp1 and 表达式2 and exp3'

function TreeNode() {
    this.left = {};
    this.right = {};
}

function isLogicOpt(str) {
    return str === 'and' ||
     str === 'or';
}

let root = new TreeNode();

function getWords(exp) {
    exp = exp.replace(/\s+/ig, ' ')
    let chars = [];
    let words = [];
    let word = '';
    for (let i in exp) {
        let char = exp[i];
        console.log(char);
        if (char === ' ') {
            words.push(word);
            word = '';
            continue;
        }
        word += char;
    }
    for (let i in words) {
        console.log(words[i]);
    }
}

function express(exp) {

    

    for (let i in words) {
        let word = words[i];
        if (isLogicOpt(word)) {
            express
        }
    }
}

getWords(str);