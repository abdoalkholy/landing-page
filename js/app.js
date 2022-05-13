

//get ul & section & scroll to top button & page header
let ul= document.getElementById('navbar__list');
let section= document.querySelectorAll('section');
let btn = document.getElementById("top-btn");
let header= document.getElementById('header')


let sectionsList=Array.from(section);//creat list



//for loop to build dynamic menu by loop on every item in sectionsList
for (let i = 0; i < sectionsList.length; i++) {
    let li = document.createElement("li") /*for every item in sectionsList the loop create new li and a element*/
    let link = document.createElement("a")
    link.href=`#section${i+1}`/* every section get his href by looping on every item in sectionsList array, then add 1 for every index in list because index in list start from 0*/
    link.classList.add('menu__link')
    /*create attributes for a element and add class*/
    link.textContent=`section${(i+1)}`
    li.appendChild(link)
    ul.appendChild(li)
}

/*smooth scroll
* get every a element then use forEach to loop on every a element and execute the function
* this function from stack overflow:'https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link' (with some modifications)*/
let a = document.querySelectorAll('a')
let linksList=Array.from(a);//creat list


for (let x = 0; x < linksList.length; x++) {
    linksList[x].onclick=function(a){
        a.preventDefault();// use .preventDefault() to stop the event's default settings
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth", block: "end", inline: "nearest" /*behavior property to get smooth scrolling*/
        })
        
    }
}








//add active class to visible section
window.addEventListener('scroll',_=>{   /*use scroll event and execute the function, then use forEach to loop
on every section in sectionsList to execute the function */
sectionsList.forEach(function (visible) {
        //use if to check the condition then add or remove the class
        if( 
            visible.getBoundingClientRect().top>=-400&&
            visible.getBoundingClientRect().top<=150 
        ){
            visible.classList.add('your-active-class')
            //Building the link between the visible part and the menu
            for(let link = 0; link < linksList.length; link++){ 
                let v=linksList[link].attributes.href.value
                let vv='#'+visible.attributes.id.value
                if (v==vv && scrollY>=350){
                    linksList[link].classList.add('link__active')
                    
                }else{
                    linksList[link].classList.remove('link__active')
                }
            }
        }else{
            visible.classList.remove('your-active-class')
            
            
        }

    })
})




// scroll to top button
window.addEventListener(`scroll`,_=>{
    if (scrollY>=500) {
        btn.style.display="block"  /* the button appears when the above condition is true then the header and button disappear after the event occurs(the click) */
        btn.onclick=function() {    
            scroll({     
                top:0,
                behavior:"smooth"
            })
        }
    }else{
    
        btn.style.display='none'
    }
})
