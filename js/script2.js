
//jquaery
$(document).ready(function() {
    // Arka plan resmi bulanık olmadan ayarla
    $('.background-image').css('filter', 'none');
});

//alıntı sayfası için
$(document).ready(function() {
    // Alıntıları bir dizi içinde tanımlayalım
    var quotes = [
      "Taş ağırdır, kum okkalı; ikisinden de ağırdır bir aptalın gazabı.",
      "Kurtlarla koşan kadınlar, içlerindeki vahşi doğayla uyum içinde yaşarlar ve bu uyum onlara güç ve özgürlük verir.",
      "Yarınlar, bugün karar verilenlerle şekillenir.",
      "Bir şeyi gerçekten istiyorsanız, buna ulaşmak için yollar bulursunuz. İstemezseniz, bahaneler.",
      "“Nefrete sevgiden fazla güvenirim. Çünkü, nefretin sahtesi olmaz!”",
      "Yoldaşlık, günlük güneşlik zamanlarda değil, karanlık zamanlarda önemlidir.",
      "Büyük başarılar, küçük adımların sonucudur.",
      "Hayat, kendine ve başkalarına iyilik yapma sanatıdır.",
      "Onun sevgisi yalnız benim olsun istiyorum.",
      "Bana bir şey olmadı, Memur Starling. Ben oldum. Beni bir dizi etkiye indirgeyemezsiniz. Davranışı iyi ve kötü diye ayırmışsınız. Herkese ahlaki bir onurluluk donu giydirmişsiniz..",
      "Ekmek pahalı, emek ucuzdu."


    ];
  
    // Yeni alıntı butonuna tıklandığında
    $("#newQuoteBtn").on("click", function() {
      // Rastgele bir alıntı seçelim
      var randomIndex = Math.floor(Math.random() * quotes.length);
      var randomQuote = quotes[randomIndex];
  
      // Seçilen alıntıyı ekrana yazdıralım
      $("#quote").text(randomQuote);
    });
  });
  