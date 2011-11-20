/*
variable size inputs thanks to mkilmanas on stackexchange
http://stackoverflow.com/questions/6385533/how-to-change-width-of-the-select-element-as-per-the-selected-option/6385741#6385741
*/
var and = function() {
	if($(this).val() === '-1') {
		$('#and').hide();
	} else {
		$('#and').show();
	}
},
remove = function() {
	if($(this).val() === '-1') {
		$(this).next("label").remove().end().remove();
		$('.depends').last().change();
	}
};
$('form#new select').change(function(){
    var $opt = $(this).find("option:selected");
    var $span = $('<span>').addClass('tester').text($opt.text());

    $span.css({
        'font-family' : $opt.css('font-family'),
        'font-style' : $opt.css('font-style'),
        'font-weight' : $opt.css('font-weight'),
        'font-size' : $opt.css('font-size')
    });

    $('body').append($span);
    // The 30px is for select open icon - it may vary a little per-browser
    $(this).width($span.width()+30);
    $span.remove();
});

$('form#new input').keyup(function(){
    var $opt = $(this);
    var $span = $('<span>').addClass('tester').text($opt.val());

    $span.css({
        'font-family' : $opt.css('font-family'),
        'font-style' : $opt.css('font-style'),
        'font-weight' : $opt.css('font-weight'),
        'font-size' : $opt.css('font-size')
    });

    $('body').append($span);
    // The 30px is for select open icon - it may vary a little per-browser
    $(this).width($span.width()+40);
    $span.remove();
});

$('form#new input[type="number"]').click(function(){
    var $opt = $(this);
    var $span = $('<span>').addClass('tester').text($opt.val());
    if($opt.val() === "") {
      $opt.val($opt.attr("placeholder"));
    }

    $span.css({
        'font-family' : $opt.css('font-family'),
        'font-style' : $opt.css('font-style'),
        'font-weight' : $opt.css('font-weight'),
        'font-size' : $opt.css('font-size')
    });

    $('body').append($span);
    // The 30px is for select open icon - it may vary a little per-browser
    $(this).width($span.width()+40);
    $span.remove();

    if($opt.val() > 9000) {
        if(!$('.9k').length) {
            $opt.next().after("<label class='9k'>(It&rsquo;s over nine <i>thousaaaaand!</i>)</label>");
        }
    } else {
        $('.9k').remove();
    }
});

$('#standalone').change(function(){
	if($(this).val() === '0') {
		$('#project').show();
	} else {
		$('#project').hide().val(0).change();
		$('#newproject').hide().val("");

	}
});
$('#project').change(function(){
	if($(this).val() === '-1') {
		$('#newproject').show().focus();
		$(this).hide();
	} else {
		$('#newproject').hide();
		$('#standalone').val() === '0' && $(this).show();
	}
});
$('form#new .depends').first().change(and)
$('#and').hide().click(function() {
	$(this).before("<label>and</label>");
	$('.depends').unbind("click",and).click(remove)
	             .first().clone(true).val(-1).insertBefore(this);
	$('.depends').last().unbind("click",remove).change().click(and).click();
})

$('form#new input').keyup();
$('form#new select').change();

//$('p.incomplete+p').hide();
$('form#new p.incomplete').click(function() {
    $(this).prevAll().removeClass("incomplete");
})
$('form#new p.incomplete input, form#new p.incomplete select').change(function() {
    $(this).parent("p").removeClass("incomplete");
})