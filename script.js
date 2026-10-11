/* Configure these values before publishing. */
const ETHEREAL_CONFIG = {
  // Example: "https://www.youtube.com/embed/VIDEO_ID"
  demoVideoEmbedUrl: "",
  // Public safe demo URL only; never use localhost or a private LAN IP.
  liveSystemUrl: "",
  // Example: "mailto:your-team@example.com"
  contactUrl: ""
};
document.getElementById("year").textContent = new Date().getFullYear();
const menu = document.getElementById("menu"), nav = document.getElementById("nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
if (ETHEREAL_CONFIG.demoVideoEmbedUrl.trim()) {
  const frame = document.createElement("iframe");
  frame.src = ETHEREAL_CONFIG.demoVideoEmbedUrl;
  frame.title = "Ethereal Smart Vital Signs Kiosk demo video";
  frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  frame.allowFullscreen = true;
  frame.loading = "lazy";
  frame.referrerPolicy = "strict-origin-when-cross-origin";
  frame.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:0";
  document.getElementById("video").replaceChildren(frame);
}
document.getElementById("liveLink").addEventListener("click", e => {
  if (ETHEREAL_CONFIG.liveSystemUrl.trim()) {
    e.currentTarget.href = ETHEREAL_CONFIG.liveSystemUrl;
    e.currentTarget.target = "_blank";
    e.currentTarget.rel = "noopener noreferrer";
  } else {
    e.preventDefault();
    alert("Live system link is not configured. Add a safe public demo URL in script.js before publishing.");
  }
});
document.getElementById("emailLink").addEventListener("click", e => {
  if (ETHEREAL_CONFIG.contactUrl.trim()) e.currentTarget.href = ETHEREAL_CONFIG.contactUrl;
  else { e.preventDefault(); alert("Add your team's email/contact link in script.js before publishing."); }
});