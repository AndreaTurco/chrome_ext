// document.addEventListener('DOMContentLoaded', function () {
//     var links = document.getElementsByTagName("li");
//     for (var i = 0; i < links.length; i++) {
//         (function () {
//             var ln = links[i];
//             var location = ln.getAttribute('data-link');
//             ln.onclick = function () {
//                 chrome.tabs.create({active: true, url: "https://"+location+".betent.com/enter.php"});
//             };
//         })();
//     }
// });
//
$(document).ready(function(){
    $("#body_betent li").each(function(){
        var $ln = $(this);
        var location = $ln.attr('data-link');
         $ln.on("click", function () {
            if($(this).hasClass("git_link")){
                chrome.tabs.update({active: true, url: "https://git.betent.com/projects/BET"});                
            }else if($(this).hasClass("hq")){
                chrome.tabs.update({active: true, url: "http://ops.betent.com/hqlogin.php"});                
            }else if($(this).hasClass("jira_link")){
                chrome.tabs.update({active: true, url: "https://betent.atlassian.net/secure/RapidBoard.jspa?rapidView=2"});                
            } else if($(this).hasClass("myissue_link")){
                chrome.tabs.update({active: true, url: "https://betent.atlassian.net/browse/BET-990?filter=-1"});                
            } else{
                chrome.tabs.update({active: true, url: "https://"+location+".betent.com/enter.php"});                
            }
        });
    });

    // $('input[name="environment"]').on("change", function(){
    //     if($(this).val() == "test"){
    //         $('.vm_name').show();
    //     } else {
    //         $('.vm_name').hide();
    //     }
    // });

    $('#body_betent .select_skins').on('change', function(){
        var env = $('#body_betent input[name="environment"]:checked').val(),
            vm_name = $('#body_betent .vm_name').val(),
            $this = $(this);
            if(env == "test"){
                if(vm_name != ""){
                    env = vm_name;
                }
                else {
                    return false;
                }
            }
        chrome.tabs.update({active: true, url: "http://"+env+"."+$this.val()+".com"});
    })

});
