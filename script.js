const profile = {
  photo: "images/profile.jpg",          // your picture (square-ish works best)
  background: "images/background.jpg",  // optional background image
  name: "Bazin Melesse",
  title: "Full-stack Developer",
  bio: "I design and build beautiful, functional web experiences. Specializing in React, Node.js, and cloud infrastructure.",
  email: "you@example.com",
  links: { github: "https://github.com/yourname", linkedin: "https://linkedin.com/in/yourname" },
  projects: [
    { title: "SaaS Platform", desc: "A complete SaaS application with authentication, payments, and real-time features.", links: { live: "#", code: "#" } },
    { title: "Design System", desc: "Reusable component library that powers multiple products.", links: { code: "#" } },
    { title: "CLI Tool", desc: "Command-line tool that automates deployment workflows.", links: { code: "#" } }
  ],
  expertise: [
    { title: "Frontend", skills: "React, TypeScript, Tailwind, Next.js" },
    { title: "Backend", skills: "Node.js, Express, GraphQL, REST APIs" },
    { title: "Database", skills: "PostgreSQL, MongoDB, Redis" },
    { title: "DevOps", skills: "Docker, AWS, GitHub Actions, CI/CD" }
  ]
};

const $ = id => document.getElementById(id);
document.title = `${profile.name} | Developer`;

$("name").textContent = profile.name;
$("title").textContent = profile.title;
$("bio").textContent = profile.bio;

$("header-cta").innerHTML = `<a href="mailto:${profile.email}">Get in touch</a>`;

$("projects").innerHTML = profile.projects.map(p =>
  `<div class="card">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="card-links">
      ${p.links.live ? `<a href="${p.links.live}">Live Demo</a>` : ""}
      ${p.links.code ? `<a href="${p.links.code}">Source Code</a>` : ""}
    </div>
  </div>`
).join("");

$("expertise").innerHTML = profile.expertise.map(e =>
  `<div class="expertise-card">
    <h4>${e.title}</h4>
    <p>${e.skills}</p>
  </div>`
).join("");

$("contact-link").href = `mailto:${profile.email}`;
$("contact-link").textContent = `Let's talk: ${profile.email}`;

$("footer").textContent = `© ${new Date().getFullYear()} ${profile.name}. Crafted with passion.`;

/* ---- Images ----
   Put your files in the images/ folder next to this page, then set the paths
   in `profile` above. If a file is missing, that image is simply skipped. */
function loadImage(src, onOk){
  if (!src) return;
  const img = new Image();
  img.onload = () => onOk(src);
  img.src = src;
}
loadImage(profile.photo, src => {
  const p = $("photo");
  p.src = src;
  p.alt = `Portrait of ${profile.name}`;
  p.hidden = false;
});
loadImage(profile.background, src => {
  document.documentElement.style.setProperty("--bg-image", `url("${src}")`);
  document.documentElement.classList.add("has-bg");
});
