fetch('https://ig.instant-tokens.com/users/23735319-0cf2-47ad-9d69-129e1fe9599f/instagram/17841445897233528/token?userSecret=uo3y3ld851gbym5oozf3u7')
    .then(resp => resp.json())
    .then(data => {
        var feed = new Instafeed({
            accessToken: data.Token,
            limit: 12,
            template: '<div class="col-md-3 col-sm-6 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
        });
        feed.run();
    });


// This will create a single gallery from all elements that have class "gallery-item"
$('.gallery').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
        enabled: true
    }
});