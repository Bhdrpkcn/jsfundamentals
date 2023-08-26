import React, { useState } from "react";

function DataTypesNumber() {
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
          number
        </button>
        {activeButton === 1 && (
          <>
            <p>
              JavaScript'te Number veri türü sayıları temsil etmek için
              kullanılır. Sayılar, tamsayılar (integer) ve kayan noktalı sayılar
              (floating-point) gibi farklı biçimlerde olabilir. İşte bir temel
              ve bir zor örnek:
            </p>
            <p>
              -Aşağıdaki örnekte, basit bir sayıyı Number veri türüne
              dönüştürmeyi ve temel sayı işlemlerini göstereceğiz. Bu örnekte,
              Number veri türü kullanılarak bir dize sayıyı gerçek bir sayıya
              dönüştürülür. Ardından temel matematiksel işlemler yapılır.
            </p>
            {codeBlock(`
const numString = "42"; // Dize tipinde bir sayı
const num = Number(numString); // Dizeyi sayıya dönüştürme

const addition = num + 8; // Toplama işlemi
const multiplication = num * 3; // Çarpma işlemi

console.log("Dize: " + numString);
console.log("Sayı: " + num);
console.log("Toplama Sonucu: " + addition);
console.log("Çarpma Sonucu: " + multiplication);

// Dize: 42
// Sayı: 42
// Toplama Sonucu: 50
// Çarpma Sonucu: 126

              `)}
            <p>
              Aşağıdaki örnekte, verilen bir sayı dizisinde çift sayıların
              karelerini alıp toplama işlemi yapılır. İlk olarak filter ile çift
              sayılar seçilir, sonra map ile her sayının karesi alınır ve en son
              reduce ile karelerin toplamı hesaplanır.
            </p>
            {codeBlock(`
const numbers = [10, 25, 37, 42.5, 15.2, 30];
const evenSquaresSum = numbers
  .filter(num => num % 2 === 0) // Çift sayıları filtreleme
  .map(num => num * num) // Karelerini alma
  .reduce((acc, curr) => acc + curr, 0); // Toplama işlemi

console.log("Sayılar: " + numbers.join(", "));
console.log("Çift Sayıların Karelerinin Toplamı: " + evenSquaresSum);


// Sayılar: 10, 25, 37, 42.5, 15.2, 30
// Çift Sayıların Karelerinin Toplamı: 1769

              `)}
          </>
        )}
      </div>
    </div>
  );
}

export default DataTypesNumber;
