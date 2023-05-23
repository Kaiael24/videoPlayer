        //Interactuando con Js

        const video = document.querySelector("#video");
        const play = document.querySelector("#play");
        const pause = document.querySelector("#pause");
        const forward = document.querySelector("#forward");
        const backward = document.querySelector("#backward")


        play.addEventListener("click", handlePlay)
        pause.addEventListener("click", handlePause)
        backward.addEventListener("click", handleBackward)
        forward.addEventListener("click", handleForward)

        function handlePlay(){  
            video.play()
            play.hidden = true
            pause.hidden = false
            console.log("le diste click al boton de play")
        }
        function handlePause(){
            video.pause()
            play.hidden = false
            pause.hidden = true
            console.log("le diste click al boton pausa")
        }
        function handleBackward(){
            video.currentTime -= 10;
            console.log("para atras 10 segundos", video.currentTime)
        }
        function handleForward(){
            video.currentTime += 10;
            console.log("para adelante 10 segundos", video.currentTime)      
        }
        const progress = document.querySelector("#progress")
        video.addEventListener("loadedmetadata", handleloaded)
        video.addEventListener("timeupdate", handleTimeUpdate)

        function handleloaded(){
            progress.max = video.duration
            console.log("ha cargado mi video", video.duration)
        }
        function handleTimeUpdate(){
            progress.value = video.currentTime
            //console.log("holi", video.currentTime)
        }
        progress.addEventListener("input", handleInput)

        function handleInput(){
            video.currentTime = progress.value
            console.log(progress.value)
        }