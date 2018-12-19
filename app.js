let hoge; 
$(function() {
  
  $('#btn').on('click', function() {
    ajaxRequest();
  });



  function ajaxRequest() {
    let text = $('#name').val();
    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + text,
      type: 'GET',
    })
    .done(function(data) {
      addData(data);
    })
    .fail(function(error) {
      console.log(error);
    })
  }

  function addData(data) {
    /*let data = ;*/
    console.log(data);
    for (let book of data.items) {
      hoge = book;
      let li = $('<li>');
      let img = $('<img>').attr('src', book.volumeInfo.imageLinks.smallThumbnail);
      let p = $('<p>').text(book.searchInfo.textSnippet);
      let title = $('<p>').text(book.volumeInfo.title).addClass('title');
      let authors = $('<p>').text(book.volumeInfo.authors);


      li.append(img);
      li.append(title);
      li.append(authors);
      li.append(p);
      $('#result').append(li);
    }


  }

});

//必要なデータを取り出す
//画面に表示する要素を組み立てる
//画面に表示