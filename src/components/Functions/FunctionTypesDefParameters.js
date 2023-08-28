import React from "react";

function FunctionTypesDefParameters() {
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
        <button className="fourth-btn">Default Parameters</button>
        <>
          <p>
            JavaScript'te fonksiyonların varsayılan parametreleri, bir
            fonksiyonun çağrılmasında bir veya daha fazla parametrenin
            geçilmediği durumlarda kullanılan değerlerdir. Bu, fonksiyonların
            daha esnek ve güvenli bir şekilde kullanılmasını sağlar.
          </p>
          <p>
            -Aşağıdaki örnekte bir kullanıcının adını ve yaşını alan bir
            selamlama fonksiyonu oluşturalım. Eğer yaş belirtilmezse, varsayılan
            olarak yaşın 18 olarak kabul edileceğini belirten bir fonksiyon
            oluşturalım. Bu örnekte, greetUser fonksiyonu name ve age adında iki
            parametre alır. Ancak age parametresinin varsayılan değeri 18 olarak
            atanmıştır. Eğer age belirtilmezse, fonksiyon otomatik olarak 18
            değerini kullanır. greetUser fonksiyonunu çağırırken sadece isim
            vermemiz yeterlidir, yaş belirtmezsek otomatik olarak 18 kabul
            edilir. Böylece, fonksiyonun çağrılmasında bazı parametreleri isteğe
            bağlı hale getirebilir ve varsayılan değerlerle çalışmasını
            sağlayabilirsiniz.
          </p>
          {codeBlock(`
function greetUser(name, age = 18) {
  console.log(\`Merhaba, \${name}! Yaşınız: \${age}\`);
}

greetUser("Ahmet", 25); // Merhaba, Ahmet! Yaşınız: 25
greetUser("Ayşe"); // Merhaba, Ayşe! Yaşınız: 18 (Varsayılan yaş)

          `)}
          <p>
            Aşağıdaki örnekte bir dizi içerisinde bulunan sayıları işleyen bir
            fonksiyon düşünelim. Bu fonksiyon, dizideki sayıları toplamak veya
            çarpabilmelidir. Eğer işlem türü verilmezse, varsayılan olarak
            toplama işlemi yapması gerekmektedir. Bu örnekte, processNumbers
            fonksiyonu iki parametre alır: numbers (işlem yapılacak sayıların
            dizisi) ve operation (yapılacak işlem türü). operation parametresi
            varsayılan olarak "add" atanmıştır. Fonksiyon içerisinde, operation
            parametresine göre farklı işlemler yapılır ve sonuç döndürülür. Eğer
            işlem türü belirtilmezse veya geçersiz bir işlem türü verilirse,
            hata mesajı döndürülür.
          </p>
          {codeBlock(`
function processNumbers(numbers, operation = "add") {
  if (operation === "add") {
    return numbers.reduce((acc, num) => acc + num, 0);
  } else if (operation === "multiply") {
    return numbers.reduce((acc, num) => acc * num, 1);
  } else {
    return "Geçersiz işlem türü!";
  }
}

const numbers = [2, 4, 6, 8, 10];

const sumResult = processNumbers(numbers);
const multiplyResult = processNumbers(numbers, "multiply");

console.log("Toplam Sonuc:", sumResult); // Toplam Sonuc: 30
console.log("Çarpım Sonuc:", multiplyResult); // Çarpım Sonuc: 3840

          `)}
        </>
      </div>
    </div>
  );
}

export default FunctionTypesDefParameters;
