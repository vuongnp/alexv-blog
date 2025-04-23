---
title: Hướng dẫn cài đặt Memory Game để vừa học vừa chơi cùng con
date: 2025-04-22
category: Application non-tech
---


## Giới thiệu

Hôm nay, mình sẽ hướng dẫn các bạn cách cài đặt Memory Game - một ứng dụng được mình tạo ra để các ông bố, bà mẹ dạy con học một cách dễ dàng và thú vị hơn. 

<i> Lưu ý: Một số phần cài đặt trong hướng dẫn này có thể hơi phức tạp với những bạn không quen với lập trình, nhưng mình tin bất kỳ ai cũng có thể làm được, đặc biệt trong thời đại AI này :D</i>

### Cài đặt ứng dụng
#### Bước 1. Tải code của ứng dụng
Các bạn có thể lựa chọn tải bằng 1 trong 2 cách sau:

Cách 1. Dùng git (cần cài đặt git)
   - Nếu bạn chưa cài git, hãy tham khảo hướng dẫn cài đặt cho Windows, MacOS, Linux [tại đây](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
   - Sau khi cài xong, mở ứng dụng Terminal (trên MacOS và Linux) hoặc Command Prompt (trên Windows) và chạy lệnh sau:
```
git clone -b vn-version https://github.com/vuongnp/memory-game.git
```

Cách 2. Tải và giải nén file zip
   - Link tải: [memory-game.zip](https://github.com/vuongnp/memory-game/archive/refs/tags/v1.0.zip)

#### Bước 2. Cài đặt Python
Python là ngôn ngữ mà mình đã sử dụng để viết ứng dụng này. Các bạn sẽ cần Python để khởi chạy ứng dụng.

Nếu bạn chưa cài Python, hãy tham khảo hướng dẫn cài đặt cho Windows, MacOS, Linux [tại đây](https://quantrimang.com/hoc/cach-cai-dat-python-tren-windows-macos-linux-140625).

<i> Lưu ý: Có nhiều phiên bản Python, nhưng mình khuyên các bạn nên cài đặt phiên bản 3.8 hoặc 3.9 để đảm bảo không có lỗi gì trong quá trình sử dụng.</i>

#### Bước 3. Cài đặt thư viện
Trong cửa sổ Terminal hoặc Command Prompt, các bạn vào thư mục code vừa tải về.

Trên Windows:
```
cd C:\Users\<tên người dùng>\Downloads\memory-game
```
Trên MacOS:
```
cd /Users/<tên người dùng>/Downloads/memory-game
```

<i> Lưu ý: Nếu bạn tải code về thư mục khác, hãy thay đổi đường dẫn cho phù hợp nhé. Tên thư mục có thể là `memory-game` hoặc `memory-game-1.0` tùy theo cách bạn tải code ở trên</i>

Sau đó, chạy lệnh sau để cài đặt các thư viện cần thiết:
```
pip install -r requirements.txt
```

#### Bước 4. Chạy ứng dụng
Sau khi cài đặt xong, bạn có thể chạy ứng dụng bằng lệnh sau:
```
python app.py
```
Nếu mọi thứ đều ổn, bạn sẽ thấy các dòng tương tự như sau:
![start app](start_app.png)

### Chơi game thôi
Đến phần thú vị nhất rồi đây.
Sau khi chạy ứng dụng, bạn sẽ nhìn thấy một dòng chữ kiểu như thế này
```Running on http://192.168.1.30:5001/```

Để chơi game, bạn chỉ cần mở trình duyệt web (Chrome, Firefox, Safari, Edge...) và nhập địa chỉ tương ứng trên màn hình của bạn. Trong trường hợp của mình sẽ là: `192.168.1.30:5001`

<i> Lưu ý: Game này được thiết kế để có thể chơi được trên cả điện thoại và máy tính, chỉ cần thiết bị của bạn kết nối cùng một mạng với máy tính đang chạy ứng dụng là được</i>

Giờ thì, chơi game thôi nào
![game](game.gif)

Để dừng ứng dụng, bạn chỉ cần nhấn `Ctrl + C` trong cửa sổ Terminal hoặc Command Prompt mà bạn đã chạy ứng dụng.

### Cách thay thế bằng câu hỏi của bạn
Để thay thế bằng câu hỏi của mình, các bạn chỉ cần chuẩn bị một file excel tên là `questions.xlsx` và điền các câu hỏi vào theo mẫu sau:

![questions](questions.png)

<i> Lưu ý: Các bạn phải điền đúng tên hình ảnh sử dụng cho mỗi câu hỏi.</i>

Tiếp theo, các bạn thay thế file`static/questions.xlsx` bằng file của mình và copy các hình ảnh sử dụng vào trong thư mục `static/images`.

Cuối cùng, chạy lại ứng dụng bằng lệnh ```python app.py``` và game sẽ tự động cập nhật các câu hỏi mới của bạn.


## Lời kết
Memory Game là ứng dụng rất đơn giản mà mình nghĩ ra trong thời gian nghỉ trưa ở công ty và mất khoảng 4 tiếng để hoàn thành. Vì vậy, ứng dụng có thể còn nhiều chỗ chưa hoàn thiện, rất hoan nghênh các bạn tự mày mò và phát triển thêm.

Đây là ứng dụng đầu tiên trong series Làm những ứng dụng đơn giản, hữu ích và miễn phí mà mình sẽ chia sẻ trong thời gian tới. Hy vọng các bạn sẽ thích và ủng hộ mình nhé.