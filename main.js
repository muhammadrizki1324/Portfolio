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