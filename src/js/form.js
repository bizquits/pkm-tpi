const scriptURL =
  "https://script.google.com/macros/s/AKfycbzV7P_VNOYJ8yk5JqCuWm9cunYTiKFIqsPGRgI6kavjOwPl4rCQ_I_6492OGIW0y-_q/exec";
const form = document.forms["pkm-tpi"];
const btn = document.querySelector(".btn");
const btnLoad = document.querySelector(".btn-load");
const alert = document.getElementById("modal");

const modalErrContent = document.getElementById("modalErrContent");
const modalSvg = document.getElementById("modalSvg");
const modalButton = document.getElementById("modalButton");

const valueTBC = document.getElementById("tbc");

form.addEventListener("submit", (e) => {
  let score = 0;
  let message = "";
  let color = "";
  let svg = "";
  let button = "";

  const batuk_2minggu = document.querySelector(
    'input[name="batuk_2minggu"]:checked'
  )?.value;
  const demam_tak_jelas = document.querySelector(
    'input[name="demam_tak_jelas"]:checked'
  )?.value;
  const keringat_malam = document.querySelector(
    'input[name="keringat_malam"]:checked'
  )?.value;
  const berat_turun = document.querySelector(
    'input[name="berat_turun"]:checked'
  )?.value;
  const lelah_lesu = document.querySelector(
    'input[name="lelah_lesu"]:checked'
  )?.value;
  const nyeri_dada = document.querySelector(
    'input[name="nyeri_dada"]:checked'
  )?.value;
  const dahak_darah = document.querySelector(
    'input[name="dahak_darah"]:checked'
  )?.value;
  const kontak_keluarga = document.querySelector(
    'input[name="kontak_keluarga"]:checked'
  )?.value;
  const kontak_lain = document.querySelector(
    'input[name="kontak_lain"]:checked'
  )?.value;

  if (demam_tak_jelas === "iya") score++;
  if (keringat_malam === "iya") score++;
  if (berat_turun === "iya") score++;
  if (lelah_lesu === "iya") score++;
  if (nyeri_dada === "iya") score++;
  if (dahak_darah === "iya") score++;
  if (kontak_keluarga === "iya") score++;
  if (kontak_lain === "iya") score++;

  if (batuk_2minggu === "iya" || score >= 3) {
    message = `
    <div class="text-center md:text-left">
      <p class="font-bold">Anda memiliki indikasi masalah kesehatan paru-paru</p> 
      <p>Untuk diagnosa lebih lanjut akan dilakukan cek kesehatan dengan X-Ray Portable </p>
      </div>`;
    color = "bg-red-100";
    svg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-red-600">
                              <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>`;
    button = `<a command="close" commandfor="dialog" href="https://wa.me/6282288331984?text=Saya%20memiliki%20indikasi%20masalah%20kesehatan%20paru-paru.%20Saya%20ingin%20melakukan%20pemeriksaan%20kesehatan.
            " target="_blank" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Lindungi Keluarga Anda</a>
              `;
    valueTBC.value = "positif";
  } else {
    message = `
      <p><strong>Tetap jaga kesehatan dengan mencegah penularan TBC:</strong></p>
      <div class="ml-5">
      <ul class="list-decimal sm:text-left">
        <li>Gunakan masker bila batuk</li>
        <li>Cuci tangan teratur</li>
        <li>Istirahat yang cukup</li>
        <li>Konsumsi gizi seimbang</li>
        <li>Hindari asap rokok</li>
        <li>Terapkan etika batuk dan bersin yang benar</li>
      </ul>
      </div>
    `;
    color = "bg-green-100";
    svg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-green-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>`;
    button = `<a command="close" commandfor="dialog" href="https://dinkes.kepriprov.go.id/blog/viewberita/waspada-tuberkulosis-kenali-gejalanya-cegah-penularannya-dan-tuntaskan-pengobatannya" target="_blank" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto">Informasi Lebih Lanjut</a>
              `;
    valueTBC.value = "negatif";
  }

  e.preventDefault();
  btn.classList.toggle("hidden");
  btnLoad.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btn.classList.toggle("hidden");
      btnLoad.classList.toggle("hidden");
      modalErrContent.innerHTML = message;
      modalSvg.innerHTML = svg;
      modalSvg.classList.add(color);
      modalButton.innerHTML = button;
      alert.click();
      setTimeout(alertFunc, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

alertFunc = () => {
  alert.classList.add("hidden");
};
