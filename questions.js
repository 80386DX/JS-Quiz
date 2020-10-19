class Question{
    constructor(text,options,answer,points){
        this.text = text;
        this. options = options;
        this.answer = answer;
        this.points = points;
    }
}




const questions = [
    new Question(`IBM je skracenica za?`, [`International Business Machines`, `I Build Modern`, `In Built Mean`, `International Best Modern`], `International Business Machines`, 5),
    new Question(`Prvi personalni racunar firme IBM bio je?`,[`5150`, `5162`, `8088`, `PC Junior`], `5150`, 5),
    new Question(`Najpoznatiji brend prenosnih racunara IBM zvao se?`, [`Satellite`, `ThinkPad`, `Compaq`,`PET`], `ThinkPad`, 5),
    new Question(`Koje godine je Lenovo otkupilo proizvodnju od IBM-a?`, [`2006`,`2008`,'1998',`2009`], `2006`, 5 ),
    new Question(`Kako se zove poslednja serija IBM racunara koju je Lenovo nasledio?`, [`ThinkCentre`, `Aptiva`, `PC Junior`, `Vaio`], `ThinkCentre`, 5)
];