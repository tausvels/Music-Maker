window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sound'); // Storing all the sounds
    const pads = document.querySelectorAll(".pads div"); // storing all the divs of the parent 'pad', i.e.- pad1, pad2, etc.
    const visual = document.querySelector('.visual');
    const colors = ["#60d394", "#d36060", "#c060d3", "#d3d160", "#6860d", "#60b2d3"];

    console.log(pads);

    // FOR THE SOUND BIT
    //Adding eventListener to all the pads
    pads.forEach( (padd, index)=>{
        padd.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //FUNCTION THAT CREATES THE BUBBLES

    const createBubbles = (index) =>{
        const bubble = document.createElement("div");
        //appending the bubble div to the visual div
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease"; // Have to create the keyframes for 'jump' in the style sheet.
        //Deleting the bubble element after the animation ends, or else it 
        //will clutter the code and destroy the app
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});