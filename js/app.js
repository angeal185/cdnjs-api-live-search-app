(function() {
  $(window).on('load', function() {
    $('#jsonSearch').keyup(function() {
      var count = '',
      myExp = '',
      output = '',
      searchField = '',
      searchField = $('#jsonSearch').val(),
      myExp = new RegExp(searchField, 'i'),
      output = '<div class="row">',
      count = 1;
      $.getJSON('//api.cdnjs.com/libraries?fields=description,version,homepage,keywords,license', function(data) {
        $.each(data.results, function(key, val) {
          if (val.name.search(myExp) != -1) {
            output += '<ul class="collection with-header"><li class="collection-header"><h4>' + val.name + '</h4></li><li class="collection-item">Description: <span class="searchLi">' + val.description + '</span></li><li class="collection-item">Version: <span class="searchLi">' + val.version + '</span></li><li class="collection-item">Full-List: <a href="https://cdnjs.com/libraries/' + val.name + '" class="searchLi" target="_blank">https://cdnjs.com/libraries/' + val.name + '</a></li><li class="collection-item">Quick-Link: <a href="' + val.latest + '" download class="searchLi" target="_blank">' + val.latest + '</a></li><li class="collection-item">Homepage: <a href="' + val.homepage + '" class="searchLi" target="_blank">' + val.homepage + '</a></li><li class="collection-item">License: <span class="searchLi">' + val.license + '</span></li><li class="collection-item">Keywords: <span class="searchLi">' + val.keywords + '</span></li></ul>';
            if (count % 2 == 0) {
              output += '</div><div class="row">';
            }
            count++;
          }
        });
        output += '</div>';
        $('#total').html('CDNJS Total: ' + data.total);
        $('#jsonSearchresults').html(output);
      });
    });
  });

}).call(this);