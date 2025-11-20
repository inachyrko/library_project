
    function searchAdultBooks() {
        let input = document.getElementById("searchAdult").value.toLowerCase();
        let table = document.querySelector(".adult");
        let rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) {
            let titleCell = rows[i].getElementsByTagName("td")[1]; // name
            let authorCell = rows[i].getElementsByTagName("td")[2]; // author

            if (titleCell && authorCell) {
                let title = titleCell.textContent.toLowerCase();
                let author = authorCell.textContent.toLowerCase();

                // the row is shown if the entered text is found in the title OR in the author
                if (title.includes(input) || author.includes(input)) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        }
    }

    function searchChildBooks() {
        let input = document.getElementById("searchChild").value.toLowerCase();
        let table = document.querySelector(".child");
        let rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) {
            let titleCell = rows[i].getElementsByTagName("td")[1]; // название
            let authorCell = rows[i].getElementsByTagName("td")[2]; // автор

            if (titleCell && authorCell) {
                let title = titleCell.textContent.toLowerCase();
                let author = authorCell.textContent.toLowerCase();

                // строка показывается если введённый текст есть в названии ИЛИ в авторе
                if (title.includes(input) || author.includes(input)) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        }
    }


