$(document).ready(function (){
    $('#button1id').click(function (){
        getFormXml();
//            WriteCookie();
    });
});

function getFormXml(){
    var sXml;
    var sType;
    var sValue;
//        sXml = "<xml>" + "\n"
//        $( "form input" ).each(function() {
//            sType = $(this).attr("type");
//            sValue = $(this).val();
//
//            if(sType == "checkbox" || sType == "radio") {
//                sXml = sXml + "<input type='" + $(this).attr("type") + "' checked='" + $(this).prop("checked") + "'>" + sValue + "</input>" + "\n";
//            } else {
//                sValue = $(this).val();
//                sXml = sXml + "<input type='" + $(this).attr("type") + "'>" + sValue + "</input>" + "\n";
//            }
//        });
//        sXml = sXml + "</xml>" + "\n";
//        console.log(document.getElementById("artifactType_type").attribute("value"));
//        alert(sXml);
    sXml = getBasicXMLTags();
    sXml+="\n"+getUIXMLElement();
    sXml+="\n"+"</artifactType>";
    alert(sXml);
}

function getBasicXMLTags(){
    var temp;
    var artifactType_type = document.getElementById("artifactType_type").value;
    var artifactType_shortName = document.getElementById("artifactType_shortName").value; ;
    var artifactType_singularLabel = document.getElementById("artifactType_singularLabel").value;
    var artifactType_pluralLabel= document.getElementById("artifactType_pluralLabel").value;
    var artifactType_hasNamespace = document.getElementById("artifactType_hasNamespace").value;
    var artifactType_iconset = document.getElementById("artifactType_iconset").value;
    temp = "<artifactType " + 'type="'+ artifactType_type + '"'+ ' shortName="'+artifactType_shortName+ '"'+ ' singularLabel="'+artifactType_singularLabel+ '"'+ ' pluralLabel="'+artifactType_pluralLabel+'"'+' hasNamespace="'+artifactType_hasNamespace+'"' + ' iconSet="'+ artifactType_iconset+'">';
    //console.log(temp);
    return temp;
}

function getUIXMLElement(){
    var eles = [];
    //var selects = document.getElementsByTagName("tr");
    var trs = document.getElementsByTagName("tr");
    var xml;

    for(var i = 0; i < trs.length; i++) {
        if(trs[i].id.indexOf('addr') == 0) {
            eles.push(trs[i]);
        }
    }
    xml="<ui>"+ "\n";
    xml+="<list>"+ "\n";

    for(var i=0;i<eles.length-1;i++){
        var type=eles[i].getElementsByTagName("select");
        var valuef=eles[i].getElementsByTagName("input");
        var href=eles[i].getElementsByTagName("input");
        //xml+= '<column name="'+eles[i].getElementsByTagName("input").item();

    }


    // console.log($(":input[name^='ui_']"));
    console.log(valuef);
    console.log(document.getElementById("artifactType_type"));

}
