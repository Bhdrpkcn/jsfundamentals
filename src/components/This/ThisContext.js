import React from "react";

function ThisContext() {
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
        <button className="fourth-btn">{"{ }"} and context in JS</button>
        <>
          <h4>Object Method Call (Nesne Metodu Çağrısı)</h4>
          <p>
            Bu örnekte person adında bir nesne tanımlanmıştır. greet fonksiyonu,
            person nesnesinin bir metodu olarak tanımlanmıştır. Bu fonksiyon
            içinde this.name ifadesi, person nesnesinin name özelliğine erişir.
          </p>
          {codeBlock(`
const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Merhaba, ben " + this.name);
  }
};

person.greet(); // Merhaba, ben John

          `)}
          <h4>Event Handler (Olay İşleyici) Çağrısı</h4>
          <p>
            Bu örnekte bir HTML düğmesine tıklanıldığında çağrılacak bir olay
            işleyici (event handler) tanımlanmıştır. İçindeki this ifadesi,
            olayın tetiklendiği HTML düğmesini temsil eder.
          </p>
          {codeBlock(`
<button id="myButton">Tıkla</button>

<script>
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log("Tıklandı:", this); // this, butona referans verir
});
</script>

          `)}
          <h4>Arrow Fonksiyon ve this Kullanımı</h4>
          <p>
            Bu örnekte, person nesnesinin greet fonksiyonu içinde bir setTimeout
            kullanılmıştır. İçerideki arrow fonksiyon, this bağlamını
            değiştirmez ve hala person nesnesini temsil eder.
          </p>
          {codeBlock(`
const person = {
  name: "John",
  greet: function() {
    setTimeout(() => {
      console.log("Merhaba, ben " + this.name);
    }, 1000);
  }
};

person.greet(); // Merhaba, ben John (1 saniye sonra)

          `)}
          <h4>Fonksiyon Çağrısı Kullanımı</h4>
          <p>
            Bu örnekte globalFunction fonksiyonu bağımsız olarak çağrıldığında,
            this tarayıcıda window nesnesini temsil eder. Bu, normal bir
            fonksiyonun global bağlamda nasıl çalıştığını gösterir.
          </p>
          {codeBlock(`
function globalFunction() {
  console.log("Global Context:", this === window);
}

globalFunction(); // Global Context: true (Tarayıcıda)

          `)}
          <p>
            Bu örneklerde this kullanımı ve {} ifadeleri, fonksiyonların
            çağrıldığı bağlama bağlı olarak nasıl değiştiğini ve hangi nesneyi
            temsil ettiklerini göstermektedir.
          </p>
        </>
      </div>
    </div>
  );
}

export default ThisContext;
