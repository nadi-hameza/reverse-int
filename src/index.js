module.exports = function reverse (n) {
        if (n > 0) {
            let rev = String(n);
             let rev1 = Array.from(rev);
            return rev1.reverse().join('');
        }
        else {
            let min = n * -1;
            let rev = String(min);
            let rev1 = Array.from(rev);
            let massi = rev1.reverse().join('')
            let numb = Number(massi);
            return numb;
        }
}