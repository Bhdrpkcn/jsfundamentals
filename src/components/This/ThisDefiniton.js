import React from "react";

function ThisDefinition() {
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
        <button className="fourth-btn">Definition</button>
        <>
          <p>
            JavaScript'te this, bir fonksiyonun içinde kullanıldığında, o anki
            bağlamı temsil eden bir özel kelime olarak kullanılır. this
            kelimesi, kullanıldığı bağlama (context) göre değişebilir ve farklı
            değerler alabilir. Bağlam, this kelimesinin hangi nesneyi temsil
            ettiğini belirler.
          </p>
          <p>
            Aşağıdaki örnekte, person adında bir nesne tanımlanmıştır. Bu
            nesnenin içinde firstName, lastName ve fullName adında üç özellik
            bulunmaktadır. fullName özelliği bir fonksiyon olarak
            tanımlanmıştır. Bu fonksiyon içinde this, fonksiyonun bağlamı olan
            person nesnesini temsil eder. Yani this.firstName, person nesnesinin
            firstName özelliğine erişir.
          </p>
          {codeBlock(`
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // John Doe

          `)}
          <p>
            "this" kelimesinin bağlamı, nerede kullanıldığına ve fonksiyonun
            nasıl çağrıldığına bağlı olarak değişebilir. Bu nedenle dikkatli
            kullanılması gereken bir kavramdır.
          </p>
        </>
      </div>
    </div>
  );
}

export default ThisDefinition;
