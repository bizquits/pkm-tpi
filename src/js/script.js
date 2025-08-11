document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const nameErrContent = document.getElementById("nameErrContent");

  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  const phoneErrContent = document.getElementById("phoneErrContent");

  nameInput.addEventListener("input", function () {
    const nameValue = nameInput.value.trim();
    const nameRegex = /^[A-Za-z\s]*$/;

    if (!nameRegex.test(nameValue)) {
      nameErrContent.textContent = "Hanya boleh huruf.";
      nameError.classList.remove("hidden");
    } else {
      nameErrContent.textContent = "";
      nameError.classList.add("hidden");
    }
  });

  phoneInput.addEventListener("input", function () {
    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^[0-9]*$/;

    if (!phoneRegex.test(phoneValue)) {
      phoneErrContent.textContent = "Hanya boleh angka.";
      phoneError.classList.remove("hidden");
    } else if (phoneValue.length > 13) {
      phoneErrContent.textContent = "Maksimal 13 digit.";
      phoneError.classList.remove("hidden");
    } else {
      phoneErrContent.textContent = "";
      phoneError.classList.add("hidden");
    }
  });
});
