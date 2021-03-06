class Form{
    constructor() {
        this.input1 = createInput("Enter Singles/Doubles");
        this.input2 = createInput("Max points");
        this.input3 = createInput("Name");
        this.input4 = createInput("Name");
        this.input5 = createInput("Name");
        this.input6 = createInput("Name");
        this.button = createButton('Start');
        this.greeting = createElement('h2')
        this.button2=createButton('Submit')
    }
    
    display(){
    var title = createElement('h2')
    title.html("Badminton Score Tracker");
    title.position(500,100)
     this.input2.hide() 
     this.input3.hide() 
     this.input4.hide() 
     this.input5.hide() 
     this.input6.hide()   
     this.button.hide()
     this.input1.position(550,200);
     this.input2.position(755,500)
     this.input3.position(380,150)
    this.input4.position(380,310)
    this.input5.position(755,150)
    this.input6.position(755,310)
    this.button.position(1100,100);
    this.button2.position(600,250)
    this.button2.mousePressed(()=>{ 
        this.title.hide()
        this.input1.hide()
    } ) 
    }

}