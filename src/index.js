const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
const obj = {
	'10': '.',
	'11': '-',
};

 function decode(expr) {
        let arr = expr.match(/(.{1,10})/gim);

        let newArr = arr.map(function(item){
            if(item === '**********') return item = [' '];
            else {
                let str = String(item = +item);
                return str.match(/(.{1,2})/gim);
            }
        })
    
        newArr = newArr.map(function(item){
            let arr1 = item.map(function(str){
                if(str != ' ') return obj[str];
                else return str;
            })
            return arr1.join('');
        })
        
        newArr = newArr.map(function(item){
            if(item != ' ') return MORSE_TABLE[item];
            else return ' ';
        })

        
        return newArr.join('');
    } 


module.exports = {
    decode
}