let user = {
  id: 1,
  username: "testuser",
  links: [
  { id: 1, title: "متجرنا الالكتروني", url: "https://hello-yellow-ye.github.io/Home/", icon: "fa-solid fa-shop" },
    { id: 2, title: "انستاجرام", url: "https://www.instagram.com/helloyellow_yemen/#", icon: "fab fa-instagram" },
    { id: 3, title: "فيسبوك", url: "https://www.facebook.com/p/Hello-Yellow-100087359146855/", icon: "fab fa-facebook" },
    { id: 4, title: "ثريدز", url: "https://www.threads.net/@helloyellow_yemen?xmt=AQGzmncIgX3mT8iIfxsdCVtf90iEXdFP9RrPUNZ3bFF0T98", icon: "fa-brands fa-threads"},
    { id: 5, title: "رقم واتساب", url: "https://wa.me/+967778284222", icon: "fab fa-whatsapp" },
    { id: 6, title: "مجموعة واتساب", url: "https://chat.whatsapp.com/KHdjFD5IFzt8nS98b8yXOA", icon: "fab fa-whatsapp" }
  ]
};

// دالة عرض الروابط
function displayLinks() {
  const linksContainer = document.getElementById("links");
  linksContainer.innerHTML = ""; // تنظيف القائمة
  user.links.forEach(link => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.target = "_blank"; // فتح الرابط في نافذة جديدة
    linkElement.classList.add("link-item");

    // إضافة الأيقونة والنص
    linkElement.innerHTML = `<i style="" class="${link.icon} sp"></i> ${link.title}`;
    linksContainer.appendChild(linkElement);
  });
}

// دالة إضافة رابط جديد
document.getElementById("addLink").addEventListener("click", () => {
  const title = prompt("Enter link title:"); // طلب العنوان
  const url = prompt("Enter link URL:"); // طلب الرابط
  const icon = prompt("Enter icon class (e.g., 'fab fa-facebook'):"); // طلب الأيقونة

  if (title && url && icon) {
    const newLink = { id: Date.now(), title, url, icon };
    user.links.push(newLink); // إضافة الرابط
    displayLinks(); // تحديث العرض
  } else {
    alert("Please fill in all the fields!");
  }
});

// عرض الروابط عند تحميل الصفحة
window.onload = displayLinks;
