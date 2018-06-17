$(function() {
   var socket = io.connect('http://localhost:3000');

   socket.on('message', function(data) {
       console.log('on message', data);
        if (data.user_name) {
            if (data.user_name === $('#user_name').val()) {
                var html = get_html(data);
            } else {
                html = get_html_to_left(data);
            }

            $('#chat_container').append(html);
        }
   });

   $('#btn-chat').on('click', function() {
       var data = {
           user_name: $('#user_name').val(),
           content: $('#content').val()
       };
       socket.emit('send', data);
   });
});

function get_html_to_left(data) {

    return '<li class="left clearfix">\n' +
        '                                    <span class="chat-img pull-left">\n' +
        '                                        <img src="http://placehold.it/50/FA6F57/fff&text='+data.user_name.substring(0, 1).toUpperCase()+'" alt="User Avatar" class="img-circle" />\n' +
        '                                    </span>\n' +
        '                                    <div class="chat-body clearfix">\n' +
        '                                        <div class="header">\n' +
        '                                            <strong class="primary-font">'+data.user_name+'</strong>\n' +
        '                                            <small class="pull-right text-muted"><span class="glyphicon glyphicon-time"></span>13 mins ago</small>\n' +
        '                                        </div>\n' +
        '                                        <p>\n' +
        data.content+
        '                                        </p>\n' +
        '                                    </div>\n' +
        '                                </li>';
}
function get_html(data) {

    return '<li class="right clearfix">\n' +
'                                    <span class="chat-img pull-right">\n' +
'                                        <img src="http://placehold.it/50/FA6F57/fff&text='+data.user_name.substring(0, 1).toUpperCase()+'" alt="User Avatar" class="img-circle" />\n' +
'                                    </span>\n' +
'                                    <div class="chat-body clearfix">\n' +
'                                        <div class="header">\n' +
'                                            <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>13 mins ago</small>\n' +
'                                            <strong class="pull-right primary-font">'+data.user_name+'</strong>\n' +
'                                        </div>\n' +
'                                        <p>\n' +
                                            data.content+
'                                        </p>\n' +
'                                    </div>\n' +
'                                </li>';
}