// alert('Connected ')  Set  Ctrl + /

// You want to add the Head Tag With the Content
//<h1> HEllo World </h1> Below the h1 tag

// var h=document.createElement('h1') //<h1> </h1>
// var myValue=document.createTextNode('Hello World !')  //Till Here <h1> </h1> Hello World !
// h.appendChild(myValue) //It Between <h1> Hello worls </h1>

// //Step2: Below Another h1 tag PLACING IT

// document.querySelector('h1').appendChild(h) 


//*TASK1*******************Task RemoveTodo Button is Clicked then list needs to be clear and tb clear ********************* */

//Subtask--Action is Performed on Two Button() and Listener is Activated




let addButton = document.getElementById('add')
addButton.addEventListener('click', addItem) //imp its function


let removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem) //Defination  //Remember Syntax

let removeEveryThing = document.getElementById('removeE')
removeEveryThing.addEventListener('click', removeEveryItem);



let ul = document.getElementById('list')
let li

function removeItem() {
    li = ul.children
    //console.log(li) //Checking Whats Inside Children and Error ????? ul has 4 list[array] and we want attribute 'Check' 
    //Therefore We need to loop through 4 list

    for (let index = 0; index < li.length; index++) {
        //const element =li[index]
        //console.log(element) //What Inside it??  But we want the 'check ' Property 

        while (li[index] && li[index].children[0].checked) {
            //Remove Child Property me agaar checked remove it

            ul.removeChild(li[index]) //Shows Error: Cannot read property 'children' of undefined at HTMLButtonElement.removeItem
            //One More Condition in the While loop needs to be specify 
            //Child Present index inside it t Child and Then Remove it --StackOverflow
        }

    }
    // console.log('Deleted Button Clicked ') //Testing Purpose 
}

//*************************************************************************** */
function removeEveryItem() {
    li = ul.children;
    // console.log(li);

    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        console.log(element);

        while (li[index]) {
            ul.removeChild(li[index]);
        }

    }

}



//****************************************TASK2:Grab the Input and Pace the New List (Rememeber Hirearchy) *****
//:for the Remove Everything //Css added for removeE


function addItem() {
    //console.log('Button Clicked for Adding') 

    var input = document.getElementById('input') //Grab the Input
    var mytext = input.value //Input ka Value(Property)

    //Grab the Unordered List
    let ul = document.getElementById('list')

    //Create the Simple Node

    var textnode = document.createTextNode(mytext) //<>  </>  Go to walk (in Input)

    //Assignment


    if (mytext === '') //Action need to be Performed Empty String
    {
        var paraTag = document.createElement('h6')
        var text = document.createTextNode('Enter Your Todo')
        paraTag.appendChild(text)

        let parent = document.getElementById('parent');
        let child = document.getElementById('child');
        parent.replaceChild(paraTag, child);
        // document.querySelector('h1').appendChild(paraTag)
        // console.log('Hello')

        return false;
        //Done:Assignment:Add a p tag and assign the Value of 'Enter Your Todo' and Below the input tag

    } else {
        //Not Empty String We need to do the Creation Part 
        //>li-->input--->label

        li = document.createElement('li'); // li declared above
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox'; //input type="checkbox"
        checkbox.setAttribute('id', 'check') //input id="check"

        //Create Label

        var label = document.createElement('label') //Dont have any Property
        label.setAttribute('for', 'item') // label for="item" Its Optional

        //add These Elements to Web Page  
        //First ul-->appendChild Label and then  ul>li-->input--->label

        ul.appendChild(label) //ul-->label-->
        li.appendChild(checkbox) //li--->input(checkbox)
        label.appendChild(textnode) //<li>Go to Walk</li>  Refer above if
        li.appendChild(label) //li-->label
        //EveryThings is Sorted

        //Now We Need to InsertBefore Child ""li"" I want into insert "ul"

        ul.insertBefore(li, ul.childNodes[0])

        //console.log('Hellow'); cODE IS PERFECT 
        //NEW TASK 
        //li.className='visual'

        setTimeout(() => {
            li.className = 'visual'
        }, 2) //Slowly Adds 

        input.value = '' //Already input Declared and Clearing InputBox


        //Assignment Timeout in the p tag




    }


}