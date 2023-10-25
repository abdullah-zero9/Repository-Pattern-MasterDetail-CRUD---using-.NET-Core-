


function DeleteItem(btn) {
    $(btn).closest('tr').remove();
    updateResultRowIndexes();
}

function updateResultRowIndexes() {
    $("#ExpTable tbody tr").each(function (index) {
        $(this).find("input").each(function () {
            var currentName = $(this).attr("name");
            var newName = currentName.replace(/SalesDetails\[\d+\]/g, `SalesDetails[${index}]`);
            $(this).attr("name", newName);
        });
    });
}

function Delete(id) {
    $.ajax({
        type: "POST",
        data: JSON.stringify({ id: id }),
        url: "/Sale/Delete?id=" + id,
        datatype: "Json",
        ContentType: "application/Json; charset=utf-8",
        success: function (data) {
            window.location.href = "/Sale/Index"
        },
        error: function (err) {
            window.location.href = "/Sale/Index"
        }
    })


}

$("#btnAddResult").click(function () {
    var lastRowIndex = $("#ExpTable tbody tr").length;
    var newRowHtml =

        `<tr>
            <td>
                    <input name="SalesDetails[${lastRowIndex}].ProductCode" class="form-control alert-info" />
            </td>
            <td>
                        <input name="SalesDetails[${lastRowIndex}].ProductName" class="form-control alert-success"  />
            </td>
            <td>
                    <input name="SalesDetails[${lastRowIndex}].Price" class="form-control alert-danger" />
            </td>
            <td>
                    <input name="SalesDetails[${lastRowIndex}].Quantity" class="form-control alert-warning"  />
            </td>
            <td>
                    <button type="button" class="btn btn-outline-danger btn-sm" onclick="DeleteItem(this)"><i class="fa fa-trash"></i></button>
            </td>
        </tr>`;

    $("#ExpTable tbody").append(newRowHtml);
    updateResultRowIndexes();
});

$("#submitFormCreate").click(function (event) {
    event.preventDefault();

    var formData = new FormData($('form')[0]);

    $.ajax({
        type: "post",
        url: "/Sale/Create",
        contentType: false,
        processData: false,
        data: formData,
        success: function (data) {
            alert("data saved Successfully!");
            $('form')[0].reset();

            $("#ExpTable tbody").empty();

            updateResultRowIndexes();
        },
        error: function (err) {
            alert("Error Occurred");
        }
    });
});



/*edit*/
function DeleteItem(btn) {
    $(btn).closest('tr').remove();
    updateResultRowIndexes();
}

function updateResultRowIndexes() {
    $("#ExpTable tbody tr").each(function (index) {
        $(this).find("input").each(function () {
            var currentName = $(this).attr("name");
            var newName = currentName.replace(/SalesDetails\[\d+\]/g, `SalesDetails[${index}]`);
            $(this).attr("name", newName);
        });
    });
}

//$("#btnAddResult").click(function () {
//    var lastRowIndex = $("#ExpTable tbody tr").length;
//    var newRowHtml = `<tr>
//        <td>
//            <input name="SalesDetails[${lastRowIndex}].ProductCode" class="form-control" />
//        </td>
//        <td>
//            <input name="SalesDetails[${lastRowIndex}].ProductName" class="form-control" />
//        </td>
//        <td>
//            <input name="SalesDetails[${lastRowIndex}].Price" class="form-control" />
//        </td>
//        <td>
//            <input name="SalesDetails[${lastRowIndex}].Quantity" class="form-control" />
//        </td>
//        <td>
//            <button type="button" class="btn btn-danger" onclick="DeleteItem(this)">Delete</button>
//        </td>
//    </tr>`;

//    $("#ExpTable tbody").append(newRowHtml);
//    updateResultRowIndexes();
//});

$("#submitFormEdit").click(function (event) {
    event.preventDefault();

    var formData = new FormData($('form')[0]);

    $.ajax({
        type: "post",
        url: "/Sale/Edit",
        contentType: false,
        processData: false,
        data: formData,
        success: function (data) {
            alert("Data Updated Successfully!!");
        },
        error: function (err) {
            alert("Error Occurred");
        }
    });
});