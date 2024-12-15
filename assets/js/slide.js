let slides = document.querySelectorAll(".slide")
function showNextSlide() {
    // Cari slaydı deaktiv et
    slides[currentIndex].removeAttribute("data-active");
  
    // Növbəti slayda keç
    currentIndex = (currentIndex + 1) % slides.length;
  
    // Yeni slaydı aktiv et
    slides[currentIndex].setAttribute("data-active", "");
  }
  
  // Hər 3 saniyədən bir slayd dəyişsin
  setInterval(showNextSlide, 3000);