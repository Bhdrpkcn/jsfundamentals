import React, { useState } from "react";

function LogicAnd() {
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
          && And
        </button>
        {activeButton === 1 && (
          <>
            <p>
              JavaScript'de && (ve) operatörü, mantıksal bir işlemi
              gerçekleştirmek için kullanılır. Bu operatör, soldaki ve sağdaki
              ifadelerin her ikisi de true olduğunda sonuç olarak true döner.
              Eğer herhangi bir ifade false ise, sonuç false olur.{" "}
            </p>
            <p>
              -Aşağıdaki örnekte bir web uygulamasında kullanıcı adı ve parola
              girişi kontrolü yaparken, hem kullanıcı adının hem de parolanın
              doğru girilmiş olması gerektiğini kontrol edelim. Eğer username ve
              password doğru ise, konsolda "Giriş başarılı!" , aksi halde
              "Hatalı kullanıcı adı veya şifre!" çıktısı alalım.
            </p>
            {codeBlock(`
const username = "kullanici123";
const password = "sifre456";

if (username === "kullanici123" && password === "sifre456") {
  console.log("Giriş başarılı!");
} else {
  console.log("Hatalı kullanıcı adı veya şifre!");
}

          `)}
            <p>
              Aşağıdaki örnekte "areAllPositive" fonksiyonu, verilen bir
              dizideki tüm sayıların pozitif olup olmadığını kontrol eder. Dizi
              1'deki tüm sayılar pozitif olduğu için ilk console.log ifadesi
              true dönecektir. Dizi 2'de ise en az bir sayı negatif olduğu için
              ikinci console.log ifadesi false dönecektir. Bu, && operatörünün
              dizilerde kullanımının bir örneğidir.
            </p>
            {codeBlock(`
const numbers1 = [2, 4, 6, 8, 10];
const numbers2 = [3, -5, 7, 9, 11];

function areAllPositive(numbers) {
  return numbers.every(num => num > 0);
}

console.log("Dizi 1: " + areAllPositive(numbers1)); // true
console.log("Dizi 2: " + areAllPositive(numbers2)); // false

          `)}
          </>
        )}
      </div>
    </div>
  );
}

export default LogicAnd;
