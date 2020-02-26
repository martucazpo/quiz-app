class Question {
        constructor(content,text,src,alt,answers=[{}]){
            this.content = content;
            this.text = text;
            this.src = src;
            this.alt = alt;
            this.answers = answers;
        }
    }
    
    class Answer {
        constructor(text,correct,isTrue){
            this.text = text;
            this.correct = correct;
            this.isTrue = isTrue;
        }
    }
    
    let four = new Answer(4,'correct',true);
    let twentyTwo = new Answer(22,'wrong',false);
    let six = new Answer(6,'wrong',false);
    let eight = new Answer(8,'wrong',false);
    
    let mathAnsw1 = [four,twentyTwo,six,eight];
    
    const twoPlusTwo = new Question('Math', "What is two plus two?",'assets/images/antoine-dautry-05A-kdOH6Hw-unsplash.jpg', 'image of mathmatical text', mathAnsw1)

    export const questions = [twoPlusTwo];

    export default questions;