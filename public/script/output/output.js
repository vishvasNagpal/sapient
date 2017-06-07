
$(function(){

    $('.actionItems .edit').click(function(){
        window.p_id = $(this).attr('data-pid');
    });
    $('#editModal').on('shown.bs.modal', function () {
        $.ajax({
            url: 'editProd?p_id=' + window.p_id,
            type: 'GET',
            success: function (data) {
                $('#editModal .loading').hide();
                $('#editModal .modal-body').append(data);
            },
            error: function(){
                $('#editModal .loading').hide();
                $('#editModal .wentWrong').show();
            }
        });
    });
    $('#editModal').on('hidden.bs.modal', function () {
        $('.popInnerContent').remove();
        $('#editModal .loading').show();
    })
});

