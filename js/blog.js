const blogPosts = [
    {
      id: 1,
      title: "8 lợi ích bất ngờ khi bạn ăn rau xanh hàng ngày",
      description: "Khám phá 8 lợi ích bất ngờ khi ăn rau xanh mỗi ngày, giúp cải thiện sức khỏe, tăng cường hệ miễn dịch, và mang lại làn da tươi sáng...",
      imgSrc: "img/image_1.jpg",
    },
    {
      id: 2,
      title: "Ăn rau nhiều có tốt không?",
      description: "Ăn rau tốt mỗi ngày là rất quan trọng, bởi không chỉ bổ dưỡng mà còn có thể bảo vệ chống lại các bệnh bao gồm: đái tháo đường, bệnh tim, béo phì và thậm chí một số loại ung thư.",
      imgSrc: "img/image_2.jpg",
    },
    {
      id: 3,
      title: "Lợi ích của việc ăn rau quả theo 5 nhóm màu",
      description: "Giá trị của rau và hoa quả là cung cấp cho cơ thể các chất dinh dưỡng có hoạt tính sinh học cao, đặc biệt là vitamin C, chất khoáng và vi khoáng...",
      imgSrc: "img/image_3.jpg",
    },
    {
      id: 4,
      title: "Hàng ngày nên ăn trái cây, rau củ thế nào?",
      description: "Sẽ rất tốt nếu bạn thêm nhiều trái cây và rau quả vào chế độ ăn uống để có nhiều lợi ích cho sức khỏe, bao gồm cả giảm cân. Cho dù bạn nấu ăn ở nhà hay đi ăn ở ngoài...",
      imgSrc: "img/image_4.jpg",
    },
    {
      id: 5,
      title: "Lợi ích khi ăn rau mỗi ngày",
      description: "Rau giàu vitamin, khoáng chất, chất chống oxy hóa góp phần bảo vệ sức khỏe tim mạch và làn da, ngăn ngừa các bệnh mạn tính...Giảm nguy cơ mắc bệnh tim",
      imgSrc: "img/image_5.jpg",
    },
    {
      id: 6,
      title: "Rau lá xanh có lợi gì cho sức khỏe?",
      description: "Các loại rau lá xanh là loại thực phẩm quen thuộc góp mặt trong các bữa ăn hàng ngày. Chúng chứa nhiều chất dinh dưỡng cần thiết...",
      imgSrc: "img/image_6.jpg",
    },
  ];
  
  function renderBlogPosts() {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    const container = document.querySelector('.main-blog-container');
    blogPosts.forEach((post) => {
      const blogItem = `
        <div class="blog-item">
          <div class="item-img">
            <img src="${post.imgSrc}" alt="">
          </div>
          <div class="item-content">
            <span class="item-title">${post.title}</span>
            <p class="item-description">${post.description}</p>
            <a class="btn-detail" href="blog-detail.html?id=${post.id}" class="">Đọc thêm</a>
          </div>
        </div>
      `;
      container.innerHTML += blogItem;
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    renderBlogPosts();
  });
  