document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");
    let pieChart = null;
    let lineChart = null;
  
    function showSection(targetId) {
      sections.forEach((section) => {
        section.classList.toggle("active", section.id === targetId);
      });
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.target === targetId);
      });
  
      if (targetId === "stats") {
        // 產生圓餅圖
        if (!pieChart) {
          pieChart = c3.generate({
            bindto: "#c3chart",
            data: {
              columns: [
                ["已完成", 40],
                ["進行中", 25],
                ["待處理", 20],
                ["延遲", 15],
              ],
              type: "pie",
            },
          });
        }
  
        // 產生直線圖
        if (!lineChart) {
          lineChart = c3.generate({
            bindto: "#lineChart",
            data: {
              x: 'x',
              columns: [
                ['x', '2025-04-01', '2025-04-02', '2025-04-03', '2025-04-04', '2025-04-05', '2025-04-06', '2025-04-07'],
                ['入庫數量', 25, 29, 31, 27, 22, 34, 30],
                ['出庫數量', 18, 22, 28, 30, 19, 32, 26]
              ],
              type: 'spline'
            },
            axis: {
              x: {
                type: 'category',
                label: '日期'
              },
              y: {
                label: '數量'
              }
            }
          });
        }
      }
    }
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        showSection(this.dataset.target);
      });
    });
  
    showSection("home");
  });