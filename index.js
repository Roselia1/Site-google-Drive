function previous(){
    const widthSlider = document.querySelector('.slider_content').offsetWidth
    document.querySelector('.slider_content').scrollLeft -= widthSlider;
}

function next() {
    const widthSlider = document.querySelector('.slider_content').offsetWidth
    document.querySelector('.slider_content').scrollLeft += widthSlider;
 }