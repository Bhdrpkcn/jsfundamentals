import React, { useState } from "react";

function FunctionTypesValue() {
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
          Returning a Value
        </button>
        {activeButton === 1 && (
          <>
            <p>
              JavaScript'de bir fonksiyonun değer döndürmesi, "Returning a
              Value" olarak adlandırılır. Bu, fonksiyonun işlem sonucunu çağıran
              yere iletebilmesini sağlar.{" "}
            </p>
            <p>
              -Aşağıdaki örnekte bir fonksiyon oluşturalım ve bu fonksiyon iki
              sayıyı toplasın. Sonra bu fonksiyonu çağıralım ve toplam sonucunu
              döndürsün, "addNumbers" adında bir fonksiyon oluşturalım ve bu
              fonksiyon, iki parametre alıp (a ve b) bu parametreleri toplayarak
              sum adında bir değişkende saklasın. Ardından return ifadesi ile bu
              toplamı döndürerek fonksiyonu çağırdığımızda, toplam sonucunu
              result adlı değişkende alıp konsola yazdıralım.
            </p>
            {codeBlock(`
function addNumbers(a, b) {
  const sum = a + b;
  return sum;
}

const result = addNumbers(5, 8);
console.log("Toplam: " + result); // Toplam: 13

          `)}
            <p>
              Aşağıdaki örnekte bir dizi içindeki çift sayıların karesini
              hesaplayan ve bu karelerin toplamını döndüren bir function
              oluşturduk. Daha sonra bu fonksiyonu kullanarak bir dizi içindeki
              çift sayıların karelerinin toplamını buluyoruz. Bu örnek, önce
              çift sayıları filtreleyerek evenNumbers dizisi oluşturur. Ardından
              bu çift sayıların karelerini squaredNumbers dizisinde saklar. Son
              olarak bu karelerin toplamını hesaplar ve döndürür.
            </p>
            {codeBlock(`
const numbers = [3, 8, 4, 10, 7, 6];

const calculateSquareSum = arr => {
  const evenNumbers = arr.filter(num => num % 2 === 0);
  const squaredNumbers = evenNumbers.map(num => num ** 2);
  const sum = squaredNumbers.reduce((acc, val) => acc + val, 0);
  return sum;
};

const result = calculateSquareSum(numbers);
console.log("Karelerin Toplamı: " + result); // Karelerin Toplamı: 216

`)}
          </>
        )}
      </div>
    </div>
  );
}

export default FunctionTypesValue;
