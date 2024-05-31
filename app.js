var img = document.getElementById("img")
var image = [
    "https://plus.unsplash.com/premium_photo-1661373704604-7c4d230c8928?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
]
 var sec=0
setInterval(()=>{
sec = (sec+1)%image.length
img.style.width="500px"
   img.src=image[sec]


},5000)


// var color =['red','blue','green',"orange","purple"]
// var index = 0
// setInterval(()=>{
//     index = (index+1)%color.length
//     document.getElementById("list").style.background=color[index]

// // console.log(index);

// },2000)