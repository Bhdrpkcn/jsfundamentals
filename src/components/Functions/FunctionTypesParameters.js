import React, { useState } from "react";

function FunctionTypesParameters() {
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
          Parameters
        </button>
        {activeButton === 1 && (
          <>
            <p>
              JavaScript'te fonksiyon parametreleri, bir fonksiyona geçirilen
              değerlerdir. Bu parametreler, fonksiyonun çalışması sırasında
              kullanılabilir ve genellikle fonksiyonun belirli bir amacını
              yerine getirmesine yardımcı olurlar.
            </p>
            <p>
              -Aşağıdaki örnekte bir hesap makinesi fonksiyonu oluşturalım. Bu
              fonksiyon, iki sayı ve bir işlem türü alacak. İşlem türüne göre
              iki sayıyı toplayacak, çıkaracak, çarpacak veya bölecek. İşlem
              türü geçilmezse, varsayılan olarak toplama işlemi yapacak. Bu
              örnekte, calculator fonksiyonu üç parametre alır: num1, num2 ve
              operation. operation parametresi varsayılan olarak "add"
              atanmıştır. Fonksiyon içerisinde, operation parametresine göre
              farklı işlemler yapılır ve sonuç döndürülür. Bu sayede aynı
              fonksiyon, farklı işlemler için kullanılabilir.
            </p>
            {codeBlock(`
function calculator(num1, num2, operation = "add") {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    return num1 / num2;
  } else {
    return "Geçersiz işlem türü!";
  }
}

const result1 = calculator(10, 5); // Varsayılan olarak toplama
const result2 = calculator(20, 4, "multiply"); // Çarpma işlemi
const result3 = calculator(15, 3, "subtract"); // Çıkarma işlemi

console.log("Sonuç 1:", result1); // Sonuç 1: 15
console.log("Sonuç 2:", result2); // Sonuç 2: 80
console.log("Sonuç 3:", result3); // Sonuç 3: 12

          `)}
            <p>
              Aşağıdaki örnekte bir dizi içindeki sayıları sıralamak için
              parametre olarak verilebilecek bir sıralama fonksiyonu
              oluşturalım. Bu sıralama fonksiyonu, dizi ve sıralama kriteri
              olarak bir fonksiyon alacak. Varsayılan olarak, sayıları küçükten
              büyüğe sıralayacak. Bu örnekte, customSort fonksiyonu iki
              parametre alır: arr (sıralanacak dizi) ve compareFunction
              (sıralama kriteri). Fonksiyon, compareFunctiona göre diziyi
              kopyalayıp sıralar. Varsayılan sıralama kriteri küçükten büyüğe
              olduğu için, ascendingSorted dizisi varsayılan olarak
              sıralanırken, descendingSorted dizisi büyükten küçüğe sıralanır.
              Böylece aynı sıralama fonksiyonu, farklı sıralama kriterleri ile
              kullanılabilir.
            </p>
            {codeBlock(`
function customSort(arr, compareFunction = (a, b) => a - b) {
  return arr.slice().sort(compareFunction);
}

const numbers = [10, 3, 8, 1, 6];

const ascendingSorted = customSort(numbers);
const descendingSorted = customSort(numbers, (a, b) => b - a);

console.log("Küçükten Büyüğe:", ascendingSorted); // Küçükten Büyüğe: [1, 3, 6, 8, 10]
console.log("Büyükten Küçüğe:", descendingSorted); // Büyükten Küçüğe: [10, 8, 6, 3, 1]

          `)}
          </>
        )}
      </div>
    </div>
  );
}

export default FunctionTypesParameters;
