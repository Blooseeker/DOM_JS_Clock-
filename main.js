// 36.2 DOM JavaScript _ Sử dụng innerHTML và các phương thức getElement _ Hướng dẫn JavaScript DOM
// https://www.youtube.com/watch?v=vgpnNA4JMo4

// 3.getElementsByTagName
// console.log("getElementsByTagName: ");
// let li_item = document.getElementsByTagName("li");
// console.log(li_item); // trả về mảng các phần tử li
// // chúng ta có thể xem mảng có bao nhiêu phần tử
// console.log(li_item.length);
// // truy xuất và thay đổi 1 phần tử theo vị trí index
// li_item[1].innerHTML = "Phần tử li có vị trí index 1 thay đổi";

// //4.getElementsByClassName
// console.log("getElementsByClassName");
// let li_class_item = document.getElementsByClassName("list");
// console.log(li_class_item);

// // tương tự cũng có thể truy xuất và thay đổi 1 phần tử theo vị trí index
// li_class_item[1].innerHTML = "Phần tử li có vị trí index 1 thay đổi lần 2";

// // 5.getElementById
// let el = document.getElementById("list_about");
// console.log(el);
// // thay đổi text trên biến el
// el.innerHTML = "Dòng số 2 đã thay đổi";

// 36.3 DOM JavaScript_ Hiểu rõ querySelector và querySelectorAll để tìm kiếm và thay đổi phần tử
// https://www.youtube.com/watch?v=-VciiImmfEo
// 6. querySelector (chỉ trả về phần tử đầu tiên nó tìm thấy)
// chọn phần tử có ID là "heading_title" và thay đổi nội dung của nó

// let title = document.querySelector("#heading_title");
// console.log(title);
// title.innerHTML = "New title";

// // chọn phần tử đầu tiên có class là list và thay đổi nổi dung nó
// let firtListItem = document.querySelector(".list");
// console.log(firtListItem);
// firtListItem.innerHTML = "Trang chủ";

// // Quan trọng ,querySelector có thể chọn css kết hợp
// // (xem lại series wep.tuhoc từ bài 27)
// let firtLinkInlist = document.querySelector("ul a");
// console.log(firtLinkInlist);

// //  chọn phần tử input checkbox và đặt thuộc tính checked cho nó
// let checkbox = document.querySelector("input");
// checkbox.checked = true;

// // querySelectorAll (trả về tất cả phần tử nó tìm thấy)
// let list_item = document.querySelectorAll("li");
// console.log(list_item);
// // vì nó trả về 1 danh sách các thẻ li nên cần gọi đúng vị trí index của nó để thay đổi
// list_item[1].innerHTML = "Thay đổi ở vị trí index 1 nè";

// 36.4 DOM JavaScript Digital Clock - Hiển thị thời gian thực với DOM - học DOM JavaScript qua Ví dụ
// https://www.youtube.com/watch?v=K_NOvHhpoPI

// 36.5 JavaScript DOM Hiểu rõ getAttribute và setAttribute Understanding getAttribute vs setAttribute
// https://www.youtube.com/watch?v=yRVy-gKPSZo&t=2s
// 8.querySelector
// sử dụng querySelector để chọn thẻ a đầu tiên
// const firstLink = document.querySelector("a");
// // xem thuộc tính sử dụng getAttribute
// // kiểm tra xem có thẻ a nào được tìm thấy hay không
// if (firstLink) {
//   const linkHref = firstLink.getAttribute("href");
//   console.log(linkHref); //https://tuhoc.cc
// } else {
//   console.log("Không tìm thấy thẻ a");
// }

// // 9.setAttribute
// firstLink.setAttribute("target", "_blank");

// // sử dụng querySelectorAll
// const links = document.querySelectorAll("ul a");
// console.log(links);

// // lặp qua mỗi thẻ a và sử dụng setAttribute
// // để nhận thêm thuôc tính target= "_blank"
// links.forEach((singleLink) => {
//   singleLink.setAttribute("target", "_blank");
// });

// thay đổi màu cảu thẻ h1 Cách 1
// const color = document.querySelector("h1");
// console.log(color);
// color.setAttribute("style", " color: blue;");
// cách 2
// const color = document.getElementById("heading_title");
// console.log(color);
// color.setAttribute("style", " color: blue;");
// viết ngắn gọn
// document.querySelector("#heading_title").setAttribute("style", " color: blue;");

// 36.6 JavaScript DOM | Using removeAttribute and hasAttribute
// https://www.youtube.com/watch?v=NasXsNxsrnY

//  sử dụng querySelector để chọn phần tử đầu tiên có class là "list"
// const item1 = document.querySelector(".list");

// // 10. hasAttribute
// // Kiểm tra xem phần tử có thuộc tính class không?
// console.log(item1.hasAttribute("class")); // true
// // kiểm tra xem trong thẻ h1 có ID là heading_title có thuộc tính style ko và nó có
// console.log(document.querySelector("#heading_title").hasAttribute("style")); // true

// // 11. removeAttrybute
// // loại bỏ 1 thuộc tính khỏi phần tử

// document.querySelector("#heading_title").removeAttribute("style");
// // kiểm tra lại xem "style" còn tồn tại trong thẻ h2 ko
// console.log(document.querySelector("#heading_title").hasAttribute("style")); // fasle

// 36.7 JS DOM Hiểu rõ về textContent, innerText, và innerHTML trong JavaScript
// https://www.youtube.com/watch?v=AmMEFcNm9CM

let element1 = document.getElementById("demo");
console.log(element1);
element1.innerHTML = "<p><i>Hài vãi nồi</i></p>";
console.log(element1.innerHTML);
console.log(element1.innerText);
console.log(element1.textContent);
