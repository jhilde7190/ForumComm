$(function() {
  $.widget("custom.newsfeed", {
    options: {
      domain: "",
      title: "",
      url: ""
    },

    _create: function(){
      this._refresh();
    },

    _refresh: function() {
      $(this.element).html(
        "<a href=" + this.options.url + " target=\"_blank\">" +
          "<div class=\"title\"><h2>" + this.options.title + "</h2></div>" +
          "<div class=\"domain\">" + this.options.domain + "</div>" +
        "</a>"
      );

      $(this.element.children()[0]).button();
      $(this.element).show();
    },

    story: function(news_story) {
      this.options = news_story;
      this._refresh();
    },

    _destroy: function() {
      $(this.element).html();
    }
  });

  $.getJSON("https://www.reddit.com/r/worldnews.json", function(data) {
    var story = {};
    $.each(data.data.children, function(index, value) {
      if (index < 5) {
        story = {
          domain: this.data.domain,
          title: this.data.title,
          url: this.data.url
        };

        $("#news_story" + index).newsfeed();

        $("#news_story" + index).newsfeed("story", story);
      } else {
        return false;
      }
    });
  });

  $(".widget .news_story a").button();
});
