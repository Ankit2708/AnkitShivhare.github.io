console.log('inside index.js');
$(document).ready(()=>{
    $('.cross').css('display','none')
    $('.hambug').click(function(){
        console.log('coming inside');
        $('.sideBar').toggleClass('sideBarGo')
        
        if($('.sideBar').hasClass('sideBarGo')){
            $('.ham').css('display','inline')
            $('.cross').css('display','none')
        }
        else{
            $('.ham').css('display','none')
            setTimeout(()=>{
                $('.cross').css('display','inline')
            },300)
            
        }
    })
})
// document.querySelector('.cross').style.display='none'
// document.querySelector('.hambug').addEventListener('click',function(){
//     console.log('coming inside');
//     document.querySelector('.sideBar').classList.toggle('.sideBarGo')
//     if( document.querySelector('.sideBar').classList.contains('.sideBarGo')){
//         document.querySelector('.ham').style.display='inline'
//         document.querySelector('.cross').style.display='none'
//     }else{
//         document.querySelector('.cross').style.display='inline'
//         document.querySelector('.ham').style.display='none'
//     }
// })
// document.getElementById('hamburger').addEventListener('click',()=>{
//     console.log('click event');
//     document.querySelector('.sideBar').classList.toggle('.sideBarGo')
// })