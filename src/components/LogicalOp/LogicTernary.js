import React from "react";

function LogicTernary() {
  const codeBlock = (content) => {
    return (
      <div>
        <pre className="code-block">
          <code>{content}</code>
        </pre>
      </div>
    );
  };

  return (
    <div className="main-content">
      <div>
        <button className="fourth-btn">a ? b : c Ternary Operators</button>
        <>
          <p>
            JavaScript'de ternary operator (a ? b : c) bir koşulu değerlendirir.
            Eğer koşul (a) doğru (true) ise, operatör b değerini döndürür, aksi
            halde (a yanlış ise, false) operatör c değerini döndürür.
          </p>
          <p>
            -Aşağıdaki örnekte bir kullanıcının yaşına göre yaş grubunu
            belirleyelim. Eğer age değeri 18'den küçükse, yaş grubu "Çocuk"
            olacaktır, aksi halde "Yetişkin" olacaktır.
          </p>
          {codeBlock(`
const age = 25;
const ageGroup = age < 18 ? "Çocuk" : "Yetişkin";

console.log("Yaş Grubu: " + ageGroup);

// Yaş Grubu: Yetişkin

          `)}
          <p>
            Bir dizideki pozitif sayıları 2'ye bölelim ve 10'dan büyük olanları
            negatifine çevirelim. Bu kez, her bir sayı için önce 10'dan büyük
            olup olmadığını kontrol ediyoruz (num {">"} 10). Eğer sayı 10'dan
            büyükse, sayının tersini alıyoruz (-num), aksi halde sayıyı 2'ye
            bölüyoruz (num / 2).
          </p>
          {codeBlock(`
const numbers = [5, 12, 3, 20, 8];
const transformedNumbers = numbers.map(num => num > 10 ? -num : num / 2);

console.log("Dönüştürülmüş Sayılar: " + transformedNumbers);

// Dönüştürülmüş Sayılar: 2.5, 12, 1.5, -20, 4

          `)}
        </>
      </div>
    </div>
  );
}

export default LogicTernary;
