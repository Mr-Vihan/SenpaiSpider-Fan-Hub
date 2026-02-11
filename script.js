const fanPages = [
  {
    name: "not.senpai__",
    desc: "Fan of the dude who usually plays the villain🗿 | He followed on: 23/06/2025",
    insta: "https://www.instagram.com/not.senpai__/",
    yt: "https://www.youtube.com/@not.senpai__instagram",
    site: "#"
  },
  {
    name: "senpaispider.ft",
    desc: "🇮🇳 Official Deewane of Senpaispider | 😂 Minecraft funny memes/edits",
    insta: "https://www.instagram.com/senpaispider.ft/",
    yt: "https://www.youtube.com/@SenpaiSpider_ft",
    site: "#"
  },
  {
    name: "_.not._.senpai._",
    desc: "🕷️This page is for only senpaispider | 🕸️senpai followed on 8/7/2024",
    insta: "https://instagram.com/_.not._.senpai._/",
    yt: "https://www.youtube.com/@not._.senpai_fr",
    site: "#"
  },
  {
    name: "senpai.originals",
    desc: "Truly Obsessed with Senpai Spider | Waiting For His Follow Back ✨",
    insta: "https://www.instagram.com/senpai.originals/",
    yt: "https://www.youtube.com/@senpai.originals",
    site: "#"
  },
  {
    name: "sanpai.ft",
    desc: "Hindu🚩West bangal✨ | ⚡ Just a fan turning moments into magic",
    insta: "https://www.instagram.com/sanpai.ft/",
    yt: "https://www.youtube.com/@sanpai.ft_instagram",
    site: "#"
  },
    {
    name: "_not_senpaispidey",
    desc: "📈 Road to 500 followers | ✨ Not just a fan, it's an emotion.",
    insta: "https://www.instagram.com/_not_senpaispidey/",
    yt: "https://www.youtube.com/@notysenpai",
    site: "#"
  },
   {
    name: "not_senpaispider",
    desc: "Hindu🚩Maratha✨ | Just senpai spider fanboy💫 | Got followed by him- 25/2/25",
    insta: "https://www.instagram.com/not_senpaispider/",
    yt: "",
    site: "#"
  },
  {
    name: "senpai_fanpg",
    desc: "ONLY FOR SENPAISPIDER 🫶🏻❤️🔥 | ONLY FOR MAKDI GANG 🕸️🕷️",
    insta: "https://www.instagram.com/senpai_fanpg/",
    yt: "",
    site: "#"
  },
  {
    name: "_.chaos._.spidey._",
    desc: "Dedicated Senpai Spider FP 🕷️🌑 | 𝓛𝓸𝓼𝓽 𝓲𝓷 𝓽𝓱𝓮 𝔀𝓮𝓫 🕸️🌪️",
    insta: "https://www.instagram.com/_.chaos_.spidey/",
    yt: "",
    site: "#"
  },
  {
    name: "senpai_makda_op",
    desc: "Makdi gang member 🕸️🕷️ | FP OF Senpaispider | DM me for paid editing💲",
    insta: "https://www.instagram.com/senpai_makda_op/",
    yt: "",
    site: "#"
  }
];

const grid = document.getElementById("fanGrid");

fanPages.forEach((fan, index) => {
  const card = document.createElement("div");
  card.className = "card";

  if (index === 0) card.classList.add("gold");
  if (index === 1) card.classList.add("silver");
  if (index === 2) card.classList.add("bronze");

  // 👇 YouTube section (real logo)
let ytHTML = fan.yt
  ? `<a href="${fan.yt}" target="_blank" class="icon-link">
       <i class="fa-brands fa-youtube"></i> YouTube
     </a>`
  : `<span class="no-link">
       <i class="fa-brands fa-youtube"></i> No YouTube
     </span>`;


  card.innerHTML = `
    <div class="rank">#${index + 1}</div>
    <h2>${fan.name}</h2>
    <p>${fan.desc}</p>

    <div class="links">
      <a href="${fan.insta}" target="_blank" class="icon-link">
  <i class="fa-brands fa-instagram"></i> Instagram
</a>

      ${ytHTML}
    </div>

  `;

  grid.appendChild(card);
});
