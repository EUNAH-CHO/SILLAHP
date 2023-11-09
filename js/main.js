

/*S:SelectBox dropdown	*/
$('.dropdown-menu').on( 'click', 'a', function() {
    var text = $(this).html();
    var htmlText = text + ' <span class="caret"></span>';
    $(this).closest('.dropdown').find('.dropdown-toggle').html(htmlText);
});
/*E:SelectBox dropdown*/	

/* S:탭페이지 */
$(document).ready(function() {

    //Default Action
    $(".tab_content").hide(); //Hide all content
    $(".tab_menu li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content
    
    //On Click Event
    $(".tab_menu li").click(function() {
        $(".tab_menu li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

});
/* E:탭페이지 */

/* S:드롭다운 슬라이드 */
'use strict';
$(document).on('click', '.accordion-list .accordion-item > a', function(e){
    e.preventDefault();
    var $this = $(this);
    var target = $this.parent();
    var description = $this.siblings('.accordion-desc');
    var other = target.siblings('.accordion-item');
    var otherDescription = other.find('.accordion-desc');
    accordionToggle(target, description, other, otherDescription);
    });

    function accordionToggle(target, description, other, otherDescription){
    if (target.hasClass('active')) {
        target.removeClass('active');
        description.stop().slideUp(300);
    } else {
        target.addClass('active');
        description.stop().slideDown(300);
    }

    if (other && otherDescription) {
        other.removeClass('active');
        otherDescription.stop().slideUp(300);
    }
};
/* E:드롭다운 슬라이드 */
