import React from "react";

function FunctionTypesInOutVariables() {
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
        <button className="fourth-btn">Inner Outer Variables</button>
        <>
          <p>
            JavaScript'te "inner" (iç) ve "outer" (dış) terimleri genellikle
            fonksiyon kapsamı (scope) ile ilişkilendirilir. İç kapsam, bir
            fonksiyonun içinde tanımlanan değişkenlerin erişebilir olduğu
            alandır. Dış kapsam ise, fonksiyonun dışında tanımlanan
            değişkenlerin erişebilir olduğu alandır.{" "}
          </p>
          <p>
            -Aşağıdaki örnekte dışarıdan bir değişken alıp işleyen bir fonksiyon
            oluşturalım. Bu fonksiyon, hem kendi içinde tanımlanan bir değişkeni
            hem de dışarıdan alınan değişkeni kullanacak. Bu örnekte,
            "outerValue" adında bir dış değişken tanımlanmıştır. "processValues"
            fonksiyonu "innerValue" adında bir iç değişkeni parametre olarak
            alır. Fonksiyon içerisinde, hem dış değişken olan "outerValue" hem
            de iç parametre olan "innerValue" kullanılarak hesaplama yapılır.
            Sonuç olarak 50 döner. Böylece iç ve dış değişkenlerin birlikte
            kullanılabilmesini görmüş olduk.
          </p>
          {codeBlock(`
const outerValue = 10;

function processValues(innerValue) {
  const result = innerValue * outerValue;
  return result;
}

const innerValue = 5;
const finalResult = processValues(innerValue);

console.log("Sonuç:", finalResult); // Sonuç: 50

          `)}
          <p>
            Şimdi bu değişkenleri fonksiyon parametreleri olarak nasıl
            kullanabileceğimize bakalım:
            <p />
            -Önceki örnekteki processValues fonksiyonunu değiştirerek, iç ve dış
            değişkenleri ayrı ayrı parametre olarak almasını sağlayalım.
            <br />
            Bu kez processValues fonksiyonu iki parametre alır: innerValue ve
            outerValue. Bu parametreler, fonksiyonun dışındaki değişkenlerden
            bağımsızdır. Çağrı yaparken innerValue ve outerValue değerleri
            geçirilir ve fonksiyon bu değerlerle çalışır. Sonuç yine 50
            olacaktır.
          </p>
          {codeBlock(`
function processValues(innerValue, outerValue) {
  const result = innerValue * outerValue;
  return result;
}

const innerValue = 5;
const outerValue = 10;
const finalResult = processValues(innerValue, outerValue);

console.log("Sonuç:", finalResult); // Sonuç: 50

          `)}
        </>
      </div>
    </div>
  );
}

export default FunctionTypesInOutVariables;
