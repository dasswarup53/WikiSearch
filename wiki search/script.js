
$(document).ready(function(){
var html = '';
var arr_res = [];
function Res(title, snippet) {
  this.title = title;
  this.snippet = snippet;
}

function search() {
  // $.getJSON('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#ip').val(),
    dataType: 'jsonp',
    type: 'POST',
    success: function(datajson) {
      $('.results').empty();
      arr_res.length = 0;
      var resjson = datajson.query.search;
      for (var result in resjson) {
        arr_res.push(new Res(resjson[result].title, resjson[result].snippet));
        html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + resjson[result].title + '"target="_blank"><h3><b>' + resjson[result].title + '</b></h3><p>' + resjson[result].snippet + '</p></a></div>';
        $('.results').append(html);
      }
    }
  });
  $('#ip').unbind('keyup');
  $('#ip').keyup(function() {
    search();
  });
}
$('#ip').keyup(function() {
  search();
});
  
});