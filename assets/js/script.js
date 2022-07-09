document.addEventListener("DOMContentLoaded", function () {
  const formInput = document.getElementById("inputBook");
  const formSearch = document.getElementById("searchBook");

  formInput.addEventListener("submit", function (event) {
    event.preventDefault();
    addData();

    document.getElementById("inputBookTitle").value = "";
    document.getElementById("inputBookAuthor").value = "";
    document.getElementById("inputBookYear").value = "";
    document.getElementById("inputBookIsComplete").checked = false;
  });

  formSearch.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputSearch = document.getElementById("searchBookTitle").value;
    bookSearch(inputSearch);
  });

  if (isStorageSupported()) {
    fetchData();
  }
});

document.addEventListener("onjsonfetched", function () {
  renderFromData();
});
