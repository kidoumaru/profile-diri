// let angkaGanjil = 5;
// angkaGanjil = 2;

// const angkaGenap = 8;
// angkaGenap = 6;
// console.log(angkaGanjil);
// console.log(angkaGenap); 

// const nama = 'Budi';
// const umur = 30;

// const pesan = 'Halo, nama saya ${nama} dan berumur ${umur} tahun';
// console.log(pesan);

const skillListData = document.querySelector('#skill-list');
const inputCari = document.querySelector('#cari-skill');

if (skillListData && inputCari) {
    const skill = [
        { nama: "html dan css" },
        { nama: "makan" },
        { nama: "nonton anime" },
        { nama: "denger musik" },
        { nama: "tidur" },
        { nama: "php" },
    ];

    function render() {
        const keyword = inputCari.value.toLowerCase();

        const filterResult = skill.filter((skill) => {
            return skill.nama.toLowerCase().includes(keyword);
        });

        skillListData.innerHTML = filterResult.map((skill) => {
            return `<div class= "skill-card">${skill.nama}</div>`;
        }).join('');
    }


        inputCari.addEventListener('input', render);
        render(0);
}

// Ambil elemen tombol toggle berdasarkan ID
const toggleBtn = document.getElementById('themeToggle');

// Fungsi untuk mengubah teks/ikon di dalam tombol
function updateButtonText(theme) {
    if (theme === 'dark') {
        toggleBtn.innerHTML = '☀️ Mode Terang';
    } else {
        toggleBtn.innerHTML = '🌙 Mode Gelap';
    }
}

// Cek tema yang sedang aktif saat halaman pertama kali dimuat, lalu sesuaikan teks tombol
const currentActiveTheme = document.documentElement.getAttribute('data-theme');
updateButtonText(currentActiveTheme);

// Logika ketika tombol toggle diklik
toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';
    
    if (currentTheme === 'light') {
        newTheme = 'dark';
    }
    
    // Terapkan tema baru ke tag <html> dan simpan di memori browser (localStorage)
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Perbarui teks tombol sesuai tema baru
    updateButtonText(newTheme);
});