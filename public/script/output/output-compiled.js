$(function () {
    $('.tab .tabHead').click(function () {
        var className = $(this).attr('id');
        $('.tab .tabHead').removeClass('selected');
        $(this).addClass('selected');
        $('.panelContent .panel').hide();
        $('.panelContent .panel.' + className).show();
    });

    $('#addNewProperty').click(function () {
        var propertyRow = '<div class="formRow propertyRow">' + '<div class="deleteRow">X</div>' + '<div class="left50">' + '<div class="cols">' + '<input type="text" placeholder="Property Name" name="propertyName" />' + '</div>' + '<div class="cols">' + '<input type="text" placeholder="Property Value" name="propertyValue" />' + '</div>' + '</div>' + '</div>';

        $('.propertySection').append(propertyRow);
    });

    $('.appStyleTabPanel li').click(function () {
        var tab = $(this);
    });
    $('.appStyleTabPanel .addNewTab').click(function () {
        var idTxt = 'appStyle' + $('.appStyleTabPanel li').length;
        var classTxt = 'styleContent selected ' + idTxt;
        $('<li id=' + idTxt + ' >New Style</li>').insertBefore('.addNewTab');
        $('.appStyleTabPanel li').removeClass('selected');
        $('#' + idTxt).addClass('selected');
        $('.appStyleContents .styleContent').removeClass('selected');
        var tag = $('<div><iframe src="/appStyle/add?render=addAppstyle" class="styleFrame"></iframe></div>');
        tag.addClass(classTxt);
        $('.appStyleContents').append(tag);
    });
});

function updateTabTitle(tab) {
    tab.innerHTML('New Style');
}

//# sourceMappingURL=output-compiled.js.map