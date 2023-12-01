const clock = document.getElementById('timer')



setInterval(() => {
    const time = new Date();
    clock.innerHTML= time.toLocaleTimeString('en-US')
}, 1000)