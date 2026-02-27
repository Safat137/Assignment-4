Answers to Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById দিয়ে একটি নির্দিষ্ট id এর একটি এলিমেন্ট পাওয়া যায়।
getElementsByClassName দিয়ে একই class এর একাধিক এলিমেন্ট পাওয়া যায়।
querySelector দিয়ে CSS selector ব্যবহার করে প্রথম মিল পাওয়া এলিমেন্ট পাওয়া যায়।
querySelectorAll দিয়ে CSS selector ব্যবহার করে সব মিল পাওয়া এলিমেন্ট পাওয়া যায়।

2. How do you create and insert a new element into the DOM?

Answer:

let p = document.createElement("p");
p.innerText = "Hi! Iam Safat";
document.body.appendChild(p);

প্রথমে createElement দিয়ে নতুন এলিমেন্ট তৈরি করি।
তারপর ভিতরে লেখা দেই।
শেষে appendChild দিয়ে DOM এ যুক্ত করি।

3. What is Event Bubbling? And how does it work?

Answer:
Event Bubbling মানে ইভেন্ট আগে চাইল্ড এলিমেন্টে হয়, তারপর ধীরে ধীরে প্যারেন্ট এলিমেন্টে যায়।
যেমন button এ click করলে ইভেন্ট div এবং body তেও যায়।

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event Delegation মানে প্যারেন্ট এলিমেন্টে ইভেন্ট বসানো, যাতে তার চাইল্ড গুলোর ইভেন্টও কাজ করে।
এতে আলাদা করে প্রতিটি চাইল্ডে ইভেন্ট দিতে হয় না।

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() ব্রাউজারের ডিফল্ট কাজ বন্ধ করে।
stopPropagation() ইভেন্ট প্যারেন্টে যাওয়া বন্ধ করে।
