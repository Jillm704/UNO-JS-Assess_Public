// Problem 1:

const greetings = ['Hello', 'Asalaam alaikum', 'Zdraveite', 'Shalom aleichem', 'Konnichiwa', 'Hola', 'Habari', 'Anyoung haseyo'];

function longestString(greetings) {
    let max = greetings[0].length;
    greetings.map( v => max = Math.max(max, v.length));
    result = greetings.filter(v => v.length == max);
    return result;
}

console.log(longestString(greetings));

// Problem 2:

let noSpace = /[\W_]/g;
const story = document.querySelector('#problem2').innerText.replace(noSpace, "");

function getCounts(story) {
    const histogram = {};
    for (let i = 0; i < story.length; i++) {
        const ch = story[i];
        if (!histogram[ch]) {
            histogram[ch] = 0;
        }
        histogram[ch]++;
    }
    return histogram;
}

console.log(getCounts(story));

//Problem 3:

let isAnagrams1 = (str, targ) => {
    let noSpace = /[\W_]/g;
    str = str.split('').sort().join('').replace(noSpace, "");
    targ = targ.split('').sort().join('').replace(noSpace, "");
    return str === targ;
};

console.log(
    isAnagrams1('below', 'elbow'),
    isAnagrams1('study', 'boring'),
    isAnagrams1('night', 'day'),
    isAnagrams1('stressed', 'dessert'),
    isAnagrams1('debit card', 'bad credit'),
    isAnagrams1('conversation', 'voice rants on'),
    isAnagrams1('eleven plus two', 'twelve plus one')
)

//Problem 4:

function palindrome(s) {
    let reg = /[\W_]/g;
    let smallStr = s.toLowerCase().replace(reg, "");
    let reversed = smallStr.split('').reverse().join('');
    if (reversed === smallStr) return true;
    return false;
}

console.log(
    palindrome("testset"),
    palindrome("javascript"),
    palindrome("development"),
    palindrome("drab as a fool aloof as a bard"),
    palindrome("are we not drawn onward, we few, drawn onward to new era")
)