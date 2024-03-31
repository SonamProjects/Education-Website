// change navbar styles on scroll

window.addEventListener('scroll',()=>
{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
})


//show//hide freq answer

const  freqs=document.querySelectorAll('.freq');

freqs.forEach(freq=>{
    freq.addEventListener('click',()=>{
        freq.classList.toggle('open');

    //change icon
    const icon= freq.querySelector('.freq_icons i');
    if(icon.className=== 'uil uil-plus'){
        icon.className = "uil uil-minus"
    }
    else{
        icon.className = "uil uil-plus";

    }
    })
})

