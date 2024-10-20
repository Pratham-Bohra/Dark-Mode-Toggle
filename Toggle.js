let Btn = document.getElementById('Button1');
const heading = document.querySelector('.text')
console.log(heading);
let Bgc = 'light';

Btn.addEventListener('click', () => {
    if (Bgc === 'light') {  
        console.log('Dark');
        heading.style.color = 'white'
        document.body.style.backgroundColor = 'black';
        Btn.style.color = 'white'; 
        Btn.style.backgroundColor = 'black' 
        Btn.style.border = '2px solid white'
        heading.innerText = 'This is the Dark Mode'
        Btn.innerText = 'Click here again to Go Back'
        Btn.style.padding = '10px'
        Bgc = 'dark';  
    } else {
        console.log('Light');
        heading.style.color = 'black'
        document.body.style.backgroundColor = 'white';
        Btn.style.color = 'black';
        Btn.style.backgroundColor = 'white'
        Btn.style.border = '2px solid black'
        heading.innerText = 'This is not the Dark Mode'
        Btn.innerText = 'Click here to Enable the Dark Mode'
        Btn.style.padding = '10px'
        Bgc = 'light';  
    }
});
