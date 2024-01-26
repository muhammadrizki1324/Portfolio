function addToggle(e){
    const target = $(e.target)
    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active")
    }else{
        $(target).html("Less Info").addClass("active")
    }

   
    const item = $(target).parents(".about-xp-item")
    const detail = $(item).children(".about-xp-item-detail")
    $(detail).slideToggle()

}

function onFormSubmit(e){
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")
    
    if (!$(email).val()) {
        alert("Email Is Required")
    } else if(!$(subject).val()){
        alert("Subject Is Required")
    } else if(!$(message).val()){
        alert("Message Is Required")
    } else {
        alert("Form Submitted!! Thanks For Contact Me")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}