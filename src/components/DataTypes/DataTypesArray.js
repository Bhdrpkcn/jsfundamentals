import React, { useState } from "react";

function DataTypesArray() {
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
          forEach
        </button>
        {activeButton === 1 && (
          <>
            <p>
              "forEach" döngüsü, bir dizi (array) üzerindeki her bir eleman için
              belirtilen bir işlemi gerçekleştirmek için kullanılan bir yineleme
              yapısıdır. Bu döngü, her elemanın üzerinde tek tek dönerek
              belirlediğiniz işlemi gerçekleştirir.
            </p>
            {codeBlock(`
test1array.forEach(function(element) {
  // Eleman üzerinde yapılacak işlem
});

Burada:

array: Elemanları üzerinde döneceğiniz dizi.
function(element): Her eleman üzerinde çalıştırılacak işlevi belirtir.
element: her döngü adımında dizinin bir elemanını temsil eder.

          `)}
            <p>
              Dizideki elemanları 2 ile çarparak sonucu konsola yazdırdığımız
              bir örnek ;
            </p>
            {codeBlock(`
const numbers = [1, 2, 3];

numbers.forEach(function(number) {
    console.log(number * 2);
});

konsol:
//2
//4
//6
          `)}
            <p>
              "expenses" dizisindeki her bir harcamayı toplayarak toplam
              harcamayı konsola yazdırdığımız bir örnek ;
            </p>
            {codeBlock(`
const expenses = [120, 50, 300, 75, 200];

let totalExpenses = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
}

console.log('Total expenses: $' + totalExpenses);

konsol:
//Total expenses: $745

          `)}
            <p>
              "forEach" döngüsü, dizideki her eleman üzerinde işlem yapmanın
              temel bir yoludur. Ancak, daha fazla işlevsellik ve kontrol
              gerektiğinde, for döngüsü veya modern JavaScript özellikleri ile
              birleştirilmiş diğer yineleme yöntemleri (örneğin, map, filter,
              reduce) daha iyi seçenekler olabilir.
            </p>
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(2)}>
          for ...of
        </button>
        {activeButton === 2 && (
          <>
            <p>
              "for...of" döngüsü, JavaScript'te bir dizi veya benzeri bir
              yapıdaki elemanları daha kısa ve okunabilir bir şekilde dolaşmak
              için kullanılan bir yineleme yapısıdır.
            </p>
            {codeBlock(`
const numbers = [1, 2, 3];

for (const num of numbers) {
    console.log(num);
}

//1
//2
//3
          `)}
            <p>
              Alttaki kod parçası, words dizisindeki her bir kelimeyi alır ve
              kelimeleri tirelerle birleştirir. Sonrasında, birleştirilmiş
              kelimeleri konsola yazdırır;
            </p>
            {codeBlock(`
const words = ['apple', 'banana', 'cherry'];

let concatenatedWords = '';
for (const word of words) {
    concatenatedWords += word + '-';
}

//Burada += değişkenin değerini birleştirmek için kullanılıyor, araya "-" ekliyoruz ancak 
son eklenen "-" nin silinmesi için slice operatorü kullanıyoruz.

console.log(concatenatedWords.slice(0, -1));

//apple-banana-cherry
          `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(3)}>
          for ...in
        </button>
        {activeButton === 3 && (
          <>
            <p>
              "for...in" döngüsü, nesnelerin sahip olduğu özellikleri (property)
              veya anahtarları (key) üzerinde dolaşmak için kullanılan bir
              yineleme yapısıdır. Bu döngü, özellikle nesnelerin içeriğini
              incelemek için kullanılır.
            </p>
            <p>
              -Aşağıda person nesnesinin özellikleri üzerinde dönüp her bir
              özelliğin adını (key) ve değerini (person[key]) konsola
              yazdırıyoruz;
            </p>
            {codeBlock(`
const person = {
  name: 'Alice',
  age: 30,
  occupation: 'Engineer'
};

for (const key in person) {
  console.log(key + ':', person[key]);
}

//name: Alice
//age: 30
//occupation: Engineer

  `)}
            <p>
              Aşağıda car nesnesinin özellikleri üzerinde dönüp özellik adını ve
              değerini birleştirerek carInfo adlı bir dize oluşturuyoruz ve tüm
              araç bilgilerini içeren bir metni konsola yazdırıyoruz;
            </p>
            {codeBlock(`
const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022
};

let carInfo = '';

for (const property in car) {
  carInfo += \`\${property}: \${car[property]}\n\`;
}

console.log('Araç Bilgileri:\n' + carInfo);
carInfo += (\`\${key}: \${person[key]}\`);

//Araç Bilgileri:
//brand: Toyota
//model: Camry
//year: 2022

  `)}
            <p>
              Aşağıda iç içe geçmiş nesneleri düzleştirerek tek bir nesne
              oluşturuyoruz. İç içe geçmiş nesnelerin özelliklerini döngüler
              kullanarak tek bir nesne içinde birleştirip bu düzleştirilmiş
              veriyi konsola yazdırıyoruz;
            </p>
            {codeBlock(`
const data = {
  person: {
      name: 'Alice',
      age: 30
  },
  job: {
      title: 'Software Developer',
      company: 'TechCo'
  }
};

const flattenedData = {};

for (const category in data) {
  for (const key in data[category]) {
      flattenedData[key] = data[category][key];
  }
}

console.log('Düzleştirilmiş Veri:', flattenedData);

//Düzleştirilmiş Veri: { name: 'Alice', age: 30, title: 'Software Developer', company: 'TechCo' }

  `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(4)}>
          find
        </button>
        {activeButton === 4 && (
          <>
            <p>
              JavaScript'de find, bir dizi içinde belirli bir koşulu sağlayan
              ilk elemanı bulmak için kullanılan bir dizi metodudur.
            </p>
            <p>
              -Aşağıda numbers dizisindeki elemanları dolaşarak 15'ten büyük ilk
              sayıyı bulup konsola yazdırıyoruz;
            </p>
            {codeBlock(`
const numbers = [5, 10, 15, 20, 25];

const foundNumber = numbers.find(function(number) {
    return number > 15;
});

console.log('Bulunan Sayı:', foundNumber);

//Bulunan Sayı: 20

          `)}
            <p>
              Bu kod, products dizisindeki ürünleri dolaşarak 600'den pahalı ilk
              ürünü bulur ve bu ürünü konsola yazdırır.
            </p>
            {codeBlock(`
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Tablet', price: 500 }
];

const expensiveProduct = products.find(product => product.price > 600);

console.log('Pahalı Ürün:', expensiveProduct);



//Pahalı Ürün: { id: 1, name: 'Laptop', price: 1000 }

          `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(5)}>
          map
        </button>
        {activeButton === 5 && (
          <>
            <p>
              JavaScript'te map, bir dizi içindeki her eleman üzerinde belirli
              bir işlemi uygulayarak yeni bir dizi oluşturmanızı sağlayan bir
              dizi metodudur.
            </p>
            <p>
              -Aşağıda numbers dizindeki her bir elemanın karesini yazdıralım;
            </p>
            {codeBlock(`
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number * number);

console.log('Karesi Alınmış Sayılar:', squaredNumbers);


//Karesi Alınmış Sayılar: [1, 4, 9, 16, 25]
          `)}

            <p>
              Aşağıda products dizisindeki her ürünün fiyatına %20 indirim
              uygulayarak yeni bir dizi oluşturur ve bu diziyi konsola yazdırır.
              Çıktı şu şekilde olacaktır;
            </p>
            {codeBlock(`
const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Tablet', price: 500 }
];

const discountedProducts = products.map(product => ({
  id: product.id,
  name: product.name,
  discountedPrice: product.price * 0.8 // %20 indirim
}));

console.log('İndirimli Ürünler:', discountedProducts);

//İndirimli Ürünler: [
  { id: 1, name: 'Laptop', discountedPrice: 800 },
  { id: 2, name: 'Phone', discountedPrice: 640 },
  { id: 3, name: 'Tablet', discountedPrice: 400 }
]
          `)}
            <p>
              Aşağıda students dizisindeki her öğrencinin not ortalamasını
              hesaplayarak yeni bir dizi oluşturuyoruz. Her öğrencinin notlarını
              toplayıp not sayısına bölerek ortalama notu buluyoruz. Daha sonra
              bu ortalama notu, öğrenci bilgilerine ekliyoruz ve güncellenmiş
              öğrenci bilgilerini içeren yeni bir dizi elde ediyoruz.
            </p>
            {codeBlock(`
const students = [
  { id: 1, name: 'Alice', grades: [85, 90, 75] },
  { id: 2, name: 'Bob', grades: [70, 60, 80] },
  { id: 3, name: 'Charlie', grades: [95, 85, 92] }
];

const updatedStudents = students.map(student => ({
  ...student,
  averageGrade: student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length
}));

console.log('Güncellenmiş Öğrenci Bilgileri:', updatedStudents);

//Güncellenmiş Öğrenci Bilgileri: [
  { id: 1, name: 'Alice', grades: [85, 90, 75], averageGrade: 83.33333333333333 },
  { id: 2, name: 'Bob', grades: [70, 60, 80], averageGrade: 70 },
  { id: 3, name: 'Charlie', grades: [95, 85, 92], averageGrade: 90.66666666666667 }
]
          `)}
            <p>
              Aşağıda employees dizisinde en az bir çalışanın hem deneyime
              hem de sertifikaya sahip olup olmadığını kontrol ediyoruz. Eğer
              böyle bir çalışan varsa, sonuç true olacaktır;
            </p>
            {codeBlock(`
const employees = [
  { id: 1, name: 'Alice', hasExperience: true, hasCertification: true },
  { id: 2, name: 'Bob', hasExperience: false, hasCertification: true },
  { id: 3, name: 'Charlie', hasExperience: true, hasCertification: false }
];

const isQualified = employees.some(employee => 
  employee.hasExperience && employee.hasCertification
);

console.log('Kalifiye Çalışan Var Mı?', isQualified);

//Kalifiye Çalışan Var Mı? true

          `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(6)}>
          some
        </button>
        {activeButton === 6 && (
          <>
            <p>
              JavaScript'te some, bir dizi içindeki en az bir elemanın belirli
              bir koşulu sağlayıp sağlamadığını kontrol etmek için kullanılan
              bir dizi metodudur.
            </p>
            <p>
              -Aşağıda students dizisinde en az bir öğrencinin tüm notlarının 100
              olduğunu kontrol ediyoruz. Eğer böyle bir öğrenci varsa, sonuç
              true olacaktır;
            </p>
            {codeBlock(`
const numbers = [5, 10, 15, 20, 25];

const hasEvenNumber = numbers.some(function(number) {
    return number % 2 === 0;
});

console.log('Çift Sayı Var Mı?', hasEvenNumber);

//Çift Sayı Var Mı? true
          `)}
            <p>
              Aşağıda students dizisinde en az bir öğrencinin tüm notlarının 100
              olduğunu kontrol ediyoruz. Eğer böyle bir öğrenci varsa, sonuç
              true olacaktır;
            </p>
            {codeBlock(`
const students = [
  { id: 1, name: 'Alice', grades: [85, 90, 75] },
  { id: 2, name: 'Bob', grades: [70, 60, 80] },
  { id: 3, name: 'Charlie', grades: [95, 85, 92] }
];

const hasPerfectScore = students.some(student => student.grades.every(grade => grade === 100));


console.log('Mükemmel Not Alan Var Mı?', hasPerfectScore);

//Mükemmel Not Alan Var Mı? false
          `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(7)}>
          includes
        </button>
        {activeButton === 7 && (
          <>
            <p>
              JavaScript'te includes, bir dizi içinde belirli bir değerin
              bulunup bulunmadığını kontrol etmek için kullanılan bir dizi
              metodudur.
            </p>
            <p>
              -Aşağıda fruits dizisinde 'banana' değerini arayalım ve bulunursa
              true, bulunmazsa false çıktısı verdirelim;
            </p>
            {codeBlock(`
const fruits = ['apple', 'banana', 'cherry', 'orange'];

const hasBanana = fruits.includes('banana');

console.log('Muz Var Mı?', hasBanana);

//Muz Var Mı? true
          `)}
            <p>
              Aşağıda employees dizisinde herhangi bir çalışanın 'React'
              becerisine sahip olup olmadığını kontrol edelim. Eğer böyle bir
              çalışan varsa, sonuç true olsun;
            </p>
            {codeBlock(`
const employees = [
  { id: 1, name: 'Alice', skills: ['JavaScript', 'HTML', 'CSS'] },
  { id: 2, name: 'Bob', skills: ['Python', 'SQL', 'Java'] },
  { id: 3, name: 'Charlie', skills: ['JavaScript', 'React', 'Node.js'] }
];

const knowsReact = employees.some(employee => employee.skills.includes('React'));

console.log('React Bilgisi Olan Var Mı?', knowsReact);

//React Bilgisi Olan Var Mı? true
          `)}
            <p>
              Aşağıda iç içe geçmiş bir dizide herhangi bir alt dizinin içinde 5
              değerini içerip içermediğini kontrol edelim. Eğer böyle bir alt
              dizi varsa, sonuç true olsun;
            </p>
            {codeBlock(`
const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const hasValue5 = nestedArray.some(subArray => subArray.includes(5));

console.log('Değer 5 İçeren Alt Dizi Var Mı?', hasValue5);

//Değer 5 İçeren Alt Dizi Var Mı? true
          `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(8)}>
          join
        </button>
        {activeButton === 8 && (
          <>
            <p>
              JavaScript'te join, bir dizinin elemanlarını belirli bir ayırıcı
              karakterle birleştirerek tek bir dize haline getiren bir dizi
              metodu olarak kullanılır.
            </p>
            <p>
              -Aşağıda fruits dizisindeki meyveleri virgül ve boşluk ile
              birleştirerek tek bir dize oluşturuyoruz ve bu dizeyi konsola
              yazdırıyoruz;
            </p>
            {codeBlock(`
const fruits = ['apple', 'banana', 'cherry'];

const joinedFruits = fruits.join(', ');

console.log('Birleştirilmiş Meyveler:', joinedFruits);

//Birleştirilmiş Meyveler: apple, banana, cherry

          `)}
            <p>
              Aşağıda numbers dizisindeki çift sayıları seçip, bu çift sayıları
              tire işareti ('-') ile birleştiriyoruz ve bu birleştirilmiş diziyi
              konsola yazdırıyoruz;
            </p>
            {codeBlock(`
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const joinedEvenNumbers = evenNumbers.join('-');

console.log('Çift Sayılar Birleştirildi:', joinedEvenNumbers);

//Çift Sayılar Birleştirildi: 2-4

`)}
            <p>
              Aşağıda studentData dizisindeki her öğrencinin aldığı dersleri
              birleştiriyoruz ve her öğrencinin derslerini noktalı virgül (;)
              ile ayırarak tek bir dize oluşturup konsola yazdırıyoruz;
            </p>
            {codeBlock(`
const studentData = [
  { name: 'Alice', subjects: ['Math', 'History'] },
  { name: 'Bob', subjects: ['Biology', 'Chemistry'] },
  { name: 'Charlie', subjects: ['Physics', 'Computer Science'] }
];

const subjectList = studentData.map(student => student.subjects.join(', ')).join('; ');

console.log('Öğrenci Ders Listesi:', subjectList);

//Öğrenci Ders Listesi: Math, History; Biology, Chemistry; Physics, Computer Science

`)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(9)}>
          pop
        </button>
        {activeButton === 9 && (
          <>
            <p>
              JavaScript'te pop, bir dizinin en sonundaki elemanı çıkararak onu
              döndüren bir dizi metodudur.
            </p>
            <p>
              -Aşağıdafruits dizisinden en son meyveyi çıkarıp ve çıkarılan
              meyveyi konsola yazdırıyoruz. Aynı zamanda dizinin güncel hâlini
              de konsola yazdırıyoruz.
            </p>
            {codeBlock(`
const fruits = ['apple', 'banana', 'cherry'];

const removedFruit = fruits.pop();

console.log('Çıkarılan Meyve:', removedFruit);
console.log('Kalan Meyveler:', fruits);

//Çıkarılan Meyve: cherry
//Kalan Meyveler: ['apple', 'banana']

          `)}
            <p>
              Aşağıda stack adlı diziden en üstteki değeri (son eklenen)
              çıkarıyoruz ve çıkarılan değeri konsola yazdırıyoruz. Aynı zamanda
              dizinin güncel hâlini de konsola yazdırıyoruz;
            </p>
            {codeBlock(`
const stack = [10, 20, 30, 40, 50];

const poppedValue = stack.pop();

console.log('Çıkarılan Değer:', poppedValue);
console.log('Kalan Değerler:', stack);


//Çıkarılan Değer: 50
//Kalan Değerler: [10, 20, 30, 40]

          `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(10)}>
          push
        </button>
        {activeButton === 10 && (
          <>
            <p>
              JavaScript'te push, bir dizinin sonuna belirli bir veya birden
              fazla eleman eklemek için kullanılan bir dizi metodudur.
            </p>
            <p>
              -Aşağıda fruits dizisinin sonuna 'cherry' meyvesini ekleyip
              güncellenmiş diziyi konsola yazdırıyoruz.
            </p>
            {codeBlock(`
const fruits = ['apple', 'banana'];

fruits.push('cherry');

console.log('Yeni Meyveler:', fruits);

//Yeni Meyveler: ['apple', 'banana', 'cherry']

          `)}
            <p>
              Aşağıda iç içe geçmiş dizilere yeni bir alt diziyi ekliyoruz ve
              eklenen alt diziyi konsola yazdırıyoruz. Aynı zamanda iç içe
              geçmiş dizinin güncel hâlini de konsola yazdırıyoruz;
            </p>
            {codeBlock(`
const nestedArrays = [
  [1, 2],
  [3, 4]
];

const subArrayToAdd = [5, 6];
nestedArrays.push(subArrayToAdd);

console.log('Eklenen Alt Dizi:', subArrayToAdd);
console.log('Güncel İç İçe Geçmiş Dizi:', nestedArrays);


//Eklenen Alt Dizi: [5, 6]
//Güncel İç İçe Geçmiş Dizi: [[1, 2], [3, 4], [5, 6]]

          `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(11)}>
          slice
        </button>
        {activeButton === 11 && (
          <>
            <p>
              JavaScript'te slice, bir dizinin belirli bir aralığını kesip yeni
              bir dizi oluşturan bir dizi metodu olarak kullanılır.
            </p>
            <p>
              -Aşağıda numbers dizisinin 1. indisten (2. eleman) başlayarak 4.
              indise kadar (4. eleman) olan aralığını kesip yeni bir dizi
              oluşturup bu yeni diziyi konsola yazdırıyoruz;
            </p>
            {codeBlock(`
const numbers = [1, 2, 3, 4, 5];

const slicedNumbers = numbers.slice(1, 4);

console.log('Kesilen Sayılar:', slicedNumbers);

//Kesilen Sayılar: [2, 3, 4]

          `)}
            <p>
              Aşağıda letters dizisindeki 2. indisten (3. eleman) başlayarak 4.
              indise kadar (5. eleman) olan aralığını kesip yeni bir dizi
              oluşturuyoruz ve bu yeni diziyi konsola yazdırıyoruz;
            </p>
            {codeBlock(`
const letters = ['a', 'b', 'c', 'd', 'e'];

const startIndex = 2;
const endIndex = 4;
const slicedLetters = letters.slice(startIndex, endIndex);

console.log('Kesilen Harfler:', slicedLetters);

//Kesilen Harfler: ['c', 'd']

          `)}
            <p>
              Aşağıda iç içe geçmiş dizilerin belirli bir aralığını kesip yeni
              bir dizi oluşturuyoruz. İlk olarak satır aralığı kesilip, ardından
              her bir satırın sütun aralığı kesiliyor. Sonuç olarak, belirli bir
              bölgedeki elemanları içeren yeni bir dizi oluşturuyoruz bu dizi
              konsola yazdırıyoruz;
            </p>
            {codeBlock(`
const nestedArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const startRowIndex = 1;
const endRowIndex = 3;
const startColIndex = 1;
const endColIndex = 3;

const slicedArray = nestedArrays.slice(startRowIndex, endRowIndex).map(row => row.slice(startColIndex, endColIndex));

console.log('Kesilen Dizi:', slicedArray);

//Kesilen Dizi: [ [5, 6], [8, 9] ]

          `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(12)}>
          ...(Destructuring Assigment)
        </button>
        {activeButton === 12 && (
          <>
            <p>
              JavaScript'te Destructuring Assignment, nesneleri veya dizileri
              parçalayarak içlerindeki özelliklere veya elemanlara erişimi
              sağlayan bir atama yöntemidir.
            </p>
            <p>
              -Aşağıda person nesnesinin firstName ve lastName özelliklerini
              ayıklayıp bu özellikleri kullanarak ad ve soyadı konsola
              yazdırıyoruz;
            </p>
            {codeBlock(`
// Nesne Destructuring

const person = { firstName: 'Alice', lastName: 'Smith', age: 30 };

const { firstName, lastName } = person;

console.log('Ad:', firstName);
console.log('Soyad:', lastName);

//Ad: Alice
//Soyad: Smith

          `)}
            <p>
              Aşağıda numbers dizisinin ilk ve ikinci elemanını ayıklıyoruz ve
              geri kalan elemanları rest adlı bir diziye aktarıp bu elemanları
              konsola yazdırıyoruz;
            </p>
            {codeBlock(`
// Dizi Destructuring
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log('İlk Sayı:', first);
console.log('İkinci Sayı:', second);
console.log('Geride Kalanlar:', rest);

//İlk Sayı: 1
//İkinci Sayı: 2
//Geride Kalanlar: [3, 4, 5]

          `)}
            <p>
              Aşağıda person nesnesinin name özelliğini ayıklıyoruz ve içindeki
              skills dizisinin ilk iki elemanını firstSkill ve secondSkill
              değişkenlerine atayıp, bu değerleri konsola yazdırıyoruz;
            </p>
            {codeBlock(`
// Nesne ve Dizi Destructuring Kombinasyonu
const person = { name: 'Alice', age: 30, skills: ['JavaScript', 'React'] };

const { name, skills: [firstSkill, secondSkill] } = person;

console.log('Ad:', name);
console.log('İlk Yetenek:', firstSkill);
console.log('İkinci Yetenek:', secondSkill);

//Ad: Alice
//İlk Yetenek: JavaScript
//İkinci Yetenek: React

          `)}
          </>
        )}
      </div>
    </div>
  );
}

export default DataTypesArray;
