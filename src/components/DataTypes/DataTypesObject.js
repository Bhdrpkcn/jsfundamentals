import React, { useState } from "react";

function DataTypesObject() {
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
          Object.values
        </button>
        {activeButton === 1 && (
          <>
            <p>
              Object.values() JavaScript içinde bir nesnenin değerlerini bir
              dizi olarak döndüren bir yöntemdir. Bu yöntem, nesnenin
              özelliklerini (property) gezinir ve her özelliğin değerini alarak
              bunları bir dizi halinde toplar.
            </p>
            <p>
              -Aşağıda person adlı bir nesne oluşturduk. Bu nesne üç özelliğe
              sahip: name, age ve occupation. Sonrasında Object.values()
              yöntemini kullanarak bu nesnenin değerlerini bir dizi olarak
              alıyoruz. Yani, ['John', 30, 'Engineer'] şeklinde bir dizi
              oluşturuluyor. Bu diziyi valuesArray adlı değişkene atıyoruz ve
              son olarak bu diziyi console.log() ile yazdırıyoruz.
            </p>
            {codeBlock(`
const person = {
  name: 'John',
  age: 30,
  occupation: 'Engineer'
};

const valuesArray = Object.values(person);
console.log(valuesArray);
//['John', 30, 'Engineer']

              `)}
            <p>
              Aşağıda studentGrades adlı bir nesne oluşturduk. Bu nesne farklı
              derslere ait notları içeriyor. İlk olarak, Object.values() yöntemi
              ile studentGrades nesnesinin değerlerini bir dizi olarak alıyoruz.
              Bu dizi, notları temsil ediyor. Sonrasında bu notları toplamak
              için forEach döngüsü kullanıyoruz ve ortalama hesaplamak için bu
              toplamı not sayısına bölüyoruz. Son olarak, notları ve ortalama
              değeri console.log() ile yazdırıyoruz.
            </p>
            {codeBlock(`
const studentGrades = {
  math: 85,
  science: 92,
  history: 78,
  literature: 95
};

const gradesArray = Object.values(studentGrades);
let total = 0;
gradesArray.forEach(grade => {
  total += grade;
});
const average = total / gradesArray.length;

console.log("Notlar:", gradesArray);
console.log("Ortalama:", average);

              `)}
            <p>
              Bu örnekte, Book adlı bir sınıf (class) tanımladık. Bu sınıf
              kitapların başlık, yazar ve yayın yılı gibi özelliklerini temsil
              ediyor. Sonrasında book1, book2 ve book3 adlarında üç kitap örneği
              oluşturduk. Bu örnekleri books nesnesi içinde topladık.
              Object.values() kullanarak books nesnesinin değerlerini alıyoruz,
              yani kitap örneklerini bir dizi olarak alıyoruz. Sonrasında bu
              diziyi gezerek her kitabın detaylarını console.log() ile
              yazdırıyoruz.
            </p>
            {codeBlock(`
class Book {
  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }
}

const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 1951);
const book2 = new Book('1984', 'George Orwell', 1949);
const book3 = new Book('Pride and Prejudice', 'Jane Austen', 1813);

const books = {
  book1,
  book2,
  book3
};

const bookDetails = Object.values(books);
bookDetails.forEach(book => {
  console.log(\` \n Title: \${book.title}\n Author: \${book.author}\n Year: \${book.yearPublished}\n \`);
});

// Title: The Catcher in the Rye
// Author: J.D. Salinger
// Year: 1951

// Title: 1984
// Author: George Orwell
// Year: 1949

// Title: Pride and Prejudice
// Author: Jane Austen
// Year: 1813

              `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(2)}>
          Object.entries
        </button>
        {activeButton === 2 && (
          <>
            <p>
              Object.entries() JavaScript içinde bir nesnenin özelliklerini
              (property) ve değerlerini ikili dizi (array) şeklinde döndüren bir
              yöntemdir. Bu yöntem, nesnenin her bir özelliği için bir dizi
              içinde [özellik, değer] çifti oluşturur.
            </p>
            <p>
              -Aşağıdaki örnekte, Object.entries() yöntemi person nesnesinin
              özelliklerini ve değerlerini ikili diziler halinde döndürür.
            </p>
            {codeBlock(`
const person = {
  name: 'Alice',
  age: 28,
  occupation: 'Teacher'
};

const entriesArray = Object.entries(person);
console.log(entriesArray);
// [['name', 'Alice'], ['age', 28], ['occupation', 'Teacher']]

              `)}
            <p>
              Aşağıdaki örnekte, studentGrades nesnesinin özelliklerini ve
              notlarını [özellik, değer] çiftleri olarak dizi içinde alıp
              yazdırdık.
            </p>
            {codeBlock(`
  const studentGrades = {
    math: 85,
    science: 92,
    history: 78,
    literature: 95
  };
  
  const gradeEntries = Object.entries(studentGrades);
  gradeEntries.forEach(entry => {
    console.log(\`Ders: \${entry[0]}, Not: \${entry[1]}\`);
  });

              `)}
            <p>
              Aşağıdaki örnekte, books nesnesinin özelliklerini ve kitap
              örneklerini [özellik, değer] çiftleri olarak alıp her bir kitabın
              detaylarını yazdırdık.{" "}
            </p>
            {codeBlock(`
class Book {
  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }
}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('Moby-Dick', 'Herman Melville', 1851);

const books = {
  book1,
  book2,
  book3
};

const bookEntries = Object.entries(books);
bookEntries.forEach(entry => {
  const [key, book] = entry;
  console.log(\`\nKitap: \${book.title}\nYazar: \${book.author}\nYayın Yılı: \${book.yearPublished}\n\`);
});

              `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(3)}>
          Object.keys
        </button>
        {activeButton === 3 && (
          <>
            <p>
              Object.keys() JavaScript içinde bir nesnenin özelliklerini
              (property) anahtarlarını bir dizi olarak döndüren bir yöntemdir.
              Bu yöntem, nesnenin özelliklerini gezinir ve her özelliğin adını
              alarak bunları bir dizi halinde toplar.
            </p>
            <p>
              -Aşağıdaki örnekte, Object.keys() yöntemi person nesnesinin
              özelliklerinin anahtarlarını bir dizi olarak döndürür.
            </p>
            {codeBlock(`
const person = {
  name: 'Alice',
  age: 28,
  occupation: 'Teacher'
};

const keysArray = Object.keys(person);
console.log(keysArray);
// Çıktı: ['name', 'age', 'occupation']

              `)}
            <p>
              Aşağıdaki örnekte, studentGrades nesnesinin özelliklerinin
              anahtarlarını bir dizi olarak alıp yazdırdık.
            </p>
            {codeBlock(`
const studentGrades = {
  math: 85,
  science: 92,
  history: 78,
  literature: 95
};

const subjectKeys = Object.keys(studentGrades);
console.log(subjectKeys);
// Çıktı: ['math', 'science', 'history', 'literature']

              `)}
            <p>
              Aşağıdaki örnekte, books nesnesinin özelliklerinin anahtarlarını
              bir dizi olarak alıp her bir kitabın detaylarını anahtarları
              kullanarak yazdırdık.
            </p>
            {codeBlock(`
class Book {
  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }
}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('Moby-Dick', 'Herman Melville', 1851);

const books = {
  book1,
  book2,
  book3
};

const bookKeys = Object.keys(books);
bookKeys.forEach(key => {
  const book = books[key];
  console.log(\`Kitap: \${book.title}\nYazar: \${book.author}\nYayın Yılı: \${book.yearPublished}\n\`);
});

// Kitap: The Great Gatsby
// Yazar: F. Scott Fitzgerald
// Yayın Yılı: 1925

// Kitap: To Kill a Mockingbird
// Yazar: Harper Lee
// Yayın Yılı: 1960

// Kitap: Moby-Dick
// Yazar: Herman Melville
// Yayın Yılı: 1851

              `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(4)}>
          ...(Destructuring Assigment)
        </button>
        {activeButton === 4 && (
          <>
            <p>
              "..." Destructuring Assignment (Yapıya Ayırma Atama),
              JavaScript'te bir nesnenin veya dizinin öğelerini daha kolay bir
              şekilde çıkarabilir ve atayabilirsiniz. Bu, özellikle büyük veri
              yapısı içerisinden öğeleri almak veya işlemek için kullanışlı bir
              tekniktir.
            </p>
            <p>
              -Aşağıdaki örnekte, person nesnesinin firstName ve lastName
              özelliklerini ayrı değişkenlere çıkardık. Böylece firstName
              değişkeni John, lastName değişkeni ise Doe değerini taşıyor.
            </p>
            {codeBlock(`
// Nesne yapısı
const person = { firstName: 'John', lastName: 'Doe', age: 30 };

// Destructuring atama
const { firstName, lastName } = person;

console.log(firstName); // Çıktı: John
console.log(lastName);  // Çıktı: Doe


              `)}
            <p>
              Aşağıdaki örnekte, numbers dizisinin ilk iki öğesini first ve
              second değişkenlerine çıkardık. Ayrıca geri kalan öğeleri ...rest
              şeklinde bir dizi olarak aldık.{" "}
            </p>
            {codeBlock(`
// Dizi yapısı
const numbers = [1, 2, 3, 4, 5];

// Destructuring atama
const [first, second, ...rest] = numbers;

console.log(first);  // Çıktı: 1
console.log(second); // Çıktı: 2
console.log(rest);   // Çıktı: [3, 4, 5]


              `)}
            <p>
              Aşağıdaki örnekte, student nesnesinin içindeki iç içe nesne
              yapısındaki math, science ve history özelliklerini direkt olarak
              çıkardık. Bu yapı, daha karmaşık nesne yapıları içinden veri
              çıkarmak için kullanışlıdır.{" "}
            </p>
            {codeBlock(`
// Nesne yapısı
const student = {
  name: 'Alice',
  age: 22,
  scores: {
    math: 85,
    science: 92,
    history: 78
  }
};

// Destructuring atama
const { name, scores: { math, science, history } } = student;

console.log(name);    // Çıktı: Alice
console.log(math);    // Çıktı: 85
console.log(science); // Çıktı: 92
console.log(history); // Çıktı: 78


              `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(5)}>
          JSON.parse
        </button>
        {activeButton === 5 && (
          <>
            <p>
              JSON.parse() yöntemi JavaScript'te kullanılan ve JSON (JavaScript
              Object Notation) formatındaki metinleri JavaScript nesnelerine
              dönüştürmeye yarayan bir işlevdir. JSON, veri alışverişi için
              kullanılan hafif bir veri biçimidir. JSON.parse() yöntemi, bir
              JSON formatındaki metni alır, bu metni JavaScript nesnelerine
              dönüştürür ve bu nesneleri kullanmanızı sağlar.
            </p>
            <p>
              -Aşağıdaki örnekte, basit bir JSON verisi olan bir kişinin adını
              ve yaşını içeren bir metni JSON.parse() kullanarak nesneye
              dönüştüreceğiz. Bu örnekte, jsonText değişkeni içindeki JSON metni
              JSON.parse() ile işlenir. Sonuç olarak, person adında bir nesne
              elde ederiz ve bu nesnenin özelliklerine erişebiliriz.
            </p>
            {codeBlock(`
const jsonText = '{"name": "John", "age": 30}';
const person = JSON.parse(jsonText);

console.log(person.name); // Çıktı: John
console.log(person.age);  // Çıktı: 30
              `)}
            <p>
              Bu sefer, iç içe geçmiş bir JSON yapısını ele alalım. Bir
              kullanıcının adını, yaşını ve adres bilgilerini içeren bir JSON
              yapısını JSON.parse() kullanarak işleyeceğiz. Bu örnekte, jsonText
              içindeki JSON verisi işlenir ve iç içe geçmiş nesneleri ve
              özellikleri kullanabiliriz.
            </p>
            {codeBlock(`
const jsonText = '{"user": {"name": "Alice", "age": 25, "address": {"city": "New York", "zip": "10001"}}}';
const data = JSON.parse(jsonText);

console.log(data.user.name);               // Çıktı: Alice
console.log(data.user.age);                // Çıktı: 25
console.log(data.user.address.city);       // Çıktı: New York
console.log(data.user.address.zip);        // Çıktı: 10001

              `)}
            <p>
              Aşağıdaki örnek, bir JSON dizisi içinde karmaşık bir veri yapısını
              ele alacaktır. Bir kitabın bilgilerini içeren bir JSON dizisini
              ele alalım. Bu örnekte, jsonText içindeki JSON dizisi işlenir. Her
              bir kitap nesnesi, iç içe geçmiş nesneler ve diziler içerir. Bu
              veriyi işleyerek kitaplar hakkındaki bilgilere erişebiliriz.
            </p>
            {codeBlock(`
const jsonText = \n'[ \n  {"title": "1984", "author": {"name": "George Orwell"}, "tags": ["dystopian", "fiction"]}, \n  {"title": "Brave New World", "author": {"name": "Aldous Huxley"}, "tags": ["dystopian", "science fiction"]} \n]';

const books = JSON.parse(jsonText);

console.log(books[0].title);                   // Çıktı: 1984
console.log(books[0].author.name);             // Çıktı: George Orwell
console.log(books[0].tags.join(", "));         // Çıktı: dystopian, fiction

console.log(books[1].title);                   // Çıktı: Brave New World
console.log(books[1].author.name);             // Çıktı: Aldous Huxley
console.log(books[1].tags.join(", "));         // Çıktı: dystopian, science fiction

              `)}
          </>
        )}
      </div>
      <div>
        <button className="fourth-btn" onClick={() => toggleContent(6)}>
          JSON.stringfy
        </button>
        {activeButton === 6 && (
          <>
            <p>
              JSON.stringify() yöntemi JavaScript'te kullanılan ve JavaScript
              nesnelerini veya dizilerini JSON formatındaki metinlere
              dönüştürmeye yarayan bir işlevdir. JSON formatı, verilerin metin
              tabanlı bir temsilini sağlar. JSON.stringify() yöntemi, bir
              JavaScript nesnesini alır, bu nesneyi JSON formatına dönüştürür ve
              elde edilen metin tabanlı veriyi kullanmanızı sağlar.
            </p>
            <p>
              -Bu örnekte, basit bir JavaScript nesnesini JSON.stringify()
              kullanarak JSON formatındaki metne dönüştüreceğiz. Burada, person
              adlı nesne, JSON.stringify() ile işlenir ve JSON formatındaki bir
              metin haline getirilir.
            </p>
            {codeBlock(`
const person = {
  name: "Alice",
  age: 28,
  city: "London"
};

const jsonText = JSON.stringify(person);

console.log(jsonText); 
// Çıktı: {"name":"Alice","age":28,"city":"London"}

`)}
            <p>
              Aşağıdaki örnekte, iç içe geçmiş bir nesne yapısını ve diziyi
              içeren bir JavaScript nesnesini JSON formatına dönüştüreceğiz. Bu
              örnekte, iç içe geçmiş nesneler ve bir dizi içeren book nesnesi,
              JSON.stringify() kullanılarak JSON formatındaki metin haline
              getirilir.
            </p>
            {codeBlock(`
const book = {
  title: "The Hitchhiker's Guide to the Galaxy",
  author: {
    name: "Douglas Adams",
    nationality: "British"
  },
  genres: ["Science Fiction", "Comedy"]
};

const jsonText = JSON.stringify(book);

console.log(jsonText); 
// Çıktı: 
{
  "title":"The Hitchhiker's Guide to the Galaxy",
  "author":{"name":"Douglas Adams","nationality":"British"},
  "genres":["Science Fiction","Comedy"]
}

              `)}
            <p>
              Aşağıdaki örnek, daha karmaşık bir veri yapısını ele alacaktır.
              Birden fazla kitabın bilgilerini içeren bir dizi JavaScript
              nesnesini JSON formatına dönüştüreceğiz. Bu örnekte, books dizisi
              JSON.stringify() ile işlenirken, null, 2 parametreleri sayesinde
              daha okunabilir bir çıktı elde edilir.
            </p>
            {codeBlock(`
const books = [
  {
    title: "Crime and Punishment",
    author: { name: "Fyodor Dostoevsky", nationality: "Russian" },
    year: 1866
  },
  {
    title: "One Hundred Years of Solitude",
    author: { name: "Gabriel García Márquez", nationality: "Colombian" },
    year: 1967
  }
];

const jsonText = JSON.stringify(books, null, 2);

console.log(jsonText); 
// Çıktı:
[
  {
    "title": "Crime and Punishment",
    "author": {"name": "Fyodor Dostoevsky", "nationality": "Russian"},
    "year": 1866
  },
  {
    "title": "One Hundred Years of Solitude",
    "author": {"name": "Gabriel García Márquez", "nationality": "Colombian"},
    "year": 1967
  }
]

              `)}
          </>
        )}
      </div>
    </div>
  );
}

export default DataTypesObject;
