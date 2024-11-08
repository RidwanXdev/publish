function showMessage() {
    // Memulai musik latar belakang
    var music = document.getElementById("backgroundMusic");
    music.play();

    // Menyembunyikan tombol setelah klik
    var heartButton = document.getElementById("heartButton");
    heartButton.style.display = "none"; // Sembunyikan tombol

    // Menampilkan pesan setelah klik
    var message = document.getElementById("message");
    message.classList.remove("hidden");

    // Teks pesan spesial
    var messageText = "Terimakasih ya, Terimakasih untuk apa hayo, terimakasih telah menerima aku apa adanya, terimakasih telah sabar dengan perilaku ku yg sering membuat kamu kesel, capek, kecewa, tapiiii...... ada tapi nya xixi, aku sayang banget sama kamu, cinta banget sama kamu, setiap selesai sholat aku selalu berdoa biar kita selalu bersama sama selamanya. kita janji ya walaupun ada masalah apapun jangan sampai menyelesaikan hubungan kita ini, yang di selesaikan itu masalahnya, kita perbaiki hubungan kita, sekali lagi janji ya sayangg xixixi JANJIIIII!!, ga janji ga sayang aku xixi. mwahh mwahh mwahh lopyuuu always cantikuuu, duniakuuu mwahh    ❤💞💋💋💋💍💍💍🥰🥰🥰❤💞";
    

    var i = 0;
    var textElement = document.getElementById("textMessage");

    // Fungsi untuk menampilkan teks satu per satu
    function typeWriter() {
        if (i < messageText.length) {
            textElement.innerHTML += messageText.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Kecepatan muncul per huruf (dalam milidetik)
        } else {
            // Setelah teks selesai, mulai efek hati dan bunga berjatuhan
            startFallingEmojis();
        }
    }
    
    typeWriter(); // Memulai efek ketikan
}

function startFallingEmojis() {
    var emojisContainer = document.getElementById("fallingEmojis");
    emojisContainer.classList.remove("hidden");

    // Membuat emoji hati dan bunga secara acak
    for (let i = 0; i < 10; i++) {
        let emoji = document.createElement("span");
        emoji.classList.add("emoji");
        emoji.textContent = Math.random() > 0.5 ? "❤️" : "🌸"; // Memilih antara emoji hati dan bunga

        // Tentukan posisi acak dan durasi animasi untuk setiap emoji
        emoji.style.left = Math.random() * 100 + "vw"; // Posisi acak di lebar layar
        emoji.style.animationDuration = (Math.random() * 3 + 4) + "s"; // Durasi acak

        // Menambahkan emoji ke dalam kontainer
        emojisContainer.appendChild(emoji);

        // Menambahkan animasi untuk membuat emoji jatuh
        setTimeout(() => {
            emoji.style.animationPlayState = "running";
        }, 100);
    }
}
