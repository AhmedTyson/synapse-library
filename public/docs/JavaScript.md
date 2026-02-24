### 1. Introduction and Environment Setup (مقدمة وإعداد بيئة العمل)

**1. Conceptual Explanation (Arabic):**
تعتبر لغة الجافا سكريبت لغة برمجة أساسية تُستخدم لإنشاء صفحات ويب ديناميكية وتفاعلية، وهي بتشتغل مباشرة على أي متصفح ويب زي جوجل كروم أو سفاري. من خلال استخدام الجافا سكريبت، بنقدر نستجيب لأفعال المستخدم ونتفاعل مع مدخلاته لما بيتعامل مع الموقع بتاعنا. عشان نبدأ نكتب كود، بنحتاج ننشئ مجلد جديد للمشروع جوه محرر أكواد زي "VS Code"، والمجلد ده لازم يحتوي على تلات ملفات أساسية: ملف الـ HTML اللي بيمثل الهيكل الأساسي للصفحة (وغالباً بيتسمى index.html)، وملف الـ CSS اللي بيتحكم في المظهر والألوان، وملف الـ JavaScript اللي بيكون مسؤول عن التفاعل والحركة. بيتم ربط ملف الـ CSS بملف الـ HTML عن طريق وسم الـ `<link>` في الـ Head، بينما بيتم ربط ملف الجافا سكريبت عن طريق وسم الـ `<script>` وبيتحط في نهاية وسم الـ `<body>` عشان نضمن إن كل عناصر الصفحة تحمل الأول قبل ما يتم تنفيذ أي كود جافا سكريبت، وده بيحمينا من أي أخطاء. كمان من الضروري تثبيت إضافة اسمها "Live Server" عشان الصفحة تعمل تحديث تلقائي بمجرد ما نحفظ أي تغييرات في الملفات.

**2. Technical Definitions (English):**
* **JavaScript:** A programming language used to create dynamic and interactive web pages that run on a web browser.
* **VS Code:** A recommended text editor used for writing and managing code files.
* **Live Server:** An extension in VS Code that automatically refreshes the web browser whenever file changes are saved.

**3. Code Implementation:**

```html
<!-- Initial HTML Setup -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website</title>
    <!-- Linking CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- HTML elements go here -->

    <!-- Linking JavaScript at the bottom of the body -->
    <script src="index.js"></script>
</body>
</html>
```

---

### 2. Basic Output and Comments (المخرجات الأساسية والتعليقات)

**1. Conceptual Explanation (Arabic):**
لإخراج وعرض نصوص برمجية، الجافا سكريبت بتوفر لنا أكتر من طريقة. الطريقة الأولى هي استخدام دالة للطباعة في شاشة المطورين (Console)، وبنقدر نكتب النص باستخدام علامات التنصيص المزدوجة أو الفردية أو علامة الـ (Backticks) واللي بتُعرف باسم الـ (Template Literal) وبتكون مفيدة جداً بعدين في دمج المتغيرات. الطريقة التانية لإخراج البيانات هي عمل نافذة تنبيه منبثقة بتظهر للمستخدم على الشاشة. بالنسبة للتعليقات، فهي عبارة عن نصوص مش بتظهر في المخرجات النهائية ولا بيتم تنفيذها، لكن بنستخدمها كملاحظات لينا أو للمطورين التانيين. بنقدر نعمل تعليق لسطر واحد باستخدام شرطتين مايلين، أو تعليق لعدة سطور باستخدام شرطة مايلة ونجمة. 

**2. Technical Definitions (English):**
* **`console.log()`:** A method used to output text or data to the developer tools console.
* **Template Literal:** A string enclosed in backticks (`) that allows for flexible text output and variable insertion.
* **`window.alert()`:** A method used to display a popup alert box with a specific message on the web page.
* **Comments:** Lines in the code ignored by the browser, used purely as notes for developers (single-line or multi-line).

**3. Code Implementation:**

```javascript
// Basic console output using backticks
console.log(`Hello`);
console.log(`I like pizza`);

// Basic alert popup
window.alert(`This is an alert`);
window.alert(`I like pizza`);

// This is a single-line comment

/*
This is a multi-line comment.
Anything that comes after will be a comment.
They are hidden and used for notes.
*/
```

---

### 3. Basic DOM Manipulation (التعامل الأساسي مع عناصر الصفحة)

**1. Conceptual Explanation (Arabic):**
علشان نضيف نصوص أو نعدل على محتوى موجود في صفحة الـ HTML باستخدام الجافا سكريبت، لازم الأول نحدد العنصر ده. بنعمل ده عن طريق إعطاء العنصر مُعرف فريد (ID) في ملف الـ HTML. بعدين في ملف الجافا سكريبت، بندخل على المستند الأساسي للصفحة وبنستخدم دالة بتجيب العنصر ده بناءً على المُعرف بتاعه. بعد ما بنمسك العنصر، بنقدر نغير خاصية المحتوى النصي الخاص بيه ونساويه بأي نص إحنا حابينه، سواء كان كلمة أو جملة.

**2. Technical Definitions (English):**
* **`document.getElementById()`:** A method that accesses the DOM to select and return an HTML element based on its unique ID.
* **`textContent`:** A property of an HTML element that allows you to get or set the text inside it.

**3. Code Implementation:**

```html
<!-- HTML Elements with IDs -->
<h1 id="myH1"></h1>
<p id="myP"></p>
```

```javascript
// JavaScript DOM Manipulation
document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like pizza";
```

---

### 4. Variables and Data Types (المتغيرات وأنواع البيانات)

**1. Conceptual Explanation (Arabic):**
تعتبر المتغيرات زي الصندوق أو الحاوية اللي بنخزن جواها قيمة معينة، والمتغير بيتصرف كأنه القيمة دي بالظبط. إنشاء المتغير بيتم على خطوتين: الإعلان عنه (Declaration) وتعيين قيمته (Assignment). بنستخدم كلمة `let` عشان نعلن عن المتغير، ولازم اسم المتغير يكون فريد، لو حاولنا نعلن عن نفس الاسم مرتين هيحصل خطأ. بنقدر نعمل الخطوتين في سطر واحد لو إحنا عارفين القيمة مسبقاً. بالنسبة لأنواع البيانات الأساسية، عندنا الأرقام (Numbers) واللي بتشمل الأرقام الصحيحة والعشرية وبنقدر نستخدمها في العمليات الحسابية. وعندنا النصوص (Strings) وهي سلسلة من الحروف ممكن تحتوي على أرقام بس بتتعامل كنص ومش بتدخل في حسابات. النوع التالت هو القيم المنطقية (Booleans) واللي بتكون إما صح أو خطأ (true/false) وبتستخدم كإشارات (Flags) في البرمجة عشان نتأكد من حالة معينة زي هل المستخدم متصل بالإنترنت أم لا. عشان نطبع نوع البيانات الخاص بأي متغير بنستخدم كلمة `typeof`، وعشان ندمج المتغيرات دي جوه نصوص بنستخدم الـ Template Literals عن طريق وضع المتغير جوه أقواس بعلامة الدولار. أخيرًا، بنقدر نستخدم المتغيرات دي لتحديث محتوى عناصر الـ HTML بسهولة.

**2. Technical Definitions (English):**
* **Variable:** A container that stores a value; the variable behaves as if it were the value it contains.
* **Declaration:** The first step of creating a variable, usually done using the `let` keyword.
* **Assignment:** The process of giving a declared variable a specific value.
* **Number:** A data type representing numeric values (e.g., 25, 10.99), used in math expressions.
* **String:** A data type representing a series of characters enclosed in quotes.
* **Boolean:** A data type representing a logical entity that can only be `true` or `false`.
* **`typeof`:** A keyword used to return the data type of a variable.

**3. Code Implementation:**

```javascript
// Declaration and Assignment
let x; // Declaration
x = 100; // Assignment
let y = 123; // Declaration and Assignment together

// Numbers
let age = 25;
let price = 10.99;
let gpa = 2.1;
console.log(typeof age); // outputs: number

// Strings
let firstName = "Bro";
let favoriteFood = "pizza";
let email = "bro123@gmail.com";
console.log(typeof firstName); // outputs: string

// Booleans
let online = true;
let forSale = true;
let isStudent = false;
console.log(typeof online); // outputs: boolean

// Template Literals with Variables
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is: ${gpa}`);
console.log(`Bro is online: ${online}`);

// Updating DOM using variables
// Assuming HTML has elements with IDs: p1, p2, p3
let fullName = "Bro Code";
document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
```

---

### 5. Arithmetic Operators (المعاملات الحسابية)

**1. Conceptual Explanation (Arabic):**
في أي معادلة رياضية في البرمجة بنتعامل مع قيم ومتغيرات بنسميها (Operands) وعلامات حسابية بنسميها (Operators). العمليات الأساسية بتشمل الجمع، الطرح، الضرب، والقسمة. وعندنا عملية الأسس اللي بنمثلها بنجمتين مزدوجتين. كمان عندنا معامل باقي القسمة (Modulus) واللي بيمثل بعلامة النسبة المئوية، وده بيدينا الباقي من أي عملية قسمة، وبيكون مفيد جداً لمعرفة إذا كان الرقم زوجي (الباقي صفر) أو فردي (الباقي واحد). بدل ما نكتب اسم المتغير مرتين عشان نحدث قيمته، بنستخدم طرق مختصرة اسمها (Augmented Assignment Operators) زي الزيادة المباشرة. ولو حابين نزود أو ننقص المتغير بواحد بس، بنستخدم معاملات الزيادة (Increment) والنقصان (Decrement). وأخيراً، في المعادلات المعقدة لازم نمشي على ترتيب الأولوية (Operator Precedence): الأقواس الأول، ثم الأسس، ثم الضرب والقسمة وباقي القسمة، وأخيراً الجمع والطرح من اليسار لليمين.

**2. Technical Definitions (English):**
* **Operands:** Values or variables involved in an arithmetic expression (e.g., 11, x, 5).
* **Operators:** Mathematical symbols like addition (+), subtraction (-), multiplication (*), and division (/).
* **Exponents (`**`):** An operator used to raise a base to a given power.
* **Modulus (`%`):** An operator that returns the remainder of a division operation.
* **Augmented Assignment Operators:** Shortcuts for reassigning variables (e.g., `+=`, `-=`, `*=`, `/=`).
* **Increment (`++`) / Decrement (`--`):** Operators used to add or subtract exactly one from a variable.
* **Operator Precedence:** The strict order in which operations are solved in a complex equation (Parentheses, Exponents, Multiplication/Division/Modulus, Addition/Subtraction).

**3. Code Implementation:**

```javascript
let students = 30;

// Basic Arithmetic
students = students + 1; // Addition: 31
students = students - 1; // Subtraction: 29
students = students * 2; // Multiplication: 60
students = students / 2; // Division: 15
students = students ** 2; // Exponents: 900
let extraStudents = students % 3; // Modulus (Remainder)

// Augmented Assignment Operators (Shortcuts)
students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

// Increment and Decrement
students++; // Increases by 1
students--; // Decreases by 1

// Operator Precedence Example
// Order: Parentheses -> Exponents -> Mult/Div/Mod -> Add/Sub
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result); // Solves 4**2 (16), then 2*3 (6), then 1+6+16 = 23
```

---

### 6. Accepting User Input (استقبال مدخلات المستخدم)

**1. Conceptual Explanation (Arabic):**
عشان ناخد بيانات من المستخدم عندنا طريقتين. الطريقة الأولى هي الطريقة السهلة عن طريق إظهار نافذة منبثقة بتطلب من المستخدم يكتب حاجة (Window Prompt)، وبعدين بنخزن القيمة دي في متغير ونطبعها. الطريقة التانية هي الطريقة الاحترافية والأكثر استخداماً في المواقع، وهي إننا نعمل مربع نص (Text box) وزرار (Button) في الـ HTML. بنستخدم الجافا سكريبت عشان نستهدف الزرار ده ونربطه بدالة (Function) بتشتغل لما نضغط عليه (onclick). الدالة دي بتدخل على مربع النص، بتسحب القيمة اللي جواه، بتخزنها في المتغير، وبناءً عليها بنغير محتوى عنصر في الصفحة عشان نرحب بالمستخدم باسمه.

**2. Technical Definitions (English):**
* **`window.prompt()`:** A simple method that creates a dialog box prompting the user to input some text.
* **`onclick`:** An event handler attribute used to execute a specific function when a button or element is clicked.
* **`.value`:** A property used to retrieve or set the text currently entered inside an HTML input element.

**3. Code Implementation:**

```javascript
// Code block 1: The Easy Way (Window Prompt)
let username;
username = window.prompt("What's your username?");
console.log(username);
```

```html
<!-- HTML Setup for The Professional Way -->
<h1 id="myH1">Welcome</h1>
<label>Username</label>
<input type="text" id="myText">
<br>
<button id="mySubmit">Submit</button>
```

```javascript
// Code block 2: The Professional Way (HTML Text Box)
let username;

document.getElementById("mySubmit").onclick = function() {
    // Get the value from the text box
    username = document.getElementById("myText").value;
    
    // Change the H1 text content based on the input
    document.getElementById("myH1").textContent = `Hello ${username}`;
}
```

---

### 7. Type Conversion (تحويل أنواع البيانات)

**1. Conceptual Explanation (Arabic):**
الـ Type Conversion هو عملية تغيير نوع البيانات لقيمة معينة لنوع تاني، زي تحويل النصوص لأرقام أو العكس. الموضوع ده مهم جداً لإن أي مدخلات بناخدها من المستخدم بتكون افتراضياً من النوع النصي (String). لو حاولنا نعمل عملية حسابية زي الجمع على المدخلات دي من غير تحويل، الجافا سكريبت هتلزق النصوص في بعضها (String Concatenation) بدل ما تجمعهم كأرقام. عشان نعالج ده بنستخدم دالة `Number()` لتحويل النص لرقم. المدرب كمان وضح إيه اللي بيحصل لو حاولنا نحول أنواع تانية: لو حولنا كلمة فيها حروف لرقم النتيجة هتكون `NaN` (يعني ليس رقماً، بالرغم من إن نوع البيانات نفسه بيفضل مسجل كرقم). لو حولنا نصوص لقيم منطقية (Booleans)، أي نص هيرجع `true`، بينما النصوص الفارغة هترجع `false`، ودي طريقة ممتازة نقدر نستخدمها عشان نتأكد إذا كان المستخدم ساب حقل الإدخال فاضي ولا كتب حاجة. المتغيرات الغير معرفة (Undefined) لو اتحولت لرقم بترجع برضو `NaN`.

**2. Technical Definitions (English):**
* **Type Conversion:** The process of changing the data type of a value to another data type (e.g., from String to Number).
* **`Number()` / `String()` / `Boolean()`:** Built-in functions used to explicitly cast variables into numbers, strings, or booleans.
* **`NaN`:** Stands for "Not a Number". It is returned when an attempt to convert alphabetical or undefined characters into a numeric value fails.

**3. Code Implementation:**

```javascript
// Code block 1: Without Type Conversion (Causes Bug)
/*
let age = window.prompt("How old are you?"); // User enters 25
age += 1;
console.log(age); // Outputs "251" instead of 26 (String Concatenation)
*/

// Code block 2: With Proper Type Conversion
let age = window.prompt("How old are you?");
age = Number(age); // Converts string "25" to number 25
age += 1;
console.log(age, typeof age); // Outputs 26, "number"

// Code block 3: Conversion Edge Cases
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); // NaN (Not a Number, but type is still 'number')
y = String(y); // "pizza"
z = Boolean(z); // true (Any non-empty string is true)

// Empty string conversions
let empty = "";
console.log(Number(empty));  // 0
console.log(Boolean(empty)); // false (Useful for checking if input is empty)
```

---

### 8. Constants (`const`) (الثوابت)

**1. Conceptual Explanation (Arabic):**
الثوابت هي عبارة عن متغيرات بنعين قيمتها مرة واحدة بس ومش بنقدر نغيرها بعدين. استخدام الـ `const` بيوفر طبقة حماية أمان إضافية للكود بتاعنا؛ عشان يمنعنا إحنا شخصياً (أو أي مطور تاني أو سكربت خبيث) من إننا نعدل قيم أساسية بالغلط والبرنامج يبوظ. كمثال تطبيقي، المدرب عمل برنامج بيحسب محيط الدائرة (Circumference). قيمة "باي" (Pi) دي قيمة ثابتة رياضياً، فلو استخدمنا `let` ممكن تتغير بالغلط وتطلع نواتج كارثية. لكن باستخدام `const`، لو حاولنا نعدل القيمة المتصفح هيطلع لنا خطأ (TypeError). من أفضل الممارسات عند كتابة الثوابت اللي بتحتوي على بيانات بدائية (زي الأرقام) إننا نكتب اسم المتغير كله بحروف كبيرة (Uppercase) عشان نميزه، لكن ده مش بينطبق عادة على أنواع البيانات المرجعية زي النصوص.

**2. Technical Definitions (English):**
* **`const` (Constants):** A keyword used to declare a variable that cannot be reassigned once it has been initialized.
* **TypeError:** An error generated by JavaScript when an operation is performed that violates data type rules, such as trying to reassign a constant variable.

**3. Code Implementation:**

```html
<!-- HTML for Circumference Calculator -->
<h1 id="myH1">Enter the radius of a circle:</h1>
<label>Radius:</label>
<input type="text" id="myText">
<button id="mySubmit">Submit</button>
<h3 id="myH3"></h3>
```

```javascript
// Code block: Circumference Calculator using Constants
const PI = 3.14159; // Constant named with UPPERCASE convention
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    
    // Attempting to reassign PI here (e.g., PI = 420.69;) would throw an Uncaught TypeError
    
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}
```

### 1. Introduction and Environment Setup (مقدمة وإعداد بيئة العمل)

**1. Conceptual Explanation (Arabic):**
تعتبر لغة الجافا سكريبت لغة برمجة أساسية تُستخدم لإنشاء صفحات ويب ديناميكية وتفاعلية، وهي بتشتغل مباشرة على أي متصفح ويب زي جوجل كروم أو سفاري. من خلال استخدام الجافا سكريبت، بنقدر نستجيب لأفعال المستخدم ونتفاعل مع مدخلاته لما بيتعامل مع الموقع بتاعنا. عشان نبدأ نكتب كود، بنحتاج ننشئ مجلد جديد للمشروع جوه محرر أكواد زي "VS Code"، والمجلد ده لازم يحتوي على تلات ملفات أساسية: ملف الـ HTML اللي بيمثل الهيكل الأساسي للصفحة (وغالباً بيتسمى index.html)، وملف الـ CSS اللي بيتحكم في المظهر والألوان، وملف الـ JavaScript اللي بيكون مسؤول عن التفاعل والحركة. بيتم ربط ملف الـ CSS بملف الـ HTML عن طريق وسم الـ `<link>` في الـ Head، بينما بيتم ربط ملف الجافا سكريبت عن طريق وسم الـ `<script>` وبيتحط في نهاية وسم الـ `<body>` عشان نضمن إن كل عناصر الصفحة تحمل الأول قبل ما يتم تنفيذ أي كود جافا سكريبت، وده بيحمينا من أي أخطاء. كمان من الضروري تثبيت إضافة اسمها "Live Server" عشان الصفحة تعمل تحديث تلقائي بمجرد ما نحفظ أي تغييرات في الملفات.

**2. Technical Definitions (English):**
* **JavaScript:** A programming language used to create dynamic and interactive web pages that run on a web browser.
* **VS Code:** A recommended text editor used for writing and managing code files.
* **Live Server:** An extension in VS Code that automatically refreshes the web browser whenever file changes are saved.

**3. Code Implementation:**

```html
<!-- Initial HTML Setup -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website</title>
    <!-- Linking CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <!-- HTML elements go here -->

    <!-- Linking JavaScript at the bottom of the body -->
    <script src="index.js"></script>
</body>
</html>
```

---

### 2. Basic Output and Comments (المخرجات الأساسية والتعليقات)

**1. Conceptual Explanation (Arabic):**
لإخراج وعرض نصوص برمجية، الجافا سكريبت بتوفر لنا أكتر من طريقة. الطريقة الأولى هي استخدام دالة للطباعة في شاشة المطورين (Console)، وبنقدر نكتب النص باستخدام علامات التنصيص المزدوجة أو الفردية أو علامة الـ (Backticks) واللي بتُعرف باسم الـ (Template Literal) وبتكون مفيدة جداً بعدين في دمج المتغيرات. الطريقة التانية لإخراج البيانات هي عمل نافذة تنبيه منبثقة بتظهر للمستخدم على الشاشة. بالنسبة للتعليقات، فهي عبارة عن نصوص مش بتظهر في المخرجات النهائية ولا بيتم تنفيذها، لكن بنستخدمها كملاحظات لينا أو للمطورين التانيين. بنقدر نعمل تعليق لسطر واحد باستخدام شرطتين مايلين، أو تعليق لعدة سطور باستخدام شرطة مايلة ونجمة. 

**2. Technical Definitions (English):**
* **`console.log()`:** A method used to output text or data to the developer tools console.
* **Template Literal:** A string enclosed in backticks (`) that allows for flexible text output and variable insertion.
* **`window.alert()`:** A method used to display a popup alert box with a specific message on the web page.
* **Comments:** Lines in the code ignored by the browser, used purely as notes for developers (single-line or multi-line).

**3. Code Implementation:**

```javascript
// Basic console output using backticks
console.log(`Hello`);
console.log(`I like pizza`);

// Basic alert popup
window.alert(`This is an alert`);
window.alert(`I like pizza`);

// This is a single-line comment

/*
This is a multi-line comment.
Anything that comes after will be a comment.
They are hidden and used for notes.
*/
```

---

### 3. Basic DOM Manipulation (التعامل الأساسي مع عناصر الصفحة)

**1. Conceptual Explanation (Arabic):**
علشان نضيف نصوص أو نعدل على محتوى موجود في صفحة الـ HTML باستخدام الجافا سكريبت، لازم الأول نحدد العنصر ده. بنعمل ده عن طريق إعطاء العنصر مُعرف فريد (ID) في ملف الـ HTML. بعدين في ملف الجافا سكريبت، بندخل على المستند الأساسي للصفحة وبنستخدم دالة بتجيب العنصر ده بناءً على المُعرف بتاعه. بعد ما بنمسك العنصر، بنقدر نغير خاصية المحتوى النصي الخاص بيه ونساويه بأي نص إحنا حابينه، سواء كان كلمة أو جملة.

**2. Technical Definitions (English):**
* **`document.getElementById()`:** A method that accesses the DOM to select and return an HTML element based on its unique ID.
* **`textContent`:** A property of an HTML element that allows you to get or set the text inside it.

**3. Code Implementation:**

```html
<!-- HTML Elements with IDs -->
<h1 id="myH1"></h1>
<p id="myP"></p>
```

```javascript
// JavaScript DOM Manipulation
document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like pizza";
```

---

### 4. Variables and Data Types (المتغيرات وأنواع البيانات)

**1. Conceptual Explanation (Arabic):**
تعتبر المتغيرات زي الصندوق أو الحاوية اللي بنخزن جواها قيمة معينة، والمتغير بيتصرف كأنه القيمة دي بالظبط. إنشاء المتغير بيتم على خطوتين: الإعلان عنه (Declaration) وتعيين قيمته (Assignment). بنستخدم كلمة `let` عشان نعلن عن المتغير، ولازم اسم المتغير يكون فريد، لو حاولنا نعلن عن نفس الاسم مرتين هيحصل خطأ. بنقدر نعمل الخطوتين في سطر واحد لو إحنا عارفين القيمة مسبقاً. بالنسبة لأنواع البيانات الأساسية، عندنا الأرقام (Numbers) واللي بتشمل الأرقام الصحيحة والعشرية وبنقدر نستخدمها في العمليات الحسابية. وعندنا النصوص (Strings) وهي سلسلة من الحروف ممكن تحتوي على أرقام بس بتتعامل كنص ومش بتدخل في حسابات. النوع التالت هو القيم المنطقية (Booleans) واللي بتكون إما صح أو خطأ (true/false) وبتستخدم كإشارات (Flags) في البرمجة عشان نتأكد من حالة معينة زي هل المستخدم متصل بالإنترنت أم لا. عشان نطبع نوع البيانات الخاص بأي متغير بنستخدم كلمة `typeof`، وعشان ندمج المتغيرات دي جوه نصوص بنستخدم الـ Template Literals عن طريق وضع المتغير جوه أقواس بعلامة الدولار. أخيرًا، بنقدر نستخدم المتغيرات دي لتحديث محتوى عناصر الـ HTML بسهولة.

**2. Technical Definitions (English):**
* **Variable:** A container that stores a value; the variable behaves as if it were the value it contains.
* **Declaration:** The first step of creating a variable, usually done using the `let` keyword.
* **Assignment:** The process of giving a declared variable a specific value.
* **Number:** A data type representing numeric values (e.g., 25, 10.99), used in math expressions.
* **String:** A data type representing a series of characters enclosed in quotes.
* **Boolean:** A data type representing a logical entity that can only be `true` or `false`.
* **`typeof`:** A keyword used to return the data type of a variable.

**3. Code Implementation:**

```javascript
// Declaration and Assignment
let x; // Declaration
x = 100; // Assignment
let y = 123; // Declaration and Assignment together

// Numbers
let age = 25;
let price = 10.99;
let gpa = 2.1;
console.log(typeof age); // outputs: number

// Strings
let firstName = "Bro";
let favoriteFood = "pizza";
let email = "bro123@gmail.com";
console.log(typeof firstName); // outputs: string

// Booleans
let online = true;
let forSale = true;
let isStudent = false;
console.log(typeof online); // outputs: boolean

// Template Literals with Variables
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is: ${gpa}`);
console.log(`Bro is online: ${online}`);

// Updating DOM using variables
// Assuming HTML has elements with IDs: p1, p2, p3
let fullName = "Bro Code";
document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
```

---

### 5. Arithmetic Operators (المعاملات الحسابية)

**1. Conceptual Explanation (Arabic):**
في أي معادلة رياضية في البرمجة بنتعامل مع قيم ومتغيرات بنسميها (Operands) وعلامات حسابية بنسميها (Operators). العمليات الأساسية بتشمل الجمع، الطرح، الضرب، والقسمة. وعندنا عملية الأسس اللي بنمثلها بنجمتين مزدوجتين. كمان عندنا معامل باقي القسمة (Modulus) واللي بيمثل بعلامة النسبة المئوية، وده بيدينا الباقي من أي عملية قسمة، وبيكون مفيد جداً لمعرفة إذا كان الرقم زوجي (الباقي صفر) أو فردي (الباقي واحد). بدل ما نكتب اسم المتغير مرتين عشان نحدث قيمته، بنستخدم طرق مختصرة اسمها (Augmented Assignment Operators) زي الزيادة المباشرة. ولو حابين نزود أو ننقص المتغير بواحد بس، بنستخدم معاملات الزيادة (Increment) والنقصان (Decrement). وأخيراً، في المعادلات المعقدة لازم نمشي على ترتيب الأولوية (Operator Precedence): الأقواس الأول، ثم الأسس، ثم الضرب والقسمة وباقي القسمة، وأخيراً الجمع والطرح من اليسار لليمين.

**2. Technical Definitions (English):**
* **Operands:** Values or variables involved in an arithmetic expression (e.g., 11, x, 5).
* **Operators:** Mathematical symbols like addition (+), subtraction (-), multiplication (*), and division (/).
* **Exponents (`**`):** An operator used to raise a base to a given power.
* **Modulus (`%`):** An operator that returns the remainder of a division operation.
* **Augmented Assignment Operators:** Shortcuts for reassigning variables (e.g., `+=`, `-=`, `*=`, `/=`).
* **Increment (`++`) / Decrement (`--`):** Operators used to add or subtract exactly one from a variable.
* **Operator Precedence:** The strict order in which operations are solved in a complex equation (Parentheses, Exponents, Multiplication/Division/Modulus, Addition/Subtraction).

**3. Code Implementation:**

```javascript
let students = 30;

// Basic Arithmetic
students = students + 1; // Addition: 31
students = students - 1; // Subtraction: 29
students = students * 2; // Multiplication: 60
students = students / 2; // Division: 15
students = students ** 2; // Exponents: 900
let extraStudents = students % 3; // Modulus (Remainder)

// Augmented Assignment Operators (Shortcuts)
students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

// Increment and Decrement
students++; // Increases by 1
students--; // Decreases by 1

// Operator Precedence Example
// Order: Parentheses -> Exponents -> Mult/Div/Mod -> Add/Sub
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result); // Solves 4**2 (16), then 2*3 (6), then 1+6+16 = 23
```

---

### 6. Accepting User Input (استقبال مدخلات المستخدم)

**1. Conceptual Explanation (Arabic):**
عشان ناخد بيانات من المستخدم عندنا طريقتين. الطريقة الأولى هي الطريقة السهلة عن طريق إظهار نافذة منبثقة بتطلب من المستخدم يكتب حاجة (Window Prompt)، وبعدين بنخزن القيمة دي في متغير ونطبعها. الطريقة التانية هي الطريقة الاحترافية والأكثر استخداماً في المواقع، وهي إننا نعمل مربع نص (Text box) وزرار (Button) في الـ HTML. بنستخدم الجافا سكريبت عشان نستهدف الزرار ده ونربطه بدالة (Function) بتشتغل لما نضغط عليه (onclick). الدالة دي بتدخل على مربع النص، بتسحب القيمة اللي جواه، بتخزنها في المتغير، وبناءً عليها بنغير محتوى عنصر في الصفحة عشان نرحب بالمستخدم باسمه.

**2. Technical Definitions (English):**
* **`window.prompt()`:** A simple method that creates a dialog box prompting the user to input some text.
* **`onclick`:** An event handler attribute used to execute a specific function when a button or element is clicked.
* **`.value`:** A property used to retrieve or set the text currently entered inside an HTML input element.

**3. Code Implementation:**

```javascript
// Code block 1: The Easy Way (Window Prompt)
let username;
username = window.prompt("What's your username?");
console.log(username);
```

```html
<!-- HTML Setup for The Professional Way -->
<h1 id="myH1">Welcome</h1>
<label>Username</label>
<input type="text" id="myText">
<br>
<button id="mySubmit">Submit</button>
```

```javascript
// Code block 2: The Professional Way (HTML Text Box)
let username;

document.getElementById("mySubmit").onclick = function() {
    // Get the value from the text box
    username = document.getElementById("myText").value;
    
    // Change the H1 text content based on the input
    document.getElementById("myH1").textContent = `Hello ${username}`;
}
```

---

### 7. Type Conversion (تحويل أنواع البيانات)

**1. Conceptual Explanation (Arabic):**
الـ Type Conversion هو عملية تغيير نوع البيانات لقيمة معينة لنوع تاني، زي تحويل النصوص لأرقام أو العكس. الموضوع ده مهم جداً لإن أي مدخلات بناخدها من المستخدم بتكون افتراضياً من النوع النصي (String). لو حاولنا نعمل عملية حسابية زي الجمع على المدخلات دي من غير تحويل، الجافا سكريبت هتلزق النصوص في بعضها (String Concatenation) بدل ما تجمعهم كأرقام. عشان نعالج ده بنستخدم دالة `Number()` لتحويل النص لرقم. المدرب كمان وضح إيه اللي بيحصل لو حاولنا نحول أنواع تانية: لو حولنا كلمة فيها حروف لرقم النتيجة هتكون `NaN` (يعني ليس رقماً، بالرغم من إن نوع البيانات نفسه بيفضل مسجل كرقم). لو حولنا نصوص لقيم منطقية (Booleans)، أي نص هيرجع `true`، بينما النصوص الفارغة هترجع `false`، ودي طريقة ممتازة نقدر نستخدمها عشان نتأكد إذا كان المستخدم ساب حقل الإدخال فاضي ولا كتب حاجة. المتغيرات الغير معرفة (Undefined) لو اتحولت لرقم بترجع برضو `NaN`.

**2. Technical Definitions (English):**
* **Type Conversion:** The process of changing the data type of a value to another data type (e.g., from String to Number).
* **`Number()` / `String()` / `Boolean()`:** Built-in functions used to explicitly cast variables into numbers, strings, or booleans.
* **`NaN`:** Stands for "Not a Number". It is returned when an attempt to convert alphabetical or undefined characters into a numeric value fails.

**3. Code Implementation:**

```javascript
// Code block 1: Without Type Conversion (Causes Bug)
/*
let age = window.prompt("How old are you?"); // User enters 25
age += 1;
console.log(age); // Outputs "251" instead of 26 (String Concatenation)
*/

// Code block 2: With Proper Type Conversion
let age = window.prompt("How old are you?");
age = Number(age); // Converts string "25" to number 25
age += 1;
console.log(age, typeof age); // Outputs 26, "number"

// Code block 3: Conversion Edge Cases
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x); // NaN (Not a Number, but type is still 'number')
y = String(y); // "pizza"
z = Boolean(z); // true (Any non-empty string is true)

// Empty string conversions
let empty = "";
console.log(Number(empty));  // 0
console.log(Boolean(empty)); // false (Useful for checking if input is empty)
```

---

### 8. Constants (`const`) (الثوابت)

**1. Conceptual Explanation (Arabic):**
الثوابت هي عبارة عن متغيرات بنعين قيمتها مرة واحدة بس ومش بنقدر نغيرها بعدين. استخدام الـ `const` بيوفر طبقة حماية أمان إضافية للكود بتاعنا؛ عشان يمنعنا إحنا شخصياً (أو أي مطور تاني أو سكربت خبيث) من إننا نعدل قيم أساسية بالغلط والبرنامج يبوظ. كمثال تطبيقي، المدرب عمل برنامج بيحسب محيط الدائرة (Circumference). قيمة "باي" (Pi) دي قيمة ثابتة رياضياً، فلو استخدمنا `let` ممكن تتغير بالغلط وتطلع نواتج كارثية. لكن باستخدام `const`، لو حاولنا نعدل القيمة المتصفح هيطلع لنا خطأ (TypeError). من أفضل الممارسات عند كتابة الثوابت اللي بتحتوي على بيانات بدائية (زي الأرقام) إننا نكتب اسم المتغير كله بحروف كبيرة (Uppercase) عشان نميزه، لكن ده مش بينطبق عادة على أنواع البيانات المرجعية زي النصوص.

**2. Technical Definitions (English):**
* **`const` (Constants):** A keyword used to declare a variable that cannot be reassigned once it has been initialized.
* **TypeError:** An error generated by JavaScript when an operation is performed that violates data type rules, such as trying to reassign a constant variable.

**3. Code Implementation:**

```html
<!-- HTML for Circumference Calculator -->
<h1 id="myH1">Enter the radius of a circle:</h1>
<label>Radius:</label>
<input type="text" id="myText">
<button id="mySubmit">Submit</button>
<h3 id="myH3"></h3>
```

```javascript
// Code block: Circumference Calculator using Constants
const PI = 3.14159; // Constant named with UPPERCASE convention
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    
    // Attempting to reassign PI here (e.g., PI = 420.69;) would throw an Uncaught TypeError
    
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}
```

[End of Part 1]


### 9. Counter Program (برنامج العداد)

**1. Conceptual Explanation (Arabic):**
المدرب قام بتطبيق عملي شامل لبناء برنامج عداد رقمي (Counter) بيجمع بين الـ HTML والـ CSS والجافا سكريبت. الفكرة بتعتمد على إنشاء عنصر نصي (Label) لعرض الرقم، وتلات زراير للتحكم: زرار للزيادة، زرار للنقصان، وزرار لإعادة الضبط للصفر. في الجافا سكريبت، بنقوم بحفظ العناصر دي في ثوابت (`const`) عشان مش هنغير العناصر نفسها، لكن بنعمل متغير رقمي باستخدام `let` عشان نخزن جواه القيمة الحالية للعداد واللي هتتغير باستمرار. بعد كده، بنربط كل زرار بدالة (Function) بتشتغل لما نضغط عليه (`onclick`). دالة الزيادة بتستخدم معامل الزيادة (`++`) عشان تزود المتغير بواحد، ودالة النقصان بتستخدم معامل النقصان (`--`)، ودالة إعادة الضبط بتخلي المتغير يساوي صفر. في نهاية كل دالة، بنحدث المحتوى النصي الخاص بالـ Label عشان يعرض القيمة الجديدة للمستخدم.

**2. Technical Definitions (English):**
* **Counter Program:** A simple application that increments, decrements, or resets a numeric value based on user interaction.
* **State Variable:** A variable (like `count`) used to keep track of the current status or value within an application.

**3. Code Implementation:**

```html
<!-- HTML Setup for Counter -->
<label id="countLabel">0</label><br>
<div id="btnContainer">
    <button id="decreaseBtn" class="buttons">Decrease</button>
    <button id="resetBtn" class="buttons">Reset</button>
    <button id="increaseBtn" class="buttons">Increase</button>
</div>
```

```javascript
// JavaScript Implementation for Counter
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0; // State variable

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}
```

---

### 10. Math Object (كائن الرياضيات `Math`)

**1. Conceptual Explanation (Arabic):**
تعتبر الـ `Math` عبارة عن كائن مدمج (Built-in Object) جوه الجافا سكريبت بيوفر لنا مجموعة كبيرة من الخواص والدوال المتعلقة بالعمليات الرياضية. المدرب وضح إننا نقدر نوصل لقيم ثابتة زي قيمة الـ (Pi) وقيمة الـ (Euler's number). كمان الكائن ده بيوفر دوال لتقريب الأرقام بطرق مختلفة: دالة `round` للتقريب العادي لأقرب رقم صحيح، دالة `floor` اللي دايماً بتقرب للرقم الأقل (بتحذف الكسر وتنزل لتحت)، دالة `ceil` اللي دايماً بتقرب للرقم الأعلى (للسقف)، ودالة `trunc` اللي بتقطع أو بتحذف أي كسور عشرية من غير ما تقرب. كمان في دوال لحساب الأسس زي `pow`، والجذر التربيعي زي `sqrt`، واللوغاريتم الطبيعي زي `log`. للعمليات الهندسية، في دوال للـ `sin` والـ `cos` والـ `tan`. لو حابين نحصل على القيمة المطلقة (الموجبة دايماً) بنستخدم `abs`، وعشان نعرف إشارة الرقم (موجب ولا سالب ولا صفر) بنستخدم `sign`. أخيراً، عشان نطلع أكبر أو أصغر رقم من مجموعة أرقام، بنستخدم `max` و `min` على التوالي.

**2. Technical Definitions (English):**
* **`Math` Object:** A built-in JavaScript object that has properties and methods for mathematical constants and functions.
* **`Math.round()`:** Rounds a number to the nearest integer.
* **`Math.floor()`:** Always rounds a number down to the nearest integer.
* **`Math.ceil()`:** Always rounds a number up to the nearest integer.
* **`Math.trunc()`:** Eliminates the decimal portion of a number, returning only the integer part.
* **`Math.pow(base, exponent)`:** Raises a base number to a given power.
* **`Math.sqrt()`:** Returns the square root of a number.
* **`Math.abs()`:** Returns the absolute (positive) value of a number.
* **`Math.max()` / `Math.min()`:** Returns the highest or lowest value from a list of arguments.

**3. Code Implementation:**

```javascript
// Math Properties
console.log(Math.PI); // 3.14159...
console.log(Math.E);  // Euler's number

let x = 3.21;
let y = 2;
let z = -3.21;

// Rounding Methods
console.log(Math.round(x)); // 3
console.log(Math.floor(3.99)); // 3 (Always rounds down)
console.log(Math.ceil(3.21)); // 4 (Always rounds up)
console.log(Math.trunc(x)); // 3 (Eliminates decimals)

// Mathematical Operations
console.log(Math.pow(3, 2)); // 9 (3 to the power of 2)
console.log(Math.sqrt(81)); // 9 (Square root)
console.log(Math.log(10)); // 2.3... (Natural logarithm)

// Trigonometry
console.log(Math.sin(45)); // Sine
console.log(Math.cos(45)); // Cosine
console.log(Math.tan(45)); // Tangent

// Absolute and Sign
console.log(Math.abs(z)); // 3.21 (Absolute positive value)
console.log(Math.sign(z)); // -1 (Returns -1 for negative, 1 for positive, 0 for zero)

// Max and Min
let max = Math.max(x, y, 1);
let min = Math.min(x, y, 1);
console.log(max); // 3.21
console.log(min); // 1
```

---

### 11. Random Number Generator (توليد الأرقام العشوائية)

**1. Conceptual Explanation (Arabic):**
لتوليد أرقام عشوائية في الجافا سكريبت بنستخدم دالة `Math.random()`. الدالة دي بطبيعتها بتطلع رقم عشري عشوائي بين الصفر والواحد (الواحد مش معانا). عشان نولد رقم عشوائي مفيد زي رمية حجر النرد (من 1 لـ 6)، بنحتاج نضرب النتيجة في 6، وده هيدينا رقم بين 0 و 5. عشان نتخلص من الكسور بنحط المعادلة كلها جوه `Math.floor()`. ولإننا عايزين نبدأ من 1 مش من 0، بنزود 1 على النتيجة النهائية. المدرب بعد كده شرح المعادلة الشاملة (Universal Formula) اللي بتسمح لنا نولد رقم عشوائي بين أي حد أدنى (Minimum) وحد أقصى (Maximum). المعادلة بتتم عن طريق طرح الحد الأدنى من الحد الأقصى وإضافته للضرب، وبعدين بنزود الحد الأدنى في نهاية المعادلة. في التطبيق العملي، المدرب عمل برنامج بيرمي تلات أحجار نرد في نفس الوقت بيحدث نصوص عناصر الـ HTML بنتائج الأرقام العشوائية دي لما المستخدم بيضغط على زرار.

**2. Technical Definitions (English):**
* **`Math.random()`:** A method that returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1).
* **Random Range Formula:** `Math.floor(Math.random() * (max - min)) + min` is used to generate a random integer within a specific inclusive range.

**3. Code Implementation:**

```javascript
// Generating a basic random number between 1 and 6 (Dice Roll)
let randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);

// Universal Formula for generating a number between a specific range (e.g., 50 to 100)
const min = 50;
const max = 100;
let randomRange = Math.floor(Math.random() * (max - min)) + min;
console.log(randomRange);
```

```javascript
// Dice Roller Mini-Project (Generating 3 Random Numbers)
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const minDice = 1;
const maxDice = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * maxDice) + minDice;
    randomNum2 = Math.floor(Math.random() * maxDice) + minDice;
    randomNum3 = Math.floor(Math.random() * maxDice) + minDice;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
```

---

### 12. If Statements (الجمل الشرطية)

**1. Conceptual Explanation (Arabic):**
الجمل الشرطية بتسمح لنا ننفذ بلوك معين من الكود لو تحقق شرط معين (كانت قيمته `true`)، أو ننفذ كود تاني لو الشرط ده متحققش. بنستخدم كلمة `if` متبوعة بأقواس بتحتوي على الشرط. لو حابين ندي أكتر من بديل، بنستخدم `else if` للتحقق من شروط إضافية، وأخيراً بنستخدم `else` كحالة افتراضية لو كل الشروط السابقة فشلت. الترتيب في الشروط دي مهم جداً؛ لإن الجافا سكريبت بتقرأ الشروط من فوق لتحت، وأول شرط بيتحقق، البرنامج بينفذ الكود بتاعه وبيتجاهل باقي الشروط تماماً. يعني لو بنتحقق إن عمر المستخدم أكبر من 100 سنة، لازم الشرط ده يتكتب قبل ما نتحقق إنه أكبر من 18 سنة، وإلا البرنامج هيعتبر الـ 101 سنة أكبر من 18 وينفذ شرط الـ 18 ويتجاهل شرط الـ 100. كمان نقدر نعمل جمل شرطية متداخلة (Nested If Statements) يعني جملة `if` جوه جملة `if` تانية عشان نختبر شروط مركبة زي التحقق من سن المستخدم الأول، وبعدين التحقق إذا كان معاه رخصة قيادة أو لأ. القيم المنطقية (Booleans) بتشتغل بشكل ممتاز كشروط مباشرة من غير ما نكتب `== true`. وللتحقق من المساواة بنستخدم علامتين يساوي `==` لإن علامة يساوي الواحدة `=` مخصصة لتعيين القيم للمتغيرات.

**2. Technical Definitions (English):**
* **If Statement:** A control flow statement that executes a block of code if a specified condition evaluates to true.
* **Else If / Else:** Clauses used to specify new conditions to test if the first condition is false, or a default block of code to run if all conditions are false.
* **Nested If Statements:** Placing an if statement inside another if statement to test multiple, dependent conditions.
* **Comparison Operator (`==`):** An operator used to compare two values to see if they are equal.

**3. Code Implementation:**

```javascript
// Basic If / Else If / Else and importance of Order
let age = 101;

if (age >= 100) { // Checked first
    console.log("You are too old to enter this site");
} else if (age >= 18) {
    console.log("You are old enough to enter this site");
} else if (age < 0) {
    console.log("Your age can't be below zero");
} else if (age == 0) { // Using == for comparison
    console.log("You can't enter, you were just born");
} else {
    console.log("You must be 18+ to enter this site");
}

// Nested If Statements and Boolean Conditions
let driverAge = 18;
let hasLicense = true;

if (driverAge >= 16) {
    console.log("You are old enough to drive");
    
    if (hasLicense) { // Implicitly checks if true
        console.log("You have your license");
    } else {
        console.log("You do not have your license yet");
    }
} else {
    console.log("You must be 16+ to have a license");
}
```

---

### 13. Checked Property (خاصية التحديد `.checked`)

**1. Conceptual Explanation (Arabic):**
خاصية الـ `checked` بنستخدمها عشان نعرف هل المستخدم قام بتحديد عنصر اختيار في الـ HTML ولا لأ. الخاصية دي بتشتغل مع عناصر الـ Checkbox (اللي بتسمح باختيار أكتر من حاجة) وعناصر الـ Radio buttons (اللي بتسمح باختيار حاجة واحدة بس من مجموعة). لما بنستدعي الخاصية دي على العنصر عن طريق الجافا سكريبت، بترجعلنا قيمة منطقية (Boolean) إما `true` لو العنصر متحدد، أو `false` لو مش متحدد. عشان نربط مجموعة من الـ Radio buttons ببعض بحيث المستخدم ميقدرش يختار غير واحد بس، لازم نديهم كلهم نفس خاصية الـ `name` في الـ HTML. في التطبيق العملي، المدرب ربط زرار إرسال (Submit) بدالة بتشيك على حالة الـ Checkbox الخاص بالاشتراك، وبتشيك باستخدام `if/else if` على انهي Radio button تم اختياره لطريقة الدفع (فيزا، ماستركارد، أو بايبال) وبتطبع النتيجة المناسبة في الصفحة.

**2. Technical Definitions (English):**
* **`.checked` Property:** A DOM property that returns `true` if an HTML checkbox or radio button is checked/selected, and `false` if it is not.
* **Radio Button Grouping:** Giving multiple `<input type="radio">` elements the exact same `name` attribute so that only one can be selected at a time.

**3. Code Implementation:**

```html
<!-- HTML Setup -->
<input type="checkbox" id="myCheckbox">
<label for="myCheckbox">Subscribe</label>

<!-- Radio Buttons Grouped by 'name="card"' -->
<input type="radio" id="visaBtn" name="card">
<label for="visaBtn">Visa</label>
<input type="radio" id="mastercardBtn" name="card">
<label for="mastercardBtn">MasterCard</label>
<input type="radio" id="paypalBtn" name="card">
<label for="paypalBtn">PayPal</label>

<button id="mySubmit">Submit</button>
<p id="subResult"></p>
<p id="paymentResult"></p>
```

```javascript
// JavaScript Implementation
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    // Checking Checkbox State
    if(myCheckbox.checked){
        subResult.textContent = "You are subscribed";
    } else {
        subResult.textContent = "You are NOT subscribed";
    }

    // Checking Radio Button States
    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa";
    } else if(mastercardBtn.checked){
        paymentResult.textContent = "You are paying with MasterCard";
    } else if(paypalBtn.checked){
        paymentResult.textContent = "You are paying with PayPal";
    } else {
        paymentResult.textContent = "You must select a payment type";
    }
}
```

---

### 14. Ternary Operator (المعامل الثلاثي)

**1. Conceptual Explanation (Arabic):**
المعامل الثلاثي (Ternary Operator) بيعتبر اختصار سريع جداً وأكثر كثافة لجملة `if/else`. تركيبة المعامل ده بتتكون من 3 أجزاء: الأول بنكتب الشرط اللي عايزين نختبره، وبعدين بنحط علامة استفهام `?` كأننا بنسأل الجافا سكريبت هل الشرط ده صح؟ بعد علامة الاستفهام بنكتب الكود اللي المفروض يتنفذ لو الإجابة `true`، وبعدين بنحط نقطتين فوق بعض `:` وبنكتب الكود اللي هيتنفذ لو الإجابة `false`. المعامل ده مفيد جداً لإنه بيمنع تكرار الكود وبيخلينا نقدر نعيّن قيمة لمتغير بناءً على شرط معين في سطر واحد بس بدل ما نكتب بلوك كامل من الـ `if/else`. 

**2. Technical Definitions (English):**
* **Ternary Operator (`condition ? true : false`):** A shorthand operator used in place of an `if/else` statement. It takes three operands: a condition followed by a question mark (`?`), an expression to execute if the condition is truthy, followed by a colon (`:`), and an expression to execute if the condition is falsy.

**3. Code Implementation:**

```javascript
// Code block 1: Basic condition execution
let age = 21;
// condition ? code if true : code if false;
age >= 18 ? console.log("You're an adult") : console.log("You're a minor");

// Code block 2: Variable assignment using Ternary Operator
let time = 16;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting); // Good afternoon

// Code block 3: Using with boolean variables directly
let isStudent = true;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message);

// Code block 4: Mathematical calculation based on condition
let purchaseAmount = 125;
// Apply 10% discount if purchase is over $100
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);
```

---

### 15. Switches (جمل الاختيار)

**1. Conceptual Explanation (Arabic):**
جملة الـ `switch` بتعتبر بديل أكفأ وأنضف لجمل الـ `else if` الكتيرة والمكررة. الفكرة هنا إننا بنمرر قيمة أو متغير معين بين أقواس الـ `switch`، وبعدين بنحط مجموعة من الحالات `case` جواها عشان نقارن القيمة دي بيهم. لو حصل تطابق (Match)، الكود اللي تحت الـ `case` دي بيتنفذ. من الضروري جداً نحط كلمة `break` في نهاية كل حالة، لإننا لو نسيناها، البرنامج هيعمل حاجة اسمها (Fall-through)، يعني هينفذ كل الحالات اللي تحت الحالة المطابقة لحد ما يقابل `break` أو السويتش يخلص. كمان بنقدر نضيف حالة افتراضية اسمها `default` في الآخر، ودي بتشتغل لو مفيش أي تطابق حصل في كل الحالات اللي فوق. المدرب كمان شرح طريقة متقدمة شوية، وهي إننا نمرر القيمة `true` للـ `switch`، وبعدين نكتب الشروط كعمليات حسابية أو منطقية جوه كل `case`، وده بيسمح لنا نختبر شروط معقدة زي الأكبر من والأصغر من.

**2. Technical Definitions (English):**
* **`switch` Statement:** A control flow statement that evaluates an expression and matches its value against a series of `case` clauses to execute corresponding code.
* **`case`:** A specific value or condition to check against the expression provided to the switch statement.
* **`break`:** A keyword used to exit a switch block once a matching case has been executed, preventing fall-through to the next cases.
* **`default`:** An optional fallback case in a switch statement that runs if no other cases match the evaluated expression.

**3. Code Implementation:**

```javascript
// Code block 1: Basic Switch matching exact values
let day = 1;

switch(day) {
    case 1:
        console.log("It is Monday");
        break; // Prevents executing case 2, 3, etc.
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a valid day`);
}

// Code block 2: Advanced Switch using boolean conditions
let testScore = 92;
let letterGrade;

// Examines the boolean value 'true' against the conditions in each case
switch(true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}
console.log(letterGrade); // Outputs: A
```

[End of Part 2]


### 16. String Methods (دوال النصوص)

**1. Conceptual Explanation (Arabic):**
تعتبر دوال النصوص (String Methods) أدوات مدمجة جوه الجافا سكريبت بتسمح لنا نتلاعب ونتعامل مع النصوص بأشكال مختلفة. المدرب شرح مجموعة كبيرة من الدوال دي: دالة `charAt` بتجيب لنا الحرف الموجود في مكان (Index) معين، مع العلم إن الترقيم بيبدأ من صفر. دالة `indexOf` بتجيب لنا أول مكان بيظهر فيه حرف أو كلمة معينة، بينما دالة `lastIndexOf` بتجيب لنا آخر مكان بيظهر فيه الحرف ده. بالنسبة لمعرفة طول النص، بنستخدم خاصية اسمها `length` (ودي خاصية Property مش دالة Method) وبترجعلنا عدد الحروف بالكامل. دالة `trim` مفيدة جداً عشان تشيل أي مسافات بيضاء (White spaces) في أول أو آخر النص. لو حابين نغير حالة الحروف، بنستخدم `toUpperCase` عشان نخليها كبيرة (Capital)، أو `toLowerCase` عشان نخليها صغيرة. دالة `repeat` بنستخدمها لو عايزين نكرر النص عدد معين من المرات. دوال التحقق زي `startsWith` و `endsWith` و `includes` بترجعلنا قيمة منطقية (True/False) لو كان النص بيبدأ أو بينتهي أو بيحتوي على مسافة أو حرف معين، ودي بتكون ممتازة جوه الجمل الشرطية (`if`). لو عندنا نص زي رقم تليفون فيه شرطات `-` وعايزين نشيلها، بنستخدم دالة `replaceAll` عشان نستبدل الشرطات دي بأي حاجة تانية أو حتى نص فاضي. أخيراً، دوال الحشو `padStart` و `padEnd` بنستخدمها عشان نكمل طول النص لعدد معين من الحروف عن طريق حشو بدايته أو نهايته بحرف أو رقم معين زي الصفر.

**2. Technical Definitions (English):**
*   **`charAt(index)`:** A string method that returns the character at a specified index.
*   **`indexOf(char)` / `lastIndexOf(char)`:** Methods that return the index of the first or last occurrence of a specified character in a string.
*   **`.length`:** A property (not a method) that returns the total number of characters in a string.
*   **`trim()`:** A method that removes whitespace from both ends of a string.
*   **`toUpperCase()` / `toLowerCase()`:** Methods that convert all characters in a string to uppercase or lowercase.
*   **`repeat(count)`:** A method that returns a new string containing the specified number of copies of the original string.
*   **`startsWith(char)` / `endsWith(char)` / `includes(char)`:** Methods that return a boolean indicating whether a string starts with, ends with, or contains a specific character or sequence.
*   **`replaceAll(search, replacement)`:** A method that replaces all occurrences of a specified character or string with another character or string.
*   **`padStart(length, char)` / `padEnd(length, char)`:** Methods that pad the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

**3. Code Implementation:**

```javascript
let userName = "Bro Code ";

// Accessing characters and length
console.log(userName.charAt(0)); // "B"
console.log(userName.indexOf("o")); // 2
console.log(userName.lastIndexOf("o")); // 5
console.log(userName.length); // 9

// Formatting strings
userName = userName.trim(); // "Bro Code"
userName = userName.toUpperCase(); // "BRO CODE"
userName = userName.toLowerCase(); // "bro code"
userName = userName.repeat(3); // "bro codebro codebro code"

// Checking string contents (Booleans)
let resultStart = userName.startsWith(" "); // false
let resultEnd = userName.endsWith(" "); // false
let resultInclude = userName.includes(" "); // true

// Replacing characters
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", ""); // "1234567890"

// Padding strings
let paddedStart = phoneNumber.padStart(15, "0"); // "000001234567890"
let paddedEnd = phoneNumber.padEnd(15, "0"); // "123456789000000"
```

---

### 17. String Slicing (اقتطاع النصوص)

**1. Conceptual Explanation (Arabic):**
عملية اقتطاع النصوص (String Slicing) هي إنشاء نص فرعي (Substring) من جزء من نص تاني أصلي من غير ما نغير في النص الأصلي نفسه. المدرب وضح إننا بنستخدم دالة `slice()` وبنمرر ليها نقطة البداية (Starting Index) ونقطة النهاية (Ending Index). القاعدة المهمة جداً هنا هي إن الـ (Ending Index) بيكون (Exclusive)، يعني الحرف اللي عند نقطة النهاية مش بيدخل معانا في النص المقطوع؛ فلازم نزود عليه 1 عشان ناخده معانا. لو محددناش نقطة نهاية، الجافا سكريبت هتقطع من نقطة البداية لحد آخر النص. بنقدر كمان نستخدم أرقام سالبة (Negative Indices) عشان نبدأ العد من آخر النص للبداية، يعني `-1` بيمثل آخر حرف. عشان نخلي البرنامج بتاعنا ديناميكي (Dynamic) وميشتغلش على اسم واحد بس، المدرب دمج الـ `slice` مع دالة `indexOf`؛ بحيث البرنامج يدور على أول مسافة (Space) ويقطع من البداية لحد المسافة عشان يجيب الاسم الأول، وبعدين يقطع من بعد المسافة (بإضافة +1 للاندكس) لحد الآخر عشان يجيب الاسم الأخير.

**2. Technical Definitions (English):**
*   **String Slicing:** The process of creating a substring from a portion of another string without altering the original string.
*   **`slice(startIndex, endIndex)`:** A built-in method used to extract a section of a string and return it as a new string. The `endIndex` is exclusive.

**3. Code Implementation:**

```javascript
// Code block 1: Basic Slicing with Hardcoded Indices
const fullName = "Bro Code";
let firstName = fullName.slice(0, 3); // "Bro" (End index 3 is exclusive)
let lastName = fullName.slice(4, 8); // "Code"

// Negative indices
let lastChar = fullName.slice(-1); // "e"

// Code block 2: Dynamic Slicing using indexOf()
let dynamicFirstName = fullName.slice(0, fullName.indexOf(" "));
// Start after the space by adding +1 to the index
let dynamicLastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(dynamicFirstName); // "Bro"
console.log(dynamicLastName); // "Code"

// Code block 3: Extracting Email Username and Extension
const email = "bro1@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username); // "bro1"
console.log(extension); // "gmail.com"
```

---

### 18. Method Chaining (تسلسل الدوال)

**1. Conceptual Explanation (Arabic):**
تسلسل الدوال (Method Chaining) هو أسلوب أو تقنية في البرمجة بنقدر من خلالها نستدعي أكتر من دالة ورا بعض في سطر كود واحد مستمر. المدرب شبه الموضوع بضربات الكومبو (Combo) في ألعاب الفيديو؛ بدل ما نعمل كل خطوة في متغير منفصل لوحده. في المثال، المدرب كان عايز ياخد اسم المستخدم، يشيل منه المسافات الزيادة، ياخد أول حرف يخليه كابيتال، وياخد باقي الحروف يخليها سمول، وبعدين يدمجهم تاني. الطريقة العادية من غير الـ (Chaining) بتاخد سطور كتير وبتحتاج نعمل متغيرات ملهاش لازمة زي (letter) و (extraChars). لكن باستخدام تسلسل الدوال، بنقدر نربط الدوال ببعض عن طريق النقطة (Dot) بدل ما ننهي السطر بـ (Semicolon)، وده بيوفر في الكود وبيخليه أنضف، بس المدرب حذر إن السلسلة لو بقت طويلة جداً ممكن قراءة الكود تبقى صعبة.

**2. Technical Definitions (English):**
*   **Method Chaining:** A programming technique where multiple methods are called one after another on the same object in one continuous line of code, eliminating the need for intermediate variables.

**3. Code Implementation:**

```javascript
// Code block 1: Without Method Chaining (Longer, creates unnecessary variables)
let username1 = "   bro CODE   ";
username1 = username1.trim();

let letter = username1.charAt(0);
letter = letter.toUpperCase();

let extraChars = username1.slice(1);
extraChars = extraChars.toLowerCase();

username1 = letter + extraChars;
console.log(username1); // "Bro code"


// Code block 2: With Method Chaining (Concise, single line)
let username2 = "   bro CODE   ";

// Chaining trim(), charAt(), and toUpperCase() in one go, then concatenating
username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();

console.log(username2); // "Bro code"
```

---

### 19. Logical Operators (المعاملات المنطقية)

**1. Conceptual Explanation (Arabic):**
المعاملات المنطقية (Logical Operators) بنستخدمها عشان ندمج أو نتلاعب بالقيم المنطقية (Boolean values). عندنا تلات معاملات أساسية: معامل و (AND) وبنكتبه بعلامتين `&&`، وده بيتطلب إن كل الشروط المرتبطة بيه لازم تكون `true` عشان ينفذ الكود؛ لو شرط واحد بس فيهم كان `false`، الكود كله هيتم تجاهله. معامل أو (OR) وبنكتبه بعلامتين `||`، وده بيتطلب إن شرط واحد بس على الأقل يكون `true` عشان ينفذ الكود. المعامل التالت هو النفي (NOT) وبنكتبه بعلامة تعجب `!`، وده بيعكس القيمة المنطقية؛ يعني بيحول الـ `true` لـ `false` والـ `false` لـ `true`، وبيكون مفيد جداً لو عايزين نتأكد إن حالة معينة مش بتحصل (زي إن الجو مش مشمس).

**2. Technical Definitions (English):**
*   **Logical Operators:** Symbols used to combine or manipulate boolean values.
*   **AND (`&&`):** Requires at least two conditions to all be true to execute the code.
*   **OR (`||`):** Requires at least one of the provided conditions to be true to execute the code.
*   **NOT (`!`):** Reverses the boolean value of a condition (true becomes false, false becomes true).

**3. Code Implementation:**

```javascript
// Example 1: Using AND (&&)
const tempAnd = 25;
// Both conditions must be true
if(tempAnd > 0 && tempAnd <= 30){
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}

// Example 2: Using OR (||)
const tempOr = 250;
// Only one condition needs to be true
if(tempOr <= 0 || tempOr > 30){
    console.log("The weather is bad");
} else {
    console.log("The weather is good");
}

// Example 3: Using NOT (!)
const isSunny = true;
// Reverses the boolean value
if(!isSunny){
    console.log("It is cloudy");
} else {
    console.log("It is sunny");
}
```

---

### 20. Strict Equality Operator (معامل التطابق التام)

**1. Conceptual Explanation (Arabic):**
المدرب وضح الفروق الجوهرية بين علامات اليساوي في الجافا سكريبت. علامة يساوي الواحدة `=` دي للتعيين (Assignment) بنستخدمها عشان ندي قيمة لمتغير. علامتين يساوي `==` ده معامل المقارنة العادي (Comparison Operator)، وده بيقارن القيمتين ببعض بس من غير ما يهتم بنوع البيانات (Data Type)؛ يعني لو قارنا رقم `3.14` مع نص `"3.14"` هيقولنا إنهم متساويين. التلات علامات يساوي `===` ده معامل التطابق التام (Strict Equality Operator)، وده بيقارن القيمة وكمان نوع البيانات مع بعض، وفي نفس المثال اللي فات هيقولنا إنهم مش متساويين لإن الأنواع مختلفة. المدرب نصح بضرورة استخدام الـ `===` دايماً لمنع أي أخطاء، خصوصاً لما بناخد مدخلات من المستخدم لإنها دايماً بتكون نصوص. كمان وضح معاملات عدم المساواة: `!=` للتحقق من عدم المساواة العادية، و `!==` للتحقق من عدم التطابق التام.

**2. Technical Definitions (English):**
*   **Assignment Operator (`=`):** Used to assign a value to a variable.
*   **Comparison Operator (`==`):** Compares two values to see if they are equal, ignoring their data types.
*   **Strict Equality Operator (`===`):** Compares two values to see if both their values and their data types are exactly equal.
*   **Inequality Operator (`!=`):** Returns true if two values are not equal (ignoring data types).
*   **Strict Inequality Operator (`!==`):** Returns true if the values or the data types are different.

**3. Code Implementation:**

```javascript
const PI = 3.14; // Number data type

// Code block 1: Comparison Operator (==)
if (PI == "3.14") {
    console.log("That is PI"); // This will execute because values match
} else {
    console.log("That is NOT PI");
}

// Code block 2: Strict Equality Operator (===)
if (PI === "3.14") {
    console.log("That is PI");
} else {
    // This will execute because data types differ (Number vs String)
    console.log("That is NOT PI"); 
}

// Code block 3: Inequality Operators
if (PI != "3.14") {
    console.log("That is NOT PI");
} else {
    console.log("That is PI"); // Executes
}

if (PI !== "3.14") {
    console.log("That is NOT PI"); // Executes because data types differ
} else {
    console.log("That is PI"); 
}
```

---

### 21. While and Do-While Loops (حلقات التكرار `while` و `do...while`)

**1. Conceptual Explanation (Arabic):**
حلقة الـ `while` بتكرر تنفيذ كود معين لعدد غير محدد من المرات طالما إن الشرط اللي ادناهولها بيفضل `true`. مهم جداً إننا نوفر طريقة تخلي الشرط ده يتحول لـ `false` جوه الحلقة عشان نخرج منها، وإلا هنقع في فخ الـ (Infinite Loop) أو الحلقة اللانهائية اللي ممكن تخلي المتصفح يعلق. أما حلقة الـ `do...while` فهي نسخة تانية من الـ `while`، بس الفرق الجوهري إنها بتنفذ الكود الأول مرة واحدة على الأقل (حتى لو الشرط كان `false` من البداية)، وبعدين بتختبر الشرط في النهاية؛ لو كان `true` بترجع تنفذ الكود تاني، ولو `false` بتخرج. المدرب عمل مثال لنظام تسجيل دخول بسيط بيطلب اسم مستخدم وباسورد، وبيفضل يكرر الطلب باستخدام `while loop` لحد ما المستخدم يدخل بيانات صحيحة وتتغير حالة المتغير `loggedIn` لـ `true`.

**2. Technical Definitions (English):**
*   **While Loop:** A loop that repeats a block of code continuously as long as a specified condition evaluates to true. It checks the condition before executing the code.
*   **Infinite Loop:** A loop that never ends because its condition never becomes false, often causing the program to crash.
*   **Do-While Loop:** A variation of the while loop that executes the block of code at least once before checking the condition at the end.

**3. Code Implementation:**

```javascript
// Code block 1: Standard While Loop
let username = "";

// Will continuously prompt until user enters something or hits cancel (null)
while (username === "" || username === null) {
    username = window.prompt("Enter your name");
}
console.log(`Hello ${username}`);

// Code block 2: Do-While Loop (Executes the prompt first, then checks condition)
let loggedIn = false;
let user;
let password;

do {
    user = window.prompt("Enter username");
    password = window.prompt("Enter password");

    if (user === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("You are logged in");
    } else {
        console.log("Invalid credentials! Please try again");
    }
} while (!loggedIn);
```

---

### 22. For Loops (حلقات التكرار `for`)

**1. Conceptual Explanation (Arabic):**
حلقة الـ `for` بنستخدمها لما نكون عايزين نكرر كود عدد محدود ومحدد من المرات، عكس الـ `while` اللي بتكرر لحد ما شرط يتغير. جملة الـ `for` بتتكون من 3 أجزاء جوه الأقواس: الجزء الأول هو إنشاء عداد مؤقت (Temporary Counter) بنسميه عادة `i` وبنديله قيمة بداية (Initialization). الجزء التاني هو الشرط (Condition) اللي طول ما هو `true` الحلقة بتستمر. الجزء التالت هو مقدار الزيادة أو النقصان للعداد (Increment/Decrement). بنقدر نعد لقدام أو نعد بالعكس، وبنقدر نزود العداد بواحد أو بأرقام تانية زي 2 أو 3. كمان المدرب شرح كلمتين مهمين جداً جوه الحلقات: كلمة `continue` بتخلينا نتخطى الدورة (Iteration) الحالية وننط للي بعدها مباشرة (زي استبعاد الرقم 13)، وكلمة `break` بتكسر الحلقة وتخرجنا منها تماماً حتى لو لسه مخلصتش الشروط بتاعتها.

**2. Technical Definitions (English):**
*   **For Loop:** A loop that repeats a block of code a limited, specific number of times. It contains an initialization, a condition, and an increment/decrement statement.
*   **Counter (e.g., `let i`):** A temporary variable declared within a loop to keep track of the number of iterations.
*   **`continue`:** A keyword used to skip the current iteration of a loop and immediately proceed to the next iteration.
*   **`break`:** A keyword used to break out of a loop completely, terminating its execution.

**3. Code Implementation:**

```javascript
// Code block 1: Basic For Loop (Counting up by 1)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Code block 2: Counting down by 2
for (let i = 10; i > 0; i -= 2) {
    console.log(i);
}
console.log("Happy New Year!");

// Code block 3: Using 'continue' to skip an iteration
for (let i = 1; i <= 20; i++) {
    if (i === 13) {
        continue; // Skips printing 13
    }
    console.log(i);
}

// Code block 4: Using 'break' to exit the loop entirely
for (let i = 1; i <= 20; i++) {
    if (i === 13) {
        break; // Loop stops completely when it reaches 13
    }
    console.log(i);
}
```

[End of Part 3]



### 23. Number Guessing Game (لعبة تخمين الأرقام)

**1. Conceptual Explanation (Arabic):**
المدرب قام بتطبيق عملي لإنشاء لعبة تخمين أرقام بتدمج بين المفاهيم اللي اتعلمناها زي حلقات التكرار والجمل الشرطية والأرقام العشوائية. الفكرة بتبدأ بتحديد حد أدنى (Minimum) وحد أقصى (Maximum)، وتوليد رقم عشوائي بينهم عشان يكون هو الإجابة الصحيحة (Answer). بعدين بنعمل حلقة تكرار باستخدام `while` ونربطها بمتغير منطقي اسمه `running` قيمته المبدئية `true` عشان اللعبة تفضل شغالة لحد ما المستخدم يخمن الرقم الصح. جوه الحلقة، بنستقبل تخمين المستخدم عن طريق `window.prompt`، وبما إن المدخلات دي بتكون نصوص، بنحولها لرقم باستخدام `Number()`. المدرب وضح أهمية التحقق من صحة المدخلات؛ لإن المستخدم ممكن يدخل نص فاضي أو حروف بدل الأرقام، وهنا بنستخدم دالة `isNaN()` عشان نتاكد إن المدخل رقم صحيح، وكمان بنتاكد إنه جوه النطاق المسموح (بين الحد الأدنى والأقصى). لو المدخل صحيح، بنزود عداد المحاولات (Attempts) بواحد، ونبدأ نقارن: لو التخمين أصغر من الإجابة بنطبع "Too low"، ولو أكبر بنطبع "Too high"، ولو بيساوي الإجابة بنطبع رسالة تهنئة مع عدد المحاولات، وبنحول قيمة `running` لـ `false` عشان نخرج من حلقة التكرار وننهي اللعبة.

**2. Technical Definitions (English):**
*   **`isNaN(value)`:** A built-in JavaScript function that determines whether a value is an illegal number (Not-a-Number).
*   **Game Loop:** A programming pattern, often implemented with a `while` loop and a boolean flag (like `running`), used to keep an application continuously executing until a specific exit condition is met.

**3. Code Implementation:**

```javascript
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    
    // Validation
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    } else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    } else {
        attempts++; // Increment attempts if valid
        
        // Game Logic
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        } else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        } else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false; // Exit the loop
        }
    }
}
```

---

### 24. Functions (الدوال)

**1. Conceptual Explanation (Arabic):**
تعتبر الدوال (Functions) عبارة عن بلوك من الكود مصمم عشان ينفذ مهمة معينة، وبنقدر نعيد استخدامه أكتر من مرة في أي مكان في البرنامج. المبدأ ده بيطبق قاعدة برمجية شهيرة اسمها (DRY - Don't Repeat Yourself) يعني متكررش الكود بتاعك. عشان ننشئ دالة بنستخدم كلمة `function` متبوعة باسم الدالة (ولازم الاسم يكون معبر عن وظيفتها)، وبعدين أقواس، وأخيراً أقواس معقوفة بنكتب جواها الكود. الدالة مش بتشتغل لوحدها؛ لازم نعملها استدعاء (Call/Invoke) عن طريق كتابة اسمها متبوعاً بالأقواس. المدرب وضح إننا نقدر نمرر بيانات للدالة عشان تشتغل عليها، البيانات دي واحنا بنبعتها وقت الاستدعاء بنسميها (Arguments)، ولما الدالة بتستقبلها بتخزنها في متغيرات مؤقتة بنسميها (Parameters). الترتيب هنا مهم جداً؛ لازم ترتيب الـ Arguments يطابق ترتيب الـ Parameters. كمان الدالة ممكن بدل ما تطبع النتيجة مباشرة، ترجعها لينا عشان نقدر نخزنها في متغير ونستخدمها بعدين، وده بيتم عن طريق كلمة `return`. بمجرد ما البرنامج بيشوف كلمة `return`، الدالة بتنتهي فوراً وترجع القيمة، وأي كود مكتوب بعدها جوه الدالة مش بيتنفذ.

**2. Technical Definitions (English):**
*   **Function:** A block of reusable code designed to perform a particular task.
*   **Invoke / Call:** The act of executing a function by writing its name followed by parentheses.
*   **Arguments:** The actual values or data passed to a function when it is invoked.
*   **Parameters:** Temporary variables defined in the function declaration that act as placeholders for the incoming arguments.
*   **`return`:** A keyword used to send a value back from a function to the place where it was called, effectively terminating the function's execution.

**3. Code Implementation:**

```javascript
// Code block 1: Basic Function with Parameters and Arguments
function happyBirthday(username, age) {
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log(`You are ${age} years old`);
}

happyBirthday("Bro Code", 25); // Invoking with arguments
happyBirthday("SpongeBob", 30);


// Code block 2: Using the 'return' keyword for calculations
function add(x, y) {
    return x + y; // Returns the sum back to the caller
}
let answer = add(2, 3);
console.log(answer); // Outputs: 5


// Code block 3: Advanced function using Ternary Operator
function isValidEmail(email) {
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("brofake.com")); // Outputs: false
console.log(isValidEmail("elonmusk@com")); // Outputs: true
```

---

### 25. Variable Scope (نطاق المتغيرات)

**1. Conceptual Explanation (Arabic):**
نطاق المتغيرات (Variable Scope) هو المفهوم اللي بيحدد فين نقدر نوصل للمتغير ده ونستخدمه جوه الكود. عندنا نوعين أساسيين: النطاق المحلي (Local Scope) والنطاق العام (Global Scope). أي متغير بيتم تعريفه جوه دالة (أو جوه أي أقواس معقوفة) بيكون ليه نطاق محلي؛ يعني نقدر نستخدمه بس جوه الدالة دي، وأي كود بره الدالة ملوش أي صلاحية إنه يشوفه أو يتعامل معاه. المدرب شبه الموضوع بالبيوت؛ إنت تقدر تشوف اللي جوه بيتك، لكن متعرفش إيه اللي بيحصل جوه بيت جارك. على الناحية التانية، المتغير اللي بيتعرف بره أي دالة بيكون ليه نطاق عام؛ وده معناه إن أي دالة في البرنامج تقدر تشوفه وتعدل عليه. المدرب أضاف تشبيه تاني للمتغير العام بأنه زي كشاف نور في الشارع، كل البيوت تقدر تشوفه من جوه. من المهم نعرف إن لو عندنا متغيرين بنفس الاسم، واحد محلي والتاني عام، البرنامج دايماً بيدي الأولوية للمتغير المحلي اللي جوه الدالة، ولو ملقاهوش بيبدأ يدور في النطاق العام.

**2. Technical Definitions (English):**
*   **Variable Scope:** The context or region in a program where a variable is recognized, accessible, and valid.
*   **Local Scope:** Variables declared inside a function or block are local to that function/block and cannot be accessed from the outside.
*   **Global Scope:** Variables declared outside of all functions have global scope and can be accessed and modified from anywhere in the program.

**3. Code Implementation:**

```javascript
let x = 3; // Global Scope Variable

function function1() {
    let x = 1; // Local Scope Variable
    console.log(x); // Uses local 'x', outputs 1
}

function function2() {
    let x = 2; // Local Scope Variable (No conflict with function1's 'x')
    console.log(x); // Uses local 'x', outputs 2
}

function function3() {
    console.log(x); // No local 'x' found, falls back to Global 'x', outputs 3
}

function1();
function2();
function3();
```

---

### 26. Temperature Conversion Program (برنامج تحويل درجات الحرارة)

**1. Conceptual Explanation (Arabic):**
المدرب عمل مشروع تطبيقي لبرنامج بيحول درجات الحرارة بين المئوية (Celsius) والفهرنهايت (Fahrenheit). البرنامج بيتكون من حقل إدخال (Input Number) واختيارين (Radio Buttons) لتحديد نوع التحويل، وزرار للتنفيذ. في الجافا سكريبت، بنستهدف العناصر دي وبنعمل دالة اسمها `convert` بتشتغل لما نضغط على الزرار. الدالة دي أول حاجة بتعملها إنها بتسحب القيمة من حقل الإدخال وبتحولها لرقم. بعدين بتستخدم الجمل الشرطية عشان تفحص خاصية الـ `checked` الخاصة بأزرار الاختيار. لو اختيار "للفهرنهايت" هو اللي متحدد، بنطبق معادلة الضرب في 9 والقسمة على 5 وبعدين نجمع 32. ولو اختيار "للمئوية" هو اللي متحدد، بنطرح 32 الأول وبعدين نضرب في 5 ونقسم على 9. عشان نطلع النتيجة بشكل احترافي ومنمنعش ظهور كسور عشرية طويلة جداً، المدرب استخدم دالة `toFixed()` وحدد رقم 1 عشان يقرب النتيجة لخانة عشرية واحدة بس.

**2. Technical Definitions (English):**
*   **Temperature Conversion Program:** A utility application that applies mathematical formulas to convert numerical temperature values between different scales (Celsius/Fahrenheit).
*   **`.toFixed(digits)`:** A number method that formats a number using fixed-point notation, rounding it to a specified number of decimal places and returning it as a string.

**3. Code Implementation:**

```html
<!-- Simplified HTML Setup -->
<input type="number" id="textBox" value="0">
<input type="radio" id="toFahrenheit" name="unit" checked>
<label>Celsius to Fahrenheit</label>
<input type="radio" id="toCelsius" name="unit">
<label>Fahrenheit to Celsius</label>
<button onclick="convert()">Submit</button>
<p id="result"></p>
```

```javascript
// JavaScript Implementation
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        // Using toFixed(1) to limit decimals to 1 place
        result.textContent = temp.toFixed(1) + "°F"; 
    } 
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    } 
    else {
        result.textContent = "Select a unit";
    }
}
```

---

### 27. Arrays (المصفوفات)

**1. Conceptual Explanation (Arabic):**
المصفوفة (Array) هي عبارة عن هيكل بيانات بيسمح لنا نخزن أكتر من قيمة جوه متغير واحد بس، بدل ما نعمل متغير منفصل لكل قيمة. بننشئ المصفوفة باستخدام الأقواس المربعة `[]` وبنفصل بين العناصر بفاصلة. زي النصوص بالظبط، عناصر المصفوفة بتترتب بنظام الفهرسة اللي بيبدأ من صفر (Zero-based indexing). نقدر نستبدل أي عنصر عن طريق تحديد مكانه بالمؤشر بتاعه وإعطائه قيمة جديدة. الجافا سكريبت بتوفر لنا دوال (Methods) جاهزة للتعامل مع المصفوفات: دالة `push` بتضيف عنصر جديد في نهاية المصفوفة، ودالة `pop` بتحذف آخر عنصر. ولو عايزين نضيف في البداية بنستخدم `unshift`، وللحذف من البداية بنستخدم `shift`. كمان نقدر نعرف عدد العناصر باستخدام خاصية `length`. عشان نعرض كل العناصر، بنقدر نستخدم حلقة التكرار العادية `for` ونمشي على المؤشرات من الصفر لحد طول المصفوفة، أو نستخدم النسخة الأحدث والأسهل `for...of` اللي بتسحب عنصر بعنصر بشكل مباشر. أخيراً، لترتيب العناصر أبجدياً بنستخدم دالة `sort`، وعشان نعكس الترتيب بنستخدم دالة `reverse`. كمان، للتأكد إذا كان المتغير مصفوفة ولا لأ بنستخدم `Array.isArray()` لإن استخدام `typeof` بيرجع دايماً `object`.

**2. Technical Definitions (English):**
*   **Array:** A variable-like data structure that can hold more than one value at a time in an ordered list.
*   **`push()`:** A method that adds one or more elements to the end of an array.
*   **`pop()`:** A method that removes the last element from an array.
*   **`unshift()`:** A method that adds one or more elements to the beginning of an array.
*   **`shift()`:** A method that removes the first element from an array.
*   **Enhanced For Loop (`for...of`):** A simplified loop syntax used specifically to iterate over iterable objects like arrays or strings, returning the value of each element directly.
*   **`sort()` / `reverse()`:** Methods used to sort array elements alphabetically, or reverse their current order.
*   **`Array.isArray()`:** A static method that determines whether the passed value is an Array.

**3. Code Implementation:**

```javascript
let fruits = ["apple", "orange", "banana"];

// Accessing and Modifying
console.log(fruits); // "apple"
fruits = "coconut"; // Changes "apple" to "coconut"

// Array Methods for Adding/Removing
fruits.push("mango"); // Adds to the end
fruits.pop(); // Removes the last element ("mango")
fruits.unshift("mango"); // Adds to the beginning
fruits.shift(); // Removes the first element ("mango")

// Length and Index searching
let numOfFruits = fruits.length;
let index = fruits.indexOf("banana"); // Returns 2 (or -1 if not found)

// Sorting
fruits.sort(); // Alphabetical order
fruits.sort().reverse(); // Reverse alphabetical order

// Iterating using a standard For Loop
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Iterating using an Enhanced For Loop (for...of)
for(let fruit of fruits) {
    console.log(fruit);
}

// Checking if it is an array
console.log(typeof fruits); // Outputs: "object"
console.log(Array.isArray(fruits)); // Outputs: true
```

---

### 28. Spread Operator (معامل النشر)

**1. Conceptual Explanation (Arabic):**
معامل النشر (Spread Operator) بيمثل بتلات نقط `...`، ووظيفته إنه بيفكك أو بينشر العناصر اللي جوه أي كائن قابل للتكرار (زي المصفوفات أو النصوص) ويطلعهم كعناصر منفصلة. المدرب شبه الموضوع بإنك تفتح صندوق وتطلع كل المحتويات اللي جواه. المعامل ده مفيد جداً في حالات كتير؛ مثلاً لو عندنا دالة زي `Math.max()` اللي بتجيب أكبر رقم، الدالة دي مش بتقبل مصفوفة بشكل مباشر، لكن لو استخدمنا معامل النشر قبل المصفوفة، هيفكك الأرقام ويبعتها للدالة عشان تشتغل صح. كمان بنقدر نستخدمه عشان نعمل نسخة سطحية (Shallow Copy) من مصفوفة؛ بحيث يكون عندنا مصفوفتين ليهم نفس القيم بس مش متصلين ببعض في الذاكرة. الاستخدام التالت القوي جداً هو دمج مصفوفتين أو أكتر في مصفوفة واحدة جديدة، ونقدر كمان نضيف عناصر منفصلة معاهم في نفس الوقت.

**2. Technical Definitions (English):**
*   **Spread Operator (`...`):** A syntax that allows an iterable (such as an array or string) to be expanded or unpacked into individual separate elements.
*   **Shallow Copy:** Creating a new data structure that contains identical values to the original, but exists independently in memory.

**3. Code Implementation:**

```javascript
let numbers =;

// Code block 1: Using Spread with Math functions
// Math.max(numbers) would return NaN because it expects individual numbers, not an array
let maximum = Math.max(...numbers); 
console.log(maximum); // Outputs: 5

// Code block 2: Using Spread on Strings
let username = "Bro Code";
let letters = [...username].join("-");
console.log(letters); // Outputs: B-r-o- -C-o-d-e

// Code block 3: Copying and Merging Arrays
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

// Shallow copy of fruits
let newFruits = [...fruits]; 

// Combining multiple arrays and adding new standalone elements
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods); 
// Outputs: ["apple", "orange", "banana", "carrots", "celery", "potatoes", "eggs", "milk"]
```

---

### 29. Rest Parameters (معاملات الباقي)

**1. Conceptual Explanation (Arabic):**
معاملات الباقي (Rest Parameters) بتنكتب برضه بتلات نقط `...`، لكنها بتعمل العكس تماماً لمعامل النشر. معامل النشر بيفكك المصفوفة لعناصر، إنما الـ Rest Parameters بتجمع مجموعة من العناصر المنفصلة وتدمجهم جوه مصفوفة واحدة. بنستخدم المعامل ده دايماً جوه أقواس تعريف الدوال (Parameters). الفائدة الأساسية منه هي إننا نقدر نعمل دالة بتستقبل عدد غير محدد من المدخلات (Arguments). فمثلاً لو عايزين نعمل دالة بتجمع أرقام، ومش عارفين المستخدم هيبعت رقمين ولا خمسة ولا عشرة، بنكتب `(...numbers)` في التعريف، فالجافا سكريبت هتاخد كل الأرقام اللي المستخدم بيبعتها وتلمهم كلهم في مصفوفة نقدر نعمل عليها حلقة تكرار (Loop) عشان نجمعهم أو نطلع المتوسط بتاعهم. قاعدة مهمة جداً هي إن الـ Rest Parameter لازم يكون هو آخر حاجة في المعاملات، ومينفعش نستخدم غير واحد بس في الدالة.

**2. Technical Definitions (English):**
*   **Rest Parameters (`...`):** A parameter prefix that allows a function to accept an indefinite number of arguments by bundling them into a single array variable.

**3. Code Implementation:**

```javascript
// Code block 1: Using Rest Parameters to accept indefinite arguments
function openFridge(...foods) {
    console.log(foods); // 'foods' is now an array containing all passed arguments
}
openFridge("pizza", "hamburger", "hotdog", "sushi");

// Code block 2: Mathematical operations using Rest Parameters
function sum(...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}
const total = sum(1, 2, 3, 4, 5); 
console.log(`Your total is $${total}`); // Outputs: Your total is $15

// Code block 3: Combining Strings using Rest Parameters
function combineStrings(...strings) {
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "SpongeBob", "SquarePants", "III");
console.log(fullName); // Outputs: Mr. SpongeBob SquarePants III
```

**4. Summary/Comparison Table:**
| وجه المقارنة | Spread Operator (`...`) | Rest Parameters (`...`) |
| :--- | :--- | :--- |
| **الوظيفة الأساسية (Functionality)** | بيقوم بفك وتوزيع العناصر من مصفوفة أو نص (Expands an iterable into separate elements) | بيقوم بتجميع العناصر المنفصلة وتعبئتها في مصفوفة (Bundles separate elements into an array) |
| **مكان الاستخدام (Usage Context)** | يُستخدم عند استدعاء الدوال، أو عند إنشاء/دمج المصفوفات | يُستخدم حصرياً داخل تعريف معاملات الدوال (Function Parameters) |
| **المثال التوضيحي (Analogy)** | تفريغ محتويات صندوق على الطاولة (Unpacking a box) | تجميع أشياء متفرقة ووضعها في صندوق واحد (Packing items into a box) |

[End of Part 4]


### 30. Dice Roller Program (برنامج رمي حجر النرد)

**1. Conceptual Explanation (Arabic):**
المدرب قام بتطبيق عملي متكامل لبرنامج رمي حجر النرد باستخدام الجافا سكريبت والـ HTML والـ CSS. الفكرة بتعتمد على إن المستخدم بيدخل عدد أحجار النرد اللي عايز يرميها في مربع نص (Input Number)، ولما يضغط على زرار "Roll"، الجافا سكريبت بتسحب الرقم ده. البرنامج بيعمل مصفوفتين فاضيين: واحدة للأرقام (القيم العشوائية)، والتانية لصور أحجار النرد. باستخدام حلقة تكرار `for`، البرنامج بيلف عدد مرات بيساوي عدد أحجار النرد المطلوبة. جوه الحلقة دي، بنولد رقم عشوائي بين 1 و 6 لكل حجر نرد باستخدام `Math.random()` و `Math.floor()`. بعد كده بنضيف الرقم ده لمصفوفة القيم باستخدام دالة `push()`. في نفس الوقت، بننشئ نص برمجي لوسم صورة `<img src="...">` بيشير لمسار الصورة المناسبة للرقم اللي طلع، وبنضيفه لمصفوفة الصور. في النهاية، بنعرض الأرقام كنص مفصول بفاصلة باستخدام دالة `join()`, وبنعرض الصور جوه عنصر في الصفحة باستخدام خاصية `innerHTML` ونربطها ببعض من غير أي فواصل.

**2. Technical Definitions (English):**
*   **Dice Roller Program:** An interactive application that generates pseudo-random numbers simulating a dice roll and conditionally renders corresponding images to the DOM.
*   **`innerHTML`:** A property used to get or set the HTML markup contained within an element, allowing the dynamic rendering of tags like `<img>` from an array of strings.
*   **`join(separator)`:** An array method that creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

**3. Code Implementation:**

```javascript
// Function triggered by clicking the 'Roll' button
function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    
    const values = [];
    const images = [];

    // Loop runs for the amount of dice the user entered
    for(let i = 0; i < numOfDice; i++) {
        // Generate random number between 1 and 6
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        
        // Push an image tag string dynamically pointing to the correct image file
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }

    // Display the numbers separated by a comma and a space
    diceResult.textContent = `dice: ${values.join(", ")}`;
    
    // Render the HTML image tags into the DOM without any separating characters
    diceImages.innerHTML = images.join("");
}
```

---

### 31. Random Password Generator (برنامج توليد كلمات المرور)

**1. Conceptual Explanation (Arabic):**
في التطبيق العملي ده، المدرب برمج أداة لتوليد كلمات مرور عشوائية وقوية. البرنامج بيعتمد على دالة بتاخد مجموعة من الإعدادات كمعاملات (Arguments): طول كلمة المرور (Length)، وهل تتضمن حروف صغيرة، حروف كبيرة، أرقام، ورموز (كقيم منطقية True/False). جوه الدالة، بننشئ ثوابت نصية بتحتوي على كل الحروف الممكنة (أبجدية صغيرة، أبجدية كبيرة، أرقام من 0 لـ 9، ورموز). باستخدام الجمل الشرطية (أو المعامل الثلاثي `Ternary Operator`)، بنشوف إيه الخيارات اللي المستخدم فعلها، وبندمج النصوص دي في متغير واحد كبير اسمه `allowedChars`. قبل ما نولد الكلمة، لازم نتأكد إن الطول أكبر من صفر، وإن المستخدم اختار نوع واحد على الأقل من الحروف؛ وإلا بنرجع رسالة خطأ. لو البيانات صحيحة، بنعمل حلقة تكرار `for` بتشتغل على حسب الطول المطلوب، وجوه الحلقة بنختار حرف عشوائي من `allowedChars` باستخدام الفهرس العشوائي (Random Index) وبنضيفه لمتغير كلمة المرور باستخدام الدمج النصي (`+=`). 

**2. Technical Definitions (English):**
*   **Password Generator:** A programmatic utility that concatenates strings of allowed characters based on boolean configurations, then selects random indices to build a randomized output string of a specified length.
*   **Validation Check:** A conditional block at the beginning of a function that ensures inputs meet necessary requirements before proceeding (e.g., checking if password length is strictly greater than 0).

**3. Code Implementation:**

```javascript
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    // Concatenate chosen character sets using Ternary Operators
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    // Validation checks
    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least one set of characters needs to be selected)`;
    }

    // Generate the password loop
    for(let i = 0; i < length; i++){
        // Generate a random index based on the length of allowed characters
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                 includeLowercase, 
                                 includeUppercase, 
                                 includeNumbers, 
                                 includeSymbols);

console.log(`Generated password: ${password}`);
```

---

### 32. Callbacks (الدوال الممررة كمعاملات `Callbacks`)

**1. Conceptual Explanation (Arabic):**
الـ Callback عبارة عن دالة بيتم تمريرها كمعامل (Argument) لدالة تانية عشان يتم استدعاؤها وتنفيذها لاحقاً. المدرب وضح إن المفهوم ده بنستخدمه بشكل أساسي للتعامل مع العمليات غير المتزامنة (Asynchronous Operations) زي قراءة ملف، أو جلب بيانات من قاعدة بيانات، أو التعامل مع الشبكات. لإن الجافا سكريبت بطبيعتها مش بتستنى عملية تخلص عشان تنفذ اللي بعدها (ممكن تكمل قراءة باقي الكود وتطبع حاجة لسه متحملتش أساساً)، بنستخدم الـ Callbacks كطريقة نقول بيها للبرنامج: "لما تخلص المهمة دي بالكامل، استدعي الدالة دي نفذها". في الاستخدام، بنمرر اسم الدالة كمعامل من غير الأقواس `()` عشان تتجنب استدعاءها بشكل فوري ومباشر في نفس اللحظة. الدالة المستلمة بتاخد المعامل ده بتسميه (عادة `callback`)، وفي نهاية تنفيذ مهامها، بتكتب `()callback` عشان تشغله وتمرر له القيم المطلوبة زي ناتج عملية حسابية.

**2. Technical Definitions (English):**
*   **Callback:** A function that is passed as an argument into another function and is invoked after the outer function has completed its task.
*   **Asynchronous Operations:** Tasks that take an indeterminate amount of time to complete (like network requests or file reading). Callbacks ensure subsequent code only runs *after* these tasks finish.

**3. Code Implementation:**

```javascript
// Code block 1: Basic Callback Flow
function hello(callback) {
    console.log("Hello!");
    callback(); // Invokes the passed function
}

function goodbye() {
    console.log("Goodbye!");
}

// Passing the 'goodbye' function as a callback WITHOUT parentheses
hello(goodbye); 


// Code block 2: Passing values to a callback
function sum(callback, x, y) {
    let result = x + y;
    // Execute the callback and pass the result to it
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}

// Invoking sum and deciding what to do with the result via different callbacks
sum(displayConsole, 1, 2); // Outputs 3 to the console
sum(displayPage, 1, 2);    // Outputs 3 to the DOM element
```

---

### 33. `forEach()` Method (دالة التكرار `forEach`)

**1. Conceptual Explanation (Arabic):**
تعتبر دالة `forEach` أداة مدمجة مع المصفوفات (Arrays) وظيفتها إنها بتعمل حلقة تكرار (Loop) على كل عناصر المصفوفة، وبتنفذ دالة معينة (Callback Function) على كل عنصر بشكل منفصل. وراء الكواليس، الـ `forEach` بتقدم للدالة الممررة تلات حاجات بالترتيب: العنصر الحالي (Element)، رقم الفهرس الخاص بيه (Index)، والمصفوفة نفسها (Array). الفائدة الكبيرة للدالة دي إنها بتوفر علينا كتابة حلقات الـ `for` التقليدية وبتخلي الكود أسهل في القراءة. المدرب وضح إننا نقدر نستخدمها لطباعة العناصر، أو التعديل عليها مباشرة جوه المصفوفة (زي مضاعفة الأرقام، ترفيع الأرقام لأس معين، أو تغيير حالة الحروف لنصوص). مهم جداً نعرف إن `forEach` مش بترجع مصفوفة جديدة، هي بتطبق التغييرات على المصفوفة الحالية الأصلية. 

**2. Technical Definitions (English):**
*   **`forEach()`:** An array method used to execute a provided callback function once for each array element.
*   **Implicit Arguments:** The `forEach` method automatically supplies the callback function with three arguments: the current `element`, the current `index`, and the `array` object being traversed.

**3. Code Implementation:**

```javascript
let numbers =;

// Code block 1: Doubling elements using forEach
function double(element, index, array) {
    // Modifies the original array directly
    array[index] = element * 2; 
}
numbers.forEach(double);
console.log(numbers); // Outputs:


// Code block 2: String manipulation with forEach
let fruits = ["apple", "orange", "banana", "coconut"];

function capitalize(element, index, array) {
    // Capitalize the first letter and append the rest of the string
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits.forEach(capitalize);
// To display each element individually
fruits.forEach(display); 

function display(element) {
    console.log(element);
}
// Outputs: Apple, Orange, Banana, Coconut
```

---

### 34. `map()` Method (دالة التعيين `map`)

**1. Conceptual Explanation (Arabic):**
تعتبر دالة الـ `map` شبه الـ `forEach` بالظبط من ناحية إنها بتستقبل دالة (Callback) وبتنفذها على كل عنصر من عناصر المصفوفة، وبتقبل نفس المعاملات (Element, Index, Array). لكن الاختلاف الجوهري والقوي جداً بينهم، هو إن الـ `map` مش بتعدل على المصفوفة الأصلية إطلاقاً؛ إنما هي بترجع مصفوفة جديدة (New Array) بالكامل بتحتوي على النتائج اللي الدالة رجعتها. المدرب أظهر أمثلة لتربيع وتكعيب الأرقام وتخزينهم في مصفوفات جديدة لحفظ الأرقام الأصلية بدون تعديل. كمان قدم مثال احترافي وهو إعادة ترتيب طريقة عرض التواريخ؛ بحيث استخدم دالة الـ `split` لتقسيم التاريخ لأجزاء، وبعدها غير الترتيب ودمجهم تاني باستخدام الـ (Template Literals)، وبكده طلع مصفوفة جديدة بتواريخ مترتبة من غير ما يخرب المصفوفة القديمة.

**2. Technical Definitions (English):**
*   **`map()`:** A built-in array method that creates and returns a new array populated with the results of calling a provided callback function on every element in the calling array. It does not mutate the original array.

**3. Code Implementation:**

```javascript
// Code block 1: Preserving original arrays while doing math
const numbers =;

function square(element) {
    return Math.pow(element, 2);
}

const squares = numbers.map(square);
console.log(squares); // New array:
console.log(numbers); // Original untouched:


// Code block 2: Reformatting an array of dates
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

function formatDates(element) {
    // Splits "YYYY-M-DD" into an array: ["YYYY", "M", "DD"]
    const parts = element.split("-"); 
    // Rearranges to "M/DD/YYYY"
    return `${parts}/${parts}/${parts}`; 
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates); 
// Outputs: ["1/10/2024", "2/20/2025", "3/30/2026"]
```

---

### 35. `filter()` Method (دالة التصفية `filter`)

**1. Conceptual Explanation (Arabic):**
دالة الـ `filter` بنستخدمها عشان ننشئ مصفوفة جديدة بتحتوي فقط على العناصر اللي عدت من اختبار (Test) أو شرط معين. الدالة دي بتشتغل إزاي؟ بتاخد دالة (Callback) بتطرح شرط بيتم اختباره على كل عنصر؛ لو نتيجة الشرط ده رجعت `true` (يعني العنصر نجح في الاختبار)، العنصر ده بيتنقل ويدخل في المصفوفة الجديدة. لو رجعت `false`، العنصر ده بيتم تجاهله ومبيضافش. المدرب وضح أكتر من تطبيق عملي على المفهوم ده: زي إننا نصفي مصفوفة أرقام ونجيب الأرقام الزوجية أو الفردية بس باستخدام باقي القسمة (Modulus)، أو إننا نصفي مصفوفة أعمار ونطلع منها البالغين بس (اللي عمرهم 18 سنة أو أكتر)، أو نصفي كلمات بناءً على طول الكلمة (عدد الحروف أقل أو أكبر من رقم معين). وكل ده بيرجع لينا مصفوفة جديدة نظيفة مفلترة حسب شروطنا.

**2. Technical Definitions (English):**
*   **`filter()`:** An array method that creates a new array filled with elements that pass a test (returning a truthy value) provided by a callback function.

**3. Code Implementation:**

```javascript
// Code block 1: Filtering Even and Odd Numbers
let numbers =;

function isEven(element) {
    return element % 2 === 0; // Returns true if even
}

function isOdd(element) {
    return element % 2 !== 0; // Returns true if odd
}

let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums); //
console.log(oddNums);  //


// Code block 2: Filtering Ages
const ages =;

function isAdult(element) {
    return element >= 18;
}

const adults = ages.filter(isAdult);
console.log(adults); //


// Code block 3: Filtering Words by Length
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getShortWords(element) {
    return element.length <= 6;
}

const shortWords = words.filter(getShortWords);
console.log(shortWords); // ["apple", "orange", "banana", "kiwi"]
```

---

### 36. `reduce()` Method (دالة التقليص `reduce`)

**1. Conceptual Explanation (Arabic):**
دالة الـ `reduce` بتعتبر من أقوى الدوال المدمجة مع المصفوفات. وظيفتها إنها بتمسك كل عناصر المصفوفة وبتقوم بتقلصيهم أو دمجهم عشان ترجع في النهاية قيمة واحدة بس (Single Value). الـ Callback دالة هنا بتاخد معاملين أساسيين: الـ `accumulator` (المجمع أو الحصالة اللي بنخزن فيها النتيجة التراكمية)، والـ `element` (العنصر الحالي اللي عليه الدور). في كل دورة (Iteration)، الدالة بترجع نتيجة بتتحط أوتوماتيكياً في الـ accumulator للدورة اللي بعدها. المدرب شرح إننا بنستخدمها عشان نجمع الأسعار في سلة مشتريات (بنجمع العنصر الحالي على المجمع). وكمان وضح إننا نقدر نستخدمها عشان نطلع أكبر أو أصغر قيمة في مصفوفة، عن طريق استخدام دالة زي `Math.max()` لمقارنة المجمع (اللي بيمثل صاحب الرقم القياسي الحالي) مع العنصر الجديد اللي جاي عليه الدور.

**2. Technical Definitions (English):**
*   **`reduce()`:** An array method that executes a user-supplied "reducer" callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result is a single reduced value.
*   **Accumulator:** A parameter in the `reduce` callback that holds the accumulated value previously returned in the last invocation of the callback.

**3. Code Implementation:**

```javascript
// Code block 1: Summing an array of prices
const prices =;

function sum(accumulator, element) {
    return accumulator + element;
}

const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`); // Outputs: $105.00


// Code block 2: Finding the Maximum Value in an array
const grades =;

function getMax(accumulator, element) {
    // Accumulator acts as the current record holder
    return Math.max(accumulator, element); 
}

const maximum = grades.reduce(getMax);
console.log(maximum); // Outputs: 95
```

---

### 37. Function Expressions (تعبيرات الدوال)

**1. Conceptual Explanation (Arabic):**
تعبيرات الدوال (Function Expressions) هي طريقة لتعريف الدالة كقيمة، وبنقدر نخزنها جوه متغير، أو نمررها مباشرة كقيمة لدالة تانية. دي بتختلف عن الإعلان العادي للدوال (Function Declarations) اللي بيكون فيها الدالة ليها اسم وبنكتبها كبلوك كود مستقل. استخدام الـ Function Expressions بيخلينا نعمل دوال مجهولة الاسم (Anonymous Functions) ونمررها فوراً جوا الدوال اللي بتحتاج Callbacks زي `setTimeout`، و `map`، و `filter`، و `reduce`. الميزة الكبيرة هنا إننا بنحافظ على نظافة النطاق العام (Global Namespace)، لإننا مش بنخترع أسماء دوال كتير هنستخدمها مرة واحدة بس وننساها. مجرد ما بنعرفها كمتغير بنقدر نستدعيها باسم المتغير ده، أو بنكتبها مباشرة جوه أقواس الدالة التانية من غير أي اسم خالص.

**2. Technical Definitions (English):**
*   **Function Expression:** A way to define a function as a value and assign it to a variable or pass it as an argument.
*   **Anonymous Function:** A function declared without any named identifier, frequently used in function expressions and callbacks.
*   **`setTimeout(callback, milliseconds)`:** A built-in JavaScript function that calls a function or evaluates an expression after a specified number of milliseconds.

**3. Code Implementation:**

```javascript
// Code block 1: Function Expression assigned to a constant
const hello = function() {
    console.log("Hello");
}
hello(); // Invoking the function using the constant name

// Code block 2: Passing an Anonymous Function Expression to setTimeout
// Waits 3000ms (3 seconds) then executes the anonymous function
setTimeout(function() {
    console.log("Hello from setTimeout");
}, 3000); 

// Code block 3: Using Function Expressions inside Array Methods
const numbers =;

// Instead of declaring a separate function and passing its name, we pass the expression directly
const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
});

const evenNums = numbers.filter(function(element) {
    return element % 2 === 0;
});

const total = numbers.reduce(function(accumulator, element) {
    return accumulator + element;
});

console.log(squares);  //
console.log(evenNums); //
console.log(total);    // 21
```

**4. Summary/Comparison Table:**
| وجه المقارنة | Function Declaration (الإعلان العادي) | Function Expression (تعبير الدوال) |
| :--- | :--- | :--- |
| **التعريف (Definition)** | `function name() { ... }` | `const name = function() { ... }` |
| **التسمية (Naming)** | إجبارية (Must have a name) | يمكن أن تكون مجهولة الاسم (Can be anonymous) |
| **متى تُستخدم (Usage)** | الدوال الأساسية التي سيتم استدعاؤها في عدة أماكن مختلفة | الدوال البسيطة، تمرير الـ Callbacks، والدوال التي تُستخدم مرة واحدة |

[End of Part 5]


### 38. Arrow Functions (الدوال السهمية `Arrow Functions`)

**1. Conceptual Explanation (Arabic):**
في لغة الجافا سكريبت، تعتبر الدوال السهمية (Arrow Functions) طريقة مختصرة ومكثفة جداً لكتابة تعبيرات الدوال (Function Expressions). الدوال دي ممتازة جداً للدوال البسيطة اللي بنستخدمها مرة واحدة بس. الصيغة بتاعتها بتبدأ بكتابة المعاملات (Parameters) جوه أقواس، وبعدين بنرسم سهم `=>`، وبعدها بنكتب الكود اللي المفروض يتنفذ. في حالة إن الدالة بتاخد معامل واحد بس، بنقدر نستغنى عن الأقواس اللي حوالين المعامل. كمان لو الكود اللي هيتنفذ عبارة عن سطر واحد بس (Statement واحدة)، بنقدر نستغنى عن الأقواس المعقوفة الخاصة ببلوك الكود (Curly braces) وكمان بنستغنى عن كتابة كلمة `return` لإنها بتحصل بشكل ضمني وترجع القيمة تلقائياً. المدرب وضح إزاي نقدر نستخدم الدوال السهمية دي عشان نختصر الكود الخاص بدوال المصفوفات زي `map` و `filter` و `reduce` وكمان لاستخدامها كـ (Callback) مع دالة `setTimeout`.

**2. Technical Definitions (English):**
*   **Arrow Function:** A concise syntax for writing function expressions, typically used for short, single-use functions. It utilizes an arrow `=>` token to separate the parameters from the function body.

**3. Code Implementation:**

```javascript
// Code block 1: Normal Function Expression vs Arrow Function
const helloNormal = function(name, age) {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
}

// Equivalent Arrow Function
const helloArrow = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`);
}
helloArrow("Bro", 25);

// Code block 2: Using Arrow Functions with setTimeout
setTimeout(() => window.alert("Hello"), 3000);

// Code block 3: Using Arrow Functions with Array Methods
const numbers =;

// Map with Arrow Function
const squares = numbers.map(element => Math.pow(element, 2));

// Filter with Arrow Function (Implicit return)
const evenNums = numbers.filter(element => element % 2 === 0);

// Reduce with Arrow Function
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(evenNums);
console.log(total);
```

---

### 39. Objects (الكائنات `Objects`)

**1. Conceptual Explanation (Arabic):**
يعتبر الكائن (Object) عبارة عن مجموعة من الخواص (Properties) والدوال (Methods) المرتبطة ببعضها. الخواص دي بتمثل الحاجات اللي الكائن بيمتلكها (زي الاسم أو العمر أو الوظيفة)، وبتتكتب على هيئة أزواج من المفاتيح والقيم (Key-Value pairs) مفصولة بفاصلة. أما الدوال (Methods) فهي عبارة عن الأفعال أو السلوكيات اللي الكائن بيقدر يقوم بيها. الكائنات في البرمجة بتُستخدم عشان تمثل أشياء من العالم الحقيقي زي الأشخاص، أو المنتجات، أو الأماكن. عشان نوصل لأي خاصية أو دالة جوه الكائن ونتعامل معاها، بنكتب اسم الكائن وبعده نقطة (Dot Notation) وبعدين بنكتب اسم الخاصية أو بنستدعي الدالة.

**2. Technical Definitions (English):**
*   **Object:** A data structure that stores a collection of related properties and/or methods, representing real-world entities.
*   **Properties:** Values or attributes that belong to an object (what an object *has*).
*   **Methods:** Functions that belong to an object (what an object can *do*).

**3. Code Implementation:**

```javascript
// Creating an Object
const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    isEmployed: true,
    
    // Method using a function expression
    sayHello: function() {
        console.log("Hi! I am SpongeBob!");
    },
    
    // Method using an arrow function
    eat: () => console.log("I am eating a Krabby Patty")
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm Patrick..."),
    eat: () => console.log("I am eating roast beef, chicken, and pizza")
};

// Accessing Object Properties and Methods
console.log(person1.firstName); // "SpongeBob"
console.log(person1.age); // 30
console.log(person2.isEmployed); // false

person1.sayHello(); // "Hi! I am SpongeBob!"
person2.eat(); // "I am eating roast beef, chicken, and pizza"
```

---

### 40. `this` Keyword (الكلمة المرجعية `this`)

**1. Conceptual Explanation (Arabic):**
تعتبر الكلمة المرجعية `this` إشارة للكائن اللي بيتم استخدامها جواه، والنتيجة بتاعتها بتعتمد بالكامل على السياق الحالي (Immediate Context). لو استخدمنا `this` جوه دالة تابعة لكائن معين (Method)، فهي بتعود على الكائن ده نفسه، وبنقدر من خلالها نوصل لخواص الكائن ده من جواه ونستدعيها. المشكلة اللي المدرب حذر منها هي إننا منقدرش نستخدم الـ `this` مع الدوال السهمية (Arrow Functions) لو عايزين نشير للكائن؛ لإن الدالة السهمية مش بتعمل سياق خاص بيها، فبتخلي `this` تشير لكائن النافذة الأساسي للمتصفح (Window Object) بدل ما تشير للكائن اللي إحنا شغالين عليه، وده هيأدي لإن النتيجة ترجع `undefined`.

**2. Technical Definitions (English):**
*   **`this` Keyword:** A reference to the object where `this` is used. Its value depends on the immediate context in which it appears.
*   **Window Object:** The global object in a web browser that represents the browser window. Using `this` alone outside of an object, or inside an arrow function within an object, refers back to this global Window object.

**3. Code Implementation:**

```javascript
const person1 = {
    name: "SpongeBob",
    faveFood: "hamburgers",
    
    // Using 'this' properly inside a regular function expression
    sayHello: function() {
        // Output: "Hi! I am SpongeBob"
        console.log(`Hi! I am ${this.name}`); 
    },
    eat: function() {
        console.log(`${this.name} is eating ${this.faveFood}`);
    }
};

const person2 = {
    name: "Patrick",
    faveFood: "pizza",
    
    // WRONG: Using 'this' inside an arrow function
    eat: () => {
        // Output: "undefined is eating undefined" (refers to Window object)
        console.log(`${this.name} is eating ${this.faveFood}`);
    }
};

person1.sayHello();
person1.eat();
person2.eat(); 

// Using 'this' outside any object references the Window object
console.log(this); 
```

---

### 41. Constructors (الدوال البانية `Constructors`)

**1. Conceptual Explanation (Arabic):**
تُستخدم الـ (Constructors) كطريقة أو دالة خاصة لتعريف الخواص والدوال للكائنات بشكل أوتوماتيكي وديناميكي. الفكرة هنا إننا لو محتاجين ننشئ كائنات كتير جداً ليها نفس تركيبة الخواص (زي إنشاء بيانات لـ 3 سيارات مختلفة)، كتابة كل كائن بشكل يدوي بالـ (Curly braces) هتكون عملية مرهقة جداً ومكررة. الدالة البانية بتحل المشكلة دي عن طريق إنها بتستقبل البيانات كمعاملات (Arguments)، وبنستخدم معاها الكلمة المرجعية `this` عشان نخصص القيم الممررة دي لتكون خواص للكائن الجديد. ولما نحب ننشئ كائن جديد فعلياً، بنستدعي الدالة البانية دي مسبوقة بالكلمة المفتاحية `new`.

**2. Technical Definitions (English):**
*   **Constructor:** A special method or function used for defining and initializing the properties and methods of newly created objects.
*   **`new` Keyword:** A keyword used to invoke a constructor function, telling JavaScript to instantiate a brand new object based on that constructor's blueprint.

**3. Code Implementation:**

```javascript
// Constructor Function
function Car(make, model, year, color) {
    // Assigning received arguments to the object's properties using 'this'
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    
    // Adding a method to the constructed objects
    this.drive = function() {
        console.log(`You drive the ${this.model}`);
    }
}

// Instantiating Objects using the 'new' keyword
const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

// Accessing properties and methods
console.log(car1.make); // "Ford"
console.log(car2.color); // "blue"
console.log(car3.year); // 2026

car1.drive(); // "You drive the Mustang"
car2.drive(); // "You drive the Camaro"
```

---

### 42. Classes (الفئات `Classes`)

**1. Conceptual Explanation (Arabic):**
بالنسبة للـ (Classes)، فهي ميزة تم إضافتها في إصدار الجافا سكريبت (ES6) عشان توفر طريقة أنضف وأكثر هيكلة وتنظيماً للتعامل مع الكائنات مقارنة بالدوال البانية التقليدية اللي شرحناها. الفئة (Class) بتشتغل كأنها قالب أو مخطط هندسي (Blueprint) بنبني على أساسه كائنات جديدة. جوه الفئة دي، بنستخدم كلمة `constructor` عشان نعرّف الدالة البانية الأساسية اللي بتستقبل الخواص وبتعينها. كمان بنقدر نضيف دوال (Methods) للفئة بشكل مباشر ونظيف جداً من غير ما نكتب كلمة `function`، والدوال دي بتكون متاحة لكل الكائنات اللي بيتم استنساخها من الفئة دي.

**2. Technical Definitions (English):**
*   **Class:** An ES6 feature that provides a more structured and cleaner syntax to create objects and deal with object-oriented programming (OOP) concepts compared to traditional constructor functions.

**3. Code Implementation:**

```javascript
// Creating a Class
class Product {
    // Constructor method within the class
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Methods are written cleanly without the 'function' keyword
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

// Instantiating objects from the Class
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

const salesTax = 0.05; // 5% tax

// Using Class Methods
product1.displayProduct();
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
```

---

### 43. Static Keyword (الكلمة المفتاحية `static`)

**1. Conceptual Explanation (Arabic):**
تعتبر الكلمة المفتاحية `static` وسيلة لتعريف خواص أو دوال بتنتمي للفئة (Class) نفسها بشكل مباشر، ومش بتنتمي للكائنات (Objects) المستنسخة من الفئة دي. باختصار شديد، الفئة هي المالك الوحيد لأي حاجة بنكتب قبلها `static`. عشان نوصل لخاصية أو دالة ستاتيكية، بنكتب اسم الفئة نفسها متبوعاً بالنقطة، ومينفعش نوصلها أبداً عن طريق أسماء الكائنات اللي أنشأناها. المدرب ضرب مثال بكائن `Math` المدمج اللي بيحتوي على قيم ستاتيكية زي `Math.PI` بنقدر نوصلها باسم الكائن مباشرة. وكمان عمل مثال عملي قوي لفئة اسمها (User) بتحتوي على عداد ستاتيكي وظيفته يحسب إجمالي عدد المستخدمين اللي تم إنشاؤهم من الفئة دي، والعداد ده بيزيد كل مرة الدالة البانية بتشتغل فيها.

**2. Technical Definitions (English):**
*   **`static` Keyword:** A keyword that defines properties or methods that belong to the class itself, rather than to the individual objects (instances) created from that class.

**3. Code Implementation:**

```javascript
// Code block 1: Static Properties and Methods for utility
class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }
    
    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

// Accessed directly via the Class Name, not an object
console.log(MathUtil.PI); 
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getArea(10));


// Code block 2: Tracking instance creation using Static
class User {
    static userCount = 0; // Belongs to the User class

    constructor(username) {
        this.username = username;
        User.userCount++; // Increments the static variable every time an object is made
    }

    // Static Method
    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("SpongeBob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.username); // "SpongeBob"

// user1.userCount would be undefined. It must be accessed via the Class:
console.log(User.userCount); // 3
User.getUserCount(); // "There are 3 users online"
```

---

### 44. Inheritance (الوراثة `Inheritance`)

**1. Conceptual Explanation (Arabic):**
الوراثة (Inheritance) هي مفهوم قوي جداً في البرمجة الموجهة للكائنات (OOP) بيسمح لفئة فرعية جديدة (Child class) إنها تورث الخواص والدوال من فئة رئيسية تانية موجودة مسبقاً (Parent class). المفهوم ده بيساعد جداً في عملية إعادة استخدام الكود (Code Reusability) وبيمنعنا من تكرار نفس الخواص في فئات كتير بتشترك في نفس الصفات؛ وده بيطبق مبدأ شهير في البرمجة اسمه (DRY - Don't Repeat Yourself). عشان نخلي فئة تورث من فئة تانية بنستخدم الكلمة المفتاحية `extends`. الكائنات اللي بيتم استنساخها من الفئة الابن بتقدر توصل لكل خواص ودوال الفئة الأب كأنها بتاعتها بالظبط، بالإضافة لإنها تقدر تمتلك خواصها ودوالها المستقلة بيها (زي إن كل الحيوانات بتاكل وتنام، لكن الأرنب بيجري والسمكة بتعوم).

**2. Technical Definitions (English):**
*   **Inheritance:** An OOP concept that allows a new class to inherit the properties and methods of an existing class, establishing a parent-child relationship.
*   **`extends`:** The keyword used in a class declaration to create a child class that inherits from a parent class.

**3. Code Implementation:**

```javascript
// Parent Class (Super Class)
class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

// Child Class 1 inheriting from Animal
class Rabbit extends Animal {
    name = "rabbit";

    // Unique method only for Rabbit
    run() {
        console.log(`This ${this.name} is running`);
    }
}

// Child Class 2 inheriting from Animal
class Fish extends Animal {
    name = "fish";

    // Unique method only for Fish
    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();

// Rabbit inherits alive property and eat/sleep methods
console.log(rabbit.alive); // true
rabbit.eat(); // "This rabbit is eating"

// Rabbit uses its unique method
rabbit.run(); // "This rabbit is running"

// Fish cannot use run(), but has its own unique method
// fish.run(); // TypeError: fish.run is not a function
fish.swim(); // "This fish is swimming"
```

---

### 45. `super` Keyword (الكلمة المرجعية `super`)

**1. Conceptual Explanation (Arabic):**
تُستخدم الكلمة المرجعية `super` جوه الفئات (Classes) عشان تستدعي الدالة البانية (Constructor) الخاصة بالفئة الأب (Super class)، أو عشان توصل لخواصها ودوالها بشكل مباشر. القاعدة البرمجية الصارمة هنا بتلزمنا إننا لو بنبني دالة بانية جوه فئة ابن، لازم نستدعي `super()` ونمرر ليها المعاملات المشتركة قبل ما نحاول نستخدم الكلمة المرجعية `this` جوه الابن، وإلا الجافا سكريبت هتطلع خطأ (ReferenceError). الميزة هنا إن أي خواص مشتركة بين كل الأبناء (زي الاسم والعمر) بيتم تعريفها مرة واحدة بس في الأب ونبعتها من الابن باستخدام `super`. كمان بنقدر نستخدم الـ `super` دي عشان نوسع أو نضيف على وظيفة دالة موجودة أساساً في الفئة الأب عن طريق كتابة `super.methodName()`.

**2. Technical Definitions (English):**
*   **`super` Keyword:** A keyword used in child classes to call the constructor or access the properties and methods of its parent class (the super class).

**3. Code Implementation:**

```javascript
// Parent Class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

// Child Class
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        // Must call super() to send common properties to the parent constructor
        super(name, age); 
        this.runSpeed = runSpeed; // Unique property to Rabbit
    }

    run() {
        console.log(`This ${this.name} can run`);
        // Extending the parent's move method using super
        super.move(this.runSpeed);
    }
}

// Child Class
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim() {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);

console.log(rabbit.name); // "rabbit"
console.log(rabbit.age); // 1

// Invokes both the local run method and the parent's move method
rabbit.run(); 
// Output: 
// "This rabbit can run"
// "The rabbit moves at a speed of 25mph"
```

---

### 46. Getters and Setters (دوال جلب وتعيين القيم `Getters and Setters`)

**1. Conceptual Explanation (Arabic):**
دوال الـ (Getters) والـ (Setters) هما طرق برمجية خاصة بيُستخدموا للتحكم الآمن في قراءة وتعديل خواص الكائن. دالة الـ (Getter) بتخلي الخاصية قابلة للقراءة والاسترجاع، بينما الـ (Setter) بتخليها قابلة للتعديل وتعيين قيم جديدة. الميزة البرمجية الأكبر لاستخدامهم هي إننا بنقدر نعمل عملية تحقق وفلترة (Validation) على أي بيانات قبل ما يتم تخزينها؛ عشان نمنع المستخدم أو المطور من إدخال بيانات ضارة أو غير منطقية (زي إدخال نصوص في حقل مخصص للارتفاع، أو أرقام بالسالب في الأعمار). من العرف البرمجي المتفق عليه إن الخواص الداخلية (Private properties) اللي بنتعامل معاها بالدوال دي بيتم تسميتها بشرطة سفلية في البداية (Underscore `_`) عشان ننبه أي مطور إن دي خاصية داخلية ومينفعش يتلاعب بيها أو يوصلها بشكل مباشر بره دوال الـ Get/Set بتاعتها. وكمان بنقدر بالـ Getters نحسب قيم وهمية ونخليها تتقرأ كأنها خواص عادية (زي حساب المساحة من الطول والعرض).

**2. Technical Definitions (English):**
*   **Getters (`get`):** Special methods that bind an object property to a function that will be called when that property is looked up, making the property readable.
*   **Setters (`set`):** Special methods that bind an object property to a function to be called when there is an attempt to set that property, allowing for data validation before making the property writable.
*   **Private Property Convention (`_`):** Prefixing a property name with an underscore is a naming convention to signal that a property is intended to be private and should not be accessed directly outside of the class.

**3. Code Implementation:**

```javascript
class Rectangle {
    constructor(width, height) {
        // These assignments automatically trigger the setter methods below
        this.width = width;
        this.height = height;
    }

    // SETTER for width (Includes Validation)
    set width(newWidth) {
        if (newWidth > 0) {
            // Assigns to a private property
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    // SETTER for height
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

    // GETTER for width
    get width() {
        return this._width;
    }

    // GETTER for height
    get height() {
        return this._height;
    }

    // GETTER for a calculated value (can be accessed like a regular property)
    get area() {
        // Appends 'cm^2' and formats to 1 decimal place
        return `${(this._width * this._height).toFixed(1)} cm^2`;
    }
}

// Creating an object with bad data (Triggers Setter errors)
const badRect = new Rectangle(-1000000, "Pizza"); 
// Output: 
// "Width must be a positive number"
// "Height must be a positive number"

// Creating an object with valid data
const goodRect = new Rectangle(3, 4);

// Accessing properties via Getters
console.log(goodRect.width);  // 3
console.log(goodRect.height); // 4
console.log(goodRect.area);   // "12.0 cm^2"
```

[End of Part 6]


### 47. Destructuring (التفكيك `Destructuring`)

**1. Conceptual Explanation (Arabic):**
تعتبر تقنية التفكيك (Destructuring) طريقة قوية ومريحة في الجافا سكريبت بتسمح لنا باستخراج القيم من المصفوفات (Arrays) أو الكائنات (Objects) وتعيينها لمتغيرات منفصلة في سطر واحد. المدرب قدم خمس أمثلة عملية لفهم التقنية دي:
المثال الأول هو تبديل قيم متغيرين ببعض (Swap) عن طريق إنشاء مصفوفة جديدة في اليمين وتفكيكها في الشمال.
المثال التاني هو تبديل أماكن عنصرين جوه مصفوفة باستخدام نفس الفكرة.
المثال التالت هو استخراج عناصر من مصفوفة وتخزينها في متغيرات منفصلة، مع إمكانية استخدام (Rest Parameters) عشان نجمع باقي العناصر في مصفوفة جديدة.
المثال الرابع بيتعامل مع الكائنات (Objects)، وبنقدر من خلاله نسحب قيم خواص معينة ونخزنها في متغيرات، وكمان بنقدر نحدد قيم افتراضية (Default values) لو الخاصية دي مش موجودة في الكائن.
المثال الخامس والأخير هو تمرير كائن كمعامل لدالة (Function)، وبدل ما نستقبل الكائن كله، بنقوم بتفكيكه مباشرة جوه أقواس المعاملات (Parameters) عشان نستخرج الخواص اللي محتاجينها بس.

**2. Technical Definitions (English):**
*   **Destructuring:** A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables in a concise way.
*   **Array Destructuring:** Uses straight brackets `[]` to unpack iterables based on their position/index.
*   **Object Destructuring:** Uses curly braces `{}` to unpack object properties based on their key names.

**3. Code Implementation:**

```javascript
// Example 1: Swap the value of two variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// Example 2: Swap two elements in an array
const colors = ["red", "green", "blue", "black", "white"];
[colors, colors] = [colors, colors];
console.log(colors); // ["white", "green", "blue", "black", "red"]

// Example 3: Assign array elements to variables using Rest Parameters
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor); // "white"
console.log(extraColors); // ["black", "red"]

// Example 4: Extract values from objects with default values
const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    job: "fry cook"
};

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34
};

// Destructuring with a default value for 'job'
const { firstName, lastName, age, job = "unemployed" } = person2;
console.log(firstName, job); // "Patrick", "unemployed"

// Example 5: Destructure in function parameters
function displayPerson({ firstName, lastName, age, job = "unemployed" }) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1); 
// Uses "fry cook"
displayPerson(person2); 
// Falls back to "unemployed"
```

---

### 48. Nested Objects (الكائنات المتداخلة `Nested Objects`)

**1. Conceptual Explanation (Arabic):**
بالنسبة للكائنات المتداخلة (Nested Objects)، فهي عبارة عن كائنات موجودة بالكامل جوه كائنات تانية (Child object enclosed by a Parent object). المفهوم ده بيسمح لنا بتمثيل هياكل بيانات معقدة جداً؛ زي إن كائن "الشخص" يكون جواه كائن تاني مخصص لـ "العنوان" بيحتوي على الشارع والمدينة، أو كائن لعربة التسوق جواه كائنات تانية لكل منتج. عشان نقدر نوصل للبيانات المتداخلة دي، بنستخدم النقطة المتسلسلة (Property Accessor) زي `person.address.city`. المدرب كمان وضح إزاي نقدر نعمل حلقة تكرار `for...in` عشان نمر على كل الخواص اللي جوه الكائن الداخلي. في النهاية، المدرب عمل مثال متقدم باستخدام الفئات (Classes) لإنشاء كائن "عنوان" جوه دالة البناء (Constructor) الخاصة بكائن "الشخص" مع استخدام معامل النشر (Spread Operator) لتمرير البيانات.

**2. Technical Definitions (English):**
*   **Nested Objects:** Objects that are assigned as the value of a property inside another object, allowing for the creation of complex, hierarchical data structures.
*   **`for...in` Loop:** A loop that iterates over all enumerable string properties of an object.

**3. Code Implementation:**

```javascript
// Code block 1: Standard Nested Object and Accessing Properties
const person = {
    fullName: "SpongeBob SquarePants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
};

// Accessing properties inside the nested object
console.log(person.address.street); // "124 Conch St."

// Iterating through a nested object using for...in
for (const property in person.address) {
    console.log(person.address[property]); 
    // Outputs the values: "124 Conch St.", "Bikini Bottom", "Int. Waters"
}

// Code block 2: Nested Objects using Classes
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        // Instantiating a nested Address object using spread parameters
        this.address = new Address(...address); 
    }
}

const person1 = new Person("SpongeBob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
console.log(person1.address.city); // "Bikini Bottom"
```

---

### 49. Array of Objects (مصفوفة الكائنات `Array of Objects`)

**1. Conceptual Explanation (Arabic):**
في بعض الأحيان بنحتاج ندمج بين المصفوفات والكائنات، وده بيظهر في مصفوفة الكائنات (Array of Objects). المدرب أنشأ مصفوفة بتحتوي على 5 كائنات بتمثل مجموعة من الفواكه، كل كائن له خواص زي الاسم واللون والسعرات الحرارية. عشان نوصل لخاصية معينة، بنحدد الأول مكان الكائن في المصفوفة باستخدام الفهرس (Index)، وبعدين بنستخدم النقطة عشان نوصل للخاصية. بنقدر نستخدم دوال المصفوفات العادية زي `push` لإضافة كائن جديد، و `pop` لحذف الأخير. الأهم من كده هو دمج دوال المصفوفات المتقدمة (Higher-Order Functions) مع مصفوفة الكائنات: استخدمنا `forEach` عشان نطبع كل كائن، واستخدمنا `map` عشان ننشئ مصفوفة جديدة بتحتوي على أسماء الفواكه بس، واستخدمنا `filter` عشان نطلع الفواكه اللي لونها أصفر بس أو اللي سعراتها الحرارية أقل من 100، وأخيراً استخدمنا `reduce` بشكل متقدم لإننا نرجع الكائن الكامل اللي بيحتوي على أعلى سعرات حرارية عن طريق مقارنة الخاصية دي في كل دورة.

**2. Technical Definitions (English):**
*   **Array of Objects:** A data structure where each element within an array is an object, commonly used to store lists of structured data (like a database response).

**3. Code Implementation:**

```javascript
const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 },
    { name: "coconut", color: "white", calories: 159 },
    { name: "pineapple", color: "yellow", calories: 37 }
];

// Accessing properties
console.log(fruits.name); // "apple"

// Array Methods (Adding/Removing Objects)
fruits.push({ name: "grapes", color: "purple", calories: 62 });
fruits.pop(); // Removes grapes

// 1. forEach() - Looping through objects
fruits.forEach(fruit => console.log(fruit.name));

// 2. map() - Returning a new array of specific properties
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames); // ["apple", "orange", "banana", "coconut", "pineapple"]

// 3. filter() - Returning a new array of objects matching a condition
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(yellowFruits); // Array of banana and pineapple objects

// 4. reduce() - Returning a single object (The one with the max calories)
const maxFruit = fruits.reduce((max, fruit) => {
    // Ternary operator: if current fruit calories > max record holder, return current fruit, else keep max
    return fruit.calories > max.calories ? fruit : max;
});
console.log(maxFruit); // { name: "coconut", color: "white", calories: 159 }
```

---

### 50. Sorting (`sort()` Method) (ترتيب المصفوفات `sort()`)

**1. Conceptual Explanation (Arabic):**
دالة الـ `sort` بنستخدمها عشان نرتب عناصر المصفوفة. لكن المدرب وضح نقطة في غاية الأهمية؛ الدالة دي بترتب العناصر كنصوص (Strings) بناءً على الترتيب المعجمي (Lexicographic order) مش الترتيب الأبجدي البسيط، وده معناه إنها بتتعامل مع الأرقام كأنها كلمات. فمثلاً لو بنرتب أرقام، رقم 10 هييجي قبل رقم 2 لإن الحرف الأول فيه (1) أصغر من (2). عشان نحل المشكلة دي ونرتب الأرقام بشكل صحيح، لازم نمرر دالة مقارنة (Callback function) مخصصة جوه الـ `sort`، الدالة دي بتاخد معاملين (A و B) وبنطرحهم من بعض (`a - b` للترتيب التصاعدي، و `b - a` للتنازلي). كمان المدرب طبق الفكرة دي على مصفوفة كائنات؛ بحيث نقدر نرتب الأشخاص بناءً على أعمارهم أو درجاتهم. ولو حابين نرتب كائنات بناءً على خاصية نصية زي الاسم، بنستخدم دالة تانية مدمجة اسمها `localeCompare` عشان تقارن النصوص ببعض بشكل أبجدي سليم.

**2. Technical Definitions (English):**
*   **`sort()`:** A method that sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings in lexicographic order.
*   **Lexicographic Order:** Ordering based on the dictionary order of strings (alphabet + numbers + symbols), which evaluates characters sequentially.
*   **Comparison Function:** A function passed to `sort()` that defines the custom sort order (e.g., `(a, b) => a - b`).
*   **`localeCompare()`:** A string method that returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.

**3. Code Implementation:**

```javascript
// Code block 1: Default String Sorting
let fruits = ["apple", "orange", "banana", "coconut"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "coconut", "orange"]

// Code block 2: Number Sorting (Ascending and Descending)
let numbers =;
// Ascending order
numbers.sort((a, b) => a - b); 
console.log(numbers); //
// Descending order
numbers.sort((a, b) => b - a);

// Code block 3: Sorting Array of Objects
const people = [
    { name: "SpongeBob", age: 30, gpa: 3.0 },
    { name: "Patrick", age: 37, gpa: 1.5 },
    { name: "Squidward", age: 51, gpa: 2.5 },
    { name: "Sandy", age: 27, gpa: 4.0 }
];

// Sorting numerically by age (Ascending)
people.sort((a, b) => a.age - b.age);

// Sorting strings alphabetically by name using localeCompare
people.sort((a, b) => a.name.localeCompare(b.name));
```

---

### 51. Shuffling an Array (خلط عناصر المصفوفة `Shuffling`)

**1. Conceptual Explanation (Arabic):**
لخلط عناصر المصفوفة بشكل عشوائي، المدرب حذر جداً من استخدام دالة `sort` مع `Math.random() - 0.5`؛ لإن الطريقة دي نتايجها مش متساوية (Not perfectly uniform) وبتكون بطيئة جداً وغير فعالة مع المصفوفات الكبيرة. الطريقة الاحترافية والأصح هي استخدام خوارزمية مشهورة اسمها (Fisher-Yates Algorithm). الخوارزمية دي بتعتمد على عمل حلقة تكرار `for` بتبدأ من آخر عنصر في المصفوفة وبترجع لورا. في كل دورة، بنولد رقم عشوائي (Index) بين الصفر ومكان العنصر الحالي. بعدين بنستخدم تقنية التفكيك (Destructuring) اللي شرحناها عشان نبدل مكان العنصر الحالي مع العنصر صاحب الفهرس العشوائي. المدرب نصح بعمل الخوارزمية دي جوه دالة منفصلة عشان نقدر نستدعيها بسهولة في أي وقت، خصوصاً في برمجة الألعاب اللي بتحتاج عشوائية زي خلط الكوتشينة.

**2. Technical Definitions (English):**
*   **Fisher-Yates Algorithm:** An highly efficient, uniform algorithm used to shuffle a sequence of elements randomly. It iterates through the array in reverse, swapping the current element with a randomly chosen element from the remaining unshuffled portion.

**3. Code Implementation:**

```javascript
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// BAD WAY (Inefficient and not perfectly uniform)
// cards.sort(() => Math.random() - 0.5);

// GOOD WAY: Fisher-Yates Algorithm
function shuffle(array) {
    // Start from the last element and iterate backwards
    for(let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const random = Math.floor(Math.random() * (i + 1));
        
        // Swap elements using array destructuring
        [array[i], array[random]] = [array[random], array[i]];
    }
}

shuffle(cards);
console.log(cards); // Elements are now perfectly shuffled
```

---

### 52. Date Objects (كائنات التاريخ والوقت `Date Objects`)

**1. Conceptual Explanation (Arabic):**
تعتبر كائنات الـ `Date` هي الطريقة الأساسية في الجافا سكريبت للتعامل مع التواريخ والأوقات وتعديلها. لإنشاء كائن تاريخ، بنستخدم الكلمة المفتاحية `new Date()`. لو مستخدمناش أي معاملات، البرنامج هيجيب التاريخ والوقت الحاليين. بنقدر كمان نمرر معاملات مخصصة بترتيب ثابت (السنة، الشهر، اليوم، الساعة، الدقيقة، الثانية، الأجزاء من الثانية) مع ملاحظة مهمة جداً إن الشهور بتبدأ من الصفر (يعني يناير 0 وديسمبر 11). كمان نقدر نمرر التاريخ كنص (String)، أو كنطاق زمني بالـ (Milliseconds) بيتحسب من نقطة بداية افتراضية (Epoch) وهي 31 ديسمبر 1969. الكائن ده بيوفر لنا دوال (Getters) لاستخراج أي جزء من التاريخ زي `getFullYear` أو `getDate` أو `getDay` (اللي بترجع يوم الأسبوع كـ رقم من 0 لـ 6)، وكمان بيوفر دوال (Setters) لتعديل أي جزء زي `setFullYear`. أخيرًا، المدرب وضح إننا نقدر نستخدم معاملات المقارنة العادية زي الأكبر من أو الأصغر من لمقارنة تاريخين ببعض.

**2. Technical Definitions (English):**
*   **`Date` Object:** A built-in object in JavaScript that represents a single moment in time in a platform-independent format.
*   **Epoch (Epic) Time:** A specific date and time (typically January 1, 1970, UTC) from which a computer measures system time in milliseconds.
*   **Getters (Date):** Methods like `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, and `getHours()` used to extract specific components of a Date object.
*   **Setters (Date):** Methods like `setFullYear()`, `setMonth()`, and `setDate()` used to modify specific components of a Date object.

**3. Code Implementation:**

```javascript
// Code block 1: Creating Date Objects
const date1 = new Date(); // Current date and time
// Year, Month (0-indexed), Day, Hour, Min, Sec, Ms
const date2 = new Date(2024, 0, 1, 2, 3, 4, 5); 
const date3 = new Date("2024-01-02T12:00:00Z"); // String representation
const date4 = new Date(1700000000000); // Milliseconds since Epoch

// Code block 2: Extracting Date components (Getters)
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth(); // 0-11
const dayOfMonth = now.getDate();
const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday...
const hours = now.getHours();

// Code block 3: Modifying Date components (Setters)
const customDate = new Date();
customDate.setFullYear(2025);
customDate.setMonth(0); // January
customDate.setDate(1);

// Code block 4: Comparing Dates
const dateA = new Date("2023-12-31");
const dateB = new Date("2024-01-01");

if (dateB > dateA) {
    console.log("Happy New Year!");
}
```

---

### 53. Closures (الانغلاق `Closures`)

**1. Conceptual Explanation (Arabic):**
يعتبر الـ (Closure) من المفاهيم العميقة في الجافا سكريبت، وهو باختصار عبارة عن دالة (Function) بيتم تعريفها جوه دالة تانية (Outer Function)، والدالة الداخلية دي بيكون ليها صلاحية كاملة إنها تشوف وتستخدم المتغيرات الموجودة في الدالة الأب حتى بعد ما الدالة الأب تنتهي. الميزة الكبرى للمفهوم ده هي حماية المتغيرات (Encapsulation / Private variables) والحفاظ على حالتها (State Maintenance). المدرب وضح ده بمثال لبرنامج عداد (Counter)؛ لو المتغير كان في النطاق العام (Global)، أي حد يقدر يغيره ويبوظ البرنامج. ولو كان جوه الدالة العادية، قيمته هتتصفر كل مرة بنستدعي الدالة. لكن باستخدام الـ Closure، بنعمل دالة خارجية بتنشئ المتغير، وبترجع لينا كائن (Object) بيحتوي على دوال داخلية زي (زيادة، نقصان، وجلب القيمة). بكده، بنحافظ على قيمة المتغير التراكمية من غير ما يتصفر، وفي نفس الوقت بنمنع أي كود خارجي إنه يتلاعب بيه بشكل مباشر لإن المتغير بيكون مخفي. الأسلوب ده بيُستخدم بكثرة في مكتبات وإطارات عمل زي React و Vue و Angular.

**2. Technical Definitions (English):**
*   **Closure:** A feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and scope, even after the outer function has finished executing.
*   **State Maintenance:** The ability of a closure to remember and preserve the current data (state) of its variables between consecutive function calls.
*   **Private Variables:** Variables that cannot be accessed or modified directly from the outside global scope, protecting them from unintended interference.

**3. Code Implementation:**

```javascript
// Code block 1: Basic Closure
function outer() {
    let message = "Hello"; // Private variable
    
    function inner() {
        console.log(message); // Inner function has access to outer variable
    }
    
    inner();
}
outer(); // Outputs: Hello

// Code block 2: Counter Program using Closures (State Maintenance & Encapsulation)
function createCounter() {
    let count = 0; // Private state variable

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    // Returning an object containing references to the inner functions
    return { increment, getCount };
}

const counter = createCounter();
counter.increment(); // Count increased to 1
counter.increment(); // Count increased to 2
console.log(counter.getCount()); // 2
console.log(counter.count); // undefined (Private variable is hidden from the outside)

// Code block 3: Game Score Tracker
function createGame() {
    let score = 0; // Private score

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return { increaseScore, decreaseScore, getScore };
}

const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()} points`); // 8 points
```

[End of Part 7]


### 54. `setTimeout()` Function (دالة تأخير التنفيذ `setTimeout`)

**1. Conceptual Explanation (Arabic):**
تعتبر دالة `setTimeout` وسيلة مدمجة في الجافا سكريبت بتسمح لنا بجدولة تنفيذ دالة معينة بعد مرور وقت محدد بنحسبه بالملي ثانية (Milliseconds). المدرب وضح إن الوقت ده بيكون تقريبي (Approximate) وبيعتمد على ضغط العمل على بيئة تشغيل الجافا سكريبت، فمينفعش نعتمد عليها في حاجات بتحتاج دقة متناهية زي ساعة الإيقاف مثلاً. الدالة دي بتاخد معاملين أساسيين: الـ (Callback function) اللي عايزين ننفذها، والوقت بالملي ثانية (3000 ملي ثانية يعني 3 ثواني). بنقدر نمرر الدالة كـ Callback عادي، أو نستخدم دالة مجهولة الاسم (Anonymous)، أو دالة سهمية (Arrow Function). كمان نقدر نلغي أو نوقف المؤقت ده قبل ما يشتغل عن طريق دالة `clearTimeout()`، بس عشان نعمل كده لازم نخزن دالة الـ `setTimeout` جوه متغير عشان يرجعلنا مُعرف فريد (ID)، وبنمرر الـ ID ده لدالة الإلغاء.

**2. Technical Definitions (English):**
*   **`setTimeout(callback, delay)`:** A built-in JavaScript function used to schedule the execution of a specific function after a set delay in milliseconds.
*   **`clearTimeout(timeoutId)`:** A function used to cancel a previously established timeout before it executes, requiring the unique ID returned by `setTimeout()`.

**3. Code Implementation:**

```javascript
// Code block 1: Basic setTimeout using an Arrow Function
setTimeout(() => window.alert("Hello"), 3000); 

// Code block 2: Clearing a timeout before it triggers
const timeoutId = setTimeout(() => console.log("This will not run"), 3000);
clearTimeout(timeoutId); // Cancels the timeout immediately

// Code block 3: Practical example with Start and Clear buttons
let timerId;

function startTimer() {
    timerId = setTimeout(() => window.alert("Hello after 3 seconds"), 3000);
    console.log("Timer started");
}

function clearTimer() {
    clearTimeout(timerId);
    console.log("Timer cleared");
}
```

---

### 55. Digital Clock Program (برنامج الساعة الرقمية)

**1. Conceptual Explanation (Arabic):**
المدرب قام بتطبيق عملي لإنشاء ساعة رقمية بتحدث نفسها باستمرار. الفكرة بتعتمد على استخدام دالة `setInterval` (ودي بتشبه `setTimeout` بس بتكرر تنفيذ الكود كل فترة زمنية محددة، وهنا حددناها بـ 1000 ملي ثانية عشان تتحدث كل ثانية). جوه الدالة دي، بننشئ كائن تاريخ جديد `new Date()` عشان نسحب منه الساعات والدقائق والثواني. عشان نخلي الساعة تظهر بنظام 12 ساعة بدل نظام الـ 24 ساعة العسكري، المدرب استخدم المعامل الثلاثي (Ternary Operator) لمعرفة إذا كانت الساعات أكبر من أو تساوي 12 عشان يحدد إن الوقت مساءً (PM) أو صباحاً (AM). وكمان استخدم باقي القسمة `hours % 12` عشان يحول الساعة 13 لساعة 1 وهكذا، ولو النتيجة كانت صفر (الساعة 12 منتصف الليل) بيحولها لـ 12. المشكلة اللي ظهرت إن الأرقام الفردية (زي 1 أو 5) بتتعرض كخانة واحدة، وعشان نحافظ على شكل الساعة الاحترافي (01 و 05)، تم تحويل الأرقام لنصوص (Strings) واستخدام دالة `padStart(2, "0")` عشان نحشيها بصفر على الشمال لو كانت أقل من خانتين.

**2. Technical Definitions (English):**
*   **`setInterval(callback, delay)`:** A function that repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
*   **Time Formatting:** The process of converting 24-hour military time to a standard 12-hour format with AM/PM identifiers, often requiring modulus math and string padding.

**3. Code Implementation:**

```javascript
// Function to continuously update the clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    
    // Determine AM or PM
    const meridiem = hours >= 12 ? "PM" : "AM";
    
    // Convert to 12-hour format
    hours = hours % 12 || 12; 
    
    // Convert to strings and pad with leading zeros
    hours = hours.toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    
    document.getElementById("clock").textContent = timeString;
}

// Call initially, then update every 1000 milliseconds (1 second)
updateClock();
setInterval(updateClock, 1000);
```

---

### 56. Stopwatch Program (برنامج ساعة الإيقاف)

**1. Conceptual Explanation (Arabic):**
يعتبر هذا المشروع تطبيقاً متقدماً لدمج كائنات التاريخ (`Date`) مع دالة `setInterval`. البرنامج بيتكون من 3 زراير (ابدأ، إيقاف، إعادة ضبط). الفكرة الرياضية هنا بتعتمد على حفظ وقت البداية عن طريق `Date.now()` (اللي بترجع الوقت الحالي بالملي ثانية من وقت الـ Epoch). لما الساعة بتشتغل، بنحسب الوقت المنقضي (Elapsed Time) عن طريق طرح وقت البداية من الوقت الحالي في كل دورة تحديث. المدرب استخدم معادلات رياضية عشان يحول الملي ثواني لساعات ودقائق وثواني باستخدام القسمة وباقي القسمة ودالة `Math.floor` للتخلص من الكسور. وبعدين زي ما عمل في الساعة الرقمية، حول النواتج دي لنصوص واستخدم `padStart` عشان يضمن إن العرض دايماً يكون خانتين. متغير `isRunning` كان ضروري جداً كإشارة (Flag) عشان يمنع المستخدم من إنه يشغل كذا مؤقت فوق بعض لو داس على زرار "ابدأ" أكتر من مرة.

**2. Technical Definitions (English):**
*   **`Date.now()`:** A static method of the Date object that returns the number of milliseconds elapsed since the Epoch (January 1, 1970).
*   **Elapsed Time:** The total accumulated time calculated by subtracting the precise start time from the current precise time.

**3. Code Implementation:**

```javascript
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10); // Update every 10 milliseconds
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // Math formulas to convert milliseconds
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    // Padding strings
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
```

---

### 57. ES6 Modules (وحدات الجافا سكريبت `ES6 Modules`)

**1. Conceptual Explanation (Arabic):**
تُعد الوحدات (Modules) ملفات خارجية بتحتوي على كود جافا سكريبت قابل لإعادة الاستخدام في ملفات تانية. الميزة دي (اللي ظهرت في تحديث ES6 سنة 2015) بتحل مشكلة إن الأكواد تكون كلها سايحة على بعض في ملف واحد كبير ومعقد. بنقدر نكتب متغيرات، دوال، أو فئات (Classes) جوه ملف، وبنسبقها بكلمة `export` عشان نسمح للملفات التانية إنها تستوردها. في الملف التاني، بنستخدم كلمة `import` مع تقنية التفكيك (Object Destructuring `{}`) عشان نسحب الحاجات اللي محتاجينها بس من مسار الملف. القاعدة الأساسية والمهمة جداً عشان ده يشتغل، إننا لازم نروح لملف الـ HTML، وفي وسم الـ `<script>` الرئيسي نكتب `type="module"`، لإن من غيرها المتصفح مش هيفهم إننا بنستخدم نظام الوحدات وهيطلع خطأ.

**2. Technical Definitions (English):**
*   **ES6 Modules:** An ECMAScript 2015 feature that allows JavaScript code to be split into separate files, exporting and importing reusable functions, variables, or classes.
*   **`export`:** A keyword used to expose variables or functions from a module so they can be accessed by other programs.
*   **`import`:** A keyword used to bring in specific exported members from an external module file into the current scope.

**3. Code Implementation:**

```html
<!-- HTML Setup: Declaring the script as a module -->
<script type="module" src="index.js"></script>
```

```javascript
// File 1: mathUtil.js (The Module to be exported)
export const PI = 3.14159;

export function getCircumference(radius) {
    return 2 * PI * radius;
}

export function getArea(radius) {
    return PI * radius * radius;
}
```

```javascript
// File 2: index.js (Importing the Module)
// Using object destructuring to import only what we need
import { PI, getCircumference, getArea } from './mathUtil.js';

console.log(PI); // 3.14159
const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)} cm`); // 62.83 cm
```

---

### 58. Synchronous vs. Asynchronous JavaScript (التزامن وعدم التزامن)

**1. Conceptual Explanation (Arabic):**
بالنسبة للفرق بين الأكواد المتزامنة والغير متزامنة؛ فالكود المتزامن (Synchronous) هو الكود اللي بيتنفذ سطر بسطر بالترتيب (Line by line)، البرنامج بيستنى كل مهمة تخلص بالكامل عشان ينقل للي بعدها. لكن الكود الغير متزامن (Asynchronous) بيسمح بتنفيذ عمليات متعددة في نفس الوقت من غير ما يوقف باقي البرنامج. المدرب شبه الموضوع بـ (المسافر عبر الزمن) اللي بيخرج بره خط الزمن العادي وبيخلي العالم يكمل من غيره. الأكواد دي بنستخدمها دايماً مع العمليات اللي بتاخد وقت غير محدد، زي قراءة ملف، أو طلب بيانات من سيرفر، أو استخدام `setTimeout`. لو حطينا كود بيستغرق 3 ثواني، الجافا سكريبت مش هتقف تستناه، دي هتكمل قراءة وطباعة باقي الكود، ولما الـ 3 ثواني يخلصوا هتنفذ الكود المتأخر. وعشان ننظم اللخبطة دي ونخلي حاجات معينة تستنى حاجات تانية، بنستخدم طرق زي الـ Callbacks، أو تقنيات أحدث زي الـ Promises والـ Async/Await.

**2. Technical Definitions (English):**
*   **Synchronous Code:** Code that executes consecutively line-by-line in a sequential manner. It blocks the execution flow until the current operation completes.
*   **Asynchronous Code:** Code that allows multiple operations to be performed concurrently without waiting. It does not block the execution flow.

**3. Code Implementation:**

```javascript
// Code block: Demonstrating Asynchronous execution order
function func1(callback) {
    // This timeout acts asynchronously (simulating a slow network request)
    setTimeout(() => {
        console.log("Task 1 (Async) Complete");
        callback(); // Executes func2 only AFTER Task 1 is fully complete
    }, 3000);
}

function func2() {
    console.log("Task 2 Complete");
    console.log("Task 3 Complete");
    console.log("Task 4 Complete");
}

// Invoking func1 and passing func2 as a callback to ensure sequence
func1(func2);

// Output:
// (Waits 3 seconds...)
// Task 1 (Async) Complete
// Task 2 Complete
// Task 3 Complete
// Task 4 Complete
```

---

### 59. Error Handling (`try / catch / finally`) (التعامل مع الأخطاء)

**1. Conceptual Explanation (Arabic):**
تعتبر الأخطاء (Errors) كائنات بتظهر لما يحصل مشكلة في الكود، والمشكلة الكبيرة إن الخطأ لو متساب من غير معالجة بيعمل إيقاف كامل للبرنامج (Interrupts the flow) وأي كود تحته مش بيتنفذ. عشان نعالج ده بياقة واحترافية، بنحط أي كود "خطر" محتمل يعمل مشكلة جوه بلوك اسمه `try`. لو حصل خطأ هنا، البرنامج مش هيقفل، إنما هيمرر كائن الخطأ ده لبلوك تاني اسمه `catch` عشان نعرض رسالة الخطأ أو نتصرف معاه باستخدام `console.error`. في بلوك تالت اختياري اسمه `finally`، وده بيتنفذ في كل الحالات سواء حصل خطأ أو لأ، وعادة بنستخدمه عشان نقفل بيه اتصالات قواعد البيانات أو الملفات اللي فتحناها عشان ننضف الذاكرة (Cleanup). كمان المدرب وضح إننا نقدر نفتعل وننشئ أخطاء بنفسنا عن طريق كلمة `throw new Error()` لو المستخدم دخل بيانات مش منطقية (زي محاولة القسمة على صفر أو إدخال حروف بدل الأرقام).

**2. Technical Definitions (English):**
*   **Error Object:** An object created to represent a problem that occurs during program execution (e.g., `TypeError`, `ReferenceError`).
*   **`try` block:** A block used to enclose potentially dangerous code that might throw an error.
*   **`catch` block:** A block that intercepts an error thrown in the `try` block, allowing developers to handle it gracefully without crashing the program.
*   **`finally` block:** An optional block that always executes regardless of whether an error occurred, typically used for cleanup operations.
*   **`throw`:** A keyword used to intentionally generate a custom error.

**3. Code Implementation:**

```javascript
// Code block 1: Basic Try / Catch / Finally
try {
    // Attempting to print an undefined variable will cause a ReferenceError
    console.log(x); 
} catch (error) {
    // Prevents program crash and logs the error gracefully
    console.error(error); 
} finally {
    console.log("This always executes (Cleanup goes here)");
}
console.log("You have reached the end of the program"); // This will print


// Code block 2: Throwing Custom Errors based on user input
try {
    const dividend = Number(window.prompt("Enter a dividend:"));
    const divisor = Number(window.prompt("Enter a divisor:"));

    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be numbers!");
    }
    if (divisor === 0) {
        throw new Error("You can't divide by zero!");
    }

    const result = dividend / divisor;
    console.log(result);

} catch (error) {
    console.error(error); // Catches our custom thrown errors
}
```

---

### 60. Calculator Program (برنامج الآلة الحاسبة)

**1. Conceptual Explanation (Arabic):**
في هذا التطبيق العملي، تم بناء آلة حاسبة بتجمع بين كل مهارات الـ DOM ومعالجة الأخطاء. الآلة بتتكون من شاشة عرض (Input) واخدة خاصية `readonly` عشان تمنع المستخدم يكتب بالكيبورد مباشرة. وتحتها شبكة زراير للعمليات والأرقام متصممة بـ CSS Grid. في الجافا سكريبت، عندنا 3 دوال رئيسية: الأولى للإضافة (Append) بتاخد الحرف اللي دُسنا عليه وتلزقه في شاشة العرض. التانية دالة المسح (Clear) بتفضي الشاشة وتخليها نص فارغ. التالتة والأهم هي دالة الحساب (Calculate) واللي بتعتمد على دالة مدمجة في الجافا سكريبت اسمها `eval()`. الدالة دي سحرية، بتاخد أي نص رياضي (زي "5+5") وتحسبه وتطلع النتيجة. بس لإن المستخدم ممكن يدوس على علامات ورا بعضها (زي "7+=") وده هيعمل خطأ برمجي (Syntax Error)، المدرب حط دالة الـ `eval` جوه `try/catch`، بحيث لو المعادلة فيها مشكلة، يمسك الخطأ ويعرض على شاشة الآلة الحاسبة كلمة "Error".

**2. Technical Definitions (English):**
*   **`eval()`:** A built-in JavaScript function that evaluates JavaScript code represented as a string, processing mathematical expressions instantly.
*   **`readonly`:** An HTML attribute applied to input fields indicating that the user cannot directly modify its value via keyboard input.

**3. Code Implementation:**

```html
<!-- HTML Structure -->
<div id="calculator">
    <input id="display" readonly>
    <div id="keys">
        <!-- Buttons pass their characters to the function -->
        <button onclick="appendToDisplay('+')">+</button>
        <button onclick="appendToDisplay('7')">7</button>
        <!-- Additional numbers and operators... -->
        <button onclick="calculate()">=</button>
        <button onclick="clearDisplay()">C</button>
    </div>
</div>
```

```javascript
// JavaScript Implementation
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // eval computes the string expression (e.g., "5+5" becomes 10)
        display.value = eval(display.value);
    } catch (error) {
        // Gracefully handles invalid syntax like "7+="
        display.value = "Error";
    }
}
```

---

### 61. The Document Object Model - DOM (نموذج كائنات المستند `DOM`)

**1. Conceptual Explanation (Arabic):**
يعتبر الـ DOM عبارة عن واجهة برمجية (API) بيقدمها المتصفح، بتخلينا نشوف صفحة الـ HTML على هيئة كائن (Object) جوه الجافا سكريبت. لما الصفحة بتحمل، المتصفح بيبني نموذج شجري (Tree-like structure) لكل العناصر اللي فيها (من أول الجذر اللي هو الـ HTML لحد الفروع زي الـ Head والـ Body). الكائن الرئيسي ده اسمه `document`، وجواه خواص ودوال كتير جداً بتسمح لنا نتحكم في كل فتفوتة في الصفحة. المدربين (Bro Code و Elzero) وضحوا إننا نقدر نكتب `console.dir(document)` عشان نشوف الشجرة دي بكل تفاصيلها في المفتش (DevTools). من خلال الـ `document` بنقدر نوصل لعنوان الصفحة ونعدله (`document.title`)، ونوصل لجسم الصفحة ونغير خلفيته (`document.body.style`)، وكمان نوصل للصور واللينكات والفورمز بشكل مباشر ونقرأ أو نعدل بياناتهم من غير ما الصفحة تعمل إعادة تحميل (Refresh). باختصار، الـ DOM هو الكوبري اللي بيربط بين الجافا سكريبت وعناصر الـ HTML.

**2. Technical Definitions (English):**
*   **Document Object Model (DOM):** A programming interface that represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects.
*   **`console.dir()`:** A console method that displays an interactive list of the properties of a specified JavaScript object.
*   **DOM Tree:** The hierarchical representation of HTML elements where elements are structured as parents, children, and siblings.

**3. Code Implementation:**

```javascript
// Examining the entire document object and its properties
console.dir(document);

// Accessing and modifying basic document properties
console.log(document.title); // Reads the current page title
document.title = "My Dynamic Website"; // Changes the page title dynamically

// Accessing the body element directly
document.body.style.backgroundColor = "hsl(0, 0%, 15%)"; // Changes background to dark gray

// Accessing specific collections directly from the document object
console.log(document.images); // Returns all <img> tags
console.log(document.links);  // Returns all <a> tags
console.log(document.forms);  // Returns all <form> tags

// Example: Accessing the first form, then the first input within it, to read its value
// Assuming there is a form with an input on the page
if(document.forms.length > 0) {
    console.log(document.forms.elements.value);
}
```

---

### 62. Element Selectors (محددات العناصر `Element Selectors`)

**1. Conceptual Explanation (Arabic):**
تُستخدم محددات العناصر للوصول لأي جزء في صفحة الـ HTML عشان نتلاعب بيه برمجياً. المدربين وضحوا 5 طرق رئيسية:
1. `getElementById`: بتجيب عنصر واحد بس بناءً على المُعرف الفريد بتاعه (الـ ID).
2. `getElementsByClassName`: بتجيب كل العناصر اللي بتشترك في كلاس (Class) معين، وبترجعهم في حاجة اسمها (HTMLCollection).
3. `getElementsByTagName`: بتجيب كل العناصر اللي ليها نفس اسم الوسم (زي كل البراجرافات أو كل الـ Divs)، وبترجع برضو (HTMLCollection).
4. `querySelector`: دي طريقة مرنة جداً بتسمح لك تكتب جوه الأقواس سلكتور زي بتاع الـ CSS بالظبط (زي `.class` أو `#id`)، بس دي بترجع "أول عنصر" يطابق الشرط ده بس.
5. `querySelectorAll`: دي بتجيب كل العناصر اللي بتطابق السلكتور، بس بترجعهم في حاجة اسمها (NodeList).
في ملاحظة قوية جداً تم توضيحها: الـ (HTMLCollection) يعتبر هيكل بيانات "حي" (Live) بس مفهوش دالة `forEach` للعمل حلقات تكرار، وعشان نلف عليه لازم نحوله لمصفوفة باستخدام `Array.from()`. بينما الـ (NodeList) يعتبر هيكل "ثابت" (Static) ولكنه بيحتوي على دالة `forEach` جاهزة نقدر نستخدمها مباشرة.

**2. Technical Definitions (English):**
*   **`getElementsByClassName()`:** A method returning a live HTMLCollection of elements with the given class name.
*   **`getElementsByTagName()`:** A method returning a live HTMLCollection of elements with the given tag name.
*   **`querySelector()`:** A method returning the first Element within the document that matches the specified CSS selector.
*   **`querySelectorAll()`:** A method returning a static NodeList representing a list of the document's elements that match the specified CSS selectors.
*   **HTMLCollection vs NodeList:** HTMLCollections are live (automatically update when DOM changes) but lack array methods. NodeLists are static (don't update automatically) but include a native `forEach` method.

**3. Code Implementation:**

```javascript
// 1. getElementById (Returns a single element)
const myHeading = document.getElementById("my-heading");
myHeading.style.textAlign = "center";

// 2. getElementsByClassName (Returns an HTMLCollection)
const fruits = document.getElementsByClassName("fruits");
// HTMLCollections do NOT have forEach. Must be typecast to an Array.
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

// 3. getElementsByTagName (Returns an HTMLCollection)
const h4Elements = document.getElementsByTagName("h4");
for (let h4 of h4Elements) { // Enhanced for loop works on HTMLCollections
    h4.style.backgroundColor = "lightblue";
}

// 4. querySelector (Returns the FIRST matching element)
const firstFruit = document.querySelector(".fruits"); 
firstFruit.style.color = "red"; // Only targets the first element with class 'fruits'

// 5. querySelectorAll (Returns a NodeList)
const allFruits = document.querySelectorAll(".fruits");
// NodeLists DO have a built-in forEach method
allFruits.forEach(fruit => {
    fruit.style.fontWeight = "bold";
});
```

---

### 63. Element Content and Attributes (محتوى وخصائص العناصر `Content & Attributes`)

**1. Conceptual Explanation (Arabic):**
للتحكم في المحتوى الداخلي للعناصر، الجافا سكريبت بتقدم طريقتين بيعملوا نفس الوظيفة تقريباً بس باختلاف جوهري. خاصية `innerHTML` بترجع وتسمح بتعديل المحتوى شاملاً وسوم الـ HTML (يعني لو ضفت وسم `<br>` المتصفح هيقراه كسطر جديد). أما خاصية `textContent` فبترجع المحتوى كنص بيور (Raw text) وتتجاهل أي وسوم، ولو حاولت تضيف وسم هتطبعه كنص مكتوب. 
بالنسبة لخصائص العناصر (Attributes) زي الـ `src` في الصور أو الـ `href` في اللينكات، نقدر نعدلها بطريقتين: الطريقة المباشرة باستخدام النقطة (زي `element.src = value`)، أو باستخدام دوال مخصصة وهي:
- `getAttribute`: بتسحب قيمة الخاصية.
- `setAttribute`: بتعين خاصية جديدة أو بتعدل خاصية موجودة.
- `hasAttribute`: بتختبر هل الخاصية دي موجودة ولا لأ وبترجع `true` أو `false`.
- `removeAttribute`: بتحذف الخاصية بالكامل من العنصر.

**2. Technical Definitions (English):**
*   **`innerHTML`:** A property that gets or sets the HTML or XML markup contained within the element.
*   **`textContent`:** A property that gets or sets the text content of a node and its descendants, treating all content as raw text.
*   **`getAttribute(name)`:** Returns the value of a specified attribute on the element.
*   **`setAttribute(name, value)`:** Sets the value of an attribute on the specified element.
*   **`hasAttribute(name)`:** Returns a Boolean value indicating whether the specified element has the specified attribute or not.
*   **`removeAttribute(name)`:** Removes the element's specified attribute.

**3. Code Implementation:**

```javascript
// Selecting Elements
const myDiv = document.querySelector(".my-div");
const myLink = document.getElementById("my-link");
const myImg = document.querySelector("img");

// innerHTML vs textContent
// innerHTML renders the <span> tag
myDiv.innerHTML = "Hello from <span style='color:blue'>JS</span>"; 
// textContent outputs the literal characters <span>
myDiv.textContent = "Hello from <span style='color:blue'>JS</span>"; 

// Direct Attribute Manipulation
myImg.src = "new-image.jpg";
myImg.alt = "New Image Description";

// Using Attribute Methods
if(myLink.hasAttribute("href")){
    // Retrieves the current link value
    console.log(myLink.getAttribute("href")); 
    
    // Updates the link to a new URL
    myLink.setAttribute("href", "https://google.com"); 
    
    // Adds a new attribute dynamically
    myLink.setAttribute("title", "Go to Google"); 
}

// Removing an attribute
myLink.removeAttribute("class"); 
```

---

### 64. DOM Navigation (التنقل بين عناصر الصفحة `DOM Navigation`)

**1. Conceptual Explanation (Arabic):**
عملية التنقل في الـ DOM (DOM Navigation) هي كيفية استخدام هيكل الشجرة بتاع المستند عشان نتحرك من عنصر للتاني (زي إننا نروح للأب، للابن، أو للأخ). المدربين وضحوا مجموعة من الخواص المهمة جداً:
- `firstElementChild` و `lastElementChild`: بيجيبوا أول وأخر عنصر "إبن" جوه العنصر اللي إحنا ماسكينه، وبيتجاهلوا المسافات البيضاء والتعليقات. (في خواص تانية اسمها `firstChild` بتجيب أي نود حتى لو كانت نص مسافة، بس غالباً بنعتمد على الـ Element).
- `nextElementSibling` و `previousElementSibling`: بيجيبوا العنصر "الأخ" اللي بعد أو اللي قبل العنصر بتاعنا في نفس المستوى جوه الأب.
- `parentElement`: بترجع العنصر "الأب" اللي بيحتضن العنصر اللي إحنا محددينه. نقدر نستخدم ده عشان لما ندوس على زرار، نمسح الأب بالكامل من الصفحة.
- `children`: بترجع كل العناصر الأبناء جوه (HTMLCollection).
الاستخدام القوي للخواص دي بيظهر لما نكون مش عارفين ندي ID لكل عنصر في الصفحة (عشان العدد كبير)، فبنمسك عنصر واحد وبنتنقل منه للي جنبه أو اللي جواه.

**2. Technical Definitions (English):**
*   **DOM Navigation:** The process of navigating through the structure of an HTML document (moving between parent, child, and sibling nodes) using JavaScript properties.
*   **`firstElementChild` / `lastElementChild`:** Properties that return the first or last child element node of a specified element.
*   **`nextElementSibling` / `previousElementSibling`:** Properties that return the element immediately following or preceding the specified element within its parent's children list.
*   **`parentElement`:** A property that returns the DOM node's parent Element.
*   **`children`:** A property that returns a live HTMLCollection of the child elements of a node.

**3. Code Implementation:**

```html
<!-- HTML Structure -->
<ul id="fruits">
    <li id="apple">Apple</li>
    <li id="orange">Orange</li>
    <li id="banana">Banana</li>
</ul>
```

```javascript
// 1. firstElementChild & lastElementChild
const fruitsList = document.getElementById("fruits");
const first = fruitsList.firstElementChild; // <li>Apple</li>
const last = fruitsList.lastElementChild; // <li>Banana</li>
first.style.backgroundColor = "yellow";

// 2. nextElementSibling & previousElementSibling
const orange = document.getElementById("orange");
const nextSibling = orange.nextElementSibling; // <li>Banana</li>
const prevSibling = orange.previousElementSibling; // <li>Apple</li>
nextSibling.style.fontWeight = "bold";

// 3. parentElement
const apple = document.getElementById("apple");
const parent = apple.parentElement; // <ul id="fruits">
// Removes the entire list (Parent) from the DOM
// parent.remove(); 

// 4. children
const allChildren = fruitsList.children; // HTMLCollection of all 3 <li>s
Array.from(allChildren).forEach(child => {
    console.log(child.textContent);
});
```

[End of Part 8]

### 65. Creating and Appending Elements (إنشاء وإضافة عناصر الصفحة)

**1. Conceptual Explanation (Arabic):**
لإضافة عناصر جديدة لصفحة الويب باستخدام الجافا سكريبت، المدربين وضحوا إن العملية بتتم على 3 خطوات أساسية. الخطوة الأولى هي "إنشاء العنصر" باستخدام دالة `createElement` وبنمرر ليها اسم الوسم (زي `h1` أو `div`). في المرحلة دي، العنصر بيكون موجود في الذاكرة بس ومش ظاهر في الصفحة. بنقدر كمان ننشئ نصوص مجردة باستخدام `createTextNode`، أو حتى تعليقات باستخدام `createComment`. الخطوة التانية هي "إضافة الخصائص"، وهنا بنبدأ نعدل على العنصر اللي أنشأناه؛ زي إننا نديله `id` أو `className` أو نعدل الـ `textContent` بتاعه. الخطوة التالتة والأخيرة هي "إضافة العنصر لنموذج المستند (DOM)" عشان يظهر للمستخدم. للقيام بده، بنستخدم دوال زي `append` و `appendChild` عشان نضيف العنصر كـ "آخر إبن" (Last Child) جوه العنصر الأب، أو نستخدم `prepend` عشان نضيفه كـ "أول إبن" (First Child). لو عايزين نتحكم بدقة أكبر ونحط العنصر الجديد قبل عنصر محدد موجود بالفعل، بنستخدم دالة `insertBefore` وبنمرر ليها العنصر الجديد كمعامل أول، والعنصر اللي عايزين نحط الجديد قبله كمعامل تاني.

**2. Technical Definitions (English):**
*   **`document.createElement(tagName)`:** A method used to create a specified HTML element dynamically in memory.
*   **`document.createTextNode(text)`:** A method that creates a new Text node containing the specified string.
*   **`append()` / `appendChild()`:** Methods used to attach a node or text to the end of a parent element's child list.
*   **`prepend()`:** A method used to insert a set of Node objects or string objects before the first child of the parent element.
*   **`insertBefore(newNode, referenceNode)`:** A method that inserts a node before a reference node as a child of a specified parent node.

**3. Code Implementation:**

```javascript
// Step 1: Create the element
const newH1 = document.createElement("h1");
const myText = document.createTextNode("Hello from JS");

// Step 2: Add attributes and properties
newH1.id = "myH1";
newH1.className = "heading-class";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
newH1.appendChild(myText); // Appending text node to H1

// Step 3: Append the element to the DOM
// Appends as the last child of the body
document.body.append(newH1); 

// Alternatively, prepending as the first child of a specific container
const box1 = document.getElementById("box1");
box1.prepend(newH1);

// Inserting an element exactly between two existing elements
const box2 = document.getElementById("box2");
// Inserts newH1 inside the body, right before box2
document.body.insertBefore(newH1, box2); 
```

---

### 66. Advanced Insertion and Removal Methods (طرق الإدراج المتقدمة وحذف العناصر)

**1. Conceptual Explanation (Arabic):**
المدرب وضح إن بالإضافة لدوال الإدراج الداخلية (`append` و `prepend`) اللي بتضيف العنصر "جوه" الأب، في دوال متقدمة بتضيف العناصر "بره" العنصر المحدد وفي نفس مستواه (كأشقاء Siblings). الدالة الأولى هي `before` ودي بتضيف العنصر الجديد أو النص قبل العنصر المحدد مباشرة. الدالة التانية هي `after` ودي بتضيف العنصر بعده مباشرة. بالنسبة لعملية حذف العناصر، عندنا طريقتين: الأولى هي الطريقة القديمة `removeChild`، ودي بتتطلب إننا نحدد العنصر الأب الأول، وبعدين نطلب منه يحذف إبن معين جواه. الطريقة التانية والأحدث هي دالة `remove`، ودي بتتحط مباشرة على العنصر اللي عايزين نحذفه وبتشيله تماماً من شجرة الـ DOM بدون ما نحتاج نحدد الأب بتاعه. المدرب نبه إن استخدام `remove` بيمسح العنصر من الكود تماماً، وده بيختلف عن إخفاء العنصر بـ `display: none` اللي بيسيبه في الكود بس بيخفيه من العرض.

**2. Technical Definitions (English):**
*   **`before()`:** A method that inserts a set of Node or string objects in the children list of this element's parent, just before this element itself.
*   **`after()`:** A method that inserts a set of Node or string objects just after this element.
*   **`remove()`:** A method that entirely removes the element from the DOM tree.
*   **`removeChild(node)`:** A method that removes a child node from the DOM and returns the removed node.

**3. Code Implementation:**

```javascript
const myDiv = document.getElementById("my-div");
const createdP = document.createElement("p");
createdP.textContent = "I am a new paragraph";

// Inserting outside the element (Siblings)
myDiv.before("Text inserted before the div");
myDiv.after(createdP); // Paragraph inserted directly after the div

// Removing elements
// Method 1: The older way (Requires targeting the parent)
const parentList = document.getElementById("fruits");
const appleItem = document.getElementById("apple");
parentList.removeChild(appleItem);

// Method 2: The modern way (Directly removes the element entirely)
myDiv.remove(); 
```

---

### 67. Cloning Elements (استنساخ العناصر `Cloning`)

**1. Conceptual Explanation (Arabic):**
عملية الاستنساخ (Cloning) بتسمح لنا ناخد نسخة مطابقة لعنصر موجود بالفعل في الصفحة ونحطها في مكان تاني من غير ما نأثر على العنصر الأصلي. بنستخدم دالة `cloneNode` عشان نعمل النسخة دي. الدالة دي بتقبل معامل منطقي (Boolean) اسمه `deep`. لو مررنا القيمة `false` (أو سبناها فاضية لإنها القيمة الافتراضية)، البرنامج هيعمل استنساخ سطحي (Shallow Clone)؛ يعني هياخد العنصر بخصائصه (Attributes) زي الكلاس والـ ID، لكن مش هياخد أي نصوص جواه ولا هياخد العناصر الأبناء اللي جواه. لكن لو مررنا القيمة `true`، هيعمل استنساخ عميق (Deep Clone) وهياخد العنصر بكل محتوياته ونصوصه. المدرب حذر من نقطة في غاية الأهمية؛ وهي إن الاستنساخ بينسخ كمان الـ `id` بتاع العنصر. وبما إن الـ `id` مينفعش يتكرر في نفس الصفحة، لازم نعدل الـ `id` بتاع النسخة الجديدة برمجياً قبل ما نضيفها لصفحة الـ HTML عشان نتجنب أي أخطاء.

**2. Technical Definitions (English):**
*   **`cloneNode(deep)`:** A method that returns a duplicate of the node on which this method was called. 
*   **Deep Clone (`true`):** Copies the node and its entire subtree, including text and child elements.
*   **Shallow Clone (`false`):** Copies only the node and its attributes, leaving it empty of any inner text or children.

**3. Code Implementation:**

```javascript
const originalParagraph = document.querySelector("p");

// Shallow Clone (false): Copies only the <p> tag and attributes, no text
const shallowClone = originalParagraph.cloneNode(false);

// Deep Clone (true): Copies the <p> tag, attributes, and all inner text/children
const deepClone = originalParagraph.cloneNode(true);

// CRITICAL: Change the ID of the cloned element to prevent duplicates in the DOM
deepClone.id = originalParagraph.id + "-clone";

// Append the new cloned element to the body
document.body.appendChild(deepClone);
```

---

### 68. Events and Event Listeners (الأحداث ومراقبات الأحداث)

**1. Conceptual Explanation (Arabic):**
الأحداث (Events) هي أي أكشن أو تفاعل بيحصل في صفحة الويب، زي إن المستخدم يضغط على زرار، أو يحرك الماوس، أو الصفحة تحمل بالكامل. نقدر نربط الأحداث دي بدوال عشان تنفذ كود معين. الطريقة القديمة هي استخدام خصائص زي `onclick` سواء جوه الـ HTML مباشرة أو في الجافا سكريبت، بس عيبها إنها بتسمح بربط دالة واحدة بس للحدث؛ لو كتبنا دالة تانية هتمسح الأولى (Override). الطريقة الاحترافية والأقوى هي استخدام دالة `addEventListener`. الدالة دي بتاخد معاملين: نوع الحدث (زي "click")، والدالة اللي هتتنفذ (Callback). الميزة الكبرى هنا إننا نقدر نضيف أكتر من حدث لنفس العنصر في نفس الوقت من غير ما يلغوا بعض. كمان المدرب وضح تقنية متقدمة جداً؛ وهي إننا نربط الحدث بكائن المستند الأساسي `document` بدل العنصر نفسه. بنعمل كده لما نكون عايزين نضيف حدث لعنصر لسه متنشأش أساساً في الصفحة (مثلاً زرار هيظهر بعدين). في الحالة دي، بنراقب ضغطات الماوس في الصفحة كلها، ولما الضغطة تحصل، بنتأكد عن طريق خاصية الـ `target` إن الضغطة دي جت على العنصر اللي إحنا نقصده بناءً على الكلاس بتاعه.

**2. Technical Definitions (English):**
*   **Events:** Actions or occurrences that happen in the system being programmed, which the system tells you about so your code can react to them.
*   **`addEventListener(type, listener)`:** A method that sets up a function that will be called whenever the specified event is delivered to the target.
*   **Event Delegation:** A technique involving adding event listeners to a parent element instead of adding them to the descendant elements, checking `event.target` to see if the desired element was interacted with.

**3. Code Implementation:**

```javascript
const myBtn = document.getElementById("btn");

// Method 1: Traditional inline event handler (Can be overridden)
myBtn.onclick = function() {
    console.log("Clicked using onclick!");
}

// Method 2: addEventListener (Professional way, allows multiple listeners)
myBtn.addEventListener("click", () => {
    console.log("Action 1 executed");
});

myBtn.addEventListener("click", () => {
    console.log("Action 2 executed without overriding Action 1");
});

// Event Delegation (Attaching an event to elements that don't exist yet)
document.addEventListener("click", function(event) {
    // Check if the clicked target has a specific class (e.g., a dynamically cloned paragraph)
    if(event.target.classList.contains("clone")) {
        console.log("I am a dynamically cloned element!");
    }
});
```

---

### 69. Mouse Events (أحداث الماوس)

**1. Conceptual Explanation (Arabic):**
أحداث الماوس بتسمح للبرنامج يتفاعل مع حركة أو ضغطات فارة المستخدم. المدربين ركزوا على 4 أحداث أساسية: حدث الـ `click` اللي بيشتغل لما نضغط على العنصر. وحدث `mouseover` (أو `mouseenter`) اللي بيشتغل لما مؤشر الماوس يدخل جوه حدود العنصر (زي تأثير الـ Hover في الـ CSS). وحدث `mouseout` (أو `mouseleave`) اللي بيشتغل لما الماوس يخرج بره حدود العنصر. وأخيراً حدث `contextmenu` اللي بيشتغل لما المستخدم يضغط كليك يمين. لما أي حدث من دول بيحصل، المتصفح بيبعت أوتوماتيكياً كائن اسمه `event` للدالة بتاعتنا. الكائن ده مليان تفاصيل عن الحدث؛ زي إحداثيات الماوس وقت الضغطة، وأهم حاجة جواه هي خاصية `event.target` اللي بتشاور على العنصر نفسه اللي الحدث حصل عليه عشان نقدر نعدل فيه زي تغيير لونه أو النص اللي جواه. كمان نقدر نستخدم دالة `preventDefault()` جوه الحدث عشان نمنع السلوك الافتراضي للمتصفح؛ زي منع ظهور القائمة الافتراضية بتاعة المتصفح لما ندوس كليك يمين، عشان نظهر قايمة مخصصة لينا إحنا.

**2. Technical Definitions (English):**
*   **`mouseover` / `mouseenter`:** Events fired when a pointing device is moved onto the element that has the listener attached.
*   **`mouseout` / `mouseleave`:** Events fired when a pointing device is moved off the element that has the listener attached.
*   **`contextmenu`:** An event fired when the user attempts to open a context menu (typically by right-clicking).
*   **`event.target`:** A property of the event object that references the element that dispatched the event.

**3. Code Implementation:**

```javascript
const myBox = document.getElementById("myBox");

// Hover / Mouse Enter Event
myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it!";
});

// Leave / Mouse Out Event
myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me";
});

// Click Event
myBox.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch!";
});

// Context Menu (Right Click) and preventDefault
document.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Stops the browser's default right-click menu from showing
    console.log("Custom right-click menu logic goes here.");
});
```

---

### 70. Keyboard Events (أحداث لوحة المفاتيح)

**1. Conceptual Explanation (Arabic):**
للتعامل مع لوحة المفاتيح، الجافا سكريبت بتوفر حدثين أساسيين: حدث `keydown` بيشتغل بمجرد ما المستخدم يضغط على أي زرار ويفضل دايس عليه، وحدث `keyup` بيشتغل لما المستخدم يرفع إيده من على الزرار. المدرب نبه إن في حدث تالت قديم اسمه `keypress` بس مبقاش مدعوم في كل المتصفحات ومينفعش نعتمد عليه تاني. عشان نعرف المستخدم داس على أنهي زرار بالظبط، بنستخدم كائن الـ `event` ونوصل لخاصية جواه اسمها `event.key` اللي بترجع اسم الزرار (زي حرف "q" أو "ArrowUp" للسهم لفوق). في تطبيق عملي ممتع، المدرب عمل صندوق بيتحرك في الشاشة باستخدام أسهم الكيبورد. ربط حدث الـ `keydown` بكائن المستند الأساسي `document`، واستخدم جملة السويتش `switch` عشان يغير إحداثيات الـ X والـ Y بناءً على السهم اللي اتداس. ولإن الأسهم دي وظيفتها الافتراضية إنها بتعمل سكرول (Scroll) للصفحة، استخدمنا `event.preventDefault()` عشان نمنع الصفحة من النزول والطلوع والتحكم يكون مقتصر بس على تحريك الصندوق.

**2. Technical Definitions (English):**
*   **`keydown`:** An event fired when a key is pressed down. It fires repeatedly while the key is held down.
*   **`keyup`:** An event fired when a key is released.
*   **`event.key`:** A property of the keyboard event object that returns the value of the key pressed by the user.

**3. Code Implementation:**

```javascript
let x = 0;
let y = 0;
const moveAmount = 10;
const myBox = document.getElementById("myBox");

// Listen for keys pressed anywhere on the document
document.addEventListener("keydown", event => {
    
    // Only proceed if the pressed key is an Arrow key
    if(event.key.startsWith("Arrow")){
        
        event.preventDefault(); // Prevents the browser's default scrolling behavior
        
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        
        // Update CSS coordinates (Box must have 'position: relative' or 'absolute')
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

// Keyup Event to trigger an action when the key is released
document.addEventListener("keyup", event => {
    console.log(`Key released: ${event.key}`);
});
```

---

### 71. Form Events and Validation (أحداث النماذج والتحقق من صحتها)

**1. Conceptual Explanation (Arabic):**
عند التعامل مع النماذج (Forms) وحقول الإدخال، عندنا 3 أحداث رئيسية: حدث `focus` بيشتغل لما المستخدم يضغط جوه الحقل عشان يبدأ يكتب. حدث `blur` بيشتغل لما المستخدم يخلص كتابة ويضغط بره الحقل، وده الوقت المثالي جداً اللي نقدر نشيك فيه على البيانات اللي هو كتبها (Validation). الحدث التالت هو `submit` وده بيحصل لما المستخدم يضغط على زرار الإرسال. المدرب وضح استراتيجية قوية للـ Validation؛ وهي إننا ننشئ متغيرات كإشارات (Flags) ونخلي قيمتها المبدئية `false` كأن القوانين متنفذتش. بعدين لما المستخدم يبعت الفورم، بنشيك على الحقول: بنتأكد إن الحقل مش فاضي باستخدام عدم التطابق التام مع قيمة فارغة `!==""`، وبنتأكد إن عدد الحروف (Length) مش بيتخطى رقم معين. لو الشروط دي اتحققت، بنغير الـ Flags لـ `true`. ولو شرط واحد بس فيهم فشل، بنستخدم دالة `event.preventDefault()` عشان نمنع الفورم من إنها تعمل إعادة تحميل (Refresh) أو تبعت البيانات للسيرفر وهي ناقصة، وبكده بنوفر ريكويستات على السيرفر ونعالج المشاكل من جهة العميل (Client-side) الأول.

**2. Technical Definitions (English):**
*   **`focus`:** An event fired when an element has received focus, such as clicking inside an input field.
*   **`blur`:** An event fired when an element has lost focus, typically moving the cursor out of an input field.
*   **`submit`:** An event fired when a `<form>` is submitted.
*   **Client-side Validation:** The process of ensuring that user input is clean, correct, and useful in the browser before sending it to the server.

**3. Code Implementation:**

```html
<!-- HTML Form Setup -->
<form id="myForm">
    <input type="text" id="user" placeholder="Username (Max 10 chars)">
    <input type="text" id="age" placeholder="Age">
    <button type="submit">Submit</button>
</form>
```

```javascript
const form = document.getElementById("myForm");
const userInput = document.getElementById("user");
const ageInput = document.getElementById("age");

// Input blur event for live validation feedback
userInput.addEventListener("blur", () => {
    if(userInput.value.length > 10) {
        console.log("Username is too long!");
    }
});

// Form submit event
form.addEventListener("submit", (event) => {
    let userValid = false;
    let ageValid = false;

    // Validation Logic
    if(userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }

    if(ageInput.value !== "") {
        ageValid = true;
    }

    // If any validation fails, stop the form from submitting
    if(userValid === false || ageValid === false) {
        event.preventDefault(); // Stops the page from refreshing and sending data
        console.log("Validation failed. Please correct the fields.");
    }
});
```

---

### 72. Event Simulation (محاكاة الأحداث `Event Simulation`)

**1. Conceptual Explanation (Arabic):**
محاكاة الأحداث (Event Simulation) هي تقنية بنستخدمها عشان نخلي حدث معين يشتغل بشكل برمجي أوتوماتيكي من غير ما المستخدم يتدخل أو يعمل الأكشن بنفسه. يعني بدل ما أستنى المستخدم يدوس على الزرار أو يعمل فوكس على حقل، أنا بخلي الكود هو اللي يعمل كده. بنعمل ده عن طريق استدعاء اسم الحدث كدالة مباشرة. المدرب ضرب مثال قوي جداً بنشوفه في مواقع زي جوجل درايف أو مواقع البنوك؛ لما بيتبعتلك كود تفعيل (Verification Code) من 4 أرقام وكل رقم ليه مربع إدخال لوحده. بمجرد ما المستخدم بيكتب أول رقم، الجافا سكريبت بتعمل أوتوماتيكياً محاكاة لحدث الـ `blur` عشان تخرجه من المربع الأول، وبتعمل محاكاة لحدث الـ `focus` عشان تنقله فوراً للمربع التاني يكتب فيه، وده بيوفر تجربة مستخدم ممتازة وسريعة. كمان نقدر نعمل محاكاة لحدث الـ `click` عشان نخفي رابط معين وندوس عليه برمجياً.

**2. Technical Definitions (English):**
*   **Event Simulation:** The process of programmatically triggering DOM events (like click, focus, or blur) via JavaScript code, mirroring actions as if a real user performed them.
*   **`element.focus()` / `element.blur()`:** Methods that programmatically set or remove keyboard focus to/from the specified element.
*   **`element.click()`:** A method that simulates a mouse click on an element.

**3. Code Implementation:**

```javascript
const inputOne = document.getElementById("input-1");
const inputTwo = document.getElementById("input-2");
const hiddenLink = document.getElementById("hidden-link");

// Simulate a focus event on page load without user interaction
window.onload = function() {
    inputOne.focus(); 
}

// Simulate blur and focus to auto-jump to the next input field
inputOne.addEventListener("keyup", function() {
    // If the user typed 1 character
    if(this.value.length === 1) {
        this.blur();      // Programmatically remove focus from input 1
        inputTwo.focus(); // Programmatically shift focus to input 2
    }
});

// Simulate a click on a link
document.getElementById("auto-click-btn").addEventListener("click", () => {
    hiddenLink.click(); // Triggers the link's action programmatically
});
```

---

### 73. ClassList Property (إدارة الفئات `classList`)

**1. Conceptual Explanation (Arabic):**
خاصية الـ `classList` بتعتبر من أهم وأقوى الخواص في الجافا سكريبت للتعامل مع كلاسات الـ CSS الخاصة بأي عنصر. بتوفر لنا مجموعة دوال جاهزة ومرنة جداً. دالة `add` بتضيف كلاس جديد للعنصر، ودالة `remove` بتحذفه. الدالة العبقرية هي `toggle`، دي بتعكس الحالة؛ لو الكلاس موجود بتشيله، ولو مش موجود بتضيفه، ودي ممتازة جداً في القوائم المنسدلة (Dropdowns) وتغيير الوضع المظلم (Dark Mode). دالة `replace` بتاخد معاملين وبتبدل كلاس قديم بكلاس جديد. ودالة `contains` بنستخدمها كشرط للتحقق؛ بترجع `true` لو العنصر بيحتوي على الكلاس ده و `false` لو لأ. أخيراً عندنا دالة `item` اللي بنمرر ليها رقم الفهرس (Index) عشان ترجعلنا اسم الكلاس الموجود في الترتيب ده. استخدام الـ `classList` بيخلينا نجهز كل الستايلات بتاعتنا في ملف الـ CSS على هيئة كلاسات، وبس نبدل بين الكلاسات دي برمجياً بدل ما نكتب الستايلات سطر سطر في الجافا سكريبت.

**2. Technical Definitions (English):**
*   **`classList`:** A DOM property that returns a live DOMTokenList collection of the class attributes of the element.
*   **`add(className)` / `remove(className)`:** Methods to add or remove one or multiple CSS classes.
*   **`toggle(className)`:** A method that removes a given class if it is present and adds it if it is absent.
*   **`replace(oldClass, newClass)`:** A method that replaces an existing class with a new class.
*   **`contains(className)`:** A method that returns a boolean indicating if an element has the specified class.

**3. Code Implementation:**

```javascript
const myButton = document.getElementById("myButton");

// 1. Add a class
myButton.classList.add("enabled");

// 2. Remove a class
myButton.classList.remove("hidden");

// 3. Toggle a class (Useful for hover effects or active states)
myButton.addEventListener("mouseover", () => {
    myButton.classList.toggle("hover-state");
});

myButton.addEventListener("mouseout", () => {
    myButton.classList.toggle("hover-state");
});

// 4. Replace one class with another and 5. Contains
myButton.addEventListener("click", (event) => {
    // Check if the button contains the 'disabled' class
    if(event.target.classList.contains("disabled")) {
        console.log("Button is already disabled!");
        event.target.textContent = "Cannot click!";
    } else {
        // Replace 'enabled' with 'disabled'
        event.target.classList.replace("enabled", "disabled");
    }
});
```

---

### 74. Showing and Hiding Elements (إظهار وإخفاء العناصر)

**1. Conceptual Explanation (Arabic):**
لإظهار وإخفاء العناصر ديناميكياً، الجافا سكريبت بتتحكم في خصائص الـ CSS للعنصر. عندنا طريقتين بيقدموا نتايج مختلفة شوية في هيكل الصفحة (Layout). الطريقة الأولى هي التلاعب بخاصية الـ `display`. لما نساويها بـ `none`، العنصر بيختفي تماماً والمتصفح مش بيحجز له أي مساحة في الصفحة، فالعناصر اللي تحته بتطلع لفوق وتاخد مكانه. ولما نحب نظهره تاني بنديله قيمته الأصلية زي `block` أو `flex`. الطريقة التانية هي التلاعب بخاصية الـ `visibility`. لما نساويها بـ `hidden`، العنصر بيختفي عن العين، لكن المتصفح بيفضل حاجز مساحته الفاضية في الصفحة زي ما هي، والعناصر اللي تحته مش بتتحرك. ولما نحب نظهره بنساويها بـ `visible`. بنختار بين الطريقتين على حسب تصميم الموقع بتاعنا وهل محتاجين نحافظ على أبعاد الصفحة ثابتة ولا لأ.

**2. Technical Definitions (English):**
*   **`display: none`:** A CSS property manipulation that hides an element and completely removes it from the document flow, freeing up its allocated space.
*   **`visibility: hidden`:** A CSS property manipulation that hides an element visually but retains its physical space and dimensions within the document flow.

**3. Code Implementation:**

```javascript
const myImage = document.getElementById("my-img");
const toggleDisplayBtn = document.getElementById("toggle-display");
const toggleVisibilityBtn = document.getElementById("toggle-visibility");

// Method 1: Toggling Display (Space is reclaimed)
toggleDisplayBtn.addEventListener("click", () => {
    if(myImage.style.display === "none") {
        myImage.style.display = "block";
        toggleDisplayBtn.textContent = "Hide (Display)";
    } else {
        myImage.style.display = "none";
        toggleDisplayBtn.textContent = "Show (Display)";
    }
});

// Method 2: Toggling Visibility (Space is reserved)
toggleVisibilityBtn.addEventListener("click", () => {
    if(myImage.style.visibility === "hidden") {
        myImage.style.visibility = "visible";
    } else {
        myImage.style.visibility = "hidden";
    }
});
```

---

### 75. NodeLists (قوائم العقد `NodeLists`)

**1. Conceptual Explanation (Arabic):**
قائمة العقد (NodeList) هي هيكل بيانات بيرجع لما نستخدم دالة زي `querySelectorAll`. الهيكل ده شبه المصفوفة (Array) وبيحتوي على العناصر اللي بتطابق البحث بتاعنا، وبيمتلك خاصية طول `length` ودالة `forEach` عشان نلف على العناصر عنصر عنصر ونعدل فيهم. لكن في فرقين جوهريين لازم نعرفهم: الأول إن الـ NodeList مفيهوش دوال المصفوفات المتقدمة زي `map` و `filter` و `reduce` (ولو احتجناهم لازم نحول الـ NodeList لمصفوفة حقيقية باستخدام `Array.from()`). الفرق التاني والأخطر هو إن الـ NodeList عبارة عن تجميعة "ثابتة" (Static Collection). يعني لو إنت سحبت 4 زراير وحطيتهم في NodeList، وبعدين مسحت زرار منهم من الـ DOM، الزرار ده هيفضل متسجل جوه الـ NodeList والعدد هيفضل 4 زي ما هو. عشان كده، لو ضفت أو حذفت عناصر في الصفحة، لازم تعمل تحديث (Update) للـ NodeList بأنك تنادي على `querySelectorAll` مرة تانية عشان يسحب العدد الفعلي الجديد.

**2. Technical Definitions (English):**
*   **NodeList:** A collection of document nodes (typically elements) returned by properties like `Node.childNodes` or methods like `document.querySelectorAll`.
*   **Static Collection:** A characteristic of NodeLists returned by `querySelectorAll`, meaning any subsequent changes in the DOM (adding/removing elements) are NOT automatically reflected in the collection.

**3. Code Implementation:**

```javascript
// Creates a STATIC NodeList of elements
let buttons = document.querySelectorAll(".my-buttons");

// NodeLists have a native forEach method
buttons.forEach(button => {
    button.addEventListener("click", event => {
        // Removes the clicked button from the DOM entirely
        event.target.remove(); 
        
        // At this point, the button is gone from the browser, 
        // BUT it still exists inside the 'buttons' NodeList memory!
        console.log(buttons.length); // Will still log the original number
        
        // Solution: Manually re-query the DOM to update the NodeList
        buttons = document.querySelectorAll(".my-buttons");
        console.log(buttons.length); // Will now log the updated, correct number
    });
});
```

[End of Part 9]



### 76. Rock Paper Scissors Game (لعبة حجر ورقة مقص)

**1. Conceptual Explanation (Arabic):**
المدرب قام بتطبيق عملي لبرمجة اللعبة الشهيرة "حجر ورقة مقص". اللعبة بتتكون من 3 زراير، كل زرار بيمثل اختيار معين (حجر، ورقة، أو مقص)، وبنمرر الاختيار ده كمعامل (Argument) لدالة اسمها `playGame`. جوه الدالة، بنخلي الكمبيوتر يختار اختياره بشكل عشوائي عن طريق إنشاء مصفوفة (Array) فيها التلات اختيارات، وتوليد رقم عشوائي بين 0 و 2 باستخدام `Math.random()` عشان نستخدمه كمؤشر (Index) لاختيار الكمبيوتر. بعد كده بنقارن اختيار المستخدم باختيار الكمبيوتر. لو الاتنين زي بعض بنطبع "تعادل" (It's a tie). لو مختلفين، بنستخدم جملة الاختيار `switch` عشان نختبر اختيار المستخدم، وجواها بنستخدم المعامل الثلاثي (Ternary Operator) عشان نختبر اختيار الكمبيوتر ونحدد مين كسبان ومين خسران. المدرب كمان استخدم الـ `classList` عشان يضيف كلاس بيخلي النص لونه أخضر لو المستخدم كسب، وأحمر لو خسر، وبيشيل الكلاسات دي في حالة التعادل. وفي النهاية، تم إضافة متغيرات لعداد النقاط (Score Tracker) بيزيد مع كل مكسب للمستخدم أو للكمبيوتر.

**2. Technical Definitions (English):**
*   **State Tracking:** Keeping variables (like player score and computer score) outside of the main function so they persist and increment accurately across multiple function calls.
*   **Game Logic:** The conditional statements (switch/ternary) used to evaluate the win/loss/tie outcomes based on the choices made by the player and computer.

**3. Code Implementation:**

```javascript
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Reset CSS classes before applying new ones
    resultDisplay.classList.remove("greenText", "redText");

    // Update Scores and apply CSS classes based on the result
    if (result === "YOU WIN!") {
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "YOU LOSE!") {
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}
```

---

### 77. Image Slider Program (برنامج عارض الصور)

**1. Conceptual Explanation (Arabic):**
المدرب شرح إزاي نعمل عارض صور (Image Slider) بيقلب الصور بشكل أوتوماتيكي ويدوي. بنبدأ بإخفاء كل الصور عن طريق إعطائهم خاصية `display: none` في الـ CSS. في الجافا سكريبت، بنجمع كل الصور دي في قائمة عقد (NodeList) باستخدام `querySelectorAll`. البرنامج بيعتمد على متغير اسمه `slideIndex` قيمته المبدئية صفر. بنستخدم دالة أوتوماتيكية `setInterval` عشان تزود الـ Index ده وتستدعي دالة تانية بتشيل كلاس الإظهار `displaySlide` من الصورة القديمة وتحطه على الصورة الجديدة. ولإننا بنتعامل مع مصفوفة صور محدودة، المدرب عمل شروط (If Statements) تضمن إن لو الـ Index عدى عدد الصور، يرجع للصفر تاني (عشان يلف في دائرة)، ولو ضغطنا على زرار "السابق" والـ Index بقى أصغر من صفر، يروح لآخر صورة. المدرب كمان ضاف دالة `clearInterval` على زرار الرجوع عشان لو المستخدم قرر يرجع يتفرج على صورة براحته، المؤقت الأوتوماتيكي يقف والصورة متتغيرش فجأة.

**2. Technical Definitions (English):**
*   **Image Slider / Carousel:** A UI component that cycles through a series of images linearly.
*   **`clearInterval(intervalID)`:** A method that cancels a timed, repeating action which was previously established by a call to `setInterval()`.

**3. Code Implementation:**

```javascript
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// Wait for all DOM content to load before running
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        // Automatically change slides every 5 seconds
        intervalId = setInterval(nextSlide, 5000); 
    }
}

function showSlide(index) {
    // Loop back to the beginning if we exceed the array length
    if (index >= slides.length) {
        slideIndex = 0;
    } 
    // Loop to the end if we go backwards past 0
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    // Show the current slide
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    // Stop the automatic sliding when manually interacting
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
```

---

### 78. Callback Hell (جحيم الاستدعاءات الرجعية `Callback Hell`)

**1. Conceptual Explanation (Arabic):**
جحيم الاستدعاءات الرجعية (Callback Hell) هو مصطلح بيوصف حالة سيئة في الكود بتحصل لما بنكتب دوال ممررة (Callbacks) متداخلة جوه بعضها بشكل عميق جداً لدرجة إن الكود بياخد شكل هرمي وبيبقى صعب جداً في القراءة والصيانة. المدرب وضح إننا بنضطر نعمل كده مع العمليات غير المتزامنة (Asynchronous Functions) لإننا مش عارفين المهام دي هتاخد وقت قد إيه، وعايزين نجبرها تتنفذ بالترتيب (مهمة 1، ثم 2، ثم 3، ثم 4). عشان نضمن الترتيب ده، بنخلي كل دالة تستقبل Callback، ولما تخلص شغلها، تستدعي الدالة اللي بعدها، وهكذا. النمط ده كان منتشر جداً في الجافا سكريبت القديمة، بس المدرب حذر منه جداً وقال إننا لازم نتجنبه لإن في طرق أحدث وأسهل بكتير للقراءة زي الـ Promises والـ Async/Await.

**2. Technical Definitions (English):**
*   **Callback Hell:** A phenomenon that afflicts JavaScript developers when multiple asynchronous functions are nested inside callbacks, resulting in a pyramid-like structure of code that is hard to read and debug.

**3. Code Implementation:**

```javascript
// Code block: Demonstrating Callback Hell to enforce sequential execution
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 1500);
}

// Nested Callbacks (The "Pyramid of Doom")
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("All tasks complete!");
            });
        });
    });
});
```

---

### 79. Promises (الوعود `Promises`)

**1. Conceptual Explanation (Arabic):**
الوعود (Promises) هي عبارة عن كائنات (Objects) وظيفتها إدارة العمليات غير المتزامنة زي تحميل ملفات أو جلب بيانات من سيرفر. الفكرة هنا إن الدالة بترجع لك "وعد" إنها هتجيبلك قيمة في المستقبل. الوعد ده بيفضل في حالة انتظار (Pending) لحد ما المهمة تخلص. لو المهمة نجحت، الوعد بيتحقق (Resolved) وبيرجعلك النتيجة، ولو فشلت، الوعد بيترفض (Rejected) وبيرجعلك رسالة خطأ. عشان ننشئ وعد، بنكتب `new Promise` وبنمرر لها دالة بتاخد معاملين: `resolve` و `reject`. الميزة الكبرى للـ Promises إنها بتعالج مشكلة الـ Callback Hell؛ بدل التداخل الهرمي، بنستخدم تقنية تسلسل الدوال (Method Chaining) عن طريق استخدام كلمة `then.` اللي معناها "وبعدين"، عشان نقول للبرنامج "لما الوعد ده يتحقق، نفذ الوعد اللي بعده"، وفي الآخر بنحط دالة `catch.` عشان تصطاد أي خطأ ممكن يحصل في أي خطوة من السلسلة. في المثال، المدرب طبق الفكرة دي على مهام زي (تمشية الكلب، تنظيف المطبخ، إخراج القمامة).

**2. Technical Definitions (English):**
*   **Promise:** An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
*   **`resolve(value)`:** A function parameter inside the Promise constructor used to indicate that the asynchronous operation completed successfully.
*   **`reject(reason)`:** A function parameter inside the Promise constructor used to indicate that the asynchronous operation failed.
*   **`.then()`:** A method used to schedule callback functions to be executed when the Promise successfully resolves.
*   **`.catch()`:** A method used to handle errors or rejections produced anywhere in the Promise chain.

**3. Code Implementation:**

```javascript
// Creating a Promise-returning function
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true; // Simulating success
            
            if (dogWalked) {
                resolve("You walk the dog");
            } else {
                reject("You didn't walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            
            if (kitchenCleaned) {
                resolve("You clean the kitchen");
            } else {
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false; // Simulating a failure here
            
            if (trashTakenOut) {
                resolve("You take out the trash");
            } else {
                reject("You didn't take out the trash");
            }
        }, 500);
    });
}

// Executing Promises sequentially using Method Chaining
walkDog()
    .then(value => {
        console.log(value);
        return cleanKitchen(); // Returning the next Promise in the chain
    })
    .then(value => {
        console.log(value);
        return takeOutTrash();
    })
    .then(value => {
        console.log(value);
        console.log("You finished all the chores!");
    })
    .catch(error => {
        // This will catch the failure in takeOutTrash
        console.error(error); 
    });
```

---

### 80. Async / Await (التزامن والانتظار `Async / Await`)

**1. Conceptual Explanation (Arabic):**
الكلمتين المفتاحيتين `async` و `await` بيشتغلوا مع بعض كفريق عشان يسهلوا كتابة الأكواد غير المتزامنة ويخلوها تتقرأ كأنها كود متزامن عادي سطراً بسطر (Synchronous manner). المدرب وضح إن لو كتبنا كلمة `async` قبل تعريف أي دالة، ده بيخلي الدالة دي أوتوماتيكياً ترجع وعد (Promise). لكن السحر الحقيقي في كلمة `await`، اللي بتكبر الدالة إنها تقف وتستنى (Wait) لحد ما الوعد ده يخلص ويجيب النتيجة قبل ما تكمل قراءة باقي السطور. ولازم نكون عارفين إن كلمة `await` مينفعش تُستخدم إطلاقاً غير جوه دالة مكتوب قبلها `async`. ولإن الوعود ممكن تفشل وترجع (Reject)، أفضل طريقة للتعامل معاها جوه الـ async/await هي استخدام بلوك الـ `try/catch` اللي شرحناه قبل كده عشان نصطاد الأخطاء بأناقة من غير ما البرنامج يبوظ.

**2. Technical Definitions (English):**
*   **`async` Keyword:** Used to declare an asynchronous function, guaranteeing that the function will implicitly return a Promise.
*   **`await` Keyword:** Pauses the execution of an async function, waiting for a Promise to resolve before continuing to the next line of code.

**3. Code Implementation:**

```javascript
// Using the same Promise-returning functions (walkDog, cleanKitchen, takeOutTrash) from the previous section

// Declaring the function as async
async function doChores() {
    // Encasing the logic in a try/catch block to handle rejections
    try {
        // Code execution pauses here until walkDog resolves
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        // Pauses again until cleanKitchen resolves
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        // Pauses again until takeOutTrash resolves
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!");

    } catch (error) {
        // Any reject() triggered in the awaited promises will be caught here
        console.error(error); 
    }
}

// Invoking the async function
doChores();
```

---

### 81. JSON (صيغة جيسون `JSON`)

**1. Conceptual Explanation (Arabic):**
صيغة الجيسون (JSON) هي اختصار لـ JavaScript Object Notation. هي عبارة عن صيغة قياسية خفيفة لتبادل ونقل البيانات، وبتُستخدم غالباً عشان نبعت ونستقبل بيانات بين المتصفح (Web Application) وبين السيرفر. ملفات الجيسون ممكن تكون عبارة عن كائن (Object)، أو مصفوفة قيم (Array)، أو مصفوفة من الكائنات (Array of Objects). التركيبة بتاعتها بتشبه الكائنات العادية في الجافا سكريبت بس في شرط صارم جداً: كل المفاتيح (Keys) والنصوص (String values) لازم تكون محطوطة بين علامات تنصيص مزدوجة (Double quotes). الجافا سكريبت بتوفر كائن مدمج اسمه `JSON` جواه دالتين مهمين: دالة `stringify` عشان تاخد أي كائن أو مصفوفة عندك في الكود وتحولها لنص (String) واحد طويل ينفع يتبعت للسيرفر، ودالة `parse` عشان تعمل العكس؛ يعني تاخد النص اللي جاي من السيرفر وتفكه وترجعه لكائن أو مصفوفة جافا سكريبت حقيقية تقدر تتعامل معاها.

**2. Technical Definitions (English):**
*   **JSON:** JavaScript Object Notation. A lightweight, text-based data interchange format.
*   **`JSON.stringify()`:** A method that converts a JavaScript object or value to a JSON string.
*   **`JSON.parse()`:** A method that parses a JSON string, constructing the JavaScript value or object described by the string.

**3. Code Implementation:**

```javascript
// A JavaScript Array of Objects
const people = [
    { name: "SpongeBob", age: 30, isEmployed: true },
    { name: "Patrick", age: 34, isEmployed: false }
];

// Converting JS Objects into a JSON String
const jsonString = JSON.stringify(people);
console.log(jsonString); 
// Output is a single string: '[{"name":"SpongeBob","age":30,"isEmployed":true},{"name":"Patrick","age":34,"isEmployed":false}]'

// Converting a JSON String back into JS Objects
const parsedData = JSON.parse(jsonString);
console.log(parsedData); 
// Output is a proper JS Array of Objects

// Accessing the parsed data
parsedData.forEach(person => {
    console.log(`Name: ${person.name}, Employed: ${person.isEmployed}`);
});
```

---

### 82. Fetch API (واجهة جلب البيانات `Fetch API`)

**1. Conceptual Explanation (Arabic):**
دالة الـ `fetch` هي واجهة مدمجة في المتصفح بتستخدم لعمل طلبات (HTTP requests) لجلب أو إرسال موارد عبر شبكة الإنترنت. الدالة دي بتدعم العمليات غير المتزامنة وبترجع وعد (Promise). بشكل افتراضي، الـ `fetch` بتعمل طلب من نوع (GET) لجلب البيانات، لكن بنقدر نحدد أنواع تانية زي (POST، PUT، DELETE) لإرسال أو تعديل البيانات. المدرب عمل تطبيق بيجيب بيانات من (Pokémon API). عشان نتعامل مع الـ `fetch`، أول حاجة بنمرر الرابط (URL)، ولما الوعد ينجح بيرجع لنا كائن استجابة (Response Object). مهم جداً نشيك على خاصية `response.ok` (اللي بتكون `true` لو رمز الحالة 200)، لإن الـ fetch مش بيعمل Reject للوعد لو المورد مش موجود (زي رمز خطأ 404)، فلو الخاصية دي `false` لازم نفتعل خطأ بـ `throw new Error`. بعد كده بنستخدم دالة `json()` اللي بترجع وعد جديد عشان تحول البيانات من شكلها النصي الخام لصيغة جيسون نقدر نقرأها. المدرب وضح طريقتين لكتابة ده: استخدام تسلسل الـ `.then()`، واستخدام الأسلوب الأحدث والأسهل `async / await`.

**2. Technical Definitions (English):**
*   **`fetch(url, options)`:** A global function used to make asynchronous HTTP requests to fetch resources from a network.
*   **`response.ok`:** A read-only boolean property of the Response object that indicates whether the response was successful (status in the range 200–299).
*   **`.json()`:** A method on the Response object that reads the body to completion and returns a promise that resolves with the result of parsing the body text as JSON.

**3. Code Implementation:**

```javascript
// Code block 1: Fetching using traditional Promises (.then)
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if (!response.ok) { // Handles 404 Not Found errors
            throw new Error("Could not fetch resource");
        }
        return response.json(); // Parses body as JSON
    })
    .then(data => {
        console.log(`Name: ${data.name}, Weight: ${data.weight}`);
    })
    .catch(error => {
        console.error(error);
    });

// Code block 2: Fetching using modern Async / Await
async function fetchPokemonData() {
    try {
        const pokemonName = "typhlosion";
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(`Name: ${data.name}, ID: ${data.id}`);

    } catch (error) {
        console.error(error);
    }
}
fetchPokemonData();
```

---

### 83. Weather App Project (مشروع تطبيق الطقس)

**1. Conceptual Explanation (Arabic):**
المدرب قام ببناء مشروع متكامل لتطبيق بيجيب بيانات الطقس الحقيقية بناءً على اسم المدينة باستخدام الـ (Fetch API) وموقع (OpenWeatherMap). البرنامج بيبدأ بنموذج إدخال (Form)، ولما المستخدم بيضغط زرار الإرسال، بنستخدم حدث الـ `submit`، وبنمنع المتصفح من إنه يعمل تحديث للصفحة باستخدام `event.preventDefault()`. لو حقل الإدخال مش فاضي، بنستدعي دالة غير متزامنة (Async function) بتعمل `fetch` للرابط بتاع الـ API وبنمررله اسم المدينة ومفتاح الواجهة البرمجية (API Key). بعد ما بنستلم بيانات الجيسون، المدرب استخدم تقنية الـ Destructuring المتقدمة (استخراج القيم المتداخلة) عشان يسحب المدينة والحرارة والرطوبة وحالة الطقس ورمز الـ ID الخاص بالطقس في سطر واحد. بعد كده بنبني عناصر الـ HTML ديناميكياً باستخدام `createElement` وبنحط جواها البيانات، وبنحول درجات الحرارة من الكلفن (Kelvin) للفهرنهايت والمئوية. وأخيراً، المدرب استخدم جملة `switch` عشان يفحص الـ ID الخاص بالطقس (اللي بييجي من الـ API على شكل أرقام زي 200 للعواصف، أو 800 للسماء الصافية) وبناءً عليه بيرجع الإيموجي المناسب لتمثيل حالة الجو.

**2. Technical Definitions (English):**
*   **`event.preventDefault()`:** A method called on the event object inside an event listener to prevent the browser's default behavior, such as preventing a form submission from refreshing the entire page.
*   **Nested Object Destructuring:** The process of unpacking variables from deep within a complex JSON object structure directly in the variable assignment phase.

**3. Code Implementation:**

```javascript
// Note: Partial core logic implementation representing the project's logic
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
// Replace with a real API key from openweathermap.org
const apiKey = "YOUR_API_KEY_HERE"; 

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevents page reload
    
    const city = cityInput.value;
    
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        } catch (error) {
            console.error(error);
            displayError("Could not fetch weather data");
        }
    } else {
        displayError("Please enter a city");
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
        throw new Error("Could not fetch weather data");
    }
    
    return await response.json();
}

function displayWeatherInfo(data) {
    // Nested Object Destructuring
    const { 
        name: city, 
        main: { temp, humidity }, 
        weather: [{ description, id }] 
    } = data;

    // Element creation and appending logic would go here
    // Example formula: Kelvin to Celsius
    const tempCelsius = (temp - 273.15).toFixed(1);
    console.log(`City: ${city}, Temp: ${tempCelsius}°C, Humidity: ${humidity}%`);
    console.log(`Weather: ${description} ${getWeatherEmoji(id)}`);
}

function getWeatherEmoji(weatherId) {
    // Weather API condition codes
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️"; // Thunderstorm
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️"; // Drizzle
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️"; // Rain
        case (weatherId >= 600 && weatherId < 700):
            return "❄️"; // Snow
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️"; // Atmosphere/Fog
        case (weatherId === 800):
            return "☀️"; // Clear
        case (weatherId >= 801 && weatherId < 810):
            return "☁️"; // Clouds
        default:
            return "❓";
    }
}
```

---
*(Note: This officially concludes the content from the "Bro Code" JavaScript transcript. The following sections begin processing the Arabic "Elzero Web School" JavaScript transcript.)*
---

### 84. Elzero Web School Introduction & Browser Console (مقدمة وأدوات المطورين)

**1. Conceptual Explanation (Arabic):**
المدرب أسامة الزيرو بدأ الكورس بتوضيح إن الجافا سكريبت لغة بتشتغل على ناحية العميل (Client-side) جوه المتصفح، وكمان مؤخراً بقت بتشتغل على ناحية السيرفر (Server-side). لغة الجافا سكريبت هي المسؤولة عن إضافة التفاعلية للصفحات (Interactivity) زي التحقق من البيانات لحظياً، أو تغيير محتوى الصفحة، أو التلاعب بالـ DOM. عشان نكتب ونختبر الكود، المتصفح بيوفر لنا أدوات المطورين (Chrome Developer Tools) واللي نقدر نفتحها عن طريق (F12 أو Ctrl+Shift+I). من أهم التابات فيها هي الـ (Console). الكونسول ده مش مجرد شاشة بنطبع فيها رسايل؛ ده بيئة تفاعلية (Environment) بنقدر نكتب فيها كود جافا سكريبت ويتم تنفيذه فوراً. كمان الكونسول هو المكان اللي بيتم فيه تسجيل الأخطاء (Errors) والتحذيرات (Warnings) والمعلومات (Info) عشان يساعد المطور يعرف البرنامج بتاعه ماشي صح ولا لأ. المدرب وضح إننا بنستخدم كائن أساسي في المتصفح اسمه `window` جواه دوال جاهزة زي `window.close()` أو `window.alert()` نقدر نستدعيها من الكونسول عشان نتأكد إننا شغالين صح.

**2. Technical Definitions (English):**
*   **Client-side:** Scripts that run on the user's web browser, dictating how the page behaves and responds to the user.
*   **Server-side:** Scripts that run on the web server to process requests, interact with databases, and send data to the client.
*   **Chrome Developer Tools (DevTools):** A set of web developer tools built directly into the Google Chrome browser.
*   **Console:** A tool within DevTools used by developers to log messages, interact with the JavaScript running on the page, and debug errors.

**3. Code Implementation:**

```javascript
// Commands that can be executed directly inside the Chrome Console

// Testing basic math output
100 * 200 // Returns 20000 instantly

// Accessing the window object properties/methods
window.alert("Test Alert from Console");
window.close(); // Closes the current browser tab
```

---

### 85. Where to Put JavaScript Code (المكان السليم لوضع الكود)

**1. Conceptual Explanation (Arabic):**
المدرب ناقش إشكالية مكان وضع كود الجافا سكريبت في صفحة الـ HTML. المتصفح بيقرأ الصفحة سطر بسطر (Line by Line). لو حطينا كود الجافا سكريبت في الـ `<head>` وطلبنا منه يغير لون عنصر معين في الصفحة، المتصفح هيطلع خطأ (Error) لإن الكود اشتغل قبل ما العنصر نفسه يتخلق ويظهر في الصفحة، وبالتالي الكود هيشوف العنصر على إنه `null`. عشان نحل ده، أفضل ممارسة (Best Practice) هي إننا نحط وسم الـ `<script>` في نهاية الصفحة تماماً، قبل قفلة وسم الـ `<body>` مباشرة. بالطريقة دي، بنضمن إن كل عناصر الـ HTML حملت تماماً الأول، والكود هيقدر يوصلها من غير مشاكل. لو كنا مضطرين جداً نحط الكود في الـ `<head>`، لازم نستخدم حدث (Event) اسمه `window.onload`، وده وظيفته إنه يوقف تنفيذ كود الجافا سكريبت ويقوله "استنى لحد ما الصفحة تحمل بالكامل"، وبعدين نفذ الكود.

**2. Technical Definitions (English):**
*   **`null`:** A special value representing the intentional absence of any object value. It is returned when JS tries to target a DOM element that hasn't been rendered yet.
*   **`window.onload`:** An event handler that fires only after the entire page (including all dependent resources like stylesheets and images) has finished loading.
*   **Best Practice (Script Placement):** Placing the `<script>` tag at the very end of the HTML body to prevent render-blocking and ensure DOM elements are fully loaded.

**3. Code Implementation:**

```html
<!-- HTML Structure -->
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <!-- Method 1: If placed in the head, you MUST wait for the window to load -->
    <script>
        window.onload = function() {
            // This safely runs ONLY after the <h1> is created below
            document.querySelector("h1").style.color = "blue";
        }
    </script>
</head>
<body>
    <h1>Page Title</h1>

    <!-- Method 2: BEST PRACTICE - Place script at the end of the body -->
    <script>
        // No window.onload needed here, the element already exists
        document.querySelector("h1").style.color = "blue";
    </script>
</body>
</html>
```

[End of Part 10]


### 86. Comments (التعليقات في الكود)

**1. Conceptual Explanation (Arabic):**
التعليقات (Comments) بتعتبر سطور جوه الكود المتصفح بيتجاهلها تماماً ومش بينفذها كأوامر برمجية. بنستخدم التعليقات لعدة أسباب: أولاً، توضيح الكود وشرح فكرته عشان لو مطور تاني بيقرأ الكود يفهمه بسرعة، أو حتى عشانك إنت لو رجعت للكود بعد شهور. ثانياً، بنستخدمها عشان نوقف أجزاء معينة من الكود مؤقتاً (Execution Prevention) وقت التجارب بدل ما نمسحها ونرجع نكتبها تاني. عندنا نوعين من التعليقات: تعليق السطر الواحد (Single-line) وبيتعمل بعلامتين `//`، وتعليق متعدد السطور (Multi-line) وبيتعمل بـ `/* ... */` عشان نكتب فيه شرح مفصل على كذا سطر. المدرب وضح كمان إن من أفضل الممارسات (Best Practices) إنك متكتبش تعليق على كل سطر كود بديهي وواضح، لكن استخدمها بس لما يكون الكود معقد أو فيه أكتر من فكرة محتاجة توضيح.

**2. Technical Definitions (English):**
*   **Comments:** Non-executable lines of code used to explain logic or temporarily disable code execution.
*   **Single-line Comment (`//`):** A comment that spans only a single line.
*   **Multi-line Comment (`/* */`):** A comment block that can span multiple lines, useful for detailed explanations.

**3. Code Implementation:**

```javascript
// This is a single-line comment explaining the next variable
let userName = "Osama";

/* 
   This is a multi-line comment.
   It can span across several lines.
   Useful for detailing complex functions or configurations.
*/

// Preventing code execution temporarily:
// console.log("This will not print to the console");
```

---

### 87. Output Methods (طرق إظهار وطباعة البيانات)

**1. Conceptual Explanation (Arabic):**
المدرب شرح تلات طرق أساسية نقدر نطلع بيهم نتايج أو بيانات باستخدام الجافا سكريبت. الطريقة الأولى هي `window.alert()` ودي بتطلع نافذة منبثقة (Pop-up) للمستخدم، بس المدرب نبه إن استخدامها في المواقع الحديثة مبقاش مفضل لإنها بتعطل تحميل باقي الصفحة ومزعجة للمستخدم. الطريقة التانية هي `document.write()` ودي بتكتب النص أو عنصر الـ HTML جوه الصفحة مباشرة، وبرضه دي طريقة قديمة ومش بتستخدم حالياً في التطبيقات الحقيقية لإننا بنستبدلها بإنشاء العناصر ديناميكياً. الطريقة التالتة والأهم هي `console.log()`، ودي بتطبع الرسايل في (الكونسول) الخاص بأدوات المطورين (DevTools)، ودي تعتبر الصديق الصدوق لأي مطور عشان بيختبر بيها الكود وبيكتشف الأخطاء من غير ما المستخدم العادي يشوفها.

**2. Technical Definitions (English):**
*   **`window.alert()`:** A method that displays an alert box with a specified message and an OK button. It pauses code execution until dismissed.
*   **`document.write()`:** A method that writes a string of text or HTML to a document stream.
*   **`console.log()`:** A method used to log messages or variables to the web console, primarily for debugging purposes.

**3. Code Implementation:**

```javascript
// Method 1: Alert (Blocking and annoying, rarely used in production)
window.alert("Hello from JS Alert!");

// Method 2: Document Write (Writes directly to the HTML page)
document.write("<h1>Hello Page</h1>");

// Method 3: Console Log (Best practice for debugging)
console.log("Hello Console!");
```

---

### 88. Console Methods and Web API (الكونسول وواجهة `Web API`)

**1. Conceptual Explanation (Arabic):**
الكونسول مش مجرد مكان لطباعة الرسايل العادية بـ `log`، ده بيحتوي على خواص (Methods) متقدمة جداً للتعامل مع البيانات. المدرب شرح `console.error` اللي بتطبع رسالة خطأ باللون الأحمر وبتوضحلك السطر اللي حصلت فيه المشكلة. وكمان `console.table` اللي بتاخد مجموعة بيانات (زي مصفوفة فيها أسماء) وتعرضها في شكل جدول منظم جداً بيسهل قراءتها. المدرب كمان وضح ميزة خرافية وهي إنك تقدر تنسق رسايل الكونسول باستخدام الـ CSS عن طريق علامة `%c` (Directive) وتلون الكلمات. في نهاية الدرس، المدرب وضح معلومة متقدمة جداً؛ وهي إن الكونسول والـ (Window) مش جزء من لغة الجافا سكريبت نفسها، إنما هما جزء من حاجة اسمها (Web API) دي واجهات برمجية المتصفح بيقدمها عشان الجافا سكريبت تقدر تتفاعل معاها وتستخدمها.

**2. Technical Definitions (English):**
*   **`console.error()`:** Outputs an error message to the Web Console, typically styled with a red icon and text.
*   **`console.table()`:** Displays tabular data as a table in the console.
*   **Web API:** Application Programming Interfaces built into the web browser (not core JavaScript) that JS can access to perform tasks like manipulating the DOM or logging to the console.

**3. Code Implementation:**

```javascript
// Basic logging and Errors
console.log("Standard log message");
console.error("This represents a customized error message");

// Tabular data
const friends = ["Osama", "Ahmed", "Sayed"];
console.table(friends); // Displays the array nicely in a table format

// Styling the console output using the %c directive
console.log(
    "Hello from %cJS %cFile", 
    "color: red; font-size: 20px;", // Styles the first %c (JS)
    "color: blue; font-weight: bold;" // Styles the second %c (File)
);
```

---

### 89. ECMAScript (ES6) Overview (معايير `ECMAScript`)

**1. Conceptual Explanation (Arabic):**
عشان نفهم تطور الجافا سكريبت، المدرب شبه الموضوع بشركات بتشغل الموظفين على مزاجها، لحد ما جه "مكتب العمل" حط معايير (Standards) وقوانين صارمة تمشي عليها كل الشركات. "مكتب العمل" ده في لغتنا هو منظمة (ECMA)، ودي منظمة عالمية بتحط المعايير للغات البرمجة عشان المطورين يمشوا عليها. في سنة 2015 صدر تحديث ضخم جداً اسمه (ECMAScript 6) أو (ES6)، التحديث ده جاب مميزات وطرق كتابة جديدة خلت الجافا سكريبت قوية جداً وشبيهة باللغات المتقدمة زي البايثون. المدرب طمن المطورين إن حتى لو المتصفحات القديمة مش بتدعم المعايير الحديثة دي، في أدوات (Transpilers) زي Babel بتترجم الكود الحديث المكتوب بـ ES6 لـ (Legacy Code) أو كود قديم يقدر أي متصفح يقرأه، فبالتالي نكتب بالحديث وإحنا مطمنين.

**2. Technical Definitions (English):**
*   **ECMAScript (ES):** A standardized scripting language specification that JavaScript implements.
*   **ES6 (ECMAScript 2015):** A major update to JavaScript that introduced significant new syntax and features.
*   **Transpiler:** A tool that reads source code written in one programming language (or version) and produces equivalent code in another language (e.g., converting ES6 back to ES5 for old browser compatibility).

---

### 90. Data Types (أنواع البيانات)

**1. Conceptual Explanation (Arabic):**
لغة الجافا سكريبت بتتعامل مع أنواع مختلفة من البيانات، وكل نوع له استخدام. لمعرفة نوع أي بيانات بنستخدم أداة (Operator) اسمها `typeof`. المدرب شرح الأنواع من خلال مثال عملي لبيانات مدرسة: اسم الطالب يعتبر نص (String) ولازم يتكتب بين علامات تنصيص. عمر الطالب أو مرتب المدرس يعتبر رقم (Number) سواء كان صحيح أو فيه كسور. هل الطالب حضر النهارده؟ ده بيعبر عنه بـ (Boolean) اللي هو إما `true` (نعم) أو `false` (لا). لو عندنا قائمة بأرقام أو أسماء مجموعة طلاب، بنحطها في مصفوفة (Array)، ولو عايزين نوصف طالب ببياناته المتعددة (اسمه، سنه، بلده) بنستخدم الكائن (Object). عندنا كمان أنواع بتعبر عن الفراغ: `undefined` ودي بتظهر لو عندنا متغير بس لسه مدينالوش أي قيمة، و `null` ودي قيمة إحنا بنكتبها بنفسنا عشان نعبر إن الحقل ده "فارغ تماماً". من غرائب الجافا سكريبت إن الـ `typeof null` بترجع `object` ودي مشكلة قديمة معروفة في اللغة، وكمان المصفوفات (Arrays) الجافا سكريبت بتعتبرها في الأصل `object`.

**2. Technical Definitions (English):**
*   **`typeof` Operator:** Used to determine the data type of a given value or variable.
*   **String:** Text data enclosed in quotes.
*   **Number:** Numeric data (both integers and floating-point numbers).
*   **Array:** An ordered list of values (returns "object" when using `typeof`).
*   **Object:** A collection of key-value pairs representing entity properties.
*   **Boolean:** A logical entity representing `true` or `false`.
*   **Undefined:** A variable that has been declared but has not yet been assigned a value.
*   **Null:** The intentional absence of any object value (returns "object" via `typeof`).

**3. Code Implementation:**

```javascript
console.log(typeof "Osama"); // "string"
console.log(typeof 5000); // "number"
console.log(typeof 99.5); // "number"
console.log(typeof); // "object" (Array)
console.log(typeof { name: "Osama", age: 17 }); // "object"
console.log(typeof true); // "boolean"
console.log(typeof false); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (A known JS quirk)
```

---

### 91. Variables (المتغيرات)

**1. Conceptual Explanation (Arabic):**
المتغيرات (Variables) هي عبارة عن "حاويات" بنخزن جواها البيانات عشان نقدر نستدعيها أو نعدلها في أي مكان في النظام. المدرب شبهها بتكليف الموظفين بمهمة؛ بندي للمتغير اسم، وبنستخدم علامة `=` (Assignment Operator) عشان نعين له القيمة. العملية دي بتتكون من مرحلتين: الإعلان عن المتغير (Declaration) باستخدام الكلمة المفتاحية زي `var` أو `let`، وتعيين القيمة (Initialization). من أهم مميزات المتغيرات إننا لو استخدمنا المتغير ده في 50 مكان في الموقع، وحبينا نغير القيمة، هنغيرها بس في سطر الإعلان الرئيسي، والـ 50 مكان هيتحدثوا أوتوماتيكياً. الجافا سكريبت تعتبر لغة (Loosely Typed)، يعني وإنت بتنشئ المتغير مش محتاج تحدد نوعه (مش لازم تقوله إن ده رقم أو ده نص) المتصفح بيفهم لوحده بناءً على القيمة اللي إنت بتديها له.

**2. Technical Definitions (English):**
*   **Variable:** A named container used for storing data values.
*   **Declaration:** The act of announcing a variable to the system using a keyword (`var`, `let`, `const`).
*   **Assignment Operator (`=`):** Used to assign a specific value to a declared variable.
*   **Loosely Typed Language:** A language where variables are not bound to a specific data type and can change types dynamically.

**3. Code Implementation:**

```javascript
// Variable Declaration and Assignment
var user = "Osama";
var age = 38;

// Reassigning a variable (Updates everywhere it is used)
user = "Sayed";

// Declaring multiple variables in one line
var car = "BMW", color = "Black", price = 50000;

console.log(user); // "Sayed"

// Accessing a dynamically generated global variable from an HTML ID
// (If HTML has: <div id="hello">Hello</div>)
hello.innerHTML = "Option"; 
```

---

### 92. Identifiers & Naming Conventions (قواعد تسمية المتغيرات)

**1. Conceptual Explanation (Arabic):**
اسم المتغير بنسميه (Identifier)، واللغة بتفرض علينا شوية قوانين صارمة عشان نسميه. أولاً، ممنوع تماماً استخدام المسافات (Spaces) جوه اسم المتغير. ثانياً، مينفعش الاسم يبدأ برقم، لكن ممكن الرقم يكون في نص أو آخر الكلمة. ثالثاً، ممنوع استخدام أي رموز خاصة (Special Characters) زي `@` أو `#`، باستثناء رمزين بس هما المسموح بيهم: علامة الدولار `$` والشرطة السفلية `_` (Underscore)، ودول نقدر نبدأ بيهم أو نحطهم في أي مكان. رابعاً، لغة الجافا سكريبت حساسة لحالة الأحرف (Case-Sensitive)، يعني متغير اسمه `ahmed` يختلف تماماً عن متغير اسمه `Ahmed`. خامساً، ممنوع نستخدم "الكلمات المحجوزة" (Reserved Keywords) اللي تخص اللغة نفسها زي كلمات `var` أو `if` أو `function`. أما بالنسبة لشكل الكتابة (Naming Convention) الأفضل والأكثر شيوعاً فهو طريقة الـ (Camel Case)، وهي إننا نكتب أول كلمة بحروف صغيرة، وأول حرف من كل كلمة تيجي بعدها يكون كابيتال (زي `userName` أو `profilePicture`).

**2. Technical Definitions (English):**
*   **Identifier:** The name given to variables, functions, or objects in code.
*   **Case-Sensitive:** The language distinguishes between uppercase and lowercase letters (e.g., `user` is different from `User`).
*   **Reserved Keywords:** Words inherently used by the programming language that cannot be used as identifier names (e.g., `return`, `var`, `function`).
*   **Camel Case (`camelCase`):** A naming convention where the first word is entirely lowercase, and each subsequent word begins with an uppercase letter without spaces.

**3. Code Implementation:**

```javascript
// Valid identifiers
let userName = "Osama"; // Camel Case (Best Practice)
let _user = "Ahmed";    // Starting with underscore is allowed
let $price = 50;        // Starting with dollar sign is allowed
let user123 = "Sayed";  // Numbers are allowed if not at the beginning

// Invalid identifiers (Will throw Syntax Errors)
// let 123user = "Error";    // Cannot start with a number
// let user name = "Error";  // Cannot contain spaces
// let user@name = "Error";  // Special characters not allowed
// let function = "Error";   // Cannot use reserved keywords
```

---

### 93. `var` vs `let` vs `const` (مقارنة طرق إنشاء المتغيرات)

**1. Conceptual Explanation (Arabic):**
المدرب عمل مقارنة قوية بين المتغير القديم `var` وبين المتغيرات الحديثة من ES6 وهي `let` و `const`.
*   **إعادة الإعلان (Redeclaration):** لو استخدمت `var` لإنشاء متغير، تقدر ترجع في السطر اللي بعده تنشئ نفس المتغير بـ `var` تاني وتدي له قيمة جديدة من غير ما المتصفح يعترض، وده بيعمل كوارث ومشاكل لو الكود طويل لإنك ممكن تمسح متغير قديم بالغلط. لكن `let` و `const` بيمنعوا ده تماماً وبيطلعوا لك (Error) عشان ينبهوك.
*   **الوصول قبل الإعلان (Access before declaration):** لو حاولت تطبع متغير `var` قبل ما تنشئه، الجافا سكريبت هترجع لك قيمة `undefined` (يعني متغير مبهم موجود بس ملوش قيمة). لكن مع `let` و `const` بيطلع لك (Error) صريح يفهمك المشكلة ويقولك مينفعش تستخدمه قبل ما تنشئه.
*   **نطاق النافذة (Global Scope / Window Object):** أي متغير بيتم إنشاؤه بـ `var` بيترمي أوتوماتيكياً جوه كائن النافذة الأساسي (Window Object)، وده بيعمل زحمة ومشاكل (Global Scope Pollution). لكن `let` و `const` بيحتفظوا بخصوصيتهم ومش بيندمجوا في الـ Window.

**2. Technical Definitions (English):**
*   **Redeclaration:** Declaring a variable that has already been declared in the same scope. Allowed by `var`, strictly forbidden by `let` and `const`.
*   **Hoisting / Access before initialization:** Attempting to access a variable before its code execution reaches its declaration. `var` yields `undefined`, while `let/const` throw a `ReferenceError`.
*   **Global Scope Pollution:** The undesirable effect of attaching too many variables to the global `window` object, which `var` does automatically.

**3. Code Implementation:**

```javascript
// 1. Redeclaration
var a = 1;
var a = 2; // Allowed, silently overwrites
let b = 1;
// let b = 2; // Throws SyntaxError: Identifier 'b' has already been declared

// 2. Access before declaration
console.log(c); // undefined
var c = 10;
// console.log(d); // Throws ReferenceError: Cannot access 'd' before initialization
let d = 20;

// 3. Window Object Pollution (run in browser console to see)
var globalVar = "I am in the window object";
let blockVar = "I am NOT in the window object";
// console.log(window.globalVar); // Outputs: "I am in the window object"
// console.log(window.blockVar);  // Outputs: undefined
```

---

### 94. String Formatting and Escaping (التعامل مع النصوص وتخطي الرموز)

**1. Conceptual Explanation (Arabic):**
لما بنيجي نكتب نصوص (Strings)، نقدر نستخدم علامات التنصيص المزدوجة `""` أو المفردة `''`. المشكلة بتظهر لو حبينا نكتب علامة تنصيص جوه النص نفسه (زي اسم مميز جوه الجملة)؛ وقتها المتصفح بيتلخبط وبيفتكر إن النص انتهى وبيطلع (Error). الحل الأول هو إننا نكتب العلامة المفردة جوه المزدوجة، أو المزدوجة جوه المفردة. الحل التاني والأقوى هو استخدام علامة التخطي (Escape Character) وهي الباك سلاش `\`. العلامة دي بتقول للجافا سكريبت "تجاهلي الوظيفة البرمجية للحرف اللي جاي، واطبعيه كنص عادي". كمان الباك سلاش بنستخدمها عشان نعمل سطر جديد (New Line) عن طريق `\n`، أو عشان نكسر السطور الطويلة في الكود نفسه (Line Continue) ونكمل على السطر اللي تحته من غير ما نفصل النص عن طريق إننا نحط `\` في نهاية السطر.

**2. Technical Definitions (English):**
*   **Escape Character (`\`):** A character that invokes an alternative interpretation on subsequent characters in a character sequence, used to insert quotes or special characters literally.
*   **Line Continue (`\` at end of line):** Ignores the newline character in the code editor, allowing long strings to span multiple lines in the source code while rendering as a single line.
*   **New Line (`\n`):** An escape sequence that creates a line break in the actual printed string output.

**3. Code Implementation:**

```javascript
// Mixing quotes
let validString = "Elzero Web 'School'";

// Escaping quotes using backslash
let escapedString = "Elzero Web \"School\"";

// Escaping the backslash itself
let path = "C:\\Windows\\System32"; 

// Line continuation (Makes editor code readable, outputs on one line)
let longString = "Elzero \
Web \
School";
console.log(longString); // Outputs: Elzero Web School

// New Line character (Outputs on multiple lines)
let multiLine = "Elzero\nWeb\nSchool";
/* Outputs:
Elzero
Web
School
*/
```

---

### 95. Concatenation vs Template Literals (دمج النصوص و `Template Literals`)

**1. Conceptual Explanation (Arabic):**
في البرمجة، دمج البيانات مع النصوص (Concatenation) بيتم عن طريق معامل الجمع `+`. لو عندنا متغيرات عايزين ندمجها مع نصوص، بنكتب النص جوه علامات تنصيص، وبعدين `+`، وبعدين المتغير، وبنضطر نحط مسافات بنفسنا بعلامات تنصيص منفصلة، ولو عايزين نعمل سطر جديد بنضطر نكتب `\n`. الطريقة دي في الأكواد الطويلة بتبقى معقدة جداً وشكلها مزعج. هنا بتيجي عظمة تحديثات الـ ES6 اللي قدمت لنا الـ (Template Literals). بنستخدم فيها علامة الـ (Backtick) `` ` `` بدل علامات التنصيص العادية. الميزة الخرافية هنا إننا بنكتب النص والمسافات والسطور الجديدة كلها زي ما هي كده بإنتر عادي جداً، ولما نحب نحط متغير أو عملية حسابية، بنحطها جوه علامة الدولار وأقواس معقوفة `${variable}` من غير ما نكسر النص بعلامات `+`. ده بيخلي الكود أنظف مليون مرة وبيسهل جداً إنشاء عناصر HTML ديناميكية.

**2. Technical Definitions (English):**
*   **Concatenation (`+`):** The process of appending one string to the end of another string using the addition operator.
*   **Template Literals (`` ` ``):** An ES6 feature that allows embedded expressions, multi-line strings, and string interpolation using backticks instead of standard quotes.
*   **String Interpolation (`${expression}`):** The syntax used inside template literals to evaluate and inject variables or mathematical expressions directly into the string.

**3. Code Implementation:**

```javascript
let title = "Elzero";
let desc = "Web School";

// The Old Way (Concatenation using +)
let oldWay = "Title is: " + title + "\n" + "Description is: " + desc;
console.log(oldWay);

// The Modern ES6 Way (Template Literals)
let newWay = `Title is: ${title}
Description is: ${desc}
Math inside string: ${100 * 50}`;
console.log(newWay);

// Excellent for generating HTML markup cleanly
let htmlMarkup = `
  <div class="card">
    <h2>${title}</h2>
    <p>${desc}</p>
  </div>
`;
document.write(htmlMarkup);
```

[End of Part 11]

### 96. Arithmetic Operators (العمليات الحسابية)

**1. Conceptual Explanation (Arabic):**
العمليات الحسابية في الجافا سكريبت بتشمل الجمع (`+`)، الطرح (`-`)، الضرب (`*`)، والقسمة (`/`). المدرب الزيرو وضح نقطة في غاية الأهمية بخصوص علامة الجمع (`+`)؛ لو حاولت تجمع رقم مع نص (String)، الجافا سكريبت هتحول العلامة دي لـ (Concatenation Operator) وتلزقهم في بعض كنص بدل ما تجمعهم. لكن في الطرح، لإن مفيش حاجة اسمها تطرح نص من رقم، اللغة بتحاول تحول النص لرقم (Type Coercion) وتعمل العملية الحسابية، ولو النص كان عبارة عن حروف مش أرقام، هترجعلك `NaN` (Not a Number). من المعلومات الغريبة في اللغة إن `typeof NaN` بيرجع `number`. كمان اتعرفنا على علامة الأس (`**`) اللي بترفع الرقم لقوة معينة زي `2 ** 4` اللي بتساوي 16. وعلامة باقي القسمة (`%` Modulus) اللي بتجيب باقي قسمة رقمين، ودي ممتازة جداً لمعرفة هل الرقم زوجي (لو باقي القسمة صفر) ولا فردي.

**2. Technical Definitions (English):**
*   **Arithmetic Operators:** Symbols used to perform mathematical operations on operands.
*   **Modulus (`%`):** Returns the division remainder. Useful for checking if a number is even (`num % 2 === 0`) or odd.
*   **Exponentiation (`**`):** Raises the first operand to the power of the second operand.
*   **`NaN` (Not a Number):** A special numeric value representing an undefined or unrepresentable mathematical result. `typeof NaN` returns `"number"`.

**3. Code Implementation:**

```javascript
console.log(10 + 20); // 30
console.log(10 + "20"); // "1020" (Concatenation)
console.log(10 - "20"); // -10 (Mathematical subtraction)
console.log(10 - "Osama"); // NaN

console.log(2 ** 4); // 16 (2 * 2 * 2 * 2)

console.log(10 % 2); // 0 (Even number)
console.log(11 % 2); // 1 (Odd number)
console.log(typeof NaN); // "number"
```

---

### 97. Increment and Decrement (الزيادة والنقصان)

**1. Conceptual Explanation (Arabic):**
معاملات الزيادة (`++`) والنقصان (`--`) بتزود أو بتنقص المتغير بمقدار واحد. المدرب وضح الفرق الجوهري بين إنك تحط العلامة قبل المتغير (Pre-increment) أو بعده (Post-increment). لو حطيت العلامة بعد المتغير `num++` (Post-increment)، الجافا سكريبت هتطبع أو تستخدم القيمة الحالية للمتغير الأول، وبعدين تزوده في الذاكرة. لكن لو حطيت العلامة قبله `++num` (Pre-increment)، الجافا سكريبت هتزود الرقم الأول، وبعدين تطبع القيمة الجديدة. نفس القاعدة بتنطبق على النقصان (`--`).

**2. Technical Definitions (English):**
*   **Post-increment (`var++`):** Returns the value, then increments it.
*   **Pre-increment (`++var`):** Increments the value, then returns it.

**3. Code Implementation:**

```javascript
let num1 = 1;
// Post-increment: prints 1, then becomes 2
console.log(num1++); // 1
console.log(num1);   // 2

let num2 = 1;
// Pre-increment: becomes 2, then prints 2
console.log(++num2); // 2
console.log(num2);   // 2
```

---

### 98. Unary Plus and Negation (المعاملات الأحادية `+` و `-`)

**1. Conceptual Explanation (Arabic):**
المعاملات الأحادية (Unary Operators) بتشتغل على قيمة واحدة بس. علامة الزائد الأحادية (`+`) بنحطها قبل أي بيانات عشان نرجع منها رقم (لو كانت تقبل التحويل لرقم). مثلاً لو حطيناها قبل نص جواه رقم زي `"100"` هترجعه رقم `100`. ولو حطيناها قبل `true` هترجع `1`، وقبل `false` أو نص فاضي `""` هترجع `0`. أما لو حطيناها قبل نص ملوش معنى رياضي زي `"Osama"` هترجع `NaN`. علامة السالب الأحادية (`-` Unary Negation) بتعمل نفس الوظيفة بالظبط (بتحول القيمة لرقم) بس كمان بتعكس إشارته؛ الموجب تخليه سالب، والسالب تخليه موجب (نفي النفي إثبات).

**2. Technical Definitions (English):**
*   **Unary Plus (`+`):** Precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
*   **Unary Negation (`-`):** Precedes its operand and converts it into a number, then negates its value.

**3. Code Implementation:**

```javascript
console.log(+100); // 100
console.log(+"100"); // 100 (Converted from string)
console.log(+"-100"); // -100
console.log(+"Osama"); // NaN
console.log(+true); // 1
console.log(+false); // 0
console.log(+""); // 0

console.log(-"100"); // -100
console.log(-"-100"); // 100 (Negative of a negative is positive)
```

---

### 99. Type Coercion / Type Casting (التحويل القسري للبيانات)

**1. Conceptual Explanation (Arabic):**
الـ (Type Coercion) هي عملية بتحصل في الجافا سكريبت لما اللغة تحاول تحول نوع بيانات لنوع تاني بشكل أوتوماتيكي أثناء تشغيل الكود عشان تناسب العملية المطلوبة. المدرب أظهر أمثلة قوية جداً؛ مثلاً عند جمع رقم مع نص، الجافا سكريبت بتخلي الرقم نص وتدمجهم ببعض. لكن في عمليات الطرح، الجافا سكريبت بتجبر النص إنه يتحول لرقم عشان مفيش طرح نصوص. كمان جربنا عمليات عجيبة زي طرح رقم `2` من نص فاضي `""`؛ لإن النص الفاضي بيترجم لصفر، النتيجة كانت `-2`. وطرح `true` من `false` اللي بيترجم كأنه `0 - 1` فبيرجع `-1`. عشان نحل مشاكل الجمع بين نصوص وأرقام، بنستخدم الـ Unary Plus `+` قبل النص عشان نجبره يتحول لرقم قبل ما نجمعه.

**2. Technical Definitions (English):**
*   **Type Coercion:** The automatic or implicit conversion of values from one data type to another (such as strings to numbers) performed by JavaScript during operations.

**3. Code Implementation:**

```javascript
let a = "10";
let b = 20;

// Concatenation due to Coercion
console.log(a + b); // "1020"

// Forcing arithmetic addition using Unary Plus
console.log(+a + b); // 30

// Subtraction coerces strings to numbers automatically
console.log(a - b); // -10

// Weird Coercion examples
console.log("" - 2); // -2 (Empty string coerces to 0)
console.log(false - true); // -1 (0 - 1)
```

---

### 100. Assignment Operators (معاملات التعيين)

**1. Conceptual Explanation (Arabic):**
معامل التعيين الأساسي هو يساوي `=` واللي بندي بيه قيمة للمتغير. لكن لو عندنا متغير عايزين نزود على قيمته الحالية قيمة تانية، بنستخدم الاختصارات (Augmented Assignment Operators). يعني بدل ما نكتب `a = a + 20`، نقدر نكتب `a += 20`. الفكرة دي بتطبق على كل العمليات الحسابية: `+=` للجمع، `-=` للطرح، `/=` للقسمة، و `*=` للضرب.

**2. Technical Definitions (English):**
*   **Assignment Operators:** Operators used to assign values to variables.
*   **Addition Assignment (`+=`):** Adds the value of the right operand to a variable and assigns the result to the variable (e.g., `x += y` is equivalent to `x = x + y`).

**3. Code Implementation:**

```javascript
let a = 10;

a += 20; // Equivalent to: a = a + 20
console.log(a); // 30

a -= 10; // Equivalent to: a = a - 10
console.log(a); // 20

a /= 2; // Equivalent to: a = a / 2
console.log(a); // 10
```

---

### 101. The Number Data Type (نوع البيانات: الأرقام)

**1. Conceptual Explanation (Arabic):**
لغة الجافا سكريبت بتعامل كل الأرقام (سواء كانت أعداد صحيحة أو عشرية) كنوع واحد اسمه `Double Precision`. لتسهيل قراءة الأرقام الكبيرة جداً، الجافا سكريبت بتوفرلنا (Syntactic Sugar) زي استخدام الشرطة السفلية `_` جوه الرقم (زي `1_000_000` لمليون) والمتصفح بيتجاهلها تماماً وقت التنفيذ. كمان نقدر نستخدم حرف الـ `e` متبوعاً بعدد الأصفار (زي `1e6` اللي بتعني واحد وجنبه 6 أصفار يعني مليون). الكائن المدمج `Number` جواه خصائص مهمة زي `MAX_SAFE_INTEGER` اللي بيجيبلك أقصى رقم آمن تقدر تستخدمه في العمليات الحسابية من غير ما النتائج تبوظ، و `MAX_VALUE` اللي بيجيبلك أقصى رقم اللغة تقدر توصلّه أساساً.

**2. Technical Definitions (English):**
*   **Syntactic Sugar:** Syntax within a programming language that is designed to make things easier to read or to express without changing how the code functions (e.g., numeric separators `_`).
*   **`Number.MAX_SAFE_INTEGER`:** The maximum safe integer in JavaScript ($2^{53} - 1$).
*   **`Number.MAX_VALUE`:** The largest positive representable number in JavaScript.

**3. Code Implementation:**

```javascript
// Different ways to write 1 million
console.log(1000000);
console.log(1_000_000); // Syntactic Sugar for readability
console.log(1e6); // e-notation (1 * 10^6)
console.log(10 ** 6); // Exponentiation

// Number limits
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
```

---

### 102. Number Methods (دوال الأرقام)

**1. Conceptual Explanation (Arabic):**
المدرب شرح مجموعة من الدوال للتعامل مع الأرقام:
*   **`toString()`:** بتحول الرقم لنص (String). لو بنكتبها مباشرة بعد الرقم، لازم نكتب نقطتين `..` عشان المتصفح ميفتكرش إن دي علامة عشرية.
*   **`toFixed()`:** بنستخدمها عشان نتحكم في عدد الخانات العشرية اللي بتظهر بعد الرقم. خلى بالك إنها بتقرب الرقم (Rounding) وبترجعه على هيئة "نص".
*   **`parseInt()`:** بتحلل النص وتستخرج منه العدد الصحيح (Integer) بس، بشرط إن الرقم يكون في أول النص. لو النص بيبدأ بحروف بترجع `NaN`.
*   **`parseFloat()`:** زيها بس بتستخرج الرقم بالكسور العشرية بتاعته (Floating-point).
*   **`Number.isInteger()`:** بتختبر هل القيمة دي عدد صحيح ولا لأ وبترجع `true` أو `false`.
*   **`Number.isNaN()`:** بتختبر هل القيمة الممررة هي `NaN` فعلاً ولا لأ.

**2. Technical Definitions (English):**
*   **`toString()`:** Converts a number to a string.
*   **`toFixed(digits)`:** Formats a number using fixed-point notation, returning a string.
*   **`parseInt(string)`:** Parses a string argument and returns an integer.
*   **`parseFloat(string)`:** Parses a string argument and returns a floating-point number.
*   **`Number.isInteger(value)`:** Determines whether the passed value is an integer.

**3. Code Implementation:**

```javascript
// toString()
console.log((100).toString()); // "100"
console.log(100..toString());  // "100" (Alternative syntax)

// toFixed() - Rounds the decimal and returns a String
console.log(100.555555.toFixed(2)); // "100.56"

// parseInt() vs parseFloat()
console.log(parseInt("100.500 Osama")); // 100 (Extracts integer only)
console.log(parseFloat("100.500 Osama")); // 100.5 (Extracts floats)
console.log(parseInt("Osama 100")); // NaN

// isInteger() and isNaN()
console.log(Number.isInteger(100)); // true
console.log(Number.isInteger(100.5)); // false
console.log(Number.isNaN("Osama" / 20)); // true
```

---

### 103. Math Object (كائن الرياضيات `Math`)

**1. Conceptual Explanation (Arabic):**
كائن `Math` بيوفر لنا دوال جاهزة للعمليات الرياضية:
*   **`Math.round()`:** بيقرب الرقم؛ لو الكسر 0.5 أو أكتر بيقرب للأكبر، لو أقل بيقرب للأصغر.
*   **`Math.ceil()`:** السقف؛ دايماً بيقرب الرقم لأكبر عدد صحيح مهما كان الكسر صغير.
*   **`Math.floor()`:** الأرضية؛ دايماً بيقرب الرقم لأصغر عدد صحيح مهما كان الكسر كبير.
*   **`Math.trunc()`:** بيقطع الرقم العشري وبيرمي الكسور في الزبالة وبيرجع العدد الصحيح بس، من غير ما يعمل أي تقريب.
*   **`Math.max()` / `Math.min()`:** بيجيبوا أكبر وأصغر رقم من مجموعة أرقام.
*   **`Math.pow()`:** للأسس (زي معامل `**`).
*   **`Math.random()`:** بيولد رقم عشوائي بين الصفر والواحد.

**2. Technical Definitions (English):**
*   **`Math.round()`:** Rounds to the nearest integer.
*   **`Math.ceil()`:** Always rounds up to the next largest integer.
*   **`Math.floor()`:** Always rounds down to the largest integer less than or equal to a given number.
*   **`Math.trunc()`:** Returns the integer part of a number by removing any fractional digits.

**3. Code Implementation:**

```javascript
console.log(Math.round(99.2)); // 99
console.log(Math.round(99.5)); // 100

console.log(Math.ceil(99.1)); // 100 (Always up)
console.log(Math.floor(99.9)); // 99 (Always down)

console.log(Math.trunc(99.9)); // 99 (Ignores decimals entirely)

console.log(Math.min(10, 20, 100, -100, 90)); // -100
console.log(Math.max(10, 20, 100, -100, 90)); // 100

console.log(Math.pow(2, 4)); // 16
console.log(Math.random()); // Random decimal between 0 and 1
```

---

### 104. String Methods - Part 1 (دوال النصوص - الجزء الأول)

**1. Conceptual Explanation (Arabic):**
النص (String) هو عبارة عن تسلسل من الحروف (Sequence)، وكل حرف له رقم فهرس (Index) بيبدأ من صفر. عشان نوصل لحرف معين، بنكتب الفهرس بين أقواس مربعة `[index]` أو بنستخدم دالة `charAt(index)`. لمعرفة عدد حروف النص بنستخدم خاصية `length`، ولإن العد بيبدأ من 1 والفهرس بيبدأ من 0، فدايماً الـ `length` بيكون أزيد من آخر فهرس بواحد. دالة `trim()` بتقص المسافات البيضاء من أول وآخر النص (ودي مفيدة لو مستخدم دخل باسورد بالغلط فيها مسافات). ولتغيير حالة الحروف بنستخدم `toUpperCase()` عشان نكبرها، و `toLowerCase()` عشان نصغرها. وأخيراً، نقدر نعمل (Method Chaining) ونربط كذا دالة في بعض في سطر واحد عشان نختصر الكود.

**2. Technical Definitions (English):**
*   **Zero-based Indexing:** The practice of starting array or string indices from `0` instead of `1`.
*   **`charAt(index)`:** Returns the character at the specified index in a string.
*   **`trim()`:** Removes whitespace from both ends of a string.

**3. Code Implementation:**

```javascript
let theName = "  Ahmed  ";

// Indexing and Length
console.log(theName); // "A" (ignoring spaces for this example if it was "Ahmed")
console.log(theName.charAt(2)); 
console.log(theName.length); // 9 (includes spaces)

// Trim and Cases
console.log(theName.trim()); // "Ahmed"
console.log(theName.toUpperCase()); // "  AHMED  "
console.log(theName.toLowerCase()); // "  ahmed  "

// Method Chaining: Trim, pick the 3rd letter of trimmed word, and uppercase it
console.log(theName.trim().charAt(2).toUpperCase()); // "M"
```

---

### 105. String Methods - Part 2 (دوال النصوص - الجزء الثاني)

**1. Conceptual Explanation (Arabic):**
المدرب كمل في دوال النصوص وشرح:
*   **`indexOf(val, start)`:** بتبحث عن كلمة أو حرف جوه النص وبترجع أول مكان (Index) بتلاقيه فيه. لو ملقتهوش بترجع `-1`.
*   **`lastIndexOf(val, start)`:** نفس الفكرة بس بتبحث من آخر النص للأول، وبتجيبلك آخر مرة ظهرت فيها الكلمة.
*   **`slice(start, end)`:** بتقطع جزء من النص. الـ `end` مش بيدخل معانا في القطع (Not included). الميزة إننا نقدر نستخدم أرقام سالبة عشان نعد ونقطع من آخر النص.
*   **`repeat(count)`:** بتكرر النص عدد معين من المرات.
*   **`split(separator, limit)`:** دي من أقوى الدوال؛ بتقطع النص وبتحوله لمصفوفة (Array). لو حطيت `""` هتقطع كل حرف لوحده، ولو حطيت مسافة `" "` هتقطع الكلمات، وتقدر كمان تحدد (Limit) لعدد العناصر اللي هترجع في المصفوفة.

**2. Technical Definitions (English):**
*   **`indexOf()` / `lastIndexOf()`:** Methods that return the index of the first/last occurrence of a specified text in a string.
*   **`slice(start, end)`:** Extracts a section of a string and returns it as a new string. Accepts negative values to count from the end.
*   **`split(separator, limit)`:** Splits a string into an array of substrings based on a specified separator.

**3. Code Implementation:**

```javascript
let a = "Elzero Web School";

// Index searching
console.log(a.indexOf("Web")); // 7
console.log(a.indexOf("Web", 8)); // -1 (starts searching from index 8)
console.log(a.lastIndexOf("o")); // 15

// Slicing (End is exclusive)
console.log(a.slice(2, 6)); // "zero"
console.log(a.slice(-5, -3)); // "ch"

// Repeating
console.log(a.repeat(2)); // "Elzero Web SchoolElzero Web School"

// Splitting string into an Array
console.log(a.split(" ")); // ["Elzero", "Web", "School"]
console.log(a.split("", 6)); // ["E", "l", "z", "e", "r", "o"]
```

---

### 106. String Methods - Part 3 (دوال النصوص - الجزء الثالث)

**1. Conceptual Explanation (Arabic):**
في الجزء التالت من دوال النصوص:
*   **`substring(start, end)`:** بتقطع النص زي الـ `slice` بالظبط، بس فيها اختلافات: لو حطيت البداية أكبر من النهاية، هتبدلهم ببعض أوتوماتيك (`substring(6, 2)` هتبقى `(2, 6)`). كمان مفيهاش أرقام سالبة؛ لو اديتها رقم سالب هتحسبه كأنه `0`.
*   **`substr(start, length)`:** (ملحوظة: دي قديمة بس بتتشرح للعلم) بتاخد نقطة البداية، وبعدين عدد الحروف اللي عايز تقطعها، مش نقطة النهاية. ودي بتقبل أرقام سالبة في البداية عشان تعد من ورا.
*   أخيراً دوال التحقق اللي ظهرت في ES6 وبترجع `true` أو `false`: دالة `includes()` بتشوف هل النص بيحتوي على الكلمة دي ولا لأ. دالة `startsWith()` بتشوف هل النص بيبدأ بكلمة أو حرف معين. ودالة `endsWith()` بتشوف هل النص بينتهي بكلمة معينة ولا لأ، وبتقبل كمان تمرير الطول (Length) اللي عايز تفحص عنده.

**2. Technical Definitions (English):**
*   **`substring(start, end)`:** Extracts characters between two indices. Swaps indices if `start > end`. Treats negative values as `0`.
*   **`substr(start, length)`:** Extracts a specified number of characters starting from a specified index. (Considered legacy).
*   **`includes(searchString)`:** Determines whether a string contains the characters of a specified string.
*   **`startsWith()` / `endsWith()`:** Determines whether a string begins or ends with the characters of a specified string, returning true or false.

**3. Code Implementation:**

```javascript
let a = "Elzero Web School";

// substring vs slice
console.log(a.substring(6, 2)); // "zero" (Swapped to 2, 6)
console.log(a.substring(-10, 6)); // "Elzero" (Negative becomes 0, so 0, 6)

// substr (Start, Length to extract)
console.log(a.substr(0, 6)); // "Elzero"
console.log(a.substr(-6, 6)); // "School"

// Boolean search methods (ES6)
console.log(a.includes("Web")); // true
console.log(a.startsWith("E")); // true
console.log(a.startsWith("z", 2)); // true (Starts with "z" if we begin at index 2)
console.log(a.endsWith("l")); // true
console.log(a.endsWith("o", 6)); // true (Checks the string "Elzero" with length 6)
```

[End of Part 12]

### 107. Comparison Operators (معاملات المقارنة)

**1. Conceptual Explanation (Arabic):**
معاملات المقارنة بنستخدمها عشان نقارن بين قيمتين، والنتيجة دايماً بترجع قيمة منطقية (Boolean) إما `true` أو `false`. المدرب وضح الفرق الجوهري بين نوعين من المساواة: 
*   **المساواة العادية `==` (Equal):** بتقارن القيمة (Value) بس، بغض النظر عن نوع البيانات. فلو قارنت رقم `10` بنص `"10"`، الجافا سكريبت هتعمل تحويل لنوع البيانات (Type Coercion) وهترجع `true`.
*   **المساواة الصارمة `===` (Identical/Strict Equal):** دي بتقارن القيمة (Value) ونوع البيانات (Type) مع بعض. فلو قارنت رقم `10` بنص `"10"` هترجع `false` لإنه رغم إن القيمة واحدة، لكن النوع مختلف (Number مقابل String).
نفس الفكرة بتطبق في عدم المساواة؛ عندنا `!=` (Not Equal) بتقارن القيمة بس، وعندنا `!==` (Strict Not Equal) بتقارن القيمة والنوع. بالإضافة لمعاملات المقارنة الرياضية العادية زي أكبر من `>`، وأصغر من `<`، وأكبر من أو يساوي `>=`، وأصغر من أو يساوي `<=`.

**2. Technical Definitions (English):**
*   **`==` (Equality Operator):** Compares two values for equality after automatically performing type coercion if necessary.
*   **`===` (Strict Equality Operator):** Compares two values for equality, checking both their values and their data types without any coercion.
*   **`!=` / `!==` (Inequality Operators):** Returns true if the operands are not equal (with `!==` strictly checking against both value and type matching).

**3. Code Implementation:**

```javascript
// Equality (==) vs Strict Equality (===)
console.log(10 == "10");  // true (Compares value only)
console.log(10 === "10"); // false (Compares value and data type)

// Inequality (!=) vs Strict Inequality (!==)
console.log(10 != "10");  // false (Because they ARE equal in value)
console.log(10 !== "10"); // true (Because their data types are different)

// Greater than / Less than
console.log(10 > 20);  // false
console.log(10 <= 10); // true (Checks if less than OR equal to)
```

---

### 108. Logical Operators (المعاملات المنطقية `!`, `&&`, `||`)

**1. Conceptual Explanation (Arabic):**
المعاملات المنطقية بتستخدم لربط أكتر من شرط مع بعض أو للتحكم في النتيجة المنطقية.
*   **معامل النفي `!` (Not):** وظيفته إنه بينفي أو بيعكس القيمة المنطقية؛ يعني بيحول الـ `true` لـ `false` والعكس.
*   **معامل و `&&` (And):** بيشترط إن *كل* الشروط المربوطة بيه تكون متحققة (True) عشان النتيجة النهائية تبقى `true`. المدرب شبهها بموظف حكومي بيطلب منك 3 ورقات، لو جبت ورقتين ونسيت التالتة، طلبك هيترفض (يعني `false`).
*   **معامل أو `||` (Or):** بيشترط إن *شرط واحد على الأقل* يكون متحقق عشان النتيجة النهائية تبقى `true`. ده زي موظف متساهل بيقولك هاتلي أي ورقة من التلاتة، فلو جبت ورقة واحدة بس الشرط هيتحقق (يعني `true`).

**2. Technical Definitions (English):**
*   **`!` (Logical NOT):** Reverses the boolean evaluation of the operand.
*   **`&&` (Logical AND):** Returns true if and only if all of its operands evaluate to true.
*   **`||` (Logical OR):** Returns true if at least one of its operands evaluates to true.

**3. Code Implementation:**

```javascript
// Logical NOT (!)
console.log(!true);  // false
console.log(!(10 == "10")); // false (10 == "10" is true, so NOT true is false)

// Logical AND (&&) - ALL conditions must be true
console.log(10 == "10" && 10 > 8 && 10 >= 10); // true (All 3 are true)
console.log(10 == "10" && 10 > 50); // false (Because 10 > 50 is false)

// Logical OR (||) - AT LEAST ONE condition must be true
console.log(10 == 10 || 10 > 50 || 10 > 80); // true (The first condition is true)
```

---

### 109. If Conditions (الجمل الشرطية والتحكم في المسار `Control Flow`)

**1. Conceptual Explanation (Arabic):**
البرنامج بطبيعته بيمشي وينفذ الأكواد سطر سطر (Top to bottom) لحد ما يقابل حاجة اسمها (Control Flow) أو التحكم في المسار زي الجمل الشرطية `if`. دي بتخلينا ناخد قرارات وننفذ كود معين بناءً على شرط محدد. بنبدأ بكلمة `if` وبنحط الشرط بين أقواس، لو النتيجة `true`، بينفذ البلوك الخاص بيها. لو عندنا شروط تانية بديلة بنستخدم `else if`، ولو الشرط الأول فشل، المتصفح بيدخل يفحص الشرط التاني. وفي النهاية بنقدر نحط `else` كحالة افتراضية بتتنفذ لو كل الشروط اللي فوق فشلت ومتحققتش إطلاقاً.

**2. Technical Definitions (English):**
*   **Control Flow:** The order in which statements and instructions are executed in a script. Conditional statements allow you to alter this flow.
*   **`if` Statement:** Evaluates a specified condition and executes a block of code only if the condition is truthy.
*   **`else if` / `else`:** Provides a fallback mechanism to test secondary conditions sequentially (`else if`), and a final default block (`else`) that runs if no prior conditions are met.

**3. Code Implementation:**

```javascript
let price = 100;
let country = "Egypt"; // Change to "Syria" or "KSA" to test other blocks

if (country === "Egypt") {
    // Condition 1
    price -= 40; 
} else if (country === "Syria") {
    // Condition 2 (Evaluated only if Condition 1 is false)
    price -= 50; 
} else {
    // Default fallback if no conditions match
    price -= 10; 
}

console.log(price); // Output: 60
```

---

### 110. Nested If Conditions (الشروط المتداخلة `Nested If`)

**1. Conceptual Explanation (Arabic):**
الـ Nested If هو إننا نكتب جملة `if` بالكامل جوه بلوك كود بتاع جملة `if` تانية. بنلجأ للأسلوب ده لتنظيم الكود ومنع التكرار لما يكون عندنا سيناريوهات معقدة. مثلاً، لو بنعمل نظام خصومات، بدل ما نكتب في سطر واحد "لو الشخص من مصر && طالب"، بنعمل شرط رئيسي يتأكد الأول إنه من مصر، ولما ندخل جوه البلوك ده (السكوب بتاع مصر)، نعمل شرط تاني فرعي يشوف هل هو طالب ولا لأ، وممكن جوه الطالب نعمل شرط تالت. الأسلوب ده بيخلي الكود أنظف وأسهل في القراءة (Readable) وبيسمح لنا نغطي سيناريوهات كتير بدقة.

**2. Technical Definitions (English):**
*   **Nested If:** An `if-else` statement placed completely inside another `if` or `else` block. It is used to test multiple tiered sub-conditions logically and maintain clean code structure.

**3. Code Implementation:**

```javascript
let price = 100;
let discount = false;
let discountAmount = 30; // Base discount
let country = "Egypt";
let student = true;

// Main Condition
if (country === "Egypt") {
    
    // Nested Condition
    if (student === true) {
        // Additional discount for students in Egypt
        discountAmount += 20; // discount is now 50
    } else {
        // Standard discount for non-students in Egypt
        discountAmount += 10; // discount is now 40
    }
    
    price -= discountAmount;
}

console.log(`Final Price: ${price}`); // Output: Final Price: 50
```

---

### 111. Ternary Conditional Operator (الشرط المختصر `Ternary Operator`)

**1. Conceptual Explanation (Arabic):**
المعامل الثلاثي (Ternary Operator) هو اختصار قوي جداً لكتابة جملة `if / else` البسيطة. الصيغة بتاعته بتبدأ بكتابة الشرط، بعده علامة استفهام `?`، وبعدها القيمة أو الكود اللي هيتنفذ لو الشرط `true`. بعد كده بنحط نقطتين فوق بعض `:` وبنكتب القيمة اللي هتتنفذ لو الشرط `false`. أكبر ميزة للـ Ternary Operator هي إننا نقدر نخزن النتيجة بتاعته مباشرة جوه متغير (Assign to a variable)، أو نكتبه مباشرة جوه (Template Literals) عشان نظهر بيانات مختلفة في الصفحة (زي إظهار "Mr" أو "Mrs" بناءً على نوع المستخدم) من غير ما نحتاج نكتب بلوكات `if` طويلة. المدرب نبه إننا نقدر نستخدمه للشروط المتعددة زي الـ `else if`، بس ساعتها الكود ممكن يبقى صعب القراءة، والأفضل نستعمله مع الشروط المختصرة بس.

**2. Technical Definitions (English):**
*   **Ternary Conditional Operator (`condition ? exprIfTrue : exprIfFalse`):** A concise inline alternative to `if-else` statements. It is an expression that returns a value based on the boolean evaluation of the condition.

**3. Code Implementation:**

```javascript
let gender = "Female";
let name = "Mona";

// Standard If-Else
if (gender === "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

// Ternary Operator assigning a value to a variable
let title = gender === "Male" ? "Mr" : "Mrs";
console.log(title); // Output: Mrs

// Using Ternary Operator directly inside Template Literals
console.log(`Hello ${gender === "Male" ? "Mr" : "Mrs"} ${name}`); // Output: Hello Mrs Mona

// Multiple conditions (Else If alternative) - Can become hard to read
let age = 30;
age < 20 
    ? console.log("Young") 
    : age >= 20 && age < 60 
    ? console.log("Adult") 
    : console.log("Older");
```

---

### 112. Logical OR (`||`) vs Nullish Coalescing Operator (`??`)

**1. Conceptual Explanation (Arabic):**
المعاملين دول بنستخدمهم لتقديم قيمة بديلة (Fallback / Default value) في حالة إن القيمة الأساسية فيها مشكلة.
*   **معامل أو `||` (Logical OR):** بيرجع القيمة البديلة لو المتغير الأساسي كان بيحتوي على أي قيمة تعتبر (Falsy Value). القيم دي في الجافا سكريبت بتشمل `null`، `undefined`، `false`، النص الفاضي `""`، وكمان الرقم صفر `0`.
*   **معامل الـ `??` (Nullish Coalescing):** ظهر عشان يعالج مشكلة الـ `||`. أحياناً الصفر أو النص الفاضي بيكونوا قيم مقصودة وصحيحة (مثلاً السعر صفر يعني المنتج مجاني). لو استخدمنا `||`، هيتجاهل الصفر ويعرض القيمة البديلة. لكن الـ `??` بيرجع القيمة البديلة **فقط** لو كان المتغير `null` أو `undefined`، غير كده بيعرض القيمة الأصلية حتى لو كانت صفر.

**2. Technical Definitions (English):**
*   **Falsy Values:** Values that evaluate to false in boolean contexts. These exactly include: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.
*   **Logical OR (`||`):** Returns the right-hand operand if the left operand is *any* falsy value.
*   **Nullish Coalescing Operator (`??`):** Returns the right-hand operand *only* if the left operand is exactly `null` or `undefined` (nullish values).

**3. Code Implementation:**

```javascript
let price = 0; // The price is intentionally 0 (Free)

// Using Logical OR (||)
// Since 0 is a falsy value, it ignores it and outputs 200 (Incorrect logic here)
console.log(`The price is ${price || 200}`); // Output: The price is 200

// Using Nullish Coalescing Operator (??)
// It only cares about null or undefined, so it respects the 0
console.log(`The price is ${price ?? 200}`); // Output: The price is 0

// If price was actually missing (undefined)
let missingPrice;
console.log(`The price is ${missingPrice ?? 200}`); // Output: The price is 200
```

---

### 113. Switch Statement (جملة التحكم `Switch`)

**1. Conceptual Explanation (Arabic):**
تُستخدم جملة `switch` كبديل تنظيمي لجمل `if / else if` المتعددة جداً (Multiple Conditions)، خصوصاً لو كنا بنختبر قيمة متغير واحد محدد (زي رقم اليوم في الأسبوع). بنحط المتغير جوه أقواس الـ `switch`، وبعدين بنحط الحالات المحتملة (Cases). الجافا سكريبت بتقارن المتغير بكل `case` باستخدام المساواة الصارمة `===` (Identical Match)، يعني لو المتغير رقمه `2` والـ case عبارة عن نص `"2"`، مش هيتطابقوا. بمجرد ما يلاقي الـ case المتطابق، بينفذ الكود اللي جواه. لازم نحط كلمة `break` بعد كل كود عشان نوقف الـ `switch` وميخليهاش تكمل قراءة وتشغيل باقي الحالات اللي تحتها. وفي النهاية بنستخدم `default` (زي الـ `else`) عشان ننفذ كود افتراضي لو كل الـ cases متطابقتش مع المتغير. كمان نقدر ندمج أكتر من حالة `case` مع بعض لو كانوا بينفذوا نفس الكود بالظبط.

**2. Technical Definitions (English):**
*   **`switch` Statement:** A control flow statement that evaluates an expression and executes a block of code associated with the matching `case` label (evaluated using strict equality `===`).
*   **`break` Keyword:** Used to terminate the execution of the current `switch` block and exit it, preventing the code from "falling through" to execute subsequent cases.
*   **`default` Clause:** The block of code that runs if no `case` matches the evaluated expression.

**3. Code Implementation:**

```javascript
let day = 2; // Testing with a number

switch (day) {
    case 0:
        console.log("Saturday");
        break; // Stops execution if matched
    case 1:
        console.log("Sunday");
        break;
    // Combining multiple cases that share the same output
    case 2:
    case 3:
        console.log("Monday or Tuesday"); // Will print this for day 2
        break;
    default:
        // Executes if day is anything other than 0, 1, 2, or 3
        console.log("Unknown Day");
        break; 
}
```

### 114. Arrays (المصفوفات `Arrays`)

**1. Conceptual Explanation (Arabic):**
المصفوفة (Array) هي نوع من البيانات بيسمحلك تخزن قايمة من العناصر (Elements) في مكان واحد بدل ما تعمل متغير منفصل لكل عنصر. بننشئ المصفوفة باستخدام الأقواس المربعة `[]` وبنفصل بين العناصر بفاصلة `,`. عشان نوصل لأي عنصر بنستخدم رقم الفهرس الخاص بيه (Index) واللي بيبدأ دايماً من صفر `0` زي ما اتعلمنا في النصوص. الجميل في الجافا سكريبت إن المصفوفة ممكن تحتوي على مصفوفة تانية جواها (Nested Array)؛ وعشان توصل لعنصر جوه المصفوفة الداخلية، بتستخدم الأقواس المربعة ورا بعض زي `array`. كمان نقدر نعدل أي عنصر بسهولة بإننا نحدد الفهرس بتاعه ونديله قيمة جديدة. الجافا سكريبت بتعتبر المصفوفات ككائنات (`object`) لو استخدمنا معاها `typeof`، وعشان نتأكد بشكل قاطع هل المتغير ده مصفوفة ولا لأ، بنستخدم دالة مدمجة اسمها `Array.isArray()`.

**2. Technical Definitions (English):**
*   **Array:** A data structure resembling a list that stores multiple values within a single variable. Arrays in JavaScript are zero-indexed.
*   **Nested Array:** An array placed inside another array, forming a multi-dimensional structure.
*   **`Array.isArray()`:** A static method that determines whether the passed value is explicitly an Array, returning a boolean.

**3. Code Implementation:**

```javascript
let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// Accessing elements via index
console.log(myFriends); // "Ahmed"

// Accessing elements inside a nested array
console.log(myFriends); // "Ali"
console.log(myFriends); // "i" (Accessing the character of the string)

// Modifying an element
myFriends = "Mahmoud";
console.log(myFriends); // ["Ahmed", "Mahmoud", "Sayed", ["Marwan", "Ali"]]

// Checking if it is an array (since typeof returns "object")
console.log(typeof myFriends); // "object"
console.log(Array.isArray(myFriends)); // true
```

---

### 115. Array `length` Property (خاصية طول المصفوفة `length`)

**1. Conceptual Explanation (Arabic):**
خاصية `length` بتجيبلك عدد العناصر اللي جوه المصفوفة. ولإن العد بيبدأ من 1 بينما الفهرس بيبدأ من 0، دايماً الـ `length` بيكون سابق الفهرس ومتقدم عليه بخطوة (أكبر من آخر فهرس بواحد). المدرب وضح استراتيجيات ذكية لاستخدام الـ `length`: نقدر نوصل لآخر عنصر في المصفوفة ديناميكياً عن طريق `array.length - 1`. ونقدر نضيف عنصر جديد في آخر المصفوفة بالظبط عن طريق مساواته باللينس `array[array.length] = value`. الميزة الأقوى إننا نقدر نتحكم في حجم المصفوفة (Truncate) ونقصها؛ لو عندنا مصفوفة فيها 4 عناصر وخلينا الـ `length = 2`، الجافا سكريبت هتحذف اخر عنصرين وتسيب أول اتنين بس.

**2. Technical Definitions (English):**
*   **`length` (Array):** A property that returns or sets the number of elements in an array.
*   **Dynamic Appending:** Using `array[array.length] = value` to safely insert an element precisely at the end of the array without needing to know its exact size.
*   **Truncation:** The process of intentionally shortening an array by manually setting its `length` property to a smaller number.

**3. Code Implementation:**

```javascript
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends.length); // 4

// 1. Appending a new element dynamically to the end
myFriends[myFriends.length] = "Gamal";
console.log(myFriends); // ["Ahmed", "Mohamed", "Sayed", "Alaa", "Gamal"]

// 2. Updating the very last element dynamically
myFriends[myFriends.length - 1] = "Sami";
console.log(myFriends); // "Gamal" is replaced by "Sami"

// 3. Truncating the array
myFriends.length = 2;
console.log(myFriends); // ["Ahmed", "Mohamed"]
```

---

### 116. Array Methods: Add and Remove (إضافة وحذف العناصر)

**1. Conceptual Explanation (Arabic):**
عشان نتحكم في عناصر المصفوفة، اللغة بتقدم لنا 4 دوال أساسية:
*   **`unshift()`**: بتضيف عنصر أو أكتر في **بداية** المصفوفة وبترجع الطول الجديد للمصفوفة.
*   **`push()`**: بتضيف عنصر أو أكتر في **نهاية** المصفوفة.
*   **`shift()`**: بتحذف **أول** عنصر من المصفوفة، والميزة الخطيرة هنا إنها "بترجع" العنصر اللي اتحذف ده، يعني نقدر نخزنه في متغير ونستعمله في حتة تانية في الكود.
*   **`pop()`**: بتحذف **آخر** عنصر من المصفوفة، وبرضه بترجعه نقدر نخزنه.

**2. Technical Definitions (English):**
*   **`unshift()`:** Adds one or more elements to the beginning of an array and returns the new length of the array.
*   **`push()`:** Adds one or more elements to the end of an array and returns the new length of the array.
*   **`shift()`:** Removes the first element from an array and returns that removed element.
*   **`pop()`:** Removes the last element from an array and returns that element.

**3. Code Implementation:**

```javascript
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// Adding elements
myFriends.unshift("Osama", "Nabeel"); // Adds to the beginning
myFriends.push("Samah", "Eman");      // Adds to the end

console.log(myFriends); 
// ["Osama", "Nabeel", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah", "Eman"]

// Removing elements and capturing them in variables
let firstFriend = myFriends.shift(); // Removes and returns "Osama"
let lastFriend = myFriends.pop();    // Removes and returns "Eman"

console.log(`First removed: ${firstFriend}`);
console.log(`Last removed: ${lastFriend}`);
console.log(myFriends); 
// ["Nabeel", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah"]
```

---

### 117. Array Methods: Search (البحث في المصفوفات)

**1. Conceptual Explanation (Arabic):**
للبحث جوه المصفوفات عندنا 3 دوال مهمين جداً:
*   **`indexOf(value, start)`**: بتبحث عن قيمة معينة وبترجع أول فهرس (Index) تلاقيه فيه. بتبحث من الشمال لليمين، وممكن نحدد نقطة بداية البحث. لو العنصر مش موجود نهائياً، هترجع `-1`.
*   **`lastIndexOf(value, start)`**: بتعمل نفس الوظيفة بالظبط بس بتبحث من اليمين للشمال (من الآخر للأول). لو لقت العنصر، بتعد رقم الفهرس بتاعه بالطريقة الطبيعية من الشمال.
*   **`includes(value, start)`**: دي دالة حديثة بترجع قيمة منطقية (Boolean). لو العنصر موجود هترجع `true` ولو مش موجود هترجع `false`. استخدام السالب في نقطة البداية بيخلي البحث يبدأ من آخر المصفوفة.

**2. Technical Definitions (English):**
*   **`indexOf()`:** Returns the first index at which a given element can be found in the array, or `-1` if it is not present.
*   **`lastIndexOf()`:** Returns the last index at which a given element can be found in the array, searching backwards from the end.
*   **`includes()`:** Determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

**3. Code Implementation:**

```javascript
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// indexOf (Searches from start to end)
console.log(myFriends.indexOf("Ahmed")); // 0
console.log(myFriends.indexOf("Ahmed", 2)); // 4 (Starts searching from index 2)

// lastIndexOf (Searches from end to start)
console.log(myFriends.lastIndexOf("Ahmed")); // 4
console.log(myFriends.lastIndexOf("Ahmed", -2)); // 0 (Starts from the second to last item)

// Missing elements return -1
console.log(myFriends.indexOf("Osama")); // -1

// includes (Returns Boolean)
console.log(myFriends.includes("Sayed")); // true
console.log(myFriends.includes("Osama")); // false
```

---

### 118. Array Methods: Sort and Reverse (ترتيب وعكس المصفوفات)

**1. Conceptual Explanation (Arabic):**
*   **`sort()`**: الدالة دي بترتب عناصر المصفوفة. بس لازم نركز إنها بترتب أبجدياً (Lexicographically) مش رياضياً؛ يعني بتعتبر الأرقام نصوص وتقارن أول حرف. عشان كده رقم زي `20` هييجي بعد رقم `1000` لإن الـ `2` أكبر من الـ `1` في الترتيب المعجمي.
*   **`reverse()`**: دي بتعكس ترتيب العناصر الحالية في المصفوفة (بتخلي أول عنصر يكون الأخير وهكذا)، وممكن ندمجها مع الـ `sort` (عن طريق الـ Chaining) عشان نرتب العناصر أبجدياً وبعدين نعكس الترتيب ده تماماً.

**2. Technical Definitions (English):**
*   **`sort()`:** Sorts the elements of an array in place. By default, it sorts values as strings in alphabetical and ascending order.
*   **`reverse()`:** Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
*   **Method Chaining:** Calling one method directly after another on the same object.

**3. Code Implementation:**

```javascript
let mixedArray = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

// Sorting elements lexicographically
console.log(mixedArray.sort()); 
// Outputs: [-10, -20, 10, "10", 100, 1000, 20, "90", "Mohamed", "Sayed"]

// Reversing the array (does not sort mathematically, just flips the current order)
let names = ["Ahmed", "Sayed", "Ali"];
console.log(names.reverse()); 
// Outputs: ["Ali", "Sayed", "Ahmed"]

// Chaining sort and reverse
let sortedNames = ["Ahmed", "Sayed", "Ali"];
console.log(sortedNames.sort().reverse()); 
// Outputs: ["Sayed", "Ali", "Ahmed"]
```

---

### 119. Array Methods: Slice and Splice (القص واللصق في المصفوفات)

**1. Conceptual Explanation (Arabic):**
الدالتين دول بيعملوا وظايف متقدمة في المصفوفات بس بينهم فرق جوهري:
*   **`slice(start, end)`**: بتاخد "قطعة" من المصفوفة وترجعها في مصفوفة جديدة بدون ما تأثر نهائياً على المصفوفة الأصلية. النهاية (End) مش بتدخل معانا في القطع (Not included). وبتقبل أرقام سالبة عشان تعد من آخر المصفوفة.
*   **`splice(start, deleteCount, items...)`**: دي بتعدل على المصفوفة الأصلية مباشرة وبترجع العناصر اللي اتمسحت. بتطلب 3 حاجات: هتبدأ منين؟ هتمسح كام عنصر؟ وهل عايز تحط عناصر جديدة مكانهم ولا لأ؟ لو خلينا عدد العناصر الممسوحة صفر، دي هتشتغل كأداة للإضافة في أي مكان جوه المصفوفة.

**2. Technical Definitions (English):**
*   **`slice()`:** Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included). The original array will not be modified.
*   **`splice()`:** Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

**3. Code Implementation:**

```javascript
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

// 1. SLICE (Does not alter original array)
// Extracts from index 1 to 3 (index 3 "Osama" is not included)
console.log(myFriends.slice(1, 3)); // ["Sayed", "Ali"]

// Using negative indices (from index -3 to -1)
console.log(myFriends.slice(-3, -1)); // ["Osama", "Gamal"]


// 2. SPLICE (Alters the original array directly)
// Start at index 0, delete 0 items, and add "Samir" and "Samara"
myFriends.splice(0, 0, "Samir", "Samara");
console.log(myFriends); 
// ["Samir", "Samara", "Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]

// Start at index 2 (at "Ahmed"), delete 2 items ("Ahmed", "Sayed"), add "Tarek"
myFriends.splice(2, 2, "Tarek");
console.log(myFriends);
// ["Samir", "Samara", "Tarek", "Ali", "Osama", "Gamal", "Ameer"]
```

---

### 120. Array Methods: Concat and Join (دمج المصفوفات وتحويلها لنصوص)

**1. Conceptual Explanation (Arabic):**
*   **`concat()`**: بتستخدم لدمج مصفوفتين أو أكتر مع بعض عشان نطلع بمصفوفة جديدة تماماً، القديم مش بيتأثر. نقدر كمان نمرر قيم فردية كمعاملات وتندمج جوه المصفوفة الجديدة.
*   **`join(separator)`**: بتلم كل عناصر المصفوفة وتحولهم لنص واحد (String). بتقدر تحدد الفاصل (Separator) اللي هيكون بين الكلمات زي المسافة أو الـ `|` أو غيره. لو مكتبتش فاصل، الجافا سكريبت بتحط الفاصلة `,` بشكل افتراضي. لو حطيت نص فاضي `""` الكلمات هتلزق في بعض.

**2. Technical Definitions (English):**
*   **`concat()`:** Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
*   **`join()`:** Creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

**3. Code Implementation:**

```javascript
let myFriends = ["Ahmed", "Sayed", "Ali"];
let newFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

// Concatenating multiple arrays and individual string elements
let allFriends = myFriends.concat(newFriends, schoolFriends, "Gameel", ["A", "B"]);
console.log(allFriends); 
// ["Ahmed", "Sayed", "Ali", "Samar", "Sameh", "Haytham", "Shady", "Gameel", "A", "B"]

// Joining elements into a single string
console.log(allFriends.join());      // Defaults to comma separated: "Ahmed,Sayed,Ali..."
console.log(allFriends.join(""));    // No separator: "AhmedSayedAli..."
console.log(allFriends.join(" @ ")); // Custom separator: "Ahmed @ Sayed @ Ali..."
```

---

### 121. For Loop (حلقة التكرار `For`)

**1. Conceptual Explanation (Arabic):**
التكرار (Looping) هو مفهوم برمجي بيخلينا ننفذ نفس الكود عدد معين من المرات بدل ما نكتبه بإيدينا. حلقة الـ `for` بتتكون من 3 خطوات أساسية (عبارة عن سيناريو تعيين موظفين):
1.  **التهيئة `Initialization`**: بننشئ متغير (غالباً بنسميه `i`) وبنديله قيمة البداية زي ورقة فاضية.
2.  **الشرط `Condition`**: بنختبر هل المفروض اللوب يكمل ولا يقف؟ (طول ما الـ `i` أصغر من الرقم المطلوب اللوب بيكمل).
3.  **التحديث `Increment/Update`**: الأكشن اللي بتحصل بعد كل دورة عشان نتقدم خطوة (بنزود الـ `i` بـ `1`). لو نسينا الخطوة دي، الشرط هيفضل يتحقق للأبد وهنعمل كارثة اسمها (Infinite Loop) بتهنج المتصفح.

**2. Technical Definitions (English):**
*   **`for` Loop:** A control flow statement for specifying iteration, which allows code to be executed repeatedly.
*   **Initialization:** The setup phase where a counter variable (usually `i` or `index`) is declared.
*   **Condition:** An expression evaluated before each loop pass. If true, the statement is executed. If false, the loop terminates.
*   **Increment / Final Expression:** An expression evaluated at the end of each loop iteration, typically used to update or increment the counter variable.

**3. Code Implementation:**

```javascript
// Loop to count from 0 to 9
// 1. let i = 0 (Initialization)
// 2. i < 10 (Condition)
// 3. i++ (Increment)
for (let i = 0; i < 10; i++) {
    console.log(`Employee number: ${i}`);
}
// Outputs: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

---

### 122. Looping on Arrays (التكرار داخل المصفوفات)

**1. Conceptual Explanation (Arabic):**
أهم استخدام للوب هو إننا نمشي على عناصر المصفوفة واحد واحد. عشان نعمل ده، بنخلي العداد `i` يبدأ من الصفر (لإن الفهرس بيبدأ من صفر)، ونخلي الشرط يقف لما يكون الـ `i` أصغر من طول المصفوفة `array.length` (لإن اللينس دايماً أكبر من آخر فهرس بواحد). الزيرو شرح تطبيق احترافي: إزاي نمشي على مصفوفة فيها نصوص وأرقام، ونعمل شرط (If condition) باستخدام `typeof` عشان نتجاهل الأرقام، ونستخرج الأسماء بس ونحطها في مصفوفة جديدة.

**2. Technical Definitions (English):**
*   **Array Iteration:** The process of accessing each item in an array one by one using a loop, combining the array's `length` property and bracket notation `array[i]`.

**3. Code Implementation:**

```javascript
let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
    // Check if the current element is a string
    if (typeof myFriends[i] === "string") {
        // Add it to the new array
        onlyNames.push(myFriends[i]);
    }
}

console.log(onlyNames); 
// Outputs: ["Osama", "Ahmed", "Sayed", "Ali"]
```

---

### 123. Nested Loops (حلقات التكرار المتداخلة `Nested Loops`)

**1. Conceptual Explanation (Arabic):**
الـ Nested Loop معناه إنك تكتب حلقة تكرار بالكامل جوه حلقة تكرار تانية. المنطق هنا إن اللوب الرئيسي (الأب) بيمسك العنصر الأول، بعدين اللوب الداخلي بيلف دورته كاملة على كل عناصره، وبعد ما يخلص، اللوب الرئيسي ينقل للعنصر التاني، وهكذا. التطبيق الأشهر لده في المتاجر الإلكترونية؛ اللوب الرئيسي بيعرض أسماء المنتجات (كيبورد، ماوس)، وجوه كل منتج بنشغل لوب فرعي يعرض الألوان والموديلات المتاحة للمنتج ده بالذات.

**2. Technical Definitions (English):**
*   **Nested Loop:** A loop situated entirely inside the body of another loop. The inner loop executes all its iterations completely for each single iteration of the outer loop.

**3. Code Implementation:**

```javascript
let products = ["Keyboard", "Mouse", "Pen"];
let colors = ["Red", "Green", "Black"];
let models = ;

// Outer Loop for Products
for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));
    
    // First Inner Loop for Colors
    console.log("Colors:");
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }
    
    // Second Inner Loop for Models
    console.log("Models:");
    for (let k = 0; k < models.length; k++) {
        console.log(`- ${models[k]}`);
    }
}
```

---

### 124. Loop Control: Break, Continue, and Label (التحكم في التكرار)

**1. Conceptual Explanation (Arabic):**
للتحكم في مسار اللوب، الجافا سكريبت بتقدم 3 أدوات:
*   **`break`**: بتعمل إيقاف فوري للوب وتخرج منه تماماً. بنستخدمها لما نكون بندور على حاجة وأول ما نلاقيها بنوقف البحث عشان نوفر موارد الجهاز.
*   **`continue`**: بتعمل تخطي (Skip) للدورة الحالية بس وتكمل الدورة اللي بعدها. مثلاً لو بنلوب على مصفوفة فيها أرقام وحروف، نقدر نستخدم `continue` عشان نتجاهل أي رقم ونطبع الحروف بس. (ترتيب الكود مهم جداً هنا عشان متطبعش العنصر قبل ما تعمل تخطي).
*   **`Label`**: دي عبارة عن اسم مميز (Identifier) بنديه للوب. بتفيدنا جداً في الـ Nested loops، لإن الـ `break` العادية بتوقف اللوب الداخلي بس. لكن بالـ Label، نقدر وإحنا جوه اللوب الداخلي نوقف اللوب الرئيسي الخارجي بالكامل.

**2. Technical Definitions (English):**
*   **`break` Statement:** Terminates the current loop completely and transfers program control to the statement following the terminated loop.
*   **`continue` Statement:** Terminates execution of the statements in the current iteration of the current loop, and continues execution of the loop with the next iteration.
*   **`Label` Statement:** Provides a statement with an identifier that you can refer to using a `break` or `continue` statement, highly useful for controlling outer loops from within inner loops.

**3. Code Implementation:**

```javascript
let products = ["Keyboard", "Mouse", 10, 20, "Pen", "Monitor", "iPhone"];

// 1. Using continue to skip numbers
for (let i = 0; i < products.length; i++) {
    if (typeof products[i] === "number") {
        continue; // Skips 10 and 20
    }
    console.log(products[i]);
}

// 2. Using break to stop entirely at "Pen"
for (let i = 0; i < products.length; i++) {
    if (products[i] === "Pen") {
        break; // Stops the loop entirely
    }
    console.log(products[i]);
}

// 3. Using Labels with Nested Loops
let colors = ["Red", "Green", "Black"];

mainLoop: // This is the Label
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    
    nestedLoop:
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            // This stops the OUTER loop immediately
            break mainLoop; 
        }
    }
}
```

---

### 125. While and Do...While Loops (حلقات `While` و `Do...While`)

**1. Conceptual Explanation (Arabic):**
*   **`while` Loop**: حلقة الـ `while` بتشبه الـ `for` بس طريقة كتابتها مختلفة. بنعرف متغير البداية بره اللوب خالص، وبنحط جوه الأقواس الشرط بس. وأهم حاجة مننساش نحط سطر التحديث (`i++`) جوه بلوك الكود، وإلا الشرط هيفضل متحقق للأبد والمتصفح هيهنج (Infinite Loop).
*   **`do...while` Loop**: الدالة دي بتتميز بحاجة واحدة؛ إنها بتنفذ الكود "مرة واحدة على الأقل" حتى لو الشرط كان `false` من أول لحظة. بتعمل الفعل الأول (`do`)، وبعدين بتنزل تحت تختبر الشرط (`while`). لو `true` بتكمل، لو `false` بتقف بعد ما تكون طبعت أول نتيجة بالفعل.

**2. Technical Definitions (English):**
*   **`while` Loop:** A control flow statement that allows code to be executed repeatedly based on a given boolean condition. Initialization happens outside, and the increment happens inside the block.
*   **`do...while` Loop:** A loop that executes its block of code at least once before evaluating its condition at the bottom of the loop.

**3. Code Implementation:**

```javascript
let products = ["Keyboard", "Mouse", "Pen", "Monitor"];

// 1. while Loop
let i = 0; // Initialization outside
while (i < products.length) { // Condition
    console.log(products[i]);
    i++; // Crucial: Increment inside to prevent infinite loop
}

// 2. do...while Loop
let j = 0;
do {
    // This will execute once even if j is somehow initialized to 10
    console.log(j);
    j++;
} while (j < 0); // Condition is false, but '0' was already printed
```

---

### 126. Functions - Introduction (مقدمة عن الدوال `Functions`)

**1. Conceptual Explanation (Arabic):**
الدالة (Function) هي واحدة من أهم مفاهيم البرمجة. هي عبارة عن بلوك من الكود بيقوم بوظيفة محددة، بنكتبه مرة واحدة ونقدر نستدعيه وننفذه (Call/Invoke) في أي وقت وفي أي مكان. المفهوم ده بيطبق مبدأ شهير اسمه `DRY` (Don't Repeat Yourself) عشان ميخليناش نكرر نفس الكود بايدينا. في دوال مبنية جوه اللغة (Built-in) زي `console.log`، وفي دوال إحنا بننشئها بنفسنا (User-defined). الدالة ممكن تاخد (Parameters) ودي بتمثل "معامل التجربة" أو المتغير اللي هنطبق عليه الكود. ولما نيجي نستدعي الدالة، بنمرر القيمة الفعلية للمتغير ده واللي بنسميها (Arguments). 

**2. Technical Definitions (English):**
*   **Function:** A reusable block of code designed to perform a particular task. Executed when "called" or "invoked".
*   **DRY Principle:** "Don't Repeat Yourself". A software development principle aimed at reducing repetition of software patterns by using abstractions like functions.
*   **Parameters vs Arguments:** Parameters are the variables listed as part of the function definition. Arguments are the actual values passed to the function when it is invoked.

**3. Code Implementation:**

```javascript
// Function Definition with parameters (userName, age)
function sayHello(userName, age) {
    if (age < 20) {
        console.log(`App is not suitable for you.`);
    } else {
        console.log(`Hello ${userName}, your age is ${age}.`);
    }
}

// Function Invocation with arguments
sayHello("Osama", 38); // Outputs: Hello Osama, your age is 38.
sayHello("Ahmed", 18); // Outputs: App is not suitable for you.
```

---

### 127. Functions - Return (إرجاع القيم `Return`)

**1. Conceptual Explanation (Arabic):**
في الأمثلة اللي فاتت الدالة كانت بتطبع النتيجة في الكونسول مباشرة، لكن احترافياً الدالة المفروض تعمل العملية الحسابية وترجع (Return) النتيجة بس، عشان نقدر نخزن النتيجة دي في متغير ونستعملها بعدين زي ما إحنا عايزين. كلمة `return` بتعمل إيقاف فوري للدالة (Interrupt/Stop Execution)؛ يعني أي كود هتكتبه تحت الـ `return` جوه الدالة يعتبر كود ميت ومستحيل المتصفح يوصله (Unreachable Code). كمان في نقطة خطيرة جداً اسمها (ASI - Automatic Semicolon Insertion): لو نزلت سطر بعد كلمة `return` بدون ما تفتح أقواس، الجافا سكريبت هتحط أوتوماتيك فاصلة منقوطة وتنهي الدالة، وهترجعلك `undefined`. ممكن نستخدم `return` كأداة قوية جداً جوه الـ Loops في الدوال عشان نوقف الدالة واللوب بالكامل عند شرط معين.

**2. Technical Definitions (English):**
*   **`return` Statement:** Ends function execution and specifies a value to be returned to the function caller.
*   **Unreachable Code:** Code situated after a `return` statement in a function, which will never be executed by the interpreter.
*   **ASI (Automatic Semicolon Insertion):** A JavaScript feature where the compiler automatically inserts semicolons at line breaks if they are missing, which can break `return` statements if the value is placed on a new line without parentheses.

**3. Code Implementation:**

```javascript
function calc(num1, num2) {
    // Returns the result instead of logging it
    return num1 + num2;
    
    // This code is unreachable and will never execute
    console.log("This will not run"); 
}

// Storing the returned value in a variable
let result = calc(10, 20);
console.log(result + 100); // 130


function generateNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        if (i === 15) {
            // Halts the entire function and loop execution immediately
            return `Interrupting at ${i}`; 
        }
        console.log(i);
    }
}
console.log(generateNumbers(10, 20)); 
// Logs 10, 11, 12, 13, 14, then returns "Interrupting at 15"
```

---

### 128. Default Function Parameters (القيم الافتراضية للمعاملات)

**1. Conceptual Explanation (Arabic):**
لو عندنا دالة بتطلب تمرير معامل (زي السن)، والمستخدم استدعى الدالة ونسى يكتب السن، الجافا سكريبت هترجعله `undefined`. عشان نعالج ده، بنحط "قيم افتراضية" (Default Values). الطريقة القديمة كانت بتعتمد على إننا نختبر جوه الدالة لو المعامل قيمته `undefined`، أو نستخدم معامل `||` عشان لو مفيش قيمة نحط قيمة بديلة. لكن تحديثات ES6 وفرت طريقة أنضف وأسهل بكتير؛ بنقدر نكتب القيمة الافتراضية مباشرة جوه أقواس الدالة جنب المعامل بعلامة `=`, بحيث لو المستخدم مدخلش قيمة، الدالة تاخد القيمة الافتراضية دي وتشتغل بيها.

**2. Technical Definitions (English):**
*   **Default Parameters:** An ES6 feature that allows named parameters to be initialized with default values if no value or `undefined` is passed to the function.

**3. Code Implementation:**

```javascript
// The modern ES6 way to set default parameters
function showInfo(userName = "Unknown", age = "Unknown") {
    return `Hello ${userName}, your age is ${age}`;
}

console.log(showInfo("Osama", 38)); // Hello Osama, your age is 38
console.log(showInfo("Ahmed"));     // Hello Ahmed, your age is Unknown
console.log(showInfo());            // Hello Unknown, your age is Unknown

// The Old Way (Prior to ES6)
function showInfoOld(userName, age) {
    // Using logical OR as a fallback
    age = age || "Unknown"; 
    return `Hello ${userName}, your age is ${age}`;
}
```

---

### 129. Rest Parameters (معاملات التجميع `Rest Parameters`)

**1. Conceptual Explanation (Arabic):**
أحياناً بنعمل دالة بتجمع أرقام مع بعضها، بس المشكلة إننا مش عارفين المستخدم هيمرر كام رقم بالظبط (ممكن 2، وممكن 10). عشان نخلي الدالة تقبل أي عدد غير محدد من المعاملات (Arguments)، بنستخدم تقنية الـ `Rest Parameter` عن طريق إضافة تلات نقط `...` قبل اسم المعامل جوه الأقواس. الحركة دي بتاخد كل الأرقام اللي المستخدم كتبها وتجمعها كلها وتحطها جوه مصفوفة (Array) كاملة. وبكده نقدر نستخدم الـ Loop جوه الدالة عشان نلف على الأرقام دي ونجمعها مع بعض. فيه شرطين مهمين جداً لاستخدام الـ Rest Parameter: مينفعش تستخدم أكتر من واحد في نفس الدالة، ولازم دايماً يكون هو "آخر" معامل موجود بين الأقواس.

**2. Technical Definitions (English):**
*   **Rest Parameters (`...`):** A syntax that allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript. 
*   **Variadic Function:** A function of indefinite arity, meaning one which accepts a variable number of arguments.

**3. Code Implementation:**

```javascript
// The ...numbers parameter collects all passed arguments into an array
function calcSum(...numbers) {
    let result = 0;
    
    // Iterating through the generated array
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    
    return `Final Result: ${result}`;
}

console.log(calcSum(10, 20, 30)); // Final Result: 60
console.log(calcSum(10, 20, 10, 30, 50)); // Final Result: 120

// Rest parameter MUST be the last parameter
function showData(userName, ...skills) {
    console.log(`User: ${userName}`);
    console.log(`Skills: ${skills.join(" | ")}`);
}
showData("Osama", "HTML", "CSS", "JS", "React");
```

[End of Part 13]

### 143. Creating Objects with `new Object()` (إنشاء الكائنات بطريقة `new`)

**1. Conceptual Explanation (Arabic):**
المدرب أسامة وضح إن بالإضافة للطريقة المعتادة لإنشاء الكائنات باستخدام الأقواس المعقوفة `{}`، عندنا طريقة تانية وهي استخدام الكلمة المفتاحية `new` مع `Object()`. عن طريق الطريقة دي، بننشئ كائن جديد وفاضي تماماً. بعد كده بنقدر نضيف الخواص (Properties) أو الدوال (Methods) للكائن ده بشكل منفصل باستخدام طريقة النقطة (Dot Notation) أو الأقواس (Bracket Notation). النتيجة النهائية بتكون مطابقة تماماً للكائن اللي بيتم إنشاؤه بالطريقة العادية، ونقدر نعدل على بياناته بكل سهولة.

**2. Technical Definitions (English):**
*   **`new Object()`:** A constructor method used to explicitly create a new, empty object wrapper. Properties and methods can be assigned to it dynamically after initialization.

**3. Code Implementation:**

```javascript
// Method 1: Literal Notation (The usual way)
let userLiteral = { age: 38 };

// Method 2: new Object() Constructor
let user = new Object();

// Adding properties and methods after creation
user.age = 38;
user["country"] = "Egypt"; // Using Bracket Notation

user.sayHello = function() {
    return "Hello";
};

console.log(user.age); // 38
console.log(user.sayHello()); // "Hello"
```

---

### 144. The `this` Keyword (الكلمة المفتاحية `this`)

**1. Conceptual Explanation (Arabic):**
كلمة `this` من أهم الكلمات في الجافا سكريبت، وقيمتها بتتغير بناءً على السياق (Context) اللي بتُستخدم فيه. لو استخدمتها في النطاق العام (Global Scope)، هتشاور على كائن النافذة الأساسي `Window` الخاص بالمتصفح. لو استخدمتها جوه دالة تابعة لحدث معين (زي الضغط على زرار)، كلمة `this` هتعود على العنصر اللي بيملك الحدث ده (Owner)، يعني هتشاور على الزرار نفسه. الميزة الكبرى لـ `this` بتظهر جوه الكائنات؛ لما بنستخدمها جوه دالة (Method) تابعة لكائن، بتعود أوتوماتيكياً على الكائن ده نفسه، وده بيسمح لنا نوصل لخواصه التانية جوه الدالة من غير ما نحتاج نكتب اسم الكائن صراحةً.

**2. Technical Definitions (English):**
*   **`this` Keyword:** A special keyword in JavaScript that refers to the object it belongs to. Its value depends entirely on the context in which it is invoked (e.g., global object, element owner, or parent object).
*   **Global Context:** When used alone or inside a standard global function, `this` refers to the global object (the `window` in a browser).

**3. Code Implementation:**

```html
<!-- HTML Setup for Event Context -->
<button id="myBtn">Click Me</button>
```

```javascript
// 1. Global Context
console.log(this === window); // true

// 2. Event Context (this refers to the element that received the event)
document.getElementById("myBtn").onclick = function() {
    console.log(this.id); // "myBtn"
};

// 3. Object Method Context
let user = {
    age: 38,
    ageInDays: function() {
        // 'this' refers to the 'user' object itself
        return this.age * 365; 
    }
};

console.log(user.ageInDays()); // 13870
```

---

### 145. `Object.create()` Method (إنشاء كائن من نموذج `Object.create`)

**1. Conceptual Explanation (Arabic):**
دالة `Object.create` بتسمح لنا ننشئ كائن جديد باستخدام كائن تاني موجود بالفعل عشان يشتغل كنموذج مبدئي (Prototype). الكائن الجديد بيكون فاضي في الظاهر، لكنه متصل بالنموذج في الخلفية وبيقدر يقرأ ويستخدم كل خواصه ودواله. لو غيرنا حاجة في النموذج الأصلي، الكائن الجديد هيتأثر بالتغيير ده فوراً. لكن لو ضفنا أو عدلنا خاصية في الكائن الجديد بنفس اسم خاصية موجودة في النموذج، الكائن الجديد هيستخدم قيمته هو ويتجاهل قيمة النموذج (العملية دي بتسمى Shadowing). هنا بتظهر عبقرية استخدام كلمة `this`؛ لإنها بتضمن إن الدوال بتتعامل مع بيانات الكائن الفعلي اللي بنستدعيها منه، مش بيانات النموذج الأصلي.

**2. Technical Definitions (English):**
*   **`Object.create(proto)`:** A method that creates a new object, using an existing object as the prototype of the newly created object.
*   **Prototype Chain:** The mechanism by which objects inherit features from one another. If a property is not found on the object itself, JS looks up the prototype chain.

**3. Code Implementation:**

```javascript
// The Prototype Object
let user = {
    age: 40,
    doubleAge: function() {
        // Using 'this' ensures it calculates the age of the caller object
        return this.age * 2; 
    }
};

// Creating a new object using 'user' as the prototype
let copyObj = Object.create(user);

// Inherits the value from the prototype
console.log(copyObj.age); // 40

// Overriding the property in the new object (Shadowing)
copyObj.age = 50; 

console.log(copyObj.age); // 50 (Uses its own property)
console.log(copyObj.doubleAge()); // 100 (The method uses the new object's 'this')
console.log(user.age); // 40 (The original prototype remains unaffected)
```

---

### 146. `Object.assign()` Method (دمج الكائنات `Object.assign`)

**1. Conceptual Explanation (Arabic):**
دالة `Object.assign` بتُستخدم لنسخ الخواص من كائن مصدر أو أكتر (Source Objects) وتجميعها في كائن هدف (Target Object). لو في خاصية متكررة بنفس الاسم في كذا كائن مصدر، الدالة هتاخد قيمة آخر خاصية تقابلها وتعمل إحلال (Overwrite) للقيم القديمة. الميزة القوية إننا نقدر نمرر كائن فاضي `{}` كـ Target مبدئي، ونبدأ ندمج فيه الكائنات التانية ونكتب خواص جديدة جواه مباشرة وإحنا بننشئه، عشان نطلع في النهاية بكائن جديد تماماً ومستقل بيجمع بين كل البيانات.

**2. Technical Definitions (English):**
*   **`Object.assign(target, ...sources)`:** A method used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

**3. Code Implementation:**

```javascript
let obj1 = { prop1: 1, prop2: 2 };
let obj2 = { prop2: 200, prop3: 3 }; // Notice prop2 is repeated

// Creating a new combined object
// Target is {}, followed by source objects, and directly inline properties
let finalObj = Object.assign({}, obj1, obj2, { prop4: 4 });

console.log(finalObj);
/* Output: 
{
    prop1: 1,
    prop2: 200, // obj2 overwrote obj1's prop2 value
    prop3: 3,
    prop4: 4
}
*/
```

---

### 147. Document Object Model - DOM (تحديد العناصر في الـ `DOM`)

**1. Conceptual Explanation (Arabic):**
الـ DOM هو الموديل اللي المتصفح بيبنيه أول ما الصفحة تحمل، وبيخلينا نقدر نوصل لأي عنصر ونتحكم فيه عن طريق كائن `document`. للوصول للعناصر، عندنا عدة طرق:
*   `getElementById`: بتجيب عنصر واحد محدد بالـ ID بتاعه.
*   `getElementsByTagName` و `getElementsByClassName`: بيرجعوا مجموعة عناصر في هيكل اسمه (HTMLCollection)، وبنوصل للعنصر اللي عايزينه عن طريق رقم الفهرس (Index).
*   الطريقة الأقوى والأحدث هي `querySelector` اللي بتقبل أي (CSS Selector) وبترجع أول عنصر يطابق البحث، و `querySelectorAll` اللي بترجع كل العناصر المطابقة في هيكل اسمه (NodeList). 
كمان الكائن `document` جواه خواص جاهزة بتسمح لنا نوصل لمجموعات معينة في الصفحة بشكل مباشر، زي `document.title` لعنوان الصفحة، و `document.body`، و `document.links`، و `document.forms`.

**2. Technical Definitions (English):**
*   **DOM (Document Object Model):** An API representing the HTML document as a structured tree of nodes, allowing JavaScript to dynamically manipulate the content, structure, and style.
*   **`querySelector()` / `querySelectorAll()`:** Highly flexible methods that use CSS-style syntax to select elements.

**3. Code Implementation:**

```javascript
// Selecting by ID (Returns a single element)
let myIdElement = document.getElementById("my-div");

// Selecting by Tag Name (Returns an HTMLCollection)
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs); // Accessing the first paragraph

// Selecting by Class Name (Returns an HTMLCollection)
let classElements = document.getElementsByClassName("my-class");

// querySelector (Returns the FIRST matching element)
let firstSpecial = document.querySelector(".special");

// querySelectorAll (Returns a NodeList of ALL matches)
let allSpecials = document.querySelectorAll(".special");

// Direct Document Collections
console.log(document.title); // Reads the page title
console.log(document.links); // Accesses the first <a> tag
console.log(document.forms); // Accesses the first <form>
```

---

### 148. DOM Content and Attributes (محتوى وخصائص العناصر)

**1. Conceptual Explanation (Arabic):**
عشان نقرأ أو نعدل المحتوى الداخلي للعنصر، الجافا سكريبت بتوفر لنا خاصيتين: خاصية `innerHTML` اللي بترجع النص ومعاه وسوم الـ HTML (لو موجودة)، وبتسمح لنا نضيف وسوم جديدة المتصفح هيترجمها ويعرضها. على الناحية التانية، `textContent` بترجع النص الصافي بس (Pure text) وبتتجاهل أي وسوم، ولو حاولنا نضيف وسم HTML من خلالها، المتصفح هيعتبره مجرد نص مكتوب وهيطبعه زي ما هو. نقدر كمان نعدل خصائص العناصر (Attributes) بشكل مباشر، زي تغيير رابط الصورة `element.src` أو الكلاس الخاص بيها `element.className`، ولو الخاصية دي مكانتش موجودة في العنصر، المتصفح هيضيفها له أوتوماتيكياً.

**2. Technical Definitions (English):**
*   **`innerHTML`:** Gets or sets the HTML markup contained within an element, rendering tags correctly.
*   **`textContent`:** Gets or sets the raw text content of a node and its descendants, treating tags as literal string characters.

**3. Code Implementation:**

```html
<div id="myDiv">Old Content</div>
<img id="myImg" src="old.jpg" alt="Old Image">
```

```javascript
let myDiv = document.getElementById("myDiv");
let myImg = document.getElementById("myImg");

// Using innerHTML (The <span> tag is processed by the browser)
myDiv.innerHTML = "Hello from <span>JS</span>";

// Using textContent (The <span> tag is printed as literal text)
myDiv.textContent = "Hello from <span>JS</span>";

// Direct Attribute Manipulation
myImg.src = "new-image.jpg"; // Modifies existing attribute
myImg.title = "A new title"; // Adds a new attribute if it didn't exist
myImg.className = "image-style"; // Sets the class
```

---

### 149. DOM Attribute Methods (دوال التحكم في الخصائص)

**1. Conceptual Explanation (Arabic):**
بالإضافة للتعديل المباشر، الجافا سكريبت بتوفر دوال متخصصة للتعامل مع الخصائص (Attributes):
*   `getAttribute(name)`: بتجيب وتستخرج قيمة الخاصية.
*   `setAttribute(name, value)`: بتضيف خاصية جديدة أو بتعدل قيمة خاصية موجودة مسبقاً.
*   `hasAttribute(name)`: دي دالة مهمة جداً في الشروط (If Conditions)؛ بترجع `true` لو الخاصية موجودة في العنصر، و `false` لو مش موجودة، وده بيحمينا من إننا نعدل خاصية مش موجودة أساساً وتعمل مشكلة.
*   `removeAttribute(name)`: بتحذف الخاصية بالكامل من العنصر.

**2. Technical Definitions (English):**
*   **Attribute Methods:** Native DOM methods specifically designed to safely retrieve, update, check the existence of, or delete HTML attributes.

**3. Code Implementation:**

```javascript
let myParagraph = document.querySelector("p");

// Setting a new attribute
myParagraph.setAttribute("data-custom", "testing");

// Getting an attribute's value
console.log(myParagraph.getAttribute("data-custom")); // "testing"

// Checking if an attribute exists before manipulating it
if (myParagraph.hasAttribute("data-custom")) {
    console.log("Attribute found! We can safely remove it.");
    // Removing the attribute entirely
    myParagraph.removeAttribute("data-custom");
} else {
    console.log("Attribute not found.");
}
```

---

### 150. Creating DOM Elements (إنشاء العناصر ديناميكياً)

**1. Conceptual Explanation (Arabic):**
عشان ننشئ عنصر HTML جديد بالكامل من الجافا سكريبت ونظهره في الصفحة، بنمر بـ 3 خطوات رئيسية. أولاً، بننشئ الهيكل بتاع العنصر باستخدام دالة `createElement` (زي إننا ننشئ `div` أو `p`). ثانياً، بننشئ النص اللي هيتكتب جواه باستخدام `createTextNode`، أو حتى ممكن ننشئ تعليق برمجي باستخدام `createComment`. ثالثاً، بنبدأ نركب الأجزاء دي في بعض؛ بناخد النص ونحطه جوه العنصر باستخدام دالة `appendChild`، وبعدين بناخد العنصر ده كله (بعد ما حطينا له كلاسات وخصائص) ونحطه في المكان اللي إحنا عايزينه في الصفحة (زي إننا نلحقه بـ `document.body`). نقدر نستخدم الخطوات دي جوه حلقة تكرار (Loop) عشان ننشئ عدد كبير جداً من العناصر ديناميكياً زي المنتجات في المتاجر الإلكترونية.

**2. Technical Definitions (English):**
*   **`document.createElement(tagName)`:** Creates an HTML element node specified by the tag name.
*   **`document.createTextNode(data)`:** Creates a new Text node.
*   **`node.appendChild(childNode)`:** Adds a node to the end of the list of children of a specified parent node.

**3. Code Implementation:**

```javascript
// Step 1: Create the Elements
let myDiv = document.createElement("div");
let myHeading = document.createElement("h2");

// Step 2: Create the Text Nodes
let headingText = document.createTextNode("Product Title");
let myComment = document.createComment("This is a dynamically created product");

// Optional: Add attributes and classes
myDiv.className = "product-card";

// Step 3: Append children to build the structure
myHeading.appendChild(headingText); // Put text inside <h2>
myDiv.appendChild(myComment);       // Put comment inside <div>
myDiv.appendChild(myHeading);       // Put <h2> inside <div>

// Step 4: Append the finalized element to the actual DOM (e.g., the body)
document.body.appendChild(myDiv);
```

---

### 151. DOM Children and Nodes (العناصر الأبناء والعقد)

**1. Conceptual Explanation (Arabic):**
لما بنحتاج نتنقل ونجيب العناصر اللي جوه عنصر معين (الأبناء)، الـ DOM بيوفر لنا نوعين من الخواص: خاصية `children` ودي بترجع "العناصر الحقيقية" بس (Elements) زي الديفات والبراجرافات في شكل HTMLCollection. لكن خاصية `childNodes` بترجع كل "العقد" (Nodes) جوه العنصر، وده بيشمل العناصر، ومسافات الإنتر (اللي المتصفح بيعتبرها Text Nodes)، والتعليقات البرمجية. 
بالمثل، لو حابين نجيب أول وأخر ابن جوه العنصر، لو استخدمنا `firstChild` و `lastChild`، ممكن يرجعوا لنا مجرد مسافة بيضاء لإنهم بيتعاملوا مع أي نوع نود. عشان نضمن إننا بنجيب عنصر HTML حقيقي، بنستخدم `firstElementChild` و `lastElementChild` اللي بيتجاهلوا المسافات والتعليقات.

**2. Technical Definitions (English):**
*   **`children` vs `childNodes`:** `children` returns only element nodes (HTML tags). `childNodes` returns all node types (elements, text nodes representing whitespace, and comments).
*   **`firstElementChild` / `lastElementChild`:** Properties that selectively return the first or last *element* node, ignoring text and comment nodes.

**3. Code Implementation:**

```html
<!-- HTML Structure with indentation (whitespace) -->
<div id="parent">
    <!-- A comment -->
    <p>Paragraph 1</p>
    <span>Span 1</span>
</div>
```

```javascript
let parentEl = document.getElementById("parent");

// Returns an HTMLCollection of just the <p> and <span> (Length: 2)
console.log(parentEl.children); 

// Returns a NodeList of Text (whitespace), Comment, Text, <p>, Text, <span>, Text (Length: 7)
console.log(parentEl.childNodes); 

// Returns the #text node (the whitespace/enter before the comment)
console.log(parentEl.firstChild);

// Returns the actual <p> element
console.log(parentEl.firstElementChild); 
```

---

### 152. DOM Events Introduction (مقدمة عن الأحداث `Events`)

**1. Conceptual Explanation (Arabic):**
الأحداث (Events) هي وسيلة المتصفح للتفاعل مع تصرفات المستخدم. نقدر نكتب الحدث كـ خاصية جوه وسم الـ HTML مباشرة (زي `onclick="function()"` )، لكن الطريقة الأفضل والأكثر احترافية هي إننا نحدد العنصر في الجافا سكريبت، ونساويه بدالة مجهولة (Anonymous Function) بتتنفذ تلقائياً أول ما الحدث ده يحصل. 
الأحداث دي متنوعة جداً وبتغطي كل تفاعلات المستخدم:
*   أحداث الماوس: زي الضغط العادي `onclick`، أو الكليك يمين `oncontextmenu`، أو مرور الماوس فوق العنصر `onmouseenter` ومغادرته `onmouseleave`.
*   أحداث النافذة: زي عمل تمرير للصفحة `onscroll` أو تغيير حجم النافذة `onresize`.
*   أحداث النماذج (Forms): زي إن المستخدم يقف جوه حقل الإدخال عشان يكتب `onfocus`، أو يخرج منه `onblur`، أو يضغط على زرار الإرسال `onsubmit`.

**2. Technical Definitions (English):**
*   **Events:** Actions or occurrences that happen in the system being programmed (e.g., clicks, scrolls, form submissions) that the code can listen to and react against.
*   **Event Handler:** A function that is executed in response to an event firing.

**3. Code Implementation:**

```html
<button id="myBtn">Click Me</button>
<input type="text" id="myInput" placeholder="Focus on me">
```

```javascript
let myBtn = document.getElementById("myBtn");
let myInput = document.getElementById("myInput");

// Mouse Event: Click
myBtn.onclick = function() {
    console.log("Button was clicked!");
};

// Mouse Event: Enter and Leave
myBtn.onmouseenter = function() {
    myBtn.style.backgroundColor = "yellow";
};

myBtn.onmouseleave = function() {
    myBtn.style.backgroundColor = ""; // Resets
};

// Form Events: Focus and Blur
myInput.onfocus = function() {
    console.log("User is typing...");
};

myInput.onblur = function() {
    console.log("User clicked away from the input.");
};

// Window Event: Scroll
window.onscroll = function() {
    console.log("User is scrolling the page!");
};
```

### 153. CSS Styling via JavaScript (تنسيق العناصر عبر الجافا سكريبت)

**1. Conceptual Explanation (Arabic):**
لغة الجافا سكريبت بتسمح لنا نتحكم في التنسيقات (CSS) الخاصة بأي عنصر بطرق مختلفة. الطريقة الأولى والأكثر شيوعاً هي الدخول على خاصية `style`، زي إننا نكتب `element.style.color`. ولازم نفتكر إن أي خاصية في الـ CSS بتتكون من كلمتين (زي `background-color`) لازم نكتبها في الجافا سكريبت بطريقة الـ (Camel Case) ونشيل علامة الناقص، فتبقى `backgroundColor`. 
لو عندنا تنسيقات كتير عايزين نضيفها، بدل ما نكتب 10 سطور، الجافا سكريبت بتوفر لنا خاصية `cssText`. دي بتسمح لنا نكتب كود CSS كامل زي ما بنكتبه في ملف الستايل بالظبط (كنص واحد). كمان عندنا دوال متقدمة زي `setProperty` ودي ميزتها إنها بتسمح لنا نضيف خاصية الـ `!important` للتنسيق، ودالة `removeProperty` عشان نحذف تنسيق معين من العنصر تماماً.

**2. Technical Definitions (English):**
*   **Inline Styling (`element.style.property`):** Modifying the CSS of an element directly. Multi-word CSS properties must be written in camelCase.
*   **`cssText`:** A property that allows you to set multiple inline CSS styles at once using standard CSS string syntax.
*   **`setProperty(propertyName, value, priority)`:** A method that sets a new value for a property on a CSS style declaration object, allowing the addition of the "important" flag.
*   **`removeProperty(propertyName)`:** A method that removes a property from a CSS style declaration object.

**3. Code Implementation:**

```javascript
let myDiv = document.getElementById("my-div");

// Method 1: Standard Inline Styling (Requires camelCase)
myDiv.style.color = "blue";
myDiv.style.fontWeight = "bold";
myDiv.style.backgroundColor = "lightgray"; // Note the camelCase

// Method 2: cssText (Applies multiple styles using standard CSS syntax, overwriting existing inline styles)
myDiv.style.cssText = "font-weight: bold; color: green; display: block;";

// Method 3: setProperty and removeProperty
// Useful when you need to specifically add the !important flag
myDiv.style.setProperty("font-size", "40px", "important");

// Removes the color property from the inline styles
myDiv.style.removeProperty("color"); 
```

---

### 154. Managing External Stylesheets (التحكم في ملفات الستايل الخارجية)

**1. Conceptual Explanation (Arabic):**
المدرب أسامة الزيرو وضح معلومة متقدمة جداً (Advanced)؛ وهي إن الجافا سكريبت مش بس بتقدر تعدل التنسيقات الداخلية للعنصر (Inline Styles)، دي كمان تقدر توصل لملفات الـ CSS الخارجية (External Stylesheets) اللي مربوطة بالصفحة وتعدل فيها! عن طريق كائن `document.styleSheets` بنقدر نوصل لكل ملفات الستايل، وندخل جواها على القواعد (Rules) اللي مكتوبة، ونقدر نحذف أو نضيف خواص للقاعدة دي. التعديل هنا مش بيتم على عنصر واحد، ده بيتم على القواعد الأساسية في الملف نفسه، فبيأثر على أي عنصر في الصفحة واخد الكلاس ده.

**2. Technical Definitions (English):**
*   **`document.styleSheets`:** A read-only property that returns a StyleSheetList of CSSStyleSheet objects for stylesheets explicitly linked into or embedded in a document.
*   **`cssRules` / `rules`:** A property of a stylesheet object representing the collection of individual CSS rules written in that file.

**3. Code Implementation:**

```javascript
// Accessing the very first linked CSS file in the HTML document
let firstStyleSheet = document.styleSheets;

// Accessing the very first rule (e.g., the CSS block for 'div' or '.my-class') in that stylesheet
let firstRule = firstStyleSheet.rules;

// Removing a specific property globally from that CSS rule
// This affects ALL elements sharing that rule on the page, not just an inline style
firstRule.style.removeProperty("line-height");

// Adding a new property globally to that CSS rule
firstRule.style.setProperty("background-color", "red", "important");
```

---

### 155. Form Validation & `preventDefault()` (تطبيق عملي على منع السلوك الافتراضي)

**1. Conceptual Explanation (Arabic):**
لمنع أي عنصر من القيام بوظيفته الافتراضية اللي المتصفح برمجها عليه، بنستخدم دالة `preventDefault()`. المدرب ضرب مثالين: الأول بلينك (Link)، لما بنضغط عليه المفروض يودينا لصفحة تانية، بس لو استخدمنا الدالة دي جوه حدث الـ `click`، اللينك مش هيشتغل. المثال التاني والأهم هو النماذج (Forms). الزرار بتاع الإرسال (Submit) وظيفته يبعت البيانات ويعمل (Refresh) للصفحة. في التطبيق العملي للـ Validation، بنعمل متغيرات كـ (Flags) قيمتها المبدئية `false`. بنختبر الحقول؛ لو اليوزر نيم مكتوب ومطابق للشروط (مثلاً مش فاضي وحروفه أقل من 10)، بنغير الـ Flag لـ `true`. لو في النهاية لقينا إن في Flag لسه `false` (يعني شرط متحققش)، بنستدعي `preventDefault()` عشان نمنع الفورم تتبعت ونعرض للمستخدم رسالة خطأ.

**2. Technical Definitions (English):**
*   **`event.preventDefault()`:** A method that cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
*   **Validation Flags:** Boolean variables used to track whether specific input fields have passed their respective validation rules before permitting a form submission.

**3. Code Implementation:**

```html
<form id="myForm" action="/submit" method="POST">
    <input type="text" id="username" placeholder="Max 10 chars">
    <input type="text" id="age" placeholder="Age">
    <button type="submit">Submit Data</button>
</form>
<a href="https://google.com" id="myLink">Go to Google</a>
```

```javascript
// 1. Preventing a link from opening
document.getElementById("myLink").addEventListener("click", function(event) {
    event.preventDefault(); 
    console.log("Link blocked!");
});

// 2. Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    let userValid = false;
    let ageValid = false;
    
    let userValue = document.getElementById("username").value;
    let ageValue = document.getElementById("age").value;
    
    // Check if username is not empty and <= 10 characters
    if (userValue !== "" && userValue.length <= 10) {
        userValid = true;
    }
    
    // Check if age is not empty
    if (ageValue !== "") {
        ageValid = true;
    }
    
    // If either condition fails, prevent the form from submitting
    if (userValid === false || ageValid === false) {
        event.preventDefault(); // Stops the page refresh and data submission
        console.log("Validation failed! Please fix your inputs.");
    }
});
```

---

### 156. Final DOM Challenge (التحدي النهائي لنموذج كائنات المستند)

**1. Conceptual Explanation (Arabic):**
في نهاية شروحات الـ DOM، المدرب أسامة الزيرو وضع تحدي شامل بيقيس مدى فهم المطور لكل المفاهيم اللي اتعلمها. التحدي عبارة عن بناء هيكل صفحة ويب كاملة (Header, Menu, Content, Products, Footer) باستخدام الجافا سكريبت فقط وبدون كتابة أي أكواد HTML أو CSS مسبقة. التحدي بيتطلب استخدام دوال إنشاء العناصر `createElement`، وإنشاء النصوص `createTextNode`، وإضافتهم لبعض عن طريق `appendChild`. وكمان استخدام حلقات التكرار `for loop` لإنشاء 15 منتج ديناميكياً وعرضهم في الشاشة. وأخيراً استخدام خواص التنسيق `style` اللي لسه متعلمينها لتلوين وضبط مقاسات وتوزيع العناصر في الصفحة باستخدام الـ Flexbox. التحدي ده بيثبت إنك بقيت قادر تتحكم في شجرة المستند بالكامل (DOM Tree) برمجياً.

**2. Technical Definitions (English):**
*   **DOM Manipulation Mastery:** The ability to construct an entire, fully styled web page interface entirely from scratch dynamically using only JavaScript functions and logic.

**3. Code Implementation:**

```javascript
// A brief snippet illustrating the logic needed to pass the challenge

// 1. Create Header and Menu
const header = document.createElement("header");
const logo = document.createElement("h1");
logo.textContent = "Elzero";
logo.style.color = "green";

const menu = document.createElement("ul");
menu.style.display = "flex";
menu.style.listStyle = "none";
// ... (Logic to append li items to menu goes here)

header.appendChild(logo);
header.appendChild(menu);
document.body.appendChild(header);

// 2. Create Content Area
const content = document.createElement("div");
content.className = "content";
content.style.display = "flex";
content.style.flexWrap = "wrap";

// 3. Generate 15 Products using a Loop
for (let i = 1; i <= 15; i++) {
    const productBox = document.createElement("div");
    productBox.className = "product";
    
    const productNum = document.createElement("span");
    productNum.textContent = i;
    
    const productText = document.createTextNode(" Product");
    
    productBox.appendChild(productNum);
    productBox.appendChild(productText);
    
    // Basic styling for the box
    productBox.style.padding = "20px";
    productBox.style.margin = "10px";
    productBox.style.border = "1px solid #ccc";
    
    content.appendChild(productBox);
}

document.body.appendChild(content);

// 4. Create Footer
const footer = document.createElement("footer");
footer.textContent = "Copyright 2024";
footer.style.backgroundColor = "green";
footer.style.color = "white";
footer.style.textAlign = "center";
document.body.appendChild(footer);
```

---
**Congratulations!** This marks the comprehensive conclusion of the JavaScript concepts extracted from the extensive "Bro Code" and "Elzero Web School" transcripts provided. You have successfully traversed the journey from basic syntax and variables all the way to advanced asynchronous programming, Higher-Order Functions, Object-Oriented concepts, and deep DOM manipulation!