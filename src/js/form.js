const scriptURL =
  "https://script.google.com/macros/s/AKfycbzV7P_VNOYJ8yk5JqCuWm9cunYTiKFIqsPGRgI6kavjOwPl4rCQ_I_6492OGIW0y-_q/exec";
const form = document.forms["SelfAssessment"];
const btn = document.querySelector(".btn");
const btnLoad = document.querySelector(".btn-load");
const alert = document.getElementById("modal");

const modalErrContent = document.getElementById("modalErrContent");
const modalSvg = document.getElementById("modalSvg");
const modalButton = document.getElementById("modalButton");

form.addEventListener("submit", (e) => {
  let score = 0;
  let message = "";
  let color = "";
  let svg = "";
  let button = "";

  const headache = document.querySelector(
    'input[name="headache"]:checked'
  )?.value;
  const nausea = document.querySelector('input[name="nausea"]:checked')?.value;
  const diarrhea = document.querySelector(
    'input[name="diarrhea"]:checked'
  )?.value;
  const appetite = document.querySelector(
    'input[name="appetite"]:checked'
  )?.value;
  const sleep = document.querySelector('input[name="sleep"]:checked')?.value;

  if (headache === "sedang" || headache === "parah") score++;
  if (nausea === "sering") score++;
  if (diarrhea === "berulang") score++;
  if (appetite === "hilang sama sekali") score++;
  if (sleep === "sulit tidur atau tidak tidur") score++;

  if (score >= 4) {
    message =
      "Berdasarkan jawaban Anda, disarankan segera memeriksakan diri ke dokter.";
    color = "bg-red-100";
    svg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-red-600">
                              <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>`;
    button = `<a command="close" commandfor="dialog" href="https://wa.me/6282285803030?text=Halo%2C%20saya%20ingin%20berkonsultasi%20karena%20mengalami%20beberapa%20gejala.
            " target="_blank" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto">Lanjutkan</a>
                  </div>`;
  } else if (score >= 2) {
    message =
      "Anda mengalami beberapa gejala. Istirahat dan pantau kondisi Anda.";
    color = "bg-yellow-100";
    svg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 text-yellow-600">
                              <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>`;
    button = `<button type="button" command="close" commandfor="dialog" class="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 sm:ml-3 sm:w-auto">Tutup</button>
                  </div>`;
  } else {
    message =
      "Kondisi Anda tampaknya ringan. Tetap jaga kesehatan dan perhatikan gejala lanjutan.";
    color = "bg-green-100";
    svg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-green-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>`;
    button = `<button type="button" command="close" commandfor="dialog" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto">Tutup</button>
                  </div>`;
  }

  e.preventDefault();
  btn.classList.toggle("hidden");
  btnLoad.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btn.classList.toggle("hidden");
      btnLoad.classList.toggle("hidden");
      modalErrContent.textContent = message;
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
