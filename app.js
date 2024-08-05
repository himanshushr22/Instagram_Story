let arr = [
    {
        dp: "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp: "https://images.pexels.com/photos/219550/pexels-photo-219550.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        dp: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=400",
        story: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
];

const stories = document.querySelector('.stories');
const frame = document.querySelector('.frame');
const st = document.querySelector('.story')
let profiledp = "";


arr.forEach((data, idx)=>{
profiledp += `<div class="story">
<img id=${idx} src="${data.dp}" alt="">
</div>`
})

stories.innerHTML = profiledp;

stories.addEventListener('click', (e)=>{
frame.style.display = 'block';
frame.style.backgroundImage = `url(${arr[e.target.id].story})`


setTimeout(()=>{
    frame.style.display = 'none';
},2000)

})

