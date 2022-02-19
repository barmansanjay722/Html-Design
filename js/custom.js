
// $(document).ready(function(){
//     $().click
// })"basic-addon2

$(document).ready(function(){
    $("#basic-addon2").click(function(){
        // alert("hello");
        $("#panel").slideToggle();
    });
});


$(document).ready(function(){
    $("leftmenudropdown").click(function(){
       $("dropdownlist").slideToggle("slow");
    });
});