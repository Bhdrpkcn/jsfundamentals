import React, { useState } from "react";

function DataTypesString() {
  const [activeButton, setActiveButton] = useState(null);

  const codeBlock = (content) => {
    return (
      <div>
        <pre className="code-block">
          <code>{content}</code>
        </pre>
      </div>
    );
  };

  const toggleContent = (buttonNumber) => {
    if (activeButton === buttonNumber) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonNumber);
    }
  };

  return (
    <div className="main-content">
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(1)}>
          replace
        </button>
        {activeButton === 1 && (
          <>
            <p>
              String.replace() metodu JavaScript'te kullanılan bir dizede
              belirli bir deseni veya karakterleri bulup değiştirmek için
              kullanılan bir yöntemdir. Bu metot, belirli bir deseni veya
              karakterleri başka bir desen veya karakterle değiştirmenizi
              sağlar.
            </p>
            <p>
              -Aşağıdaki örnekte, basit bir metindeki belirli bir karakter
              dizisini değiştirmeyi göstereceğiz.
            </p>
            {codeBlock(`
const originalText = "Merhaba dünya! Hoş geldiniz.";
const newText = originalText.replace("Hoş geldiniz", "Welcome");

console.log("Orijinal Metin: " + originalText);
console.log("Yeni Metin: " + newText);

// Orijinal Metin: Merhaba dünya! Hoş geldiniz.
// Yeni Metin: Merhaba dünya! Welcome.

`)}
            <p>
              Aşağıdaki örnek, belirli bir deseni kullanarak daha karmaşık bir
              değiştirme işlemini gösterecektir. Bu örnekte, metindeki "OpenAI"
              ifadeleri "ChatGPT" ile değiştirilirken, sayılar da "X" ile
              değiştirilir. İlk .replace() işlemi, metindeki "OpenAI"
              ifadelerini değiştirirken ikinci .replace() işlemi, metindeki
              sayıları değiştirir. g kipi kullanarak tüm eşleşmeleri
              değiştirildiğinden emin olunur. Konsol çıktısı şu şekilde
              olacaktır:
            </p>
            {codeBlock(`
const text = "Bugün 25 Ağustos'ta OpenAI tarafından üretilen bir model kullanılıyor.";
const replacedText = text.replace(/OpenAI/g, "ChatGPT").replace(/\\d+/g, "X");

console.log("Orijinal Metin: " + text);
console.log("Değiştirilmiş Metin: " + replacedText);

// Orijinal Metin: Bugün 25 Ağustos'ta OpenAI tarafından üretilen bir model kullanılıyor.
// Değiştirilmiş Metin: Bugün X Ağustos'ta ChatGPT tarafından üretilen bir model kullanılıyor.

              `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(2)}>
          includes
        </button>
        {activeButton === 2 && (
          <>
            <p>
              String.includes() metodu bir dizenin belirli bir alt dizeyi içerip
              içermediğini kontrol etmek için kullanılır. Bu metot, bir dize
              içerisinde belirli bir alt dizenin varlığını kontrol etmenizi
              sağlar.{" "}
            </p>
            <p>
              -Aşağıdaki örnekte, basit bir metinde belirli bir kelimenin
              bulunup bulunmadığını kontrol edeceğiz.
            </p>
            {codeBlock(`
const text = "Merhaba dünya! Hoş geldiniz.";

const keyword = "Hoş";
if (text.includes(keyword)) {
  console.log(\`Metin "\${keyword}" kelimesini içeriyor.\`);
} else {
  console.log(\`Metin "\${keyword}" kelimesini içermiyor.\`);
}

// Metin "Hoş" kelimesini içeriyor.


              `)}
            <p>
              Aşağıdaki örnekte, daha karmaşık bir metinde birden fazla alt
              dizenin bulunup bulunmadığını kontrol edeceğiz. Bu örnekte,
              includes() metodu ile birden fazla kelimenin metinde bulunup
              bulunmadığı kontrol (filter yöntemi ile) edilir. Eğer belirtilen
              kelimeler metinde bulunursa, bulunan kelimeler listelenir; aksi
              halde hiçbir kelime bulunmadığı belirtilir.
            </p>
            {codeBlock(`
const text = "Bu metinde birden fazla belirtilmiş kelime var mı diye kontrol ediyoruz.";

const keywords = ["birden", "kelime", "kontrol"];
const foundKeywords = keywords.filter(keyword => text.includes(keyword));

if (foundKeywords.length > 0) {
  console.log(\`Metin içerisinde aşağıdaki kelimeler bulunuyor: \${foundKeywords.join(", ")}\`);
} else {
  console.log("Metin içerisinde herhangi bir belirtilmiş kelime bulunmuyor.");
}

// Metin içerisinde aşağıdaki kelimeler bulunuyor: birden, kelime, kontrol


              `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(3)}>
          parseInt
        </button>
        {activeButton === 3 && (
          <>
            <p>
              {" "}
              parseInt() işlevi bir diziyi tamsayıya (integer) dönüştürmek için
              kullanılır. Eğer verilen dize bir sayı ile başlıyorsa veya tamamen
              bir sayı ise, bu işlev o sayıyı alır ve tamsayı olarak döndürür.
            </p>
            <p>
              -Aşağıdaki örnekte, bir diziyi tamsayıya dönüştürmeyi
              göstereceğiz. Bu örnekte, "42" dizisi parseInt() kullanılarak
              tamsayıya dönüştürülür.
            </p>
            {codeBlock(`
const numberString = "42";
const parsedNumber = parseInt(numberString);

console.log("Dize: " + numberString);
console.log("Tamsayı: " + parsedNumber);

// Dize: 42
// Tamsayı: 42

              `)}
            <p>
              Aşağıdaki örnekte, karmaşık bir dize içindeki sayıyı bulup
              tamsayıya dönüştürmeyi göstereceğiz. Bu örnekte, match() ile
              karmaşık dizideki tüm sayıları buluruz ve map() kullanarak bu
              sayıları tamsayılara dönüştürürüz.
            </p>
            {codeBlock(`
const complexString = "Toplam 15 adet elma ve 7 adet armut satın alındı.";
const numbers = complexString.match(/\\d+/g).map(Number);

console.log("Karmaşık Dize: " + complexString);
console.log("Tamsayılar: " + numbers.join(", "));

// Karmaşık Dize: Toplam 15 adet elma ve 7 adet armut satın alındı.
// Tamsayılar: 15, 7

              `)}
            <p>
              İlk örnekte parseInt() doğrudan bir dizeyi tamsayıya
              dönüştürürken, ikinci örnekte bir dize içindeki tüm sayıları
              çıkartmak ve tamsayılara dönüştürmek için daha karmaşık bir işlem
              yapılır. Bu işlem, düzenli ifadeler (regular expressions) ve dizi
              işlemlerini içerir.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default DataTypesString;
