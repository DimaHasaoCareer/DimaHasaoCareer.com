const jobs = [
  {title:"Government Job Notification", org:"Dima Hasao / Assam", type:"Government", date:"New", detail:"Replace this sample entry with a verified current vacancy."},
  {title:"Assam Government Recruitment", org:"State Government Department", type:"Government", date:"Update", detail:"Add post name, vacancies, eligibility and official notification link."},
  {title:"Private Job Opportunity", org:"Dima Hasao", type:"Private", date:"Update", detail:"Add employer, role, qualification and application details."},
  {title:"Apprenticeship / Skill Opportunity", org:"Assam", type:"Apprenticeship", date:"Update", detail:"Add official training or apprenticeship notification details."}
];

const list = document.getElementById("jobList");
const search = document.getElementById("searchInput");
const status = document.getElementById("searchStatus");

function renderJobs(items){
  if(!items.length){
    list.innerHTML = '<div class="job-card"><div><h3>No matching updates found</h3><p>Try a different search term.</p></div></div>';
    return;
  }
  list.innerHTML = items.map(j => `
    <article class="job-card">
      <div>
        <h3>${escapeHtml(j.title)}</h3>
        <p>${escapeHtml(j.org)} • ${escapeHtml(j.detail)}</p>
        <div class="meta"><span>${escapeHtml(j.type)}</span><span>${escapeHtml(j.date)}</span></div>
      </div>
      <a class="apply" href="#contact">Details</a>
    </article>`).join("");
}
function escapeHtml(s){
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
function doSearch(){
  const q = search.value.trim().toLowerCase();
  const filtered = jobs.filter(j => Object.values(j).join(" ").toLowerCase().includes(q));
  renderJobs(q ? filtered : jobs);
  status.textContent = q ? `${filtered.length} result${filtered.length===1?'':'s'} found for "${search.value.trim()}"` : "";
}
search.addEventListener("input", doSearch);
document.getElementById("searchBtn").addEventListener("click", doSearch);
document.querySelector(".menu-toggle").addEventListener("click", () => document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => document.getElementById("mainNav").classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
renderJobs(jobs);
