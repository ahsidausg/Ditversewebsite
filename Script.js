// ====== Popup Welcome ======
const popup = document.getElementById("welcomePopup");
const closeBtn = document.getElementById("closePopup");

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// ====== Form Logic ======
const buatTeks = document.getElementById("buatTeks");
const hasilContainer = document.getElementById("hasil");
const teksArea = document.getElementById("teksBanding");
const salinBtn = document.getElementById("salinTeks");

buatTeks.addEventListener("click", () => {
  const nomor = document.getElementById("nomor").value.trim();
  const jenis = document.getElementById("jenis").value;

  if (!nomor || !jenis) {
    alert("Mohon lengkapi nomor WhatsApp dan jenis pemblokiran.");
    return;
  }

  let teks = "";

  if (jenis === "sementara") {
    teks = `Halo Tim Dukungan WhatsApp,\n\nSaya pengguna dengan nomor ${nomor}. Saya ingin mengajukan banding atas pemblokiran sementara akun saya. Saya meyakini bahwa pemblokiran ini terjadi karena kesalahan sistem atau aktivitas yang terdeteksi secara otomatis.\n\nSaya mohon agar tim melakukan peninjauan ulang terhadap akun saya. Saya berjanji akan menggunakan layanan WhatsApp sesuai dengan kebijakan yang berlaku dan menunggu hasil peninjauan dari tim dalam waktu 5–10 menit.\n\nTerima kasih atas perhatian dan bantuannya.\n\nHormat saya,\n${nomor}`;
  } else if (jenis === "permanen") {
    teks = `Halo Tim Dukungan WhatsApp,\n\nSaya pemilik nomor ${nomor}. Akun saya telah mengalami pemblokiran permanen. Saya yakin pemblokiran ini terjadi karena kesalahan atau pelanggaran yang tidak disengaja.\n\nSaya mohon dengan hormat agar akun saya ditinjau kembali. Saya berjanji tidak akan melanggar pedoman penggunaan di masa mendatang dan akan menunggu hasil tinjauan dari pihak WhatsApp dalam waktu 5–10 menit.\n\nTerima kasih atas kerja keras tim dukungan.\n\nHormat saya,\n${nomor}`;
  } else if (jenis === "spam") {
    teks = `Kepada Tim Dukungan WhatsApp,\n\nNomor saya ${nomor} baru-baru ini terblokir karena diduga melakukan spam. Saya dengan tulus menyampaikan bahwa hal tersebut tidak saya sengaja atau mungkin akibat aktivitas otomatis dari pihak ketiga.\n\nMohon kiranya untuk melakukan peninjauan ulang agar akun saya dapat dipulihkan. Saya akan lebih berhati-hati ke depannya dan menunggu hasil tinjauan dari tim dalam 5–10 menit.\n\nTerima kasih atas perhatian dan kerja sama Anda.\n\nHormat saya,\n${nomor}`;
  }

  teksArea.value = teks;
  hasilContainer.classList.remove("hidden");
});

// ====== Salin Teks ======
salinBtn.addEventListener("click", () => {
  teksArea.select();
  document.execCommand("copy");
  alert("Teks banding berhasil disalin!");
});
