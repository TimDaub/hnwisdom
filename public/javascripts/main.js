$(function() {

  var HNAPI = 'https://hacker-news.firebaseio.com/v0/item/';

  var requestContent = function(hnid, next) {
    $.get(HNAPI + hnid + '.json')
      .success(function(res) {
        next(null, res);
      })
      .error(function(err) {
        next(err, null);
      });
  };

  $('.hn-card').each(function() {
    var hnid = parseInt($(this).data('hnid'), 10);

    var that = this;
    requestContent(hnid, function(err, res) {
      if(err) {
        console.error(err);
      } else {
        $(that)
          .find('.text')
          .append(res.text);
        $(that)
          .find('.by')
          .append('by: ' + res.by  + ' ');
        $(that)
          .find('.time')
          .append('date: ' + res.time);
        $(that)
          .find('.id')
          .append('id: ' + res.id);
      }
    });
  });
  $('.spinner').css('display', 'none'); 
});