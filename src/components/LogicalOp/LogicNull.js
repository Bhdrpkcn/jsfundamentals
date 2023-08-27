import React, { useState } from "react";

function LogicNull() {
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
          ?? Nullish
        </button>
        {activeButton === 1 && (
          <>
            <p>
              JavaScript'de ?? (nullish coalescing) operatörü, bir değişkenin
              null veya undefined olup olmadığını kontrol eder ve eğer öyleyse
              belirtilen bir varsayılan değeri döndürür. Bu operatör, özellikle
              değişkenlerin null veya undefined durumlarına karşı güvenli bir
              şekilde varsayılan değerleri atamak için kullanılır.
            </p>
            <p>
              -Aşağıdaki örnekte bir kullanıcının adını ve varsayılan adını
              ekrana yazdıralım. Eğer userName değeri null veya undefined ise,
              defaultName olan "Misafir" kullanılacaktır. Aksi halde, userName
              kullanılacaktır;
            </p>
            {codeBlock(`
const userName = null;
const defaultName = "Misafir";

const displayName = userName ?? defaultName;

console.log("Kullanıcı Adı: " + displayName);

// Kullanıcı Adı: Misafir

          `)}
            <p>
              Aşağıdaki örnekte bir nesnenin içinde derinlemesine gömülü bir
              özelliği alalım, ancak bu özellik bulunmuyorsa varsayılan bir
              değer döndürelim. Burada cityName değişkeni için city özelliğini
              kontrol ediyoruz. Eğer bu özellik varsa, özelliğin değeri
              kullanılacak. Eğer city özelliği bulunmuyorsa, ?? operatörü
              Bilinmiyor değerini döndürecek. Benzer şekilde postalCode özelliği
              için de aynı kontrolü yapıyoruz.
            </p>
            {codeBlock(`
test1const data = {
  user: {
    details: {
      address: {
        city: "Istanbul",
        country: "Turkey"
      }
    }
  }
};

const cityName = data.user.details.address.city ?? "Bilinmiyor";
const postalCode = data.user.details.address.postalCode ?? "Bilinmiyor";

console.log("Şehir: " + cityName);
console.log("Posta Kodu: " + postalCode);

// Şehir: Istanbul
// Posta Kodu: Bilinmiyor

          `)}
          </>
        )}
      </div>
    </div>
  );
}

export default LogicNull;
