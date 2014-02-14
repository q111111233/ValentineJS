/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
            var $ele = $(this), str = $ele.html(), progress = 0;

            str=str.replace(/[ ]+/g," ")
            //		str=str.replace(/(\n)+|(\r\n)+/g, "");
            //		str=str.replace(/(^\t+)|(\t+$)/g,"");
            //		str=str.replace(/(^\s+)|(\s+$)/g,"");
            //		console.log(str);
            $ele.html('');
//audioPlay();
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                if (current == '<') {
                   // audioPause();
                    //console.log(str.substr(progress,1));
                    var a=progress;
                    progress = str.indexOf('>', progress) + 1;
                    //	console.log(str.substring(a,progress));
                } else {
                    //audioPlay();
                    progress++;
                    $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                }

                if (progress >= str.length) {
                    //audioPause();
                    clearInterval(timer);
                }
                var elem = document.getElementById('text');
                elem.scrollTop = elem.scrollHeight;
                if($('#lastcomments').length>0)
                {
                    $('#text').css('overflow','auto');
                }
            }, 155);
		});

		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}

function audioPlay(){
    document.getElementById("myaudio").play();
}


function audioPause(){
    document.getElementById("myaudio").pause();
}