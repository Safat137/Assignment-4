getElementById – এটা একটা আইডি ধরে এলিমেন্ট নিয়ে আসে।
getElementsByClassName – এটা একটা ক্লাস দিয়ে সব এলিমেন্ট নিয়ে আসে।
querySelector / querySelectorAll – এটা সিলেক্টর দিয়ে এলিমেন্ট নেয়ার জন্য। querySelector একটাই দেয়, querySelectorAll সব দেয়।

নতুন এলিমেন্ট তৈরি এবং DOM-এ ঢুকানো:

let div = document.createElement('div');
div.innerText = 'Hello';
document.body.appendChild(div);

Event Bubbling – একটা ইভেন্ট আগে চাইল্ডে হয়, পরে প্যারেন্টে চলে। যেমন, button click হলে button → div → body তে যায়।

Event Delegation – প্যারেন্ট এড করে ইভেন্ট হ্যান্ডলার রাখে। সুবিধা: অনেক চাইল্ডের জন্য আলাদা হ্যান্ডলার লাগে না।

preventDefault() – ব্রাউজারের ডিফল্ট কাজ বন্ধ করে।
stopPropagation() – ইভেন্ট প্যারেন্টে যাওয়া বন্ধ করে।
