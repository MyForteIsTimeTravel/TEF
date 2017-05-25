/* * * * * * * * * * * * * * * * * * *
 *  Ryan Needham
 *  2017
 * * * * * * * * * * * * * * * * * * */
(function () {
    let shrunkSize = 10
    let anim = 0.5;
    
    let musicExpSize = 70;
    let musicVids        = document.getElementById('one')
    var musicVidsExp     = false
    musicVids.addEventListener('click', function (e) { 
        musicVidsExp = !musicVidsExp 
        console.log(musicVidsExp)
        requestAnimationFrame(expandMusicVideos);
    })
    
    let corporateExpSize = 10
    let corporateVids    = document.getElementById('two')
    let corporateVidsExp = false
    corporateVids.addEventListener('click', function (e) { 
        corporateVidsExp = !corporateVidsExp 
        console.log(corporateVidsExp)
        requestAnimationFrame(expandCorporateVideos);
    })
    
    let photographyExpSize = 60
    let photography      = document.getElementById('three')
    var photographyExp   = false;
    photography.addEventListener('click', function (e) {
        photographyExp = !photographyExp 
        console.log(photographyExp)
        requestAnimationFrame(expandPhotography)
    })

    // SET INITIAL CONTENTSs
    introMusicContent ();
    introCorporateContent ();
    introPhotographyContent ();
    
    function expandMusicVideos () {
        if (musicVidsExp) { 
            expMusicContent();
            musicVids.style.paddingBottom = musicExpSize + 'em'; 
        }
        
        else if ((!musicVidsExp)) { 
            introMusicContent ();
            musicVids.style.paddingBottom = shrunkSize + 'em'; 
        }
    }
    
    function expandCorporateVideos () {
        if (corporateVidsExp) { 
            expCorporateContent ();
            corporateVids.style.paddingBottom = corporateExpSize + 'em'; 
        }
        
        else if ((!corporateVidsExp)) {
            introCorporateContent ();
            corporateVids.style.paddingBottom = shrunkSize + 'em'; 
        }
    }
    
    function expandPhotography () {
        if (photographyExp) { 
            expPhotographyContent ();
            photography.style.paddingBottom = photographyExpSize + 'em'; 
        }
        else if ((!photographyExp)) { 
            introPhotographyContent ();
            photography.style.paddingBottom = shrunkSize + 'em'; 
        }
    }
        
    // ADD MUSIC VIDEOS CONTENT
    function introMusicContent () {
        while (musicVids.firstChild) {
            musicVids.removeChild(musicVids.firstChild);
        }
        
        let article = document.createElement("article")
        article.setAttribute("id", "oneText");

        let title = document.createElement("h1")
        title.innerHTML = "MUSIC VIDEOS"
        article.appendChild(title)

        let line = document.createElement("div")
        article.appendChild(line)

        let desc = document.createElement("p")
        desc.innerHTML = "As a musician myself, this is an area i am particularly passionate about. Click below to see a selection of projects i have completed with local rappers and musicians."
        article.appendChild(desc)
        
        let button = document.createElement("button")
        let text = document.createElement("h2")
        text.innerHTML = "learn more"
        button.appendChild(text)
        article.appendChild(button)

        musicVids.style.paddingBottom = shrunkSize + 'em'; 
        musicVids.appendChild(article)   
    }
    
    function expMusicContent () {
        while (musicVids.firstChild) {
            musicVids.removeChild(musicVids.firstChild);
        }
                
        let article = document.createElement("article")
        article.setAttribute("id", "oneText");
        
        let videoOne = document.createElement("iframe")
        videoOne.setAttribute("width", "100%")
        videoOne.setAttribute("height", "360")
        videoOne.setAttribute("src", "https://www.youtube.com/embed/xaAYXoA9IYo?modestbranding=1&autohide=1&showinfo=0&controls=0")
        videoOne.setAttribute("frameborder", "0")
        videoOne.setAttribute("class", "musicVideo")
        
        let titleOne = document.createElement("h1")
        titleOne.innerHTML = "Title Of Video"
        
        let descOne = document.createElement("p")
        descOne.innerHTML = "A video is more than images. A video is magma, a video is lightning, a video is a crisp icy beer on a hot august evening"
        
        let videoTwo = document.createElement("iframe")
        videoTwo.setAttribute("width", "100%")
        videoTwo.setAttribute("height", "360")
        videoTwo.setAttribute("src", "https://www.youtube.com/embed/-0K5eTMiD9E?modestbranding=1&autohide=1&showinfo=0&controls=0")
        videoTwo.setAttribute("frameborder", "0")
        videoTwo.setAttribute("class", "musicVideo")
        
        let titleTwo = document.createElement("h1")
        titleTwo.innerHTML = "Title Of Video"
        
        let descTwo = document.createElement("p")
        descTwo.innerHTML = "A video is more than images. A video is magma, a video is lightning, a video is a crisp icy beer on a hot august evening"
        
        
        article.appendChild(titleOne)
        article.appendChild(document.createElement("div"))
        article.appendChild(descOne)
        article.appendChild(videoOne)
        
        article.appendChild(titleTwo)
        article.appendChild(document.createElement("div"))
        article.appendChild(descTwo)
        article.appendChild(videoTwo)
        
        musicVids.appendChild(article)
    }
    
    function introCorporateContent () {
        while (corporateVids.firstChild) {
            corporateVids.removeChild(corporateVids.firstChild);
        }

        let article = document.createElement("article")
        article.setAttribute("id", "twoText");

        let title = document.createElement("h1")
        title.innerHTML = "CORPORATE VIDEOS"
        article.appendChild(title)

        let line = document.createElement("div")
        line.setAttribute("width", "120%")
        article.appendChild(line)

        let desc = document.createElement("p")
        desc.innerHTML = "Working with local businesses is always a rewarding experience and one i thoroughly enjoy. Click below to see promotional material I created for various companies."
        article.appendChild(desc)
        
        let button = document.createElement("button")
        let text = document.createElement("h2")
        text.innerHTML = "learn more"
        button.appendChild(text)
        article.appendChild(button)

        corporateVids.style.paddingBottom = shrunkSize + 'em'; 
        corporateVids.appendChild(article)   
    }
    
    function expCorporateContent () {
        while (corporateVids.firstChild) {
            corporateVids.removeChild(corporateVids.firstChild);
        }

        let videoOne = document.createElement("iframe")
        videoOne.setAttribute("width", "47%")
        videoOne.setAttribute("height", "360")
        videoOne.setAttribute("src", "https://www.youtube.com/embed/cMfOmnyYG7w?modestbranding=1&autohide=1&showinfo=0&controls=0")
        videoOne.setAttribute("frameborder", "0")
        videoOne.setAttribute("class", "corpVideo")
        
        let titleOne = document.createElement("h1")
        titleOne.setAttribute("class", "twoText")
        titleOne.innerHTML = "COMPANY NAME INC."
        
        corporateVids.appendChild(videoOne)
        corporateVids.appendChild(titleOne)
    }
    
    function introPhotographyContent () {
        let article = document.createElement("article")
        article.setAttribute("id", "threeText");

        let title = document.createElement("h1")
        title.innerHTML = "PHOTOGRAPHY"
        article.appendChild(title)

        let line = document.createElement("div")
        article.appendChild(line)

        let desc = document.createElement("p")
        desc.innerHTML = "Working with local businesses is always a rewarding experience and one i thoroughly enjoy. Click below to see promotional material I created for various companies."
        article.appendChild(desc)
        
        let button = document.createElement("button")
        let text = document.createElement("h2")
        text.innerHTML = "learn more"
        button.appendChild(text)
        article.appendChild(button)

        photography.style.paddingBottom = shrunkSize + 'em'; 
        photography.appendChild(article)   
    }
    
    function expPhotographyContent () {
        while (photography.firstChild) {
            photography.removeChild(photography.firstChild);
        }
    }
    
}())