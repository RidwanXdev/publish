function showMessage() {
    // Memulai musik latar belakang
    var music = document.getElementById("backgroundMusic");
    music.play();

    var heartButton = document.getElementById("heartButton");
    heartButton.style.display = "none";

    var message = document.getElementById("message");
    message.classList.remove("hidden");

    // Teks pesan spesial
    var messageText = "Sayangg ku fara...... aku minta maaf telah membuat kamu kecewa dengan menghapus semua data HP mu, sekali lagi minta maaf ya🥺. fara, kamu tau ngga? aku lo nga bisa melupakan mu, aku lo terus mengingat momen-momen indah saat bersamamu, aku galau banget sumpah, kayak udah males lanjut hidup, hidup ku sekarang rasanya hampa😞. fara, kita perbaiki ya hubungan kita, kita mulai dari 0 lagi, mau ya cantiku fara, kumohon mauuu🥺🥺. sumpah far pikiran ku mong sampean tok, kelingan sampean terus, opo opo ki ga fokus blas. fara... mau ya kita perbaiki hubungan kita ini, kita mulai dari 0 lupain dan tinggalin yang membuat hubungan kita sebelumnya hancur. mau ya fara🥺🥺🥺, mauuuu!!💍🙏🙏. AKU SAYANG FARA, AKU CINTA FARA, AKU PENGEN SELALU BARENG SELAMANYA BERSAMA FARA💍💍💍💕💕💕. LOVE YOU FARAAAAAA........Mwahhhh";
    

    var i = 0;
    var textElement = document.getElementById("textMessage");

    // Fungsi untuk menampilkan teks satu per satu
    function typeWriter() {
        if (i < messageText.length) {
            textElement.innerHTML += messageText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
         
            startFallingEmojis();
        }
    }
    
    typeWriter();
}

function startFallingEmojis() {
    var emojisContainer = document.getElementById("fallingEmojis");
    emojisContainer.classList.remove("hidden");

    for (let i = 0; i < 10; i++) {
        let emoji = document.createElement("span");
        emoji.classList.add("emoji");
        emoji.textContent = Math.random() > 0.5 ? "❤️" : "🌸"; 
        emoji.style.left = Math.random() * 100 + "vw"; 
        emoji.style.animationDuration = (Math.random() * 3 + 4) + "s";
        emojisContainer.appendChild(emoji);

        setTimeout(() => {
            emoji.style.animationPlayState = "running";
        }, 100);
    }
}

