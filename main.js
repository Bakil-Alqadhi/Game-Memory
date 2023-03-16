

// MyClass.blocksContainer =mycheck();
//document.querySelector(".control-buttons").remove();

class MyClass{
 chosenLevel;
 option;
 blocksContainer ;
 
 blocks;

 //static close = document.querySelector(".control-buttons");
 //Create Range of keys
 orderRange ;

constructor(blocksContainer, blocks, orderRange){
    // document.querySelector(".control-buttons").remove();
    this.blocksContainer =blocksContainer;
//    this.mySelect = document.getElementById('select');
//     this.select = document.getElementById('select');

//   blocks= Array.from(this.blocksContainer.children);
//     //Create Range of keys
//  orderRange =[...Array(blocks.length).keys()];

this.blocks =blocks;
this.orderRange =orderRange;
 //let orderBlocks2 =Array.from(Array(blocks.length).keys());

//Adding the order property css to our blocks

blocks.forEach((block, index) =>{
    // console.log(block)
     block.style.order =orderRange[index];
 
     let x= this;
     //Add click Event
     block.addEventListener('click', function(){
        x.flipBlock(block);
     });
 });
this.Shuffle();
}
// var  blocksContainer =document.querySelector('.easy');
//blocksContainer = mycheck();
//   function chooseLevel(level){
//     if(level=="easy"){
//         document.querySelector('.medium').style.display="none";
//         document.querySelector('.difficult').style.display="none";
//         console.log(level);
//         return  document.querySelector('.easy');
//        }
//        else if(level=='medium'){
//         document.querySelector('.easy').style.display="none";
//         document.querySelector('.difficult').style.display="none";
//         console.log(level);
//        return document.querySelector('.medium');
//        }
//        else {
//          document.querySelector('.medium').style.display="none";
//          document.querySelector('.easy').style.display="none"; 
//         // console.log(level); 
//         return document.querySelector('.difficult');
           
//        }
//   }

//blocksContainer = mycheck();
// console.log(orderRange)
// console.log(orderRange);

//Shuffle function
Shuffle(){
    let array =orderRange;
        //Setting vars
        let current = orderRange.length,
        temp,
        random;

        while(current >0){
        random = Math.floor(Math.random()*current);
        current--;

        temp = array[current];
        array[current]=array[random];
        array[random]=temp;  
    }

    return array;
}

//flip block function
flipBlock(selectedBlock){
    //add class is-flipped
    selectedBlock.classList.add('is-flipped');

    //collect all flipped cards
    let allFlippedBlocks =blocks.filter(flippedBlock=>flippedBlock.classList.contains('is-flipped'));
    
    if(allFlippedBlocks.length === 2){
        //console.log('Two Blocks Are Flipped');
        
        this.stopClicking();
        this.checkMatchedBlock(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}
 stopClicking(){
    let duration =1000;
    blocksContainer.classList.add('no-clicking');
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    }, duration);
}

//Check Matched Block
 checkMatchedBlock(firstBlock, secondBlock){

    let triesElement = document.querySelector('.tries span');
    if(firstBlock.dataset.technology === secondBlock.dataset.technology){
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');
        document.querySelector('#success').play();
    }
    else {
        let duration =1000;;
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        setTimeout(()=>{
            //let duration =1000;
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        },duration);
        
        document.querySelector('#fail').play();
    }
}
};



function mycheck(){
    var easy = document.getElementById("easy");
    var medium = document.getElementById("medium");
    var difficult = document.getElementById("difficult");
        let  myContainer;
        if(easy.checked ){
            document.querySelector('.medium').style.display="none";
            document.querySelector('.difficult').style.display="none";
         return   myContainer =document.querySelector('.easy');
        }
        else if(medium.checked){
    
            document.querySelector('.easy').style.display="none";
            document.querySelector('.difficult').style.display="none";
            myContainer =  document.querySelector('.medium') ;
            return myContainer;
        }
        else if(difficult.checked){
            document.querySelector('.medium').style.display="none";
                 document.querySelector('.easy').style.display="none"; 
                return myContainer = document.querySelector('.difficult');
        }
        return myContainer;
    }
let blocksContainer = document.querySelector('.easy');
document.querySelector(".control-buttons span").onclick= ()=>{
    window.blocksContainer = mycheck(); 
      let theName= prompt('What Is You Name?');
      if( theName==null || theName==""){
          document.querySelector(".info-container .name span").textContent = "UnKnown";
      }
      else{
          document.querySelector(".info-container .name span").textContent = theName;
      }
      
     // MyClass = new MyClass(checked());
    
    document.querySelector(".control-buttons").remove();

//myClass.blocksContainer =mycheck();
      // MyClass = new MyClass(checked());
  }

blocks= Array.from(blocksContainer.children);
//Create Range of keys
orderRange =[...Array(blocks.length).keys()];
let work = new MyClass(blocksContainer, blocks, orderRange);