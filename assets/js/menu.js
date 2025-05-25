const products = [
  //====================Cà phê=================================
  {
    image: "./assets/img/Ca-Phe-Đen.jpg",
    id: "capheden",
    name: "CÀ PHÊ ĐEN",
    price: 30000,
    category: "CÀ PHÊ",
    description:
      "Vị nguyên bản, thơm nồng, hậu vị sâu lắng. Một lựa chọn hoàn hảo để bắt đầu ngày mới đầy năng lượng!",
  },
  {
    image: "./assets/img/Ca-Phe-Sua-Da.jpg",
    id: "caphesuada",
    name: "CÀ PHÊ SỮA ĐÁ",
    price: 35000,
    category: "CÀ PHÊ",
    description:
      "Sự hòa quyện hoàn hảo giữa cà phê đậm đà và sữa ngọt dịu, thêm đá mát lạnh, mang đến trải nghiệm vừa thơm ngon vừa tỉnh táo. Một lựa chọn kinh điển cho những ngày năng động!",
  },
  {
    image: "./assets/img/Epresso.jpg",
    id: "espresso",
    name: "ESPRESSO",
    price: 45000,
    category: "CÀ PHÊ",
    description:
      "Tinh túy của hạt cà phê trong từng giọt. Hương thơm nồng nàn, vị đậm sâu, mang đến sự tỉnh táo tức thì.",
  },
  {
    image: "./assets/img/capuchino.jpg",
    id: "capuchino",
    name: "CAPUCHINO",
    price: 50000,
    category: "CÀ PHÊ",
    description:
      "Lớp bọt sữa mềm mịn hòa quyện với espresso đậm đà, tạo nên hương vị tinh tế và cuốn hút. Một lựa chọn lý tưởng cho những ai yêu thích sự cân bằng giữa đắng và béo.",
  },
  {
    image: "./assets/img/Ca-Phe-Truffle.jpg",
    id: "caphetruffle",
    name: "CÀ PHÊ TRUFFLE",
    price: 50000,
    category: "CÀ PHÊ",
    description:
      "Sự kết hợp tinh tế giữa hương vị cà phê đậm đà và truffle cao cấp, mang đến trải nghiệm thơm ngon, độc đáo và đầy cuốn hút. Một lựa chọn hoàn hảo cho những ai yêu thích sự khác biệt!",
  },
  {
    image: "./assets/img/Ca-Phe-Vanilla-Latte.jpg",
    id: "vanillalatte",
    name: "VANILLA LATTE",
    price: 50000,
    category: "CÀ PHÊ",
    description:
      "Sự kết hợp hài hòa giữa espresso mạnh mẽ, sữa béo ngậy và hương vani thơm dịu, mang đến cảm giác êm ái và dễ chịu. Một lựa chọn lý tưởng để tận hưởng sự thư giãn trong từng ngụm!",
  },
  //====================Trà sữa================================
  {
    image: "./assets/img/milk_tea_traditional.jpg",
    id: "trasua",
    name: "TRÀ SỮA TRUYỀN THỐNG",
    price: 35000,
    category: "TRÀ SỮA",
    description:
      "Sự hòa quyện tuyệt vời giữa trà thơm dịu và sữa béo ngậy, tạo nên hương vị cân bằng, ngọt thanh và đầy cuốn hút. Một lựa chọn quen thuộc nhưng chưa bao giờ nhàm chán!",
  },
  {
    image: "./assets/img/tra_sua-gao.jpg",
    id: "trasuagaorang",
    name: "TRÀ SỮA GẠO RANG",
    price: 40000,
    category: "TRÀ SỮA",
    description:
      "Hương thơm dịu dàng của gạo rang kết hợp với trà sữa béo ngậy, tạo nên vị ngọt thanh và cảm giác ấm áp đầy cuốn hút. Một trải nghiệm mới lạ nhưng dễ gây nghiện!",
  },
  {
    image: "./assets/img/Tra-Sua-Oolong-Kem-Trung-Nuong.jpg",
    id: "trasuaolong",
    name: "TRÀ SỮA Ô LONG",
    price: 40000,
    category: "TRÀ SỮA",
    description:
      "Sự kết hợp giữa trà ô long thơm ngát và sữa béo ngậy, tạo nên vị ngọt thanh, hậu vị dịu nhẹ nhưng đầy cuốn hút. Một lựa chọn tuyệt vời cho những ai yêu thích sự cân bằng và tinh tế trong từng ngụm!",
  },
  //====================Ô long matcha==========================
  {
    image: "./assets/img/matcha.jpg",
    id: "olongmatcha",
    name: "Ô LONG MATCHA",
    price: 50000,
    category: "Ô LONG MATCHA",
    description:
      "Sự hòa quyện tinh tế giữa trà ô long thơm dịu và matcha đậm vị, mang đến trải nghiệm thanh mát, hậu vị sâu lắng nhưng đầy cuốn hút. Một lựa chọn lý tưởng cho những ai yêu thích hương vị trà đặc sắc!",
  },
  //====================Bánh ngọt==============================
  {
    image: "./assets/img/macaron.jpg",
    id: "macaron",
    name: "MACARON",
    price: 50000,
    category: "BÁNH NGỌT",
    description:
      "Những chiếc bánh nhỏ xinh với lớp vỏ giòn tan, nhân mềm mại, hòa quyện hoàn hảo giữa hương vị tinh tế và độ ngọt vừa vặn. Một sự lựa chọn thanh lịch cho những buổi thưởng trà thư giãn!",
  },
  {
    image: "./assets/img/scone.jpg",
    id: "scone",
    name: "SCONE",
    price: 50000,
    category: "BÁNH NGỌT",
    description:
      "Bánh mềm xốp với lớp vỏ vàng ruộm, hương bơ thơm ngậy kết hợp hoàn hảo cùng mứt trái cây hoặc kem tươi. Một món bánh tuyệt vời để thưởng thức cùng cà phê hoặc trà!",
  },
  {
    image: "./assets/img/chessecake.jpg",
    id: "cheesecake",
    name: "CHEESECAKE",
    price: 50000,
    category: "BÁNH NGỌT",
    description:
      "Mềm mịn, béo ngậy, ngọt thanh - giống như những khoảnh khắc dịu dàng bên em. Một món bánh dành riêng cho người đặc biệt!",
  },
  //====================Topping================================
  {
    image: "./assets/img/Thach-Tra-Vo.jpg",
    id: "thachtravo",
    name: "THẠCH TRÀ VỎ",
    price: 15000,
    category: "TOPPING",
    description:
      "Topping độc đáo với hương trà nhẹ nhàng, kết cấu dai giòn, mang đến trải nghiệm thú vị trong từng ngụm. Một lựa chọn hoàn hảo để tăng thêm độ hấp dẫn cho thức uống!",
  },
  {
    image: "./assets/img/Tran-Chau-O-Long.jpg",
    id: "tranchauolong",
    name: "TRÂN CHÂU Ô LONG",
    price: 10000,
    category: "TOPPING",
    description:
      "Những viên trân châu dai giòn ngấm hương trà ô long thơm dịu, tạo nên sự kết hợp hoàn hảo giữa vị trà thanh nhẹ và kết cấu thú vị. Một lựa chọn tuyệt vời để tăng thêm độ hấp dẫn cho thức uống!",
  },
  {
    image: "./assets/img/Tran-Chau-Gao-Rang.jpg",
    id: "tranchaugaorang",
    name: "TRÂN CHÂU GẠO RANG",
    price: 10000,
    category: "TOPPING",
    description:
      "Những viên trân châu mềm dai, thấm đậm hương gạo rang thơm lừng, mang đến vị béo nhẹ cùng độ ngọt thanh đầy cuốn hút. Một topping lý tưởng để tạo điểm nhấn cho thức uống của bạn!",
  },
  {
    image: "./assets/img/Tran-Chau-Phong-Lan.jpg",
    id: "tranchauphonglan",
    name: "TRÂN CHÂU PHONG LAN",
    price: 10000,
    category: "TOPPING",
    description:
      "Những viên trân châu mềm dai, thấm đậm hương gạo rang thơm lừng, mang đến vị béo nhẹ cùng độ ngọt thanh đầy cuốn hút. Một topping lý tưởng để tạo điểm nhấn cho thức uống của bạn!",
  },
];

//=========================cart======================
// Mảng để lưu sản phẩm trong giỏ hàng
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hàm lưu giỏ hàng vào localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    const showItem = cart.find((item) => item.id === productId);
    if (showItem) {
      showItem.quantity = (showItem.quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartDisplay();
    document.getElementById("check-cart").checked = true;
  }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartDisplay();
}

// Hàm xóa toàn bộ giỏ hàng
function clearCart() {
  cart = [];
  saveCart();
  updateCartDisplay();
}
// update số lượng
function updateQuantity(index,change){
    if(cart[index].quantity+change>=1){
        cart[index].quantity+=change;
    }
    else{
        cart.splice(index,1);
    }
    saveCart();
    updateCartDisplay();

}

// Hàm cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
  const cartContainer = document.getElementById("display-cart");
  cartContainer.innerHTML = `
    <button onclick="document.getElementById('check-cart').checked = false" class="button-close__cart">✕</button>
    <h2>Giỏ Hàng</h2>
    ${
      cart.length === 0
        ? "<p>Chưa có sản phẩm trong giỏ hàng.</p>"
        : `
      <ul class="box-cart">
        ${cart.map(
            (item, index) => `
          <li class="list__cart">
            <img src="${item.image}" alt="${
              item.name
            }" class="img-in__cart">
            <span>${item.name} x${item.quantity || 1} - ${(
              item.price * (item.quantity || 1)
            ).toLocaleString()} VNĐ</span>
            <button onclick="removeFromCart(${index})" class="delete-item__cart">Xóa</button>
          </li>
        `
          )
          .join("")}
      </ul>
      <button onclick="clearCart()" class="clean-cart">Xóa tất cả</button>
      <div class="page-pay">
      <p class="total-price">Tổng cộng: ${cart
        .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
        .toLocaleString()}VNĐ</p>

        <button onclick="ShowPay()" class="pay">Thanh Toán</button>
      </div>
    `
    }
  `;
  //hiển thị số lượng lên icon-cart
  const cartCount=document.getElementById("cart-count");
if(cartCount){
    cartCount.textContent=cart.reduce((total,item)=> total+(item.quantity),0)
}
}


document.addEventListener("DOMContentLoaded", function () {
  // Danh sách danh mục và container tương ứng
  const categories = [
    { name: "CÀ PHÊ", containerId: "ca-phe" },
    { name: "TRÀ SỮA", containerId: "tra-sua" },
    { name: "Ô LONG MATCHA", containerId: "o-long-matcha" },
    { name: "BÁNH NGỌT", containerId: "cake" },
    { name: "TOPPING", containerId: "topping" },
  ];

  // Hàm hiển thị sản phẩm theo danh mục
  const displayProducts = (products, container, category) => {
    const productsZone = container.querySelector(".products-zone");
    if (!productsZone) {
      console.warn(
        `Không tìm thấy thẻ div.products-zone trong container "${category}".`
      );
      return;
    }

    // Xóa nội dung cũ
    productsZone.innerHTML = "";

    // Lọc sản phẩm theo danh mục
    const locSanPham = products.filter((p) => p.category === category);
    console.log(`Danh mục ${category}:`, locSanPham); // Debug

    if (locSanPham.length === 0) {
      productsZone.innerHTML = "<p>Không có sản phẩm trong danh mục này.</p>";
      return;
    }

    locSanPham.forEach((p) => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="img-menu">
        <h3><a href="menu_detail.html?id=${encodeURIComponent(
          p.id
        )}" class="products-name">${p.name}</a></h3>
        <p class="price">${p.price.toLocaleString()} VNĐ</p>
        <button class="buy-button" onclick="addToCart('${p.id}')">Mua</button>
      `;
      productsZone.appendChild(div);
    });
  };

  // Hàm thêm sản phẩm vào các danh mục tương ứng
  const themSanPhamVaoDanhMuc = (products, categories) => {
    categories.forEach(({ name, containerId }) => {
      const container = document.getElementById(containerId);
      if (container) {
        displayProducts(products, container, name);
      } else {
        console.warn(`Container với ID "${containerId}" không tồn tại.`);
      }
    });
  };

  // Gọi hàm để thêm sản phẩm
  themSanPhamVaoDanhMuc(products, categories);

  // Xử lý sự kiện nhấn nút menu
  const menuButtons = document.querySelectorAll(".btn-link__menu");
  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const categoryId = button.getAttribute("data-category");
      console.log("Nút được nhấn:", categoryId); // Debug
      const allContainers = document.querySelectorAll(".category-container");
      const allButtons = document.querySelectorAll(".btn-menu");

      // Xóa class active khỏi tất cả nút
      allButtons.forEach((btn) => btn.classList.remove("active"));
      // Thêm class active cho nút được nhấn
      button.classList.add("active");

      // Hiển thị hoặc ẩn container dựa trên danh mục
      if (categoryId === "all") {
        allContainers.forEach((container) => {
          container.classList.remove("hidden");
        });
      } else {
        allContainers.forEach((container) => {
          if (container.id === categoryId) {
            container.classList.remove("hidden");
          } else {
            container.classList.add("hidden");
          }
        });
      }
    });
  });

  // Đặt nút "TẤT CẢ" là active khi tải trang
  const allButton = document.querySelector('.btn-menu[data-category="all"]');
  if (allButton) {
    allButton.classList.add("active");
  }
  // Cập nhật giỏ hàng khi tải trang
  updateCartDisplay();
});
//thanh toán
function ShowPay(){
  if(cart.length===0){
    alert(` Chưa có sản phẩm vui lòng thêm sản phẩm`);

  }
  else{
    window.location.href="./pay.html"
  }
}
