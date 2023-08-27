import React, { useState } from "react";

function FunctionTypesVarLetConst() {
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
          Var - Let - Const
        </button>
        {activeButton === 1 && (
          <>
            <p>
              JavaScript'te var, let ve const ifadeleri değişkenleri tanımlamak
              için kullanılan anahtar kelimelerdir.
            </p>
            <h3>Var:</h3>
            <li>
              var anahtar kelimesi, ES5 ve önceki JavaScript sürümlerinde
              kullanılan değişken tanımlama yöntemidir.
            </li>
            <li>
              İşlev (function) kapsamı vardır, yani değişken fonksiyon
              içerisinde tanımlanıyorsa, fonksiyon içinde geçerlidir. Fonksiyon
              dışında tanımlanıyorsa, global kapsama sahiptir.
            </li>
            <li>
              Değişkeni aynı isimde tekrar tanımlamak mümkündür. Tekrar
              tanımlandığında önceki değer üzerine yazılır.
            </li>
            <li>
              Değişkenin yukarıda (hoisting) tanımlandığı yere kadar yükseltilir
              (hoisted), ancak değeri atanmadan erişildiğinde undefined döner.
            </li>
            <h3>Let:</h3>
            <li>
              let anahtar kelimesi, ES6 ile gelen modern değişken tanımlama
              yöntemidir.
            </li>
            <li>
              Blok kapsamı vardır, yani değişken sadece tanımlandığı blok
              içerisinde geçerlidir (if, loop gibi).
            </li>
            <li>Değişkeni aynı isimde tekrar tanımlamak hata verir.</li>
            <li>
              Değişken tanımlandığı yerde yukarı çekilmez (hoisting), bu nedenle
              tanımlandığı satırdan önce erişmeye çalışırsanız hata alırsınız.
            </li>
            <h3>Const:</h3>
            <li>
              const anahtar kelimesi de ES6 ile gelen bir değişken tanımlama
              yöntemidir.
            </li>
            <li>let gibi blok kapsamı vardır.</li>
            <li>
              Bir kez değer atandığında, sonradan değiştirilemez (immutable).
            </li>
            <li>İsim çakışması durumunda hata verir ve tekrar tanımlanamaz.</li>
            <li>
              Nesneler ve diziler gibi referans tiplerde, nesne veya dizinin
              kendisi değiştirilemez, ancak içeriği değiştirilebilir.
            </li>
            <br />
            <hr />
            <p>
              Kısacası, modern JavaScript projelerinde var kullanımı yerine let
              ve const önerilir. Eğer değeri değişmeyecekse veya kesinlikle
              değişmeyeceği biliniyorsa const tercih edilmelidir. Eğer değer
              değişebilirse ve sadece belirli bir kapsamda kullanılacaksa let
              kullanmak daha uygun olacaktır.
            </p>
            <hr />
            <h4>Global Scope(Kapsam) Örneği </h4>
            <p>
              Aşağıdaki örnekte, globalVar fonksiyon dışında tanımlandığı için
              global kapsamdadır ve fonksiyon içinde ve dışında erişilebilir.
              Ancak globalLet ve globalConstun dışarıda erişilebilirliği yoktur
              çünkü blok kapsamında tanımlanmıştır ve bu nedenle sadece
              fonksiyon içinde erişilebilirler.
            </p>
            {codeBlock(`
var globalVar = 10;
let globalLet = 20;
const globalConst = 30;

function testFunction() {
  console.log(globalVar); // 10
  console.log(globalLet); // 20
  console.log(globalConst); // 30
}

testFunction();

console.log(globalVar); // 10
console.log(globalLet); // ReferenceError: globalLet is not defined
console.log(globalConst); // ReferenceError: globalConst is not defined
          `)}
            <h4>Local Scope(Kapsam) Örneği </h4>
            <p>
              Aşağıdaki örnekte, localVar, localLet ve localConst fonksiyonun
              içinde tanımlandığı için sadece fonksiyon içinde erişilebilirler
              ve fonksiyon dışında erişilemezler.
            </p>
            {codeBlock(`
function testFunction() {
  var localVar = 40;
  let localLet = 50;
  const localConst = 60;
  console.log(localVar); // 40
  console.log(localLet); // 50
  console.log(localConst); // 60
}

testFunction();

console.log(localVar); // ReferenceError: localVar is not defined
console.log(localLet); // ReferenceError: localLet is not defined
console.log(localConst); // ReferenceError: localConst is not defined

          `)}
          </>
        )}
      </div>
    </div>
  );
}

export default FunctionTypesVarLetConst;
