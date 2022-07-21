// array names
let names = [];
let add = 0;
// form content elements
const nameInput = document.querySelector("#name");
const nameAdd = document.querySelector("#btnAdd");

const name_div = document.querySelector('.name-area-content');

nameAdd.addEventListener('click', () => {
    if (nameInput.value == ''){
        alert("Add Name!");
    }
    else {
        let x = nameInput.value;
        names.push(x);
        add++;
        // show inputted names
        let ptag = document.createElement('p');
        name_div.append(ptag);
        ptag.innerHTML = add + ". " + names[add-1];
        console.log(names);
        nameInput.value = "";
    }
})

// set the <p> element to a random number
function changePtext(int) {
    return p_tag.innerHTML = int+1;
}

// randomizer contents 
const p_tag = document.getElementById('rand-num-container');
const randomBtn = document.getElementById('rand-num-button');

// show the array
function modalPopUp(randInt) {
    let winNo = randInt+1;
    let winner = names[randInt];
    names.splice(randInt, 1); // remove the element from the array using the randInt as index
    console.log(names);

    const modal = document.querySelector('.modal-bg');
    const modalClose = document.querySelector('#confirmBtn');
    const winnerTxt = document.querySelector('#winner-text');

    winnerTxt.innerHTML = `The winner is ${winNo}. ${winner}`;


    modal.classList.toggle('active');
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        name_div.innerHTML = '';
        
        for (let i = 0; i < names.length; i++) {
            let pp = document.createElement('p');
            name_div.append(pp);
            pp.innerHTML = i+1 + ". " + names[i];
        }
        
    })

}

randomBtn.addEventListener('click', function() {
    if (names.length < 1) {
        alert('Add Names First!');
    }
    else {
        let time = 0;
        let timerCount = setInterval(counter, 100);
    
        function counter() {
            time++;
            let randInt = Math.floor(Math.random() * names.length);
            changePtext(randInt);
            console.log(time);
            if (time == 30) {
                clearInterval(timerCount);
                modalPopUp(randInt);
            }
        }
    }
})




/*
---------TODO--------
1. create a function where the new items in array will be updated to the
    index.html

*/