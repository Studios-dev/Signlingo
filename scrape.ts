import { DOMParser } from "jsr:@b-fuze/deno-dom";

const pages = 58;
const urls = new Array(pages).fill(crypto.randomUUID()).map((_, i) =>
  `https://www.aslbloom.com/asl-dictionary?4dee4ce7_page=${i + 1}`
);

let urlsMap: Record<string, string> = {};

try {
	urlsMap = JSON.parse(await Deno.readTextFile("urls.json"));
} catch {
	  // Ignore
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

for (const url of urls) {
  const html = await fetch(url).then((res) => res.text());
  const parsed = new DOMParser().parseFromString(html, "text/html");
  const elements = parsed.querySelectorAll(".glossary-item.w-dyn-item>a");

  for (const element of elements as unknown as HTMLAnchorElement[]) {
    const name = element.innerText;
    const href = element.getAttribute("href");
    if (!href) {
      console.log(`No href found for ${name}`);
      continue;
    }
    console.log(`Found: ${name} - ${href}`);

    if (urlsMap[name]) continue;

    const fetched = await fetch(`https://www.aslbloom.com${href}`).then((res) =>
      res.text()
    );
    const parsed = new DOMParser().parseFromString(fetched, "text/html");
    const video = Array.from(parsed.querySelectorAll("video[src]"))
      .filter((video) => video.getAttribute("src")?.trim())[0];

    if (!video) {
      console.log(`No video found for ${name}`);
      continue;
    }

    const src = video.getAttribute("src");
    if (!src) {
      console.log(`No src found for ${name}`);
      await sleep(500 + 1000 * Math.random());
      continue;
    }

    urlsMap[name] = src;

    console.log(`Found video for ${name}: ${src}`);

    await Deno.writeTextFile("urls.json", JSON.stringify(urlsMap, null, 2));
	await sleep(500 + 1000 * Math.random());
  }
  console.log(`Finished page ${url}`);
}
