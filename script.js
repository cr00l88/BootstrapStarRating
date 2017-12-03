$(() => {
    $('.fa').hover((e) => {
        fillStars(e.target, true);
    }, (e) => {
        claerStars(e.target, true);
    })
    $('.fa').click((e) => {
        claerStars(e.target);
        fillStars(e.target);
        let parent = $(e.target).parent();
        if(parent.attr('clicked')) {
            return parent.attr('clicked', '')
        }
        parent.attr('clicked', 'true')
    })

    const fillStars = (target, isOvering) => {
        target = $(target);
        if(isOvering && target.parent().attr('clicked')) {
            return false;
        }
        let index = target.attr('data-rating');
        let stars = target.parent().children();
        for(let i = 0; i < index; i++) {
            $(stars[i]).removeClass('fa-star-o').addClass('fa-star');
        }
    }

    const claerStars = (target, isOvering) => {
        target = $(target);
        if(isOvering && target.parent().attr('clicked')) {
            return false;
        }
        let stars = target.parent().children();
        for(let i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('fa-star').addClass('fa-star-o');
        }
    }
})