/* * * * * * * * * * * * * * * * * * *
 *  Ryan Needham
 *  2017
 * * * * * * * * * * * * * * * * * * */
(function () {
    let expandedSize = 40;
    let shrunkSize = 10
    let anim = 0.5;
    
    let musicVids        = document.getElementById('one')
    var musicVidsExp     = false
    musicVids.addEventListener('click', function (e) { 
        musicVidsExp = !musicVidsExp 
        console.log(musicVidsExp)
        requestAnimationFrame(expandMusicVideos);
    })
    
    let corporateVids    = document.getElementById('two')
    let corporateVidsExp = false
    corporateVids.addEventListener('click', function (e) { 
        corporateVidsExp = !corporateVidsExp 
        console.log(corporateVidsExp)
        requestAnimationFrame(expandCorporateVideos);
    })
    
    let photography      = document.getElementById('three')
    var photographyExp   = false;
    photography.addEventListener('click', function (e) {
        photographyExp = !photographyExp 
        console.log(photographyExp)
        requestAnimationFrame(expandPhotography)
    })
    
    function expandMusicVideos () {
        if (musicVidsExp && musicVids.style.paddingBottom < expandedSize) {
            let amount = (expandedSize - musicVids.style.paddingBottom)
            musicVids.style.paddingBottom = amount + 'em'
            requestAnimationFrame(expandMusicVideos)
        }
        
        else if ((!musicVidsExp) && musicVids.style.paddingBottom > shrunkSize) {
            let amount = (musicVids.style.paddingBottom - shrunkSize)
            musicVids.style.paddingBottom = amount + 'em'
            requestAnimationFrame(expandMusicVideos)
        }
    }
    
    function expandCorporateVideos () {
        if (corporateVidsExp && corporateVids.style.paddingBottom < expandedSize) {
            let amount = (expandedSize - corporateVids.style.paddingBottom)
            corporateVids.style.paddingBottom = amount + 'em'
            requestAnimationFrame (expandCorporateVideos)
        }
    }
    
    function expandPhotography () {
        if (photographyExp && photography.style.paddingBottom < expandedSize) {
            let amount = (expandedSize - photography.style.paddingBottom)
            photography.style.paddingBottom = amount + 'em'
            requestAnimationFrame (expandPhotography)
        }   
    }
}())