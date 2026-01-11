// Kart verileri - 1'den 60'a kadar (PDF'den alınan gerçek sorular)
const cards = [
  {
    sayi: 1,
    seviye: "basit",
    soru: "Dünyanın ilk ticari başarı yakalayan ve video oyun endüstrisini başlatan oyun hangisidir?",
    cevap: "Pong",
  },
  {
    sayi: 2,
    seviye: "basit",
    soru: "Oyun dünyasında 'FPS' kısaltmasının açılımı nedir?",
    cevap: "First Person Shooter",
  },
  {
    sayi: 3,
    seviye: "basit",
    soru: "Nintendo'nun efsanevi karakteri Mario'nun ilk göründüğü oyun hangisidir?",
    cevap: "Donkey Kong",
  },
  {
    sayi: 4,
    seviye: "basit",
    soru: "E-spor dünyasında 'MOBA' türünün en popüler oyunu?",
    cevap: "League of Legends",
  },
  {
    sayi: 5,
    seviye: "basit",
    soru: "Tüm zamanların en çok satan video oyunu hangisidir?",
    cevap: "Minecraft",
  },
  {
    sayi: 6,
    seviye: "basit",
    soru: "Oyun konsolu pazarında 'PlayStation' markası hangi şirkete aittir?",
    cevap: "Sony",
  },
  {
    sayi: 7,
    seviye: "basit",
    soru: "Genellikle bağımsız yapımcılar tarafından küçük bütçelerle geliştirilen oyunlara ne ad verilir?",
    cevap: "Indie Oyunlar",
  },
  {
    sayi: 8,
    seviye: "basit",
    soru: "RPG türündeki oyunların Türkçe karşılığı nedir?",
    cevap: "Rol Yapma Oyunları",
  },
  {
    sayi: 9,
    seviye: "basit",
    soru: "Bir oyunun grafiklerini, fiziklerini ve temel sistemlerini oluşturan hazır yazılım yapılarına ne denir?",
    cevap: "Oyun Motoru (Game Engine)",
  },
  {
    sayi: 10,
    seviye: "basit",
    soru: "God of War serisinin ana karakteri olan ve 'Sparta'nın Hayaleti' olarak bilinen kişi kimdir?",
    cevap: "Kratos",
  },
  {
    sayi: 11,
    seviye: "basit",
    soru: "Oyunlarda 'NPC' ne anlama gelir?",
    cevap: "Oyuncu Olmayan Karakter",
  },
  {
    sayi: 12,
    seviye: "basit",
    soru: "Bir oyunda bir karakterin seviye atlaması için toplaması gereken puana ne denir?",
    cevap: "XP",
  },
  {
    sayi: 13,
    seviye: "basit",
    soru: "'Battle Royale' türündeki bir oyunun temel amacı nedir?",
    cevap: "Hayatta kalan son kişi veya takım olmak",
  },
  {
    sayi: 14,
    seviye: "basit",
    soru: "Hangi efsanevi dövüş oyununda karakterler 'Fatality' adı verilen bitirici hamleler yapar?",
    cevap: "Mortal Kombat",
  },
  {
    sayi: 15,
    seviye: "basit",
    soru: "Mavi bir kirpi olan ve çok hızlı koşmasıyla tanınan SEGA maskotu karakter hangisidir?",
    cevap: "Sonic",
  },
  {
    sayi: 16,
    seviye: "basit",
    soru: "The Last of Us serisinde dünyayı kaosa sürükleyen salgına hangi tür organizma neden olmuştur?",
    cevap: "Mantar (Cordyceps)",
  },
  {
    sayi: 17,
    seviye: "basit",
    soru: "Bilgisayarda oyun oynarken görüntünün akıcılığını sağlayan en temel donanım parçası hangisidir?",
    cevap: "Ekran Kartı (GPU)",
  },
  {
    sayi: 18,
    seviye: "basit",
    soru: "'The Witcher' oyun serisi hangi ülkenin edebiyatından uyarlanmıştır?",
    cevap: "Polonya",
  },
  {
    sayi: 19,
    seviye: "basit",
    soru: "E-spor terminolojisinde 'GG' kısaltmasının açılımı ve anlamı nedir?",
    cevap: "Good Game",
  },
  {
    sayi: 20,
    seviye: "basit",
    soru: "Hangi oyun serisi oyuncuları gizli bir suikastçı örgütünün üyesi yapar?",
    cevap: "Assassin's Creed",
  },
  {
    sayi: 21,
    seviye: "orta",
    soru: "Minecraft oyununda gece ortaya çıkan ve yanınıza gelince patlayan yeşil yaratığın adı nedir?",
    cevap: "Creeper",
  },
  {
    sayi: 22,
    seviye: "orta",
    soru: "Oyun dünyasında 'Metroidvania' türü ismini hangi iki efsanevi serinin birleşiminden almıştır?",
    cevap: "Metroid ve Castlevania",
  },
  {
    sayi: 23,
    seviye: "orta",
    soru: "Hangi oyun stüdyosu 'Dark Souls', 'Bloodborne' ve 'Elden Ring' gibi 'Souls-like' türünü yaratan oyunların yapımcısıdır?",
    cevap: "FromSoftware",
  },
  {
    sayi: 24,
    seviye: "orta",
    soru: "Oyunlarda 'Ray Tracing teknolojisinin temel amacı nedir?",
    cevap:
      "Işığın fiziksel davranışını simüle ederek gerçekçi yansıma ve gölge oluşturmak",
  },
  {
    sayi: 25,
    seviye: "orta",
    soru: "Açık dünya oyunlarında 'Procedural Generation' (Prosedürel Oluşturma) ne anlama gelir?",
    cevap:
      "İçeriğin algoritmalar tarafından rastgele ve otomatik olarak oluşturulması",
  },
  {
    sayi: 26,
    seviye: "orta",
    soru: "The Witcher 3: Wild Hunt oyununda ana karakter Geralt'ın gümüş kılıcı ne tür yaratıklara karşı kullanılır?",
    cevap: "Canavarlar ve doğaüstü varlıklar",
  },
  {
    sayi: 27,
    seviye: "orta",
    soru: "Valve tarafından geliştirilen ve 'Portal' serisinde kullanılan fizik temallı oyun motoru hangisidir?",
    cevap: "Source",
  },
  {
    sayi: 28,
    seviye: "orta",
    soru: "Half-Life serisinin baş kahramanı Gordon Freeman'ın asıl mesleği nedir?",
    cevap: "Teorik Fizikçi",
  },
  {
    sayi: 29,
    seviye: "orta",
    soru: "Modern bir bilgisayarda oyunun yükleme sürelerini en çok kısaltan bileşen hangisidir?",
    cevap: "NVMe SSD",
  },
  {
    sayi: 30,
    seviye: "orta",
    soru: "Aşağıdakilerden hangisi bir 'Roguelike' oyunu temel özelliğidir?",
    cevap: "Permadeath",
  },
  {
    sayi: 31,
    seviye: "orta",
    soru: "Nintendo'nun 'The Legend of Zelda' serisindeki ana karakterin adı nedir?",
    cevap: "Link",
  },
  {
    sayi: 32,
    seviye: "orta",
    soru: "Oyun dünyasında 'FOV' ayarı neyi değiştirir?",
    cevap: "Görüş Açısı Genişliğini",
  },
  {
    sayi: 33,
    seviye: "orta",
    soru: "Hideo Kojima tarafından yaratılan ve 'Gizlilik-Aksiyon' türünün temellerini atan efsanevi seri hangisidir?",
    cevap: "Metal Gear",
  },
  {
    sayi: 34,
    seviye: "orta",
    soru: "Bir oyunun grafiklerindeki pürüzlü ve tırtıklı kenarları düzeltme teknolojisine ne ad verilir?",
    cevap: "Anti-Aliasing (AA)",
  },
  {
    sayi: 35,
    seviye: "orta",
    soru: "'Skyrim' veya 'Fallout' gibi devasa dünyalarıyla bilinen Bethesda Game Studios'un kullandığı oyun motoru nedir?",
    cevap: "Creation Engine",
  },
  {
    sayi: 36,
    seviye: "orta",
    soru: "E-spor dünyasında 'Ganking' terimi neyi ifade eder?",
    cevap: "Sayıca üstünlük kurarak rakibe beklenmedik bir baskın yapmak",
  },
  {
    sayi: 37,
    seviye: "orta",
    soru: "Oyunlarda 'Hitscan' silahlar ne demektir?",
    cevap: "Merminin ateş edildiği an hedefe anında ulaştığı sistem",
  },
  {
    sayi: 38,
    seviye: "orta",
    soru: "Popüler 'Souls' serisinde karakterlerin dinlendiği ve seviye atladığı güvenli noktaların adı nedir?",
    cevap: "Bonfire",
  },
  {
    sayi: 39,
    seviye: "orta",
    soru: "Bir oyunun grafik kalitesini değiştirmeden, yapay zeka kullanarak FPS değerini artıran Nvidia teknolojisi nedir?",
    cevap: "DLSS",
  },
  {
    sayi: 40,
    seviye: "orta",
    soru: "Açık dünya oyunlarında kullanılan 'Level of Detail' (LOD) tekniğinin temel işlevi nedir?",
    cevap:
      "Uzaktaki nesnelerin poligon sayısını düşürerek performansı artırmak",
  },
  {
    sayi: 41,
    seviye: "zor",
    soru: "1993 yapımı efsanevi DOOM oyununun motorunda, haritaları oluşturmak için kullanılan veri yapısı tekniği hangisidir?",
    cevap: "BSP (Binary Space Partitioning)",
  },
  {
    sayi: 42,
    seviye: "zor",
    soru: "Metal Gear Solid serisinin kronolojik (hikaye akışına göre) olarak ilk oyunu hangisidir?",
    cevap: "Metal Gear Solid 3: Snake Eater",
  },
  {
    sayi: 43,
    seviye: "zor",
    soru: "Oyun motorlarında 'Draw Call' terimi tam olarak neyi ifade eder?",
    cevap:
      "İşlemcinin (CPU), ekran kartına (GPU) bir nesneyi çizmesi için gönderdiği komut",
  },
  {
    sayi: 44,
    seviye: "zor",
    soru: "Popüler hayatta kalma oyunu 'Rust'ta oyuncuların başlangıçta sahip olduğu tek 'ekipman' nedir?",
    cevap: "Kaya",
  },
  {
    sayi: 45,
    seviye: "zor",
    soru: "Hangi oyun serisinde ana karakterimiz bir 'kurye'dir ve kıyamet sonrası Amerika'da paket taşır?",
    cevap: "Death Stranding",
  },
  {
    sayi: 46,
    seviye: "zor",
    soru: "Dünyanın en çok izlenen e-spor finallerinden biri olan 'The International' hangi oyuna aittir?",
    cevap: "Dota 2",
  },
  {
    sayi: 47,
    seviye: "zor",
    soru: "Sims oyunlarında karakterlerin konuştuğu kurgusal dile ne ad verilir?",
    cevap: "Simlish",
  },
  {
    sayi: 48,
    seviye: "zor",
    soru: "Hangi korku oyunu serisinde bir güvenlik görevlisi olarak kameralardan animatronik robotları (animatronics) izleriz?",
    cevap: "Five Nights at Freddy's",
  },
  {
    sayi: 49,
    seviye: "zor",
    soru: "Oyun dünyasında 'Nerf' terimi ne anlama gelir?",
    cevap: "Bir karakterin veya silahın gücünün azaltılması",
  },
  {
    sayi: 50,
    seviye: "zor",
    soru: "Bir oyunda 'Easter Egg' neyi ifade eder?",
    cevap: "Geliştiriciler tarafından gizlenmiş sırlar veya göndermeler",
  },
  {
    sayi: 51,
    seviye: "zor",
    soru: "Oyunlarda 'Mana' puanı genellikle ne için kullanılır?",
    cevap: "Büyü yapmak veya özel yetenek kullanmak",
  },
  {
    sayi: 52,
    seviye: "zor",
    soru: "Hangi meşhur oyunda amacımız 'şekerleri' yan yana getirerek patlatmaktır?",
    cevap: "Candy Crush Saga",
  },
  {
    sayi: 53,
    seviye: "zor",
    soru: "Hangi efsanevi RPG serisinde 'War. War never changes.' (Savaş. Savaş asla değişmez.) repliği her oyunun açılışında yer alır?",
    cevap: "Fallout",
  },
  {
    sayi: 54,
    seviye: "zor",
    soru: "Oyun dünyasında 'Quick Time Event' (QTE) terimi neyi ifade eder?",
    cevap: "Ekranda beliren tuşa kısa süre içinde basma mekaniği",
  },
  {
    sayi: 55,
    seviye: "zor",
    soru: "Hangi oyun serisi oyunculara 'Ajan 47' kod adıyla kusursuz suikastlar düzenleme görevini verir?",
    cevap: "Hitman",
  },
  {
    sayi: 56,
    seviye: "zor",
    soru: "Oyun dünyasında 'PvE' kısaltmasının açılımı ve anlamı nedir?",
    cevap: "Player vs Environment",
  },
  {
    sayi: 57,
    seviye: "zor",
    soru: "'BioShock' oyununun geçtiği, deniz altında inşa edilmiş olan ütopik (ve sonradan çökmüş) şehrin adı nedir?",
    cevap: "Rapture",
  },
  {
    sayi: 58,
    seviye: "zor",
    soru: "Açık dünya oyunlarında sıklıkla karşımıza çıkan 'Emergent Gameplay' kavramı neyi ifade eder?",
    cevap:
      "Oyunun mekaniklerinin birleşerek geliştiricinin bile öngörmediği yeni durumlar yaratması",
  },
  {
    sayi: 59,
    seviye: "zor",
    soru: "Hangi kült korku oyunu serisinde 'Pyramid Head' (Piramit Kafa) karakteri, ana kahramanın suçluluk duygusunu ve cezalandırılma isteğini temsil eder?",
    cevap: "Silent Hill 2",
  },
  {
    sayi: 60,
    seviye: "zor",
    soru: "Oyun geliştirmede 'Vertical Slice' terimi ne anlama gelir?",
    cevap:
      "Oyunun tüm temel özelliklerini içeren, bitmiş kalitedeki kısa bir örnek bölümü",
  },
];

// DOM elementleri
const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const noResults = document.getElementById("noResults");

// Kartları göster
function displayCards(cardsToShow) {
  cardsContainer.innerHTML = "";

  if (cardsToShow.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  cardsToShow.forEach((card) => {
    const cardElement = createCardElement(card);
    cardsContainer.appendChild(cardElement);
  });

  // İlk kartın soru kısmına scroll yap
  setTimeout(() => {
    const firstCard = cardsContainer.querySelector(".card");
    if (firstCard) {
      const questionElement = firstCard.querySelector(".card-question");
      if (questionElement) {
        questionElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, 100);
}

// Kart elementi oluştur
function createCardElement(card) {
  const cardDiv = document.createElement("div");
  cardDiv.className = `card card-${card.seviye}`;

  // Seviye rozeti
  const seviyeLabels = {
    basit: "🟢 Basit",
    orta: "🟦 Orta",
    zor: "🔴 Zor",
  };

  cardDiv.innerHTML = `
        <div class="card-number card-number-${card.seviye}">${card.sayi}</div>
        <div class="card-seviye-badge seviye-${card.seviye}">${
    seviyeLabels[card.seviye]
  }</div>
        <div class="card-content">
            <div class="card-label">Soru</div>
            <div class="card-question card-question-${card.seviye}">${
    card.soru
  }</div>
            <div class="card-label">Cevap</div>
            <div class="card-answer card-answer-${card.seviye}" id="answer-${
    card.sayi
  }">${card.cevap}</div>
        </div>
    `;

  const answerDiv = cardDiv.querySelector(".card-answer");
  const questionDiv = cardDiv.querySelector(".card-question");

  // Cevabı otomatik aç
  answerDiv.classList.add("show");

  // Soru kısmına scroll için referans
  cardDiv.questionElement = questionDiv;

  return cardDiv;
}

// Debounce fonksiyonu
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Arama fonksiyonu
function searchCards() {
  const searchTerm = searchInput.value.trim();

  if (searchTerm === "" || searchTerm === "0") {
    // Boş arama yapıldığında kartları temizle
    cardsContainer.innerHTML = "";
    noResults.style.display = "none";
    return;
  }

  const cardNumber = parseInt(searchTerm);

  // Sadece kart numarasına göre filtrele
  const filtered = cards.filter((card) => {
    return card.sayi === cardNumber;
  });

  displayCards(filtered);
}

// Debounce ile arama fonksiyonu (300ms gecikme)
const debouncedSearch = debounce(searchCards, 300);

// Otomatik arama (input değiştiğinde)
searchInput.addEventListener("input", () => {
  updateClearButton();
  debouncedSearch();
});

// Temizle butonu
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  cardsContainer.innerHTML = "";
  noResults.style.display = "none";
  searchInput.focus();
  updateClearButton();
});

// Temizle butonunun görünürlüğünü güncelle
function updateClearButton() {
  if (searchInput.value.trim() !== "") {
    clearBtn.style.opacity = "1";
    clearBtn.style.pointerEvents = "all";
  } else {
    clearBtn.style.opacity = "0";
    clearBtn.style.pointerEvents = "none";
  }
}

// Sayfa yüklendiğinde kartları gösterme
window.addEventListener("DOMContentLoaded", () => {
  cardsContainer.innerHTML = "";
  noResults.style.display = "none";
  updateClearButton();
});
