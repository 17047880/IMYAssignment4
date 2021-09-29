
$(document).on('click', 'button', function(){
    let $currentType;
    let $currentVal;
    if ($(this).text() === "Edit") {
        $currentVal = $(this).parent("div.details").children().first().next("span").text();
        $(this).parent("div.details").children().next("span").hide();

        $(this).parent("div.details").children().first().hide();
        $currentType = $(this).parent("div.details").attr("data-type");
        $(this).addClass("col-3");
        $(this).text("Update");



        $(this).before("<input  class='col-8 ' value='"+$currentVal+"' type='"+$currentType+"'>");


        // if ($currentType === 'date') {
        //     let n = new Date();
        //      n = Date.parse($currentVal);
        //     $currentVal = n.toString();
        // }


    }
    else {
        $(this).removeClass("col-3");
        $(this).text("Edit");
        $currentVal = $(this).prev("input").val();
        $currentType = $(this).parent("div.details").attr("data-type");
        $(this).parent("div.details").children().next("span").text($currentVal);


        $(this).parent("div.details").children().first().show();
        $(this).parent("div.details").children().next("span").show();

        $(this).prev("input").remove();


        // if ($currentType === 'date') {
        //     let msecs = Date.parse($currentVal);
        //    msecs = v;
        //    let n = new Date();
        //    n = msecs;
        //
        // }


    }
})
