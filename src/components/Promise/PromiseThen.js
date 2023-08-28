import React from "react";

function PromiseThen() {
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
        <button className="fourth-btn">Promise.then ()</button>
        <>
          <p>
            JavaScript'te Promise.then() metodu, bir Promise nesnesinin
            başarıyla tamamlandığında yapılacak işlemi tanımlamak için
            kullanılır. Bu metot, Promise zinciri içinde kullanılarak ardışık
            asenkron işlemleri daha okunabilir ve yönetilebilir hale getirir.
          </p>
          <p>
            -Aşağıdaki örnekte fetchData adında bir Promise oluşturulmuştur.
            .then() metodu, Promise başarıyla çözüldüğünde çalışacak bir işlevi
            belirtir. Bu örnekte, fetchData Promise'inin başarıyla çözülmesi
            durumunda "Başarılı: Veri alındı" mesajı yazdırılır. Bu metot,
            asenkron işlemleri yönetmek için Promise zincirinde sıklıkla
            kullanılır ve birden çok işlemi ardışık olarak çalıştırmak için
            oldukça kullanışlıdır.
          </p>
          {codeBlock(`
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Veri alındı");
  }, 2000);
});

fetchData.then(result => {
  console.log("Başarılı:", result); // 2 saniye sonra "Başarılı: Veri alındı" yazdırır
});

          `)}
        </>
      </div>
    </div>
  );
}

export default PromiseThen;
