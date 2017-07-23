window.Toggler = {
    isToggled: false,
    isChildToggled: false,
    container: $('#footer'),
    toggle: false,
    sectionSelector: '.section-toggle a',
    detailSelector: $('.project-item'),
    detailContainer: $('.project-description'),
    init: function () {
        $(this.sectionSelector).click(this, this.onClickSection);
        this.detailSelector.click(this, this.onClickDetail);
    },
    onClickDetail: function (event) {
        var height;
        if (event.data.isChildToggled) {
            height = event.data.container.height() - event.data.detailContainer.height();
            $(this).children('div').removeClass('active');
            event.data.isChildToggled = false;
        } else {
            height = event.data.calculateHeight(event.data.detailContainer);
            $('.active').removeClass('active');
            $(this).children('div').addClass('active');
            event.data.isChildToggled = true;
        }

        event.data.detailContainer.slideToggle();
        event.data.animateContainer(height, false);
    },
    onClickSection: function (event) {
        event.data.toggle = $(this).data('toggle');
        event.data.toggle = $('.' + event.data.toggle + '-section');

        if (!event.data.isToggled) {
            event.data.toggle.show();
            var height = event.data.calculateHeight(event.data.toggle);
            event.data.animateContainer(height + 'px', false);
            event.data.isToggled = true;
        } else {
            event.data.animateContainer('5vh', true);
            event.data.isToggled = false;
        }
    },
    calculateHeight: function (block) {
        return this.container.height() + block.height();
    },
    animateContainer: function (height, hide) {
        var that = this;
        this.container.animate({height: height}, 350, function () {
            if (hide) {
                console.log(123123);
                that.toggle.hide();
            }
        });
    }
};

$(document).ready(function () {
    window.Toggler.init();
});