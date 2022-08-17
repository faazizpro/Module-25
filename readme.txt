This is Module 25
We can add event handler in many ways. Most common way is to add onclick in a button. 
Option 1: Use onclick in button tag.
<button onclick="document.body.style.backgroundColor='white' ">Make White</button>

Option 2: Call Function Name in the onclick into the button tag:
Create a function and call the function name in the onlcick. Here's an example:
Ex 1:
<button onclick="makeAqua()">Make Aqua</button>
<script>
    function makeAqua(){
        document.body.style.backgroundColor = '#8FE3CF';
    }
</script>

Ex:2
<button onclick="makeAzure">Make Azure</button>
<script>
    function makeAzure(){
        document.body.style.backgroundColor = '#0096FF'
    }
</script>

Option 3: 
প্রথমে বাটনে একটা আইডি দিতে হবে, স্ক্রিপ্ট এ একটা ভেরিএবল এ আইডি কল করতে হবে গেট এলিমেন্ট বাই আইডি দিয়ে।
এরপর সেই ভেরিয়েবল এর মধ্যে অন ক্লিক দিয়ে চাইলে সেখানে একটা ফাংশন লেখা যায় অথবা কোন ফাংশন কল করা যায়। 
*অন ক্লিক এর মধ্যে সেট করার সময় ফাংশন এর নাম লিখতে হবে কিন্তু ফাংশন কল করা যাবে না।
প্রশ্নঃ কল করে দিলে কেন কালার সেট হয়ে যায়?

Example: 
<button id="make-periwinkle-blue">Make Periwinkle Blue</button>

<script>
    const makeBlueButton = document.getElementById('make-periwinkle-blue');
    makeBlueButton.onclick = makeBlue;

    function makeBlue(){
        document.body.style.backgroundColor = '#9C9EFE';
    }
</script>

আরেকটা অপশন হলো স্ক্রিপ্ট ট্যাগ এর মধ্যে অন ক্লিক এর মধ্যে ডিরেক্ট ফাংশন লিখে ইভেন হ্যান্ডেল করা যাবে।
Example:
    <button id="make-barley-white">Make Barley White</button>

    <script>
        const makeBarleyWhite = document.getElementById('make-barley-white');
        makeBarleyWhite.onclick = function barleyWhite(){
            document.body.style.backgroundColor = '#FFF4CF';
    }

Option 4: addEventListeners
স্ক্রিপ্ট এ একটা ভেরিএবল নিয়ে সেটার মধ্যে আইডি কল করতে হব। এর পর ভেরিয়েবল এর সাথে addEventListeners অ্যাড করে কাজ করতে হবে।

Examples:
//Option 4: 
const greenButton = document.getElementById('make-paris-green');
greenButton.addEventListener('click', makeGreen)

function makeGreen(){
    document.body.style.backgroundColor = '#59CE8F'
}

// Option 4: Another
const makeMint = document.getElementById('make-snowy-mint');
makeMint.addEventListener('click', function mintButton(){
    document.body.style.backgroundColor = '#CFFFDC';
})

//Option 4: Final
document.getElementById('make-rose-pink').addEventListener('click', function(){
    document.body.style.backgroundColor = '#FF8882';
})

=====================================================================================
Module 25-6: Simple github like delete confirmation button
1. mouseenter
2. mousemove
3. focus
4. blur
5. keydown
6. keyup