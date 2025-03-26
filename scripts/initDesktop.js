const { mkdirSync, writeFileSync, existsSync } = require("fs");
const { join } = require("path");

const PUBLIC_DIR = "public";
const HOME = "/Users/Public";
const DESKTOP_PATH = `${HOME}/Desktop`;

// Create blog directory
const blogDir = join(PUBLIC_DIR, `${DESKTOP_PATH}/blog`);
if (!existsSync(blogDir)) {
  mkdirSync(blogDir, { recursive: true });
}

// Create blog images directory
const blogImagesDir = join(PUBLIC_DIR, `/Users/Public/Pictures/blog`);
if (!existsSync(blogImagesDir)) {
  mkdirSync(blogImagesDir, { recursive: true });
}

// Create Who am I.whtml file
const content = `<!DOCTYPE html>
<html>
<body>
  <h1>Who am I</h1>
  <div class="content">
    <div class="text-content">
      <p>I am Xi Gu, a software engineer and a boardgame enthusiast living in Richmond, Canada. Coding is somehow pretty similar to playing boardgames. You have to think about the rules, the strategy, the tactics, and the luck. It's like a journey of discovery. I am always exploring.</p>
      <p>It's been a long time since I created another new website last time. No burden, no pressure, just for fun.</p>
      <p>This personal website is based on the open-sourced project "DaedalOS" of Mr. Dustin Brett, a Vancouver-based software engineer. All the credits go to him.</p>
    </div>
    <img src="/Users/Public/Pictures/blog/1.jpg" alt="Happy kids">
  </div>
</body>
</html>`;

writeFileSync(join(blogDir, "Who am I.whtml"), content);
