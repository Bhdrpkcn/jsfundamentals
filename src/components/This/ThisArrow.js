import React from "react";

function ThisArrow() {
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
        <button className="fourth-btn">
          Behavior in Arrow/Normal Functions
        </button>
        <>
          <p>
            avaScript'te this, normal fonksiyonlar ve arrow fonksiyonlar
            arasında farklı davranır. Bu farklılık, this kelimesinin içinde
            bulunduğu fonksiyonun türüne ve çağrılma şekline bağlıdır. İ
          </p>
          <h4>Normal Fonksiyonlarda "this" ;</h4>
          <li>
            Normal fonksiyonlar, çağrıldıkları bağlama göre dinamik olarak this
            değerini alırlar.
          </li>
          <li>
            Normal fonksiyonlar, hangi nesne tarafından çağrıldıysa, this o
            nesneyi temsil eder.
          </li>
          <h4>Arrow Fonksiyonlarda "this" ;</h4>
          <li>
            Arrow fonksiyonlar, tanımlandığı yerdeki bağlama göre sabit bir this
            değeri alırlar.
          </li>
          <li>
            Arrow fonksiyonları çağıran nesneyi değiştirmezler, daima
            tanımlandığı yerdeki nesneyi temsil ederler.
          </li>
          <br />
          <hr />
          <p>
            -Aşağıdaki örnekte, obj adında bir nesne tanımlanmıştır. Bu nesnenin
            içinde hem normal fonksiyon (normalFunction) hem de arrow fonksiyon
            (arrowFunction) bulunmaktadır. normalFunction içindeki this ifadesi,
            obj nesnesini temsil ederken, arrowFunction içindeki this ifadesi
            undefined döner. Çünkü arrow fonksiyonunun tanımlandığı bağlam,
            global bağlamdır ve bu nedenle name özelliği tanımsızdır.
          </p>
          {codeBlock(`
const obj = {
  name: "John",
  normalFunction: function() {
    console.log("Normal Fonksiyon:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow Fonksiyon:", this.name);
  }
};

obj.normalFunction(); // Normal Fonksiyon: John
obj.arrowFunction(); // Arrow Fonksiyon: undefined

          `)}
        </>
      </div>
    </div>
  );
}

export default ThisArrow;
