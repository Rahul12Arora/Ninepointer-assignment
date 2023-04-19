const express =  require('express');
const dotenv = require('dotenv').config()
const port = process.env.PORT;

const app = express();

//Seprates the sentence into word array
let sentence = "this is a sentence"
let words;
function maxlen(sentence){
    words = sentence.split(" ");
}
maxlen(sentence)

console.log(words);
let maxword = "";
let minword = words[0];
function finder(words){
    words.forEach(element => {
        if(element.length>maxword.length) maxword = element
        if(element.length<minword.length) minword = element
    });
}

useState()
useEffect(()=>{
    useInterviewerSir
},
[interviewerSir, Rahul])
finder(words);

console.log(maxword);
console.log(minword);

const tosend = {

}

app.get('/', (req, res) => {
    // res.sendStatus(200);
    res.statusCode(200).json(ans);
})

app.listen(port || 5001,()=>{
    console.log(`server listening on ${port}`);
})

