import React, { useState } from "react";

function PromiseAsyncAwait() {
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
          async/await syntax
        </button>
        {activeButton === 1 && (
          <>
            <p>
              Promise, JavaScript'te asenkron işlemleri yönetmek için kullanılan
              bir yapıdır. Bir işlem tamamlandığında (veya hata oluştuğunda)
              sonucu veya hatayı temsil eden bir nesne döndürür. Üç durumu
              vardır: "pending" (beklemede), "resolved" (çözülmüş) ve "rejected"
              (reddedilmiş).
            </p>
            {codeBlock(`
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = "Veri alındı";
    resolve(data); // İşlem başarılı ise resolve ile sonuç döndürülür
  }, 2000);
});

fetchData.then(result => {
  console.log(result); // 2 saniye sonra "Veri alındı" yazdırır
});

          `)}
            <h4>Async/Await</h4>
            <p>
              Async/await, asenkron işlemleri daha okunabilir bir şekilde
              yönetmek için kullanılan modern bir JavaScript sözdizimidir. async
              anahtar kelimesi bir fonksiyonun asenkron bir fonksiyon olduğunu
              belirtirken, await ifadesi bir promise'nin tamamlanmasını bekler.
            </p>
            {codeBlock(`
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = "Veri alındı";
      resolve(data);
    }, 2000);
  });
}

async function fetchDataAsync() {
  const result = await fetchData();
  console.log(result); // 2 saniye sonra "Veri alındı" yazdırır
}

fetchDataAsync();

          `)}
            <p>
              Bu örnek, asenkron olarak veri almayı simüle eden bir işlemi
              işler. fetchData fonksiyonu bir Promise döndürür.
              fetchAndProcessData fonksiyonu ise await kullanarak fetchData
              fonksiyonunun sonucunu bekler ve işlemin tamamlandığını veya bir
              hatayla sonuçlandığını bildirir. Bu, asenkron işlemleri daha
              lineer ve okunabilir bir şekilde yönetmenin bir örneğidir.
            </p>
            {codeBlock(`
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = "Veri alındı";
      resolve(data);
    }, 2000);
  });
}

async function fetchAndProcessData() {
  try {
    const result = await fetchData();
    console.log("İşlem tamamlandı:", result);
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
}

fetchAndProcessData();

          `)}
          </>
        )}
      </div>
    </div>
  );
}

export default PromiseAsyncAwait;
