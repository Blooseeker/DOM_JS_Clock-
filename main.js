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
