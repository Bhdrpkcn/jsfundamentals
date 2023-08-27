import React, { useState } from "react";

function LogicOr() {
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
          || Or
        </button>
        {activeButton === 1 && (
          <>
            <p>
              JavaScript'de || (veya) operatörü, en az bir koşulu sağladığında
              true sonucunu döndürür. Soldaki ifade true ise, sağdaki ifadeyi
              kontrol etmez ve sol ifadenin değerini döndürür. Eğer sol ifade
              false veya falsy bir değer ise, sağdaki ifadenin değerini
              döndürür.
            </p>
            <p>
              -Aşağıdaki örnekte bir kullanıcının girdiği yaş bilgisini kontrol
              edelim. Eğer yaş girilmişse girilen yaş bilgisini kullanalım,
              yoksa varsayılan bir yaş değeri atayalım. Eğer userInputAge değeri
              null veya falsy bir değer ise, defaultAge olan 18 değeri
              kullanılacaktır. Aksi halde, kullanıcının girdiği yaş değeri
              kullanılacaktır.
            </p>
            {codeBlock(`
const userInputAge = null;
const defaultAge = 18;

const age = userInputAge || defaultAge;

console.log("Yaş: " + age);

// Yaş: 18

`)}
            <p>
              Bir fonksiyonun dönüş değeri olarak ilk bulduğu truthy değeri
              döndürelim. Eğer hiç truthy değer yoksa, son değeri döndürelim.
              findFirstTruthy fonksiyonu, verilen argümanları reduce fonksiyonu
              ile tarar ve ilk bulduğu truthy değeri döndürür. Eğer hiç truthy
              değer yoksa, son değeri döndürür. İlk örnekte "Gerçek Değer"
              truthy olduğu için result1 bu değeri alır. İkinci örnekte ise hiç
              truthy değer bulunmadığı için result2 "Son Değer"i alır.
            </p>
            {codeBlock(`
function findFirstTruthy(...values) {
  return values.reduce((result, value) => result || value, "Hiçbiri");
}

const result1 = findFirstTruthy("", null, 0, false, "Gerçek Değer");
const result2 = findFirstTruthy(null, undefined, NaN, "Son Değer");

console.log("Sonuç 1: " + result1); // Gerçek Değer
console.log("Sonuç 2: " + result2); // Son Değer

`)}
          </>
        )}
      </div>
    </div>
  );
}

export default LogicOr;
