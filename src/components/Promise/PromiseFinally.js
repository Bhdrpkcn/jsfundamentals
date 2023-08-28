import React from "react";

function PromiseFinally() {
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
        <button className="fourth-btn">Promise.finally ()</button>
        <>
          <p>
            "Promise.prototype.finally()"" metodu, bir promise işlemi
            tamamlandığında veya reddedildiğinde her iki durumda da çalışacak
            bir işlevi tanımlamanıza olanak sağlar. Bu işlev, işlem sonucundan
            bağımsız olarak her zaman çalışır.
          </p>
          <p>
            -Aşağıdaki örnekte, fetchData adında bir promise oluşturulmuştur.
            .then() ile başarılı sonuçlar, .catch() ile hatalar işlenirken,
            .finally() ise işlem sonunda her durumda çalışacak bir işlevi
            belirtir. Bu örnekte, .finally() bloğu, işlem sonunda "İşlem
            tamamlandı" mesajını yazdıracaktır, başarılı veya hatalı sonuç ne
            olursa olsun.
          </p>
          {codeBlock(`
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random();
    if (random < 0.5) {
      resolve("Veri alındı");
    } else {
      reject("Hata oluştu");
    }
  }, 2000);
});

fetchData
  .then(result => {
    console.log("Başarılı:", result);
  })
  .catch(error => {
    console.error("Hata:", error);
  })
  .finally(() => {
    console.log("İşlem tamamlandı"); // İşlem sonunda her zaman çalışır
  });

          `)}
        </>
      </div>
    </div>
  );
}

export default PromiseFinally;
