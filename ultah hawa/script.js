function openWebsite() {

    const opening = document.getElementById("opening");
    const mainPage = document.getElementById("mainPage");
    const music = document.getElementById("music");
    const musicButton = document.getElementById("musicButton");

    // Sembunyikan halaman pembuka
    opening.style.display = "none";

    // Tampilkan halaman utama
    mainPage.classList.remove("hidden");

    // Mulai musik
    music.play()
        .then(() => {
            musicButton.innerHTML = "Ⅱ";
        })
        .catch((error) => {
            console.log("Musik tidak dapat diputar:", error);
        });

    // Kembali ke atas halaman
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Tombol Play / Pause
function toggleMusic() {

    const music = document.getElementById("music");
    const musicButton = document.getElementById("musicButton");

    if (music.paused) {

        music.play();
        musicButton.innerHTML = "Ⅱ";

    } else {

        music.pause();
        musicButton.innerHTML = "▶";

    }
}


// ==========================
// QR CODE WEBSITE
// ==========================

const websiteURL =
    "https://desynta.github.io/ultah-hawa//ultah%20hawa/index.html";

const qrCode =
    document.getElementById("qrCode");

qrCode.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="
    + encodeURIComponent(websiteURL);