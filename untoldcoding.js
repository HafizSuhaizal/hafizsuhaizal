const text =
  "<h1>Assalamualaikum,</h1><p>This may feel sudden, but I've finally found the courage to be honest with you. I have feelings for you. Even when you were with others before, I kept waiting for the right moment to say this, because I was afraid I'd have to see someone else win again if I didn't speak up. I value our friendship deeply, and that's why I've been shy, because I never want to risk losing it.</p><p>After making istikharah, my heart feels at peace that you might be the right person for me. I know this is sudden, but please believe me, I never had the courage to say it whenever we met. If I don't speak now, I'm afraid I might lose something precious. If you're not comfortable with this, it's okay, I'm sorry for the suddenness. I waited because I didn't want to disturb your focus, your career, your studies, or make you feel like you had to commit to constant updates every day. But now that we're reaching the end of our studies (maybe it's just me, we don't really know what comes next :)), this feels like the right time to be honest. I'll accept whatever your answer is. Don't worry about me, you have every right to choose what's best for you.</p><p>I also wanted to tell you this now because it feels like the right time. I don't expect anything from you, so please don't feel pressured. I'm willing to wait until you're ready, even until we're 27, like I said before :). If you already have someone in your heart, I'll accept that and keep going, no worries.</p><p>Thank you for always being there and for the time we've shared. I hope to be with someone who understands me, would be my travel partner, and can accept my clinginess. Whatever your answer is, thank you for reading. This might be a bit cringe, but if you have someone else, I'll step back gracefully and wish you the best in everything you do. Please don't cut the friendship, just act normally :) I'm a little shy right now. Bye.</p>";

const paragraph = text.split("");

let i = 0;
let isTypingComplete = false;

function dashOut(arr) {
  if (i < arr.length && !isTypingComplete) {
    console.log(arr[i]);
    
    // Handle HTML tags properly
    if (arr[i] === '<') {
      // Find the complete HTML tag
      let tag = '';
      let j = i;
      while (j < arr.length && arr[j] !== '>') {
        tag += arr[j];
        j++;
      }
      if (j < arr.length) {
        tag += arr[j];
        document.querySelector(".textCont").innerHTML += tag;
        i = j;
      }
    } else {
      document.querySelector(".textCont").textContent += arr[i];
    }

    i++;
    console.log("The i count: " + i);
    
    // Check if typing is complete
    if (i >= arr.length) {
      isTypingComplete = true;
      console.log("Typing animation complete!");
      return; // Stop the animation
    }
    
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  isTypingComplete = false;
  document.querySelector(".textCont").innerHTML = ""; // Clear previous content
  dashOut(paragraph);
}

startFromBegin();
