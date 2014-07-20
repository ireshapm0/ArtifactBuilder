$(document).ready(function () {
    $('#button1id').click(function () {
        if (validateInput()) {
            JSONObjectToString();
        }
    });
});

function validateInput() {

    var type = document.getElementById("artifactType_type").value;
    var shortName = document.getElementById("artifactType_shortName").value;
    var singularLabel = document.getElementById("artifactType_singularLabel").value;
    var pluralLabel = document.getElementById("artifactType_pluralLabel").value;
    var hasNamespace = document.getElementById("artifactType_hasNamespace").value;
    var iconset = document.getElementById("artifactType_iconset").value;
    var storagePath = document.getElementById("basic_storagePath").value;
    var nameAttribute = document.getElementById("basic_nameAttribute").value;
    var nameSpaceAttribute = document.getElementById("basic_nameSpaceAttribute").value;
    var lifecycle = document.getElementById("basic_lifecycle").value;

    if (type == "" || shortName == "" || singularLabel == "" || pluralLabel == "" || hasNamespace == "" || iconset == "" || storagePath == "") {
        alert("Please fill all mandatory fields..");
        return;
    }

    return true;
}
function getBasicJsonElements() {
    var artifactType = {};

    artifactType["type"] = document.getElementById("artifactType_type").value;
    artifactType["shortName"] = document.getElementById("artifactType_shortName").value;
    artifactType["singularLabel"] = document.getElementById("artifactType_singularLabel").value;
    artifactType["pluralLabel"] = document.getElementById("artifactType_pluralLabel").value;
    artifactType["hasNamespace"] = document.getElementById("artifactType_hasNamespace").value;
    artifactType["iconset"] = document.getElementById("artifactType_iconset").value;
    artifactType["storagePath"] = document.getElementById("basic_storagePath").value;
    artifactType["nameAttribute"] = document.getElementById("basic_nameAttribute").value;
    artifactType["nameSpaceAttribute"] = document.getElementById("basic_nameSpaceAttribute").value;
    artifactType["lifecycle"] = document.getElementById("basic_lifecycle").value;

    return artifactType;
}

function getUI() {
    var tableRows = [];
    var list = [];
    var ui = document.getElementById("ui");
    var trs = ui.getElementsByTagName("tr");

    for (var i = 0; i < trs.length; i++) {
        if (trs[i].id.indexOf('addr') == 0) {
            tableRows.push(trs[i]);
        }
    }
    for (var i = 0; i < tableRows.length - 1; i++) {
        var columns = {};
        if (tableRows[i].hasChildNodes()) {
            var type = tableRows[i].getElementsByTagName("select")[0].value;
            //console.log(type[0].value);
            var value = tableRows[i].getElementsByTagName("input")[0].value;
            var href = tableRows[i].getElementsByTagName("input")[1].value;
            columns["type"] = type;
            columns["value"] = value;
            columns["href"] = href;
            list.push(columns);
        }
    }
    return list;
}

function getRelationships() {
    var tableRows = [];
    var list = [];
    var ui = document.getElementById("relationships");
    var trs = ui.getElementsByTagName("tr");

    for (var i = 0; i < trs.length; i++) {
        if (trs[i].id.indexOf('relationships_addr') == 0) {
            tableRows.push(trs[i]);
        }
    }
    for (var i = 0; i < tableRows.length - 1; i++) {
        var columns = {};
        if (tableRows[i].hasChildNodes()) {
            var relationship = tableRows[i].getElementsByTagName("select")[0].value;
            var type = tableRows[i].getElementsByTagName("input")[0].value;
            var source_target = tableRows[i].getElementsByTagName("input")[1].value;
            columns["relationship"] = relationship;
            columns["type"] = type;
            columns["source/target"] = source_target;
            list.push(columns);
        }
    }
    return list;
}


function getContent() {

    var contentFields = document.getElementById("target").getElementsByTagName("div");
    var allFields = [];

    for (var i = 0; i < contentFields.length; i++) {

        if (contentFields[i].getAttribute("data-title") == "Text Input") {
            var fields = {};
            fields['type'] = 'text';
            var d = document.createElement('div');
            d.innerHTML = contentFields[i].getAttribute("data-content");
            var nodes = d.getElementsByTagName("input");
            for (var j = 0; j < nodes.length; j++) {
                if (nodes[j].getAttribute("data-type") == "input") {
                    fields[nodes[j].getAttribute("id")] = nodes[j].getAttribute("value");

                }
                else if (nodes[j].getAttribute("data-type") == "checkbox") {
                    fields[nodes[j].getAttribute("id")] = nodes[j].getAttribute("checked");

                }
            }
            allFields.push(fields);

        }
        else if (contentFields[i].getAttribute("data-title") == "Button Drop Down") {

            var fields = {};
            fields['type'] = 'buttonDropdown';
            var d = document.createElement('div');
            d.innerHTML = contentFields[i].getAttribute("data-content");
            var nodes = d.getElementsByTagName("input");
            var nodes2 = d.getElementsByTagName("textarea");
            for (var j = 0; j < nodes.length; j++) {
                if (nodes[j].getAttribute("data-type") == "input") {
                    fields[nodes[j].getAttribute("id")] = nodes[j].getAttribute("value");

                }
                else if (nodes[j].getAttribute("data-type") == "checkbox") {
                    fields[nodes[j].getAttribute("id")] = nodes[j].getAttribute("checked");

                }
            }
            for (var k = 0; k < nodes2.length; k++) {
                if (nodes2[k].getAttribute("data-type") == "textarea-split") {
                    fields[nodes2[k].getAttribute("id")] = nodes2[k].value;

                }

            }
            allFields.push(fields);
        }
        else if (contentFields[i].getAttribute("data-title") == "Text Area") {
            var fields = {};
            fields['type'] = 'textArea';
            var d = document.createElement('div');
            d.innerHTML = contentFields[i].getAttribute("data-content");
            var nodes = d.getElementsByTagName("input");
            for (var j = 0; j < nodes.length; j++) {
                if (nodes[j].getAttribute("data-type") == "input") {
                    fields[nodes[j].getAttribute("id")] = nodes[j].getAttribute("value");

                }
                else if (nodes[j].getAttribute("data-type") == "checkbox") {
                    fields[nodes[j].getAttribute("id")] = nodes[j].getAttribute("checked");

                }
            }
            allFields.push(fields);
        }
        else if (contentFields[i].getAttribute("data-title") == "Multiple Checkboxes") {
            var fields = {};
            fields['type'] = 'checkbox';
            var d = document.createElement('div');
            d.innerHTML = contentFields[i].getAttribute("data-content");
            var inputNodes = d.getElementsByTagName("input");
            var textAreaNodes = d.getElementsByTagName("textarea");
            //console.log(inputNodes);
            for (var j = 0; j < inputNodes.length; j++) {
                if (inputNodes[j].getAttribute("data-type") == "input") {
                    fields[inputNodes[j].getAttribute("id")] = inputNodes[j].getAttribute("value");

                }
                else if (inputNodes[j].getAttribute("data-type") == "checkbox") {
                    fields[inputNodes[j].getAttribute("id")] = inputNodes[j].getAttribute("checked");

                }
            }
            for (var k = 0; k < textAreaNodes.length; k++) {
                if (textAreaNodes[k].getAttribute("data-type") == "textarea-split") {
                    fields[textAreaNodes[k].getAttribute("id")] = textAreaNodes[k].value;

                }

            }
            allFields.push(fields);
        }
        else if (contentFields[i].getAttribute("data-title") == "Select Basic") {
            var fields = {};
            fields['type'] = 'option';
            var d = document.createElement('div');
            d.innerHTML = contentFields[i].getAttribute("data-content");
            var inputNodes = d.getElementsByTagName("input");
            var textAreaNodes = d.getElementsByTagName("textarea");
            //console.log(inputNodes);
            for (var j = 0; j < inputNodes.length; j++) {
                if (inputNodes[j].getAttribute("data-type") == "input") {
                    fields[inputNodes[j].getAttribute("id")] = inputNodes[j].getAttribute("value");

                }
                else if (inputNodes[j].getAttribute("data-type") == "checkbox") {
                    fields[inputNodes[j].getAttribute("id")] = inputNodes[j].getAttribute("checked");

                }
            }
            for (var k = 0; k < textAreaNodes.length; k++) {
                if (textAreaNodes[k].getAttribute("data-type") == "textarea-split") {
                    fields[textAreaNodes[k].getAttribute("id")] = textAreaNodes[k].value;

                }

            }
            allFields.push(fields);
        }

        else if (contentFields[i].getAttribute("data-title") == "File Button") {
            var fields = {};
            fields['type'] = 'fileButton';
            var d = document.createElement('div');
            d.innerHTML = contentFields[i].getAttribute("data-content");
            var inputNodes = d.getElementsByTagName("input");
            //console.log(inputNodes);
            for (var j = 0; j < inputNodes.length; j++) {
                if (inputNodes[j].getAttribute("data-type") == "input") {
                    fields[inputNodes[j].getAttribute("id")] = inputNodes[j].getAttribute("value");

                }
            }
            allFields.push(fields);
        }

    }
    return allFields;
}

function JSONObjectToString() {
    var json = { "artifactType": getBasicJsonElements(), "content": getContent(), "ui": getUI(), "relationships": getRelationships()}
    console.log(JSON.stringify(json));
    alert(JSON.stringify(json));
}
