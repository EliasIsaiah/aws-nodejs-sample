$(document).ready(function () {

    console.log("scripts loaded!");

    const input = document.querySelector('input');
    const inputLabel = document.getElementsByClassName("custom-file-label");

    const $previewCardTitle = $("h5.card-title");
    const $previewImageCard = $("div.card");
    console.log(inputLabel[0].textContent);

    let files;

    update = () => {
        $("img.previewImage").remove();
        files = input.files;
        let fileName = files[0].name;

        inputLabel[0].textContent = fileName;
        $previewCardTitle.text(fileName);

        let $img = $('<img>').addClass("previewImage");

        $img.attr("src", window.URL.createObjectURL(files[0]));
        $previewImageCard.prepend($img);
        console.log("newURL", window.URL.createObjectURL(files[0]));
        $previewImageCard.removeClass("hide");
        $previewImageCard.show();
    }


    $("#imageUploadForm").on("submit", (event) => {
        event.preventDefault();
        // const formData = new FormData();

        console.log("files before post", files[0]);
        fetch('/', {
            method: 'POST',
            body: files[0]
        }).then(data => console.log(data)).catch(err => {throw err});

    });

    input.addEventListener('change', update);
});