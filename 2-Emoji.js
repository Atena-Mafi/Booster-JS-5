/*
- We should have 4 buttons.

- In the names: happy, sad, angry and random.

- Clicking on each button should show an emoji with the same state.

* Each time a different emoji of the same state should be observed.

- When an emoji is shown, its state is written below.

- By clicking on the random button, an emoji should be shown from all modes.
*/

const showSection=document.querySelector(".show");
const btns=document.querySelectorAll(".btn");

const  body=document.querySelector("body");
const stateSpan=document.createElement("span");
stateSpan.classList.add("text");

const emojis={
 happy:["☺️","😆","😁","😀","😃","😊","😄","🤗","🙂","😉"],
 sad:["😔","😟","☹️","😢","😭","😥","😞","😓"],
 angry:["😡","😠","😤","🤯",],
}





btns.forEach(btn=>{

    btn.addEventListener("click",(e)=>{
        showSection.innerHTML="";
        stateSpan.textContent="";
        const emojiSec=document.createElement("section");
        emojiSec.classList.add("emoji");
        showSection.append(emojiSec);


          let stateText;
          let selectedEmoji;

     if (btn.classList.contains("Sad")) {
       
        selectedEmoji=emojis.sad[Math.floor(Math.random()*emojis.sad.length)];
        stateText="Sad";
        body.style.backgroundColor=" #0f0f25";
        stateSpan.style.color=" #0c8cac";
       
           
     }else if(btn.classList.contains("Happy")){
   
 
        selectedEmoji=emojis.happy[Math.floor(Math.random()*emojis.happy.length)];
        stateText="Happy";
        body.style.backgroundColor="rgb(235, 255, 148)";
        stateSpan.style.color="hsl(310, 100%, 59%)";

     }else if(btn.classList.contains("Angry")){
      
        selectedEmoji=emojis.angry[Math.floor(Math.random()*emojis.angry.length)];
        stateText="Angry";
        body.style.backgroundColor="hsl(24, 93.40%, 58.40%)";
        stateSpan.style.color="rgb(223, 0, 0)";

     }else if(btn.classList.contains("Random")){
 
      const allEmojis=[...emojis.sad,...emojis.happy,...emojis.angry];
      selectedEmoji=allEmojis[Math.floor(Math.random()*allEmojis.length)];

           if(emojis.happy.includes(selectedEmoji)){
            stateText="Happy";
            body.style.backgroundColor="rgb(235, 255, 148)";
            stateSpan.style.color="hsl(310, 100%, 59%)";
         
           }else if(emojis.angry.includes(selectedEmoji)){
            stateText="Angry";
            body.style.backgroundColor="hsl(24, 93.40%, 58.40%)";
            stateSpan.style.color="rgb(223, 0, 0)";

           }else if(emojis.sad.includes(selectedEmoji)){
            stateText="Sad";
            body.style.backgroundColor=" #0f0f25";
            stateSpan.style.color=" #0c8cac";
           
           }
        
 
     }
     
 
     emojiSec.textContent=selectedEmoji;
     stateSpan.textContent=stateText;
     emojiSec.insertAdjacentElement("afterend", stateSpan);
   

    })
})

