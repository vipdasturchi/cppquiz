const questions = [
  {
    "question": "C++ dasturida cout dan foydalanish uchun qaysi kutubxona chaqiriladi?",
    "options": ["<stdio.h>", "<math.h>", "<iostream>", "<string>"],
    "answer": 2
  },
  {
    "question": "cout qaysi vazifani bajaradi?",
    "options": ["Ma'lumot kiritadi", "Ma'lumot chiqaradi", "Hisoblaydi", "Saqlaydi"],
    "answer": 1
  },
  {
    "question": "cin qaysi operator bilan ishlatiladi?",
    "options": ["<<", ">>", "=", "=="],
    "answer": 1
  },
  {
    "question": "using namespace std; yozilmasa cout qanday yoziladi?",
    "options": ["cout", "std.cout", "std::cout", "::cout"],
    "answer": 2
  },
  {
    "question": "endl ning vazifasi nima?",
    "options": ["Qatorni tugatadi", "O‘chirish", "Kiritish", "Hisoblash"],
    "answer": 0
  },
  {
    "question": "\"\\n\" bilan endl orasidagi farq nimada?",
    "options": ["Farqi yo‘q", "\\n faqat yangi qatordan boshlaydi", "endl faqat bo‘sh joy tashlaydi", "\\n sekin ishlaydi"],
    "answer": 1
  },
  {
    "question": "cout << \"Salom\"; bu qanday amal?",
    "options": ["Kiritish", "Chiqarish", "Taqqoslash", "O‘chirish"],
    "answer": 1
  },
  {
    "question": "cin >> a; kodida a nima bo‘lishi kerak?",
    "options": ["Funksiya", "O‘zgaruvchi", "Kutubxona", "Operator"],
    "answer": 1
  },
  {
    "question": "iostream nima?",
    "options": ["Operator", "Kutubxona", "O‘zgaruvchi", "Funksiya"],
    "answer": 1
  },
  {
    "question": "sqrt(x) funksiyasi nima qiladi?",
    "options": ["Kvadratini oladi", "Ildizini oladi", "Bo‘ladi", "Qo‘shadi"],
    "answer": 1
  },
  {
    "question": "pow(2,3) natija?",
    "options": ["6", "8", "9", "4"],
    "answer": 1
  },
  {
    "question": "abs(-7) natija?",
    "options": ["-7", "7", "0", "1"],
    "answer": 1
  },
  {
    "question": "math.h qaysi turdagi funksiyalarni o‘z ichiga oladi?",
    "options": ["Matnli", "Matematik", "Grafik", "Mantiqiy"],
    "answer": 1
  },
  {
    "question": "sqrt() funksiyasi qaysi kutubxonaga tegishli?",
    "options": ["<string>", "<iostream>", "<math.h>", "<stdio.h>"],
    "answer": 2
  },
  {
    "question": "C++ da matnlar qaysi tipda saqlanadi?",
    "options": ["int", "float", "string", "bool"],
    "answer": 2
  },
  {
    "question": "String bilan ishlash uchun qaysi kutubxona chaqiriladi?",
    "options": ["<math.h>", "<string>", "<iostream>", "<vector>"],
    "answer": 1
  },
  {
    "question": "Stringlar qanday taqqoslanadi?",
    "options": ["=", "==", "<>", "!="],
    "answer": 1
  },
  {
    "question": "Butun sonlar uchun qaysi tip ishlatiladi?",
    "options": ["float", "double", "int", "char"],
    "answer": 2
  },
  {
    "question": "Haqiqiy sonlar uchun qaysi tip ishlatiladi?",
    "options": ["int", "string", "float", "bool"],
    "answer": 2
  },
  {
    "question": "char qaysi qiymatni oladi?",
    "options": ["Butun son", "Bitta belgi", "Matn", "Haqiqiy son"],
    "answer": 1
  },
  {
    "question": "Mantiqiy qiymatlar uchun qaysi tur ishlatiladi?",
    "options": ["int", "bool", "char", "string"],
    "answer": 1
  },
  {
    "question": "int a; bu nima?",
    "options": ["Funksiya", "O‘zgaruvchi e’loni", "Operator", "Kutubxona"],
    "answer": 1
  },
  {
    "question": "const kalit so‘zi nima uchun?",
    "options": ["Qiymatni o‘zgartirish uchun", "O‘zgarmas qilish uchun", "O‘chirish uchun", "Kiritish uchun"],
    "answer": 1
  },
  {
    "question": "int a=5, b=7; bu nima?",
    "options": ["Taqqoslash", "O‘zgaruvchilarni e’lon qilish", "Sikl", "Shart operatori"],
    "answer": 1
  },
  {
    "question": "Eng kichik butun tip qaysi?",
    "options": ["int", "short", "long", "double"],
    "answer": 1
  },
  {
    "question": "Eng katta butun tip qaysi?",
    "options": ["int", "short", "long long", "char"],
    "answer": 2
  },
  {
    "question": "O‘zgaruvchi qaysi belgidan boshlanmasligi kerak?",
    "options": ["Harf", "_", "Raqam", "So‘z"],
    "answer": 2
  },
  {
    "question": "C++ da _name nomli o‘zgaruvchi bo‘ladimi?",
    "options": ["Yo‘q", "Ha", "Faqat int", "Faqat string"],
    "answer": 1
  },
  {
    "question": "O‘zgaruvchi nomida bo‘sh joy ishlatiladimi?",
    "options": ["Ha", "Yo‘q", "Ba’zan", "Faqat stringda"],
    "answer": 1
  },
  {
    "question": "C++ da o‘zgaruvchi nomida qaysi belgilar bo‘lishi mumkin?",
    "options": ["Faqat raqam", "Harf va raqam", "Harf, raqam va _", "Faqat harf"],
    "answer": 2
  },
  {
    "question": "Algoritm nima?",
    "options": ["Dastur", "Masalani yechish ketma-ketligi", "Kod", "O‘zgaruvchi"],
    "answer": 1
  }
,
{
  "question": "Birdan ortiq shartni tekshirish uchun qaysi operator ishlatiladi?",
  "options": ["&& va ||", "=", "++", "%"],
  "answer": 0
},
{
  "question": "if(a==b) operatori nimani tekshiradi?",
  "options": ["Tenglikni", "Kattalikni", "Kichiklikni", "Ayirmani"],
  "answer": 0
},
{
  "question": "if(a!=b) nimani anglatadi?",
  "options": ["a b ga teng", "a b dan katta", "a b ga teng emas", "a nol"],
  "answer": 2
},
{
  "question": "if(shart) dan keyin qaysi belgi bo‘ladi?",
  "options": ["{}", "()", "[]", "<>"],
  "answer": 0
},
{
  "question": "else dan oldin nima bo‘lishi shart?",
  "options": ["for", "if", "while", "switch"],
  "answer": 1
},
{
  "question": "else if ning ustunligi nimada?",
  "options": ["Tez ishlaydi", "Bir nechta shartni ketma-ket tekshiradi", "Xotira kam ishlatadi", "Faqat bitta shart"],
  "answer": 1
},
{
  "question": "switch qaysi turdagi qiymatlar bilan ishlaydi?",
  "options": ["Haqiqiy sonlar", "Matnlar", "Butun va char", "Massiv"],
  "answer": 2
},
{
  "question": "case dan keyin nima yoziladi?",
  "options": ["Shart", "Qiymat", "O‘zgaruvchi", "Funksiya"],
  "answer": 1
},
{
  "question": "default qachon ishlaydi?",
  "options": ["Har doim", "Hech qachon", "Hech bir case mos kelmasa", "Birinchi case da"],
  "answer": 2
},
{
  "question": "break operatorining vazifasi nima?",
  "options": ["Siklni davom ettiradi", "Dasturni to‘xtatadi", "Blokdan chiqadi", "Qiymat qaytaradi"],
  "answer": 2
},
{
  "question": "switch(a) bu nima?",
  "options": ["Sikl", "Shart operatori", "Funksiya", "O‘zgaruvchi"],
  "answer": 1
},
{
  "question": "case 1: nima?",
  "options": ["Shart", "Qiymat tekshiruvi", "Funksiya", "Sikl"],
  "answer": 1
},
{
  "question": "switch(o‘zgaruvchi) dan keyin qavslar qanday bo‘ladi?",
  "options": ["{}", "()", "[]", "<>"],
  "answer": 0
},
{
  "question": "break ishlatilmasa nima bo‘ladi?",
  "options": ["Xato chiqadi", "Keyingi case lar ham bajariladi", "Dastur to‘xtaydi", "Hech narsa bo‘lmaydi"],
  "answer": 1
},
{
  "question": "default: necha marta ishlatiladi?",
  "options": ["0 yoki 1 marta", "Faqat 1 marta", "Ko‘p marta", "2 marta"],
  "answer": 0
},
{
  "question": "Switch qaysi holatda foydali?",
  "options": ["Ko‘p shartlar bo‘lsa", "Bitta shart bo‘lsa", "Takrorlashda", "Matn chiqarishda"],
  "answer": 0
},
{
  "question": "for siklining strukturasi nechta qismdan iborat?",
  "options": ["1", "2", "3", "4"],
  "answer": 2
},
{
  "question": "for(int i=0; i<5; i++) necha marta ishlaydi?",
  "options": ["4", "5", "6", "Cheksiz"],
  "answer": 1
},
{
  "question": "while qachon ishlaydi?",
  "options": ["Har doim", "Shart true bo‘lsa", "Shart false bo‘lsa", "Bir marta"],
  "answer": 1
},
{
  "question": "do while ning afzalligi nimada?",
  "options": ["Tez ishlaydi", "Kam xotira", "Kamida bir marta bajariladi", "Faqat false bo‘lsa"],
  "answer": 2
},
{
  "question": "while(i<5) nimani bildiradi?",
  "options": ["i=5", "i 5 dan katta", "i 5 dan kichik bo‘lsa", "i o‘zgarmaydi"],
  "answer": 2
},
{
  "question": "break siklda nima qiladi?",
  "options": ["Davom ettiradi", "To‘xtatadi", "Qiymat o‘zgartiradi", "Takrorlaydi"],
  "answer": 1
},
{
  "question": "while(true) nima?",
  "options": ["Bir martalik sikl", "Xato", "Cheksiz sikl", "Shartli sikl"],
  "answer": 2
},
{
  "question": "i++ nimani anglatadi?",
  "options": ["i ni kamaytiradi", "i ni 1 ga oshiradi", "i ni 2 ga oshiradi", "i ni nolga tenglaydi"],
  "answer": 1
},
{
  "question": "string s = \"Hello\"; cout << s; natija nima?",
  "options": ["Hello", "s", "Xato", "Bo‘sh"],
  "answer": 0
},
{
  "question": "string turi nimani saqlaydi?",
  "options": ["Butun son", "Haqiqiy son", "Matn", "Mantiqiy qiymat"],
  "answer": 2
},
{
  "question": "sqrt(64) natijasi?",
  "options": ["6", "7", "8", "9"],
  "answer": 2
},
{
  "question": "abs(-15) natijasi?",
  "options": ["-15", "15", "0", "1"],
  "answer": 1
},
{
  "question": "string a=\"Salom \"; string b=\"Talabalar\"; cout<<a<<b; natija?",
  "options": ["Salom", "Talabalar", "Salom Talabalar", "Xato"],
  "answer": 2
},
{
  "question": "cout << \"Salom\" << endl; nima qiladi?",
  "options": ["Faqat chiqaradi", "Chiqarib yangi qatordan boshlaydi", "Kiritadi", "O‘chiradi"],
  "answer": 1
},
{
  "question": "\\t belgisi nima qiladi?",
  "options": ["Yangi qator", "Bo‘sh joy", "Tab bo‘shlig‘i", "O‘chirish"],
  "answer": 2
},
{
  "question": "float turi nimani bildiradi?",
  "options": ["Butun son", "Haqiqiy son", "Matn", "Mantiqiy"],
  "answer": 1
},
{
  "question": "int a=10; a=a+5; cout<<a; natija?",
  "options": ["10", "5", "15", "Xato"],
  "answer": 2
},
{
  "question": "Agar shart bajarilsa faqat bitta if yoziladi. Qaysi holat?",
  "options": ["Bitta shart bo‘lsa", "Ko‘p shart bo‘lsa", "Sikl bo‘lsa", "Switch bo‘lsa"],
  "answer": 0
},
{
  "question": "else qachon yoziladi?",
  "options": ["Har doim", "if bo‘lmasa", "if dan keyin", "switch da"],
  "answer": 2
},
{
  "question": "else if qanday holat uchun?",
  "options": ["Bitta shart", "Ko‘p shart", "Takrorlash", "Chiqarish"],
  "answer": 1
},
{
  "question": "switch qachon ishlatiladi?",
  "options": ["Ko‘p qiymatli tanlashda", "Takrorlashda", "Kiritishda", "Chiqarishda"],
  "answer": 0
},
{
  "question": "default bo‘limi qachon bajariladi?",
  "options": ["Har doim", "Case topilmasa", "Birinchi", "Oxirgi"],
  "answer": 1
},
{
  "question": "for siklida nechta qism bo‘ladi?",
  "options": ["1", "2", "3", "4"],
  "answer": 2
},
{
  "question": "while sikli qachon ishlaydi?",
  "options": ["Bir marta", "Shart true bo‘lsa", "Shart false bo‘lsa", "Har doim"],
  "answer": 1
}
,
{
  "question": "if (a > b) – bu qaysi turdagi operator?",
  "options": ["Arifmetik", "Taqqoslash", "Mantiqiy", "Bitli"],
  "answer": 1
},
{
  "question": "switch case matn (string) bilan ishlaydimi?",
  "options": ["Yo‘q", "Ha", "Faqat char bilan", "Faqat int bilan"],
  "answer": 1
},
{
  "question": "for (int i=1; i<=3; i++) nechta marta ishlaydi?",
  "options": ["2", "3", "4", "Cheksiz"],
  "answer": 1
},
{
  "question": "while siklida agar shart false bo‘lsa nima bo‘ladi?",
  "options": ["Bir marta ishlaydi", "Umuman ishlamaydi", "Xato beradi", "Cheksiz ishlaydi"],
  "answer": 1
},
{
  "question": "do while da agar shart false bo‘lsa nima bo‘ladi?",
  "options": ["Umuman ishlamaydi", "Kamida bir marta ishlaydi", "Xato bo‘ladi", "Cheksiz ishlaydi"],
  "answer": 1
},
{
  "question": "int a = 5; cout << a + 3; natija?",
  "options": ["5", "3", "8", "Xato"],
  "answer": 2
},
{
  "question": "string s = \"\"; bu nimani anglatadi?",
  "options": ["Null", "Bo‘sh string", "Xato", "Bitta belgi"],
  "answer": 1
},
{
  "question": "O‘zgaruvchi qiymatini o‘zgartirish qaysi operator bilan amalga oshiriladi?",
  "options": ["==", "=", "+=", "!="],
  "answer": 1
},
{
  "question": "C++ algoritmni tasvirlashda parallelogram nimani bildiradi?",
  "options": ["Boshlash/Tugatish", "Hisoblash", "Kiritish/Chiqarish", "Shart"],
  "answer": 2
},
{
  "question": "Shart blokida romb nimani bildiradi?",
  "options": ["Kiritish", "Hisoblash", "Shart", "Tugatish"],
  "answer": 2
},
{
  "question": "int a; bu nimani bildiradi?",
  "options": ["Funksiya", "O‘zgaruvchi e’loni", "Operator", "Kutubxona"],
  "answer": 1
},
{
  "question": "string familiya; – bu nima?",
  "options": ["Funksiya", "O‘zgaruvchi e’loni", "Kutubxona", "Sikl"],
  "answer": 1
},
{
  "question": "sqrt(25) natija?",
  "options": ["4", "5", "6", "25"],
  "answer": 1
},
{
  "question": "abs(0 - 7) natija?",
  "options": ["-7", "7", "0", "1"],
  "answer": 1
},
{
  "question": "string x=\"A\"; string y=\"B\"; cout << x + y; natija?",
  "options": ["A B", "AB", "A+B", "Xato"],
  "answer": 1
},
{
  "question": "cout << \"Salom\" << \"\\n\" << \"Dunyo\"; natija?",
  "options": ["SalomDunyo", "Salom Dunyo", "Salom\\nDunyo", "Ikki qatorda Salom va Dunyo"],
  "answer": 3
},
{
  "question": "string name = \"Ali\"; cout << name; natija?",
  "options": ["Ali", "name", "Xato", "Bo‘sh"],
  "answer": 0
},
{
  "question": "fabs(-12.5) natija?",
  "options": ["-12.5", "12.5", "0", "1"],
  "answer": 1
},
{
  "question": "abs(-7) natija?",
  "options": ["-7", "7", "0", "1"],
  "answer": 1
},
{
  "question": "pow(2, 3) natija?",
  "options": ["6", "8", "9", "4"],
  "answer": 1
},
{
  "question": "log(1) natija?",
  "options": ["0", "1", "10", "e"],
  "answer": 0
},
{
  "question": "log10(100) natija?",
  "options": ["1", "2", "10", "0"],
  "answer": 1
},
{
  "question": "exp(1) qaysi qiymatga teng?",
  "options": ["1", "2", "2.71 ga yaqin", "10"],
  "answer": 2
},
{
  "question": "int a=13, b=5; cout << a / b; natija?",
  "options": ["2.6", "2", "3", "Xato"],
  "answer": 1
},
{
  "question": "int a=13, b=5; cout << a % b; natija?",
  "options": ["1", "2", "3", "5"],
  "answer": 1
},
{
  "question": "int x=10; if(x > 5) cout << \"Katta\"; natija?",
  "options": ["Kichik", "Katta", "Xato", "Hech narsa chiqmaydi"],
  "answer": 1
},
{
  "question": "else qachon ishlaydi?",
  "options": ["if true bo‘lsa", "if false bo‘lsa", "Har doim", "Hech qachon"],
  "answer": 1
},
{
  "question": "else if nima uchun ishlatiladi?",
  "options": ["Bitta shart", "Bir nechta shartni tekshirish", "Takrorlash", "Chiqarish"],
  "answer": 1
},
{
  "question": "switch case qachon ishlatiladi?",
  "options": ["Ko‘p variantli tanlashda", "Takrorlashda", "Matn chiqarishda", "Kiritishda"],
  "answer": 0
},
{
  "question": "default case nima qiladi?",
  "options": ["Har doim bajariladi", "Hech qachon", "Mos case bo‘lmasa bajariladi", "Faqat birinchi"],
  "answer": 2
},
{
  "question": "for(int i=0; i<4; i++) nechta marta bajariladi?",
  "options": ["3", "4", "5", "Cheksiz"],
  "answer": 1
},
{
  "question": "while(x < 3) qachon bajariladi?",
  "options": ["x>=3 bo‘lsa", "x<3 bo‘lsa", "Har doim", "Bir marta"],
  "answer": 1
},
{
  "question": "do while(x<3) ning farqi nimada?",
  "options": ["Tez ishlaydi", "Kamida bir marta bajariladi", "Faqat false bo‘lsa", "Xato beradi"],
  "answer": 1
},
{
  "question": "string matnni qanday chiqarish mumkin?",
  "options": ["cin bilan", "cout bilan", "scanf bilan", "printf bilan"],
  "answer": 1
},
{
  "question": "int a = -9; cout << fabs(a); natija?",
  "options": ["-9", "9", "0", "Xato"],
  "answer": 1
},
{
  "question": "int a = -9; cout << abs(a); natija?",
  "options": ["-9", "9", "0", "Xato"],
  "answer": 1
},
{
  "question": "pow(3, 2) natija?",
  "options": ["6", "9", "3", "12"],
  "answer": 1
},
{
  "question": "log(10) qaysi qiymatga yaqin?",
  "options": ["1", "2", "2.3 ga yaqin", "10"],
  "answer": 2
},
{
  "question": "log10(1000) natija?",
  "options": ["2", "3", "10", "0"],
  "answer": 1
},
{
  "question": "exp(2) qaysi qiymatga yaqin?",
  "options": ["4", "7.39 ga yaqin", "10", "2"],
  "answer": 1
},
{
  "question": "int a=17,b=3; cout << a / b; natija?",
  "options": ["5.6", "5", "6", "Xato"],
  "answer": 1
},
{
  "question": "int a=17,b=3; cout << a % b; natija?",
  "options": ["1", "2", "3", "5"],
  "answer": 1
},
{
  "question": "int x=10; if(x>5) cout<<\"A\"; else cout<<\"B\"; natija?",
  "options": ["A", "B", "AB", "Hech narsa"],
  "answer": 0
},
{
  "question": "if/else mantiqi to‘g‘rimi? if(x>10) ... else if(x>5) ... else ...",
  "options": ["Yo‘q", "Ha", "Faqat int uchun", "Faqat string uchun"],
  "answer": 1
},
{
  "question": "switch(int x) case 1: cout<<\"A\"; break; case 2: ...; default: ...; nimani bildiradi?",
  "options": ["Sikl", "Ko‘p tanlovli shart", "Funksiya", "Massiv"],
  "answer": 1
}
,
{
  "question": "string s = \"\"; bu nimani bildiradi?",
  "options": ["Null", "Bo‘sh string", "Xato", "Bitta belgi"],
  "answer": 1
},
{
  "question": "int a = 5; a = a + 2; cout << a; natija?",
  "options": ["5", "7", "2", "Xato"],
  "answer": 1
},
{
  "question": "string matn = \"Salom\"; cout << matn + \" dunyo\"; natija?",
  "options": ["Salom", "dunyo", "Salom dunyo", "Xato"],
  "answer": 2
},
{
  "question": "int a=4,b=2; cout << a/b; natija?",
  "options": ["1", "2", "4", "Xato"],
  "answer": 1
},
{
  "question": "int a=5,b=2; cout << a%b; natija?",
  "options": ["1", "2", "2.5", "0"],
  "answer": 0
},
{
  "question": "if(x==10) – bu qaysi turdagi operator?",
  "options": ["Tayinlash", "Taqqoslash", "Arifmetik", "Mantiqiy"],
  "answer": 1
},
{
  "question": "string name; name=\"Ali\"; cout << name; natija?",
  "options": ["Ali", "name", "Xato", "Bo‘sh"],
  "answer": 0
},
{
  "question": "log(100) qaysi qiymatga yaqin?",
  "options": ["1", "2", "4.6 ga yaqin", "10"],
  "answer": 2
},
{
  "question": "log10(100) natija?",
  "options": ["1", "2", "10", "0"],
  "answer": 1
},
{
  "question": "exp(0) natija?",
  "options": ["0", "1", "e", "Xato"],
  "answer": 1
},
{
  "question": "int a=12,b=4; cout << a/b; natija?",
  "options": ["2", "3", "4", "Xato"],
  "answer": 1
},
{
  "question": "int a=12,b=4; cout << a%b; natija?",
  "options": ["0", "1", "2", "4"],
  "answer": 0
},
{
  "question": "string x=\"A\", y=\"B\"; cout << x+y; natija?",
  "options": ["A B", "AB", "A+B", "Xato"],
  "answer": 1
},
{
  "question": "int x=7; if(x>5) cout<<\"Katta\"; else cout<<\"Kichik\"; natija?",
  "options": ["Kichik", "Katta", "Xato", "Hech narsa"],
  "answer": 1
},
{
  "question": "for(int i=0;i<3;i++) cout<<i; natija?",
  "options": ["012", "123", "01", "Xato"],
  "answer": 0
},
{
  "question": "while(int i=0;i<3) {} – xato sababi?",
  "options": ["Sintaksis xato", "i e’lon qilinmagan", "while shartida e’lon bo‘lmaydi", "Har doim true"],
  "answer": 2
},
{
  "question": "do { cout<<\"Hi\"; } while(false); nechta marta bajariladi?",
  "options": ["0", "1", "Cheksiz", "2"],
  "answer": 1
},
{
  "question": "Algoritmning xususiyatlari qaysilar?",
  "options": ["Aniqlik, tugallanganlik", "Faqat tezlik", "Faqat soddalik", "Grafik"],
  "answer": 0
},
{
  "question": "string s = \"Dunyo\"; cout << s; natija?",
  "options": ["Dunyo", "s", "Xato", "Bo‘sh"],
  "answer": 0
},
{
  "question": "abs(-25) natija?",
  "options": ["-25", "25", "0", "1"],
  "answer": 1
},
{
  "question": "fabs(-3.14) natija?",
  "options": ["-3.14", "3.14", "0", "1"],
  "answer": 1
},
{
  "question": "pow(5,2) natija?",
  "options": ["10", "25", "5", "15"],
  "answer": 1
},
{
  "question": "log(1) natija?",
  "options": ["0", "1", "10", "e"],
  "answer": 0
},
{
  "question": "int a = 20, b = 6; cout << a / b; natija?",
  "options": ["3", "3.3", "4", "Xato"],
  "answer": 0
},
{
  "question": "int a = 20, b = 6; cout << a % b; natija?",
  "options": ["2", "3", "4", "6"],
  "answer": 0
},
{
  "question": "int x = 8; if(x<10) cout << \"Kichik\"; natija?",
  "options": ["Katta", "Kichik", "Xato", "Hech narsa"],
  "answer": 1
},
{
  "question": "else operatori nima vazifa bajaradi?",
  "options": ["Shartni tekshiradi", "Muqobil bajariladi", "Takrorlaydi", "To‘xtatadi"],
  "answer": 1
},
{
  "question": "else if nima uchun ishlatiladi?",
  "options": ["Bitta shart", "Bir nechta shartni tekshirish", "Takrorlash", "Chiqarish"],
  "answer": 1
},
{
  "question": "switch case qachon ishlatiladi?",
  "options": ["Ko‘p variantli tanlashda", "Takrorlashda", "Matn chiqarishda", "Kiritishda"],
  "answer": 0
},
{
  "question": "default case nima qiladi?",
  "options": ["Har doim bajariladi", "Mos case bo‘lmasa bajariladi", "Faqat birinchi", "Hech qachon"],
  "answer": 1
},
{
  "question": "for(int i=1;i<=5;i++) nechta marta bajariladi?",
  "options": ["4", "5", "6", "Cheksiz"],
  "answer": 1
},
{
  "question": "while(x>0) {} qachon ishlaydi?",
  "options": ["x<=0 bo‘lsa", "x>0 bo‘lsa", "Har doim", "Bir marta"],
  "answer": 1
},
{
  "question": "do while(x>0) ning farqi nimada?",
  "options": ["Tez ishlaydi", "Kamida bir marta bajariladi", "Faqat true bo‘lsa", "Xato beradi"],
  "answer": 1
},
{
  "question": "string matnni chiqarish operatori qaysi?",
  "options": ["cin", "cout", "scanf", "printf"],
  "answer": 1
},
{
  "question": "int a=-15; cout << fabs(a); natija?",
  "options": ["-15", "15", "0", "Xato"],
  "answer": 1
},
{
  "question": "int a=-15; cout << abs(a); natija?",
  "options": ["-15", "15", "0", "Xato"],
  "answer": 1
},
{
  "question": "pow(2,5) natija?",
  "options": ["10", "25", "32", "16"],
  "answer": 2
},
{
  "question": "log(10) qiymati qaysi?",
  "options": ["1", "2", "2.3 ga yaqin", "10"],
  "answer": 2
},
{
  "question": "int a=9,b=4; cout << a/b; natija?",
  "options": ["2", "2.25", "3", "Xato"],
  "answer": 0
},
{
  "question": "int a=9,b=4; cout << a%b; natija?",
  "options": ["1", "2", "3", "4"],
  "answer": 1
},
{
  "question": "int x=5; if(x>10) cout<<\"A\"; else cout<<\"B\"; natija?",
  "options": ["A", "B", "AB", "Hech narsa"],
  "answer": 1
},
{
  "question": "if/else if/else mantiqi to‘g‘rimi?",
  "options": ["Yo‘q", "Ha", "Faqat int uchun", "Faqat string uchun"],
  "answer": 1
},
{
  "question": "switch(x) case 1: ... break; case 2: ... break; default: ... – vazifasi?",
  "options": ["Sikl", "Ko‘p tanlovli shart", "Funksiya", "Massiv"],
  "answer": 1
}
,
{
  "question": "int a=15,b=6; cout << a / b; natija?",
  "options": ["2", "2.5", "3", "Xato"],
  "answer": 0
},
{
  "question": "int a=15,b=6; cout << a % b; natija?",
  "options": ["1", "2", "3", "6"],
  "answer": 2
},
{
  "question": "string x=\"A\", y=\"C\"; cout << x+y; natija?",
  "options": ["A C", "AC", "A+C", "Xato"],
  "answer": 1
},
{
  "question": "int x=9; if(x>7) cout<<\"Yes\"; else cout<<\"No\"; natija?",
  "options": ["Yes", "No", "YesNo", "Hech narsa"],
  "answer": 0
},
{
  "question": "for(int i=0;i<2;i++) cout<<i; natija?",
  "options": ["01", "12", "1", "Xato"],
  "answer": 0
},
{
  "question": "while(int i=0;i<2) {} – xato sababi?",
  "options": ["Sintaksis xato", "Shart noto‘g‘ri", "while ichida e’lon bo‘lmaydi", "Cheksiz sikl"],
  "answer": 2
},
{
  "question": "do { cout<<\"Hi\"; } while(false); nechta marta bajariladi?",
  "options": ["0", "1", "Cheksiz", "2"],
  "answer": 1
},
{
  "question": "Algoritm xususiyati qaysi?",
  "options": ["Aniqlik va tugallanganlik", "Faqat tezlik", "Faqat grafik", "Faqat kod"],
  "answer": 0
},
{
  "question": "string s=\"Salom\"; cout << s; natija?",
  "options": ["Salom", "s", "Xato", "Bo‘sh"],
  "answer": 0
},
{
  "question": "abs(-100) natija?",
  "options": ["-100", "100", "0", "1"],
  "answer": 1
},
{
  "question": "fabs(-0.99) natija?",
  "options": ["-0.99", "0.99", "0", "1"],
  "answer": 1
},
{
  "question": "pow(3,3) natija?",
  "options": ["6", "9", "27", "81"],
  "answer": 2
},
{
  "question": "log(10) qaysi qiymatga yaqin?",
  "options": ["1", "2", "2.3 ga yaqin", "10"],
  "answer": 2
},
{
  "question": "int a=25,b=4; cout << a / b; natija?",
  "options": ["6", "6.25", "7", "Xato"],
  "answer": 0
},
{
  "question": "int a=25,b=4; cout << a % b; natija?",
  "options": ["1", "2", "3", "4"],
  "answer": 0
},
{
  "question": "int x=12; if(x>10) cout<<\"Katta\"; natija?",
  "options": ["Kichik", "Katta", "Xato", "Hech narsa"],
  "answer": 1
},
{
  "question": "else operatori qachon ishlaydi?",
  "options": ["if true bo‘lsa", "if false bo‘lsa", "Har doim", "Hech qachon"],
  "answer": 1
},
{
  "question": "else if nima uchun ishlatiladi?",
  "options": ["Bitta shart", "Bir nechta shartni tekshirish", "Takrorlash", "Chiqarish"],
  "answer": 1
},
{
  "question": "switch case qachon ishlatiladi?",
  "options": ["Ko‘p variantli tanlashda", "Takrorlashda", "Matn chiqarishda", "Kiritishda"],
  "answer": 0
},
{
  "question": "default case vazifasi nima?",
  "options": ["Har doim bajariladi", "Mos case bo‘lmasa bajariladi", "Faqat birinchi", "Hech qachon"],
  "answer": 1
},
{
  "question": "for(int i=0;i<6;i++) nechta marta bajariladi?",
  "options": ["5", "6", "7", "Cheksiz"],
  "answer": 1
},
{
  "question": "while(x<5) {} qachon bajariladi?",
  "options": ["x>=5 bo‘lsa", "x<5 bo‘lsa", "Har doim", "Bir marta"],
  "answer": 1
},
{
  "question": "do while(x<5) ning farqi nimada?",
  "options": ["Tez ishlaydi", "Kamida bir marta bajariladi", "Faqat false bo‘lsa", "Xato beradi"],
  "answer": 1
},
{
  "question": "string matnni chiqarish operatori qaysi?",
  "options": ["cin", "cout", "scanf", "printf"],
  "answer": 1
},
{
  "question": "int a=-50; cout << fabs(a); natija?",
  "options": ["-50", "50", "0", "Xato"],
  "answer": 1
},
{
  "question": "int a=-50; cout << abs(a); natija?",
  "options": ["-50", "50", "0", "Xato"],
  "answer": 1
},
{
  "question": "pow(4,2) natija?",
  "options": ["8", "12", "16", "4"],
  "answer": 2
},
{
  "question": "int a=18,b=5; cout << a / b; natija?",
  "options": ["3", "3.6", "4", "Xato"],
  "answer": 0
},
{
  "question": "int a=18,b=5; cout << a % b; natija?",
  "options": ["1", "2", "3", "5"],
  "answer": 2
},
{
  "question": "if(x>5) cout<<\"Ha\"; else cout<<\"Yo‘q\"; x=4; natija?",
  "options": ["Ha", "Yo‘q", "HaYo‘q", "Hech narsa"],
  "answer": 1
},
{
  "question": "if/else if/else mantiqi to‘g‘rimi?",
  "options": ["Yo‘q", "Ha", "Faqat int uchun", "Faqat string uchun"],
  "answer": 1
},
{
  "question": "switch(x) case 1: … break; case 2: … break; default: … – vazifasi?",
  "options": ["Sikl", "Ko‘p tanlovli shart", "Funksiya", "Massiv"],
  "answer": 1
},
{
  "question": "string s=\"\"; bu nimani bildiradi?",
  "options": ["Null", "Bo‘sh string", "Xato", "Bitta belgi"],
  "answer": 1
},
{
  "question": "int a=5; a=a+7; cout << a; natija?",
  "options": ["5", "7", "12", "Xato"],
  "answer": 2
},
{
  "question": "string x=\"Hello\"; cout << x+\" World\"; natija?",
  "options": ["Hello", "World", "Hello World", "Xato"],
  "answer": 2
},
{
  "question": "int a=10,b=2; cout << a / b; natija?",
  "options": ["2", "5", "10", "Xato"],
  "answer": 1
},
{
  "question": "int a=10,b=3; cout << a % b; natija?",
  "options": ["1", "2", "3", "0"],
  "answer": 1
},
{
  "question": "if(x==7) – bu qaysi turdagi operator?",
  "options": ["Tayinlash", "Taqqoslash", "Arifmetik", "Mantiqiy"],
  "answer": 1
},
{
  "question": "string name; name=\"Olim\"; cout << name; natija?",
  "options": ["Olim", "name", "Xato", "Bo‘sh"],
  "answer": 0
},
{
  "question": "int a=20,b=4; cout << a / b; natija?",
  "options": ["4", "5", "6", "Xato"],
  "answer": 1
},
{
  "question": "int a=20,b=4; cout << a % b; natija?",
  "options": ["0", "2", "4", "5"],
  "answer": 0
},
{
  "question": "string x=\"X\", y=\"Y\"; cout << x+y; natija?",
  "options": ["X Y", "XY", "X+Y", "Xato"],
  "answer": 1
},
{
  "question": "int x=8; if(x>5) cout<<\"Yes\"; else cout<<\"No\"; natija?",
  "options": ["Yes", "No", "YesNo", "Hech narsa"],
  "answer": 0
},
{
  "question": "for(int i=0;i<4;i++) cout<<i; natija?",
  "options": ["0123", "1234", "01", "Xato"],
  "answer": 0
},
{
  "question": "while(int i=0;i<3) {} – xato sababi?",
  "options": ["Sintaksis xato", "i e’lon qilinmagan", "while ichida e’lon bo‘lmaydi", "Cheksiz sikl"],
  "answer": 2
},
{
  "question": "do { cout<<\"Hi\"; } while(false); nechta marta bajariladi?",
  "options": ["0", "1", "2", "Cheksiz"],
  "answer": 1
},
{
  "question": "Algoritm xususiyati qaysi?",
  "options": ["Aniqlik va tugallanganlik", "Faqat tezlik", "Faqat grafik", "Faqat kod"],
  "answer": 0
}
];
