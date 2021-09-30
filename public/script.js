$(function () {
    let inp_add_name = $("#addname");
    let inp_del_name = $("#delname");
    let inp_age = $("#age");
    let inp_city = $("#city");
    let btn_add = $("#add");
    let btn_del = $("#del");
    let tbl_persons = $("#persons");
    function refresh(persons) {
        tbl_persons.empty();
        tbl_persons.append(
            `
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            </tr>
            `
        );
        for (person of persons) {
            tbl_persons.append(
                `
                <tr>
                    <td>${person.name}</td>
                    <td>${person.age}</td>
                    <td>${person.city}</td>
                </tr>
                `
            );
        }
    }
    $.get("/api/persons", function (data) {
        refresh(data);
    });
    btn_add.click(function () {
        $.post(
            "/api/persons/add",
            {
                name: inp_add_name.val(),
                age: inp_age.val(),
                city: inp_city.val(),
            },
            function (data) {
                refresh(data);
            }
        );
    });
    btn_del.click(function () {
        console.log(inp_del_name.val());
        $.post(
            "/api/persons/del",
            {
                name: inp_del_name.val(),
            },
            function (data) {
                refresh(data);
            }
        );
    });
});
