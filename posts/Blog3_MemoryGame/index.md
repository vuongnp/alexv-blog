---
title: Hướng dẫn cài đặt Memory Game - Ứng dụng học như chơi cùng con
date: 2025-04-22
category: Application non-tech
description: Hướng dẫn chi tiết cách cài đặt Memory Game - ứng dụng giúp các bậc phụ huynh dạy con học một cách thú vị. Bao gồm cách tải code, cài đặt Python, và tùy chỉnh câu hỏi.
keywords: Memory Game, học cùng con, ứng dụng giáo dục, Python, game học tập, cài đặt ứng dụng
---


## Giới thiệu

Hôm nay, mình sẽ hướng dẫn các bạn cách cài đặt Memory Game - một ứng dụng được mình tạo ra để các ông bố, bà mẹ dạy con học một cách dễ dàng và thú vị hơn. 

> **Lưu ý**: Một số phần cài đặt trong hướng dẫn này có thể hơi phức tạp với những bạn không quen với lập trình, nhưng mình tin bất kỳ ai cũng có thể làm được, đặc biệt trong thời đại AI này. 😄

---

### Cài đặt ứng dụng

#### Bước 1. Tải code của ứng dụng

Bạn có thể tải code bằng 1 trong 2 cách sau:

**Cách 1. Dùng git (cần cài đặt git)**  
- Nếu bạn chưa cài git, hãy tham khảo hướng dẫn cài đặt cho Windows, MacOS, Linux [tại đây](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).  
- Sau khi cài xong, mở Terminal (trên MacOS và Linux) hoặc Command Prompt (trên Windows) và chạy lệnh sau:
```bash
git clone -b vn-version https://github.com/vuongnp/memory-game.git
```

**Cách 2. Tải và giải nén file zip**  
- Link tải: [memory-game.zip](https://github.com/vuongnp/memory-game/archive/refs/tags/v1.0.zip)

---

#### Bước 2. Cài đặt Python

Python là ngôn ngữ mà mình đã sử dụng để viết ứng dụng này. Các bạn sẽ cần Python để khởi chạy ứng dụng.

Nếu bạn chưa cài Python, hãy tham khảo hướng dẫn cài đặt cho Windows, MacOS, Linux [tại đây](https://quantrimang.com/hoc/cach-cai-dat-python-tren-windows-macos-linux-140625).

> **Lưu ý**: Nên cài đặt phiên bản Python 3.8 hoặc 3.9 để đảm bảo không gặp lỗi trong quá trình sử dụng.

---

#### Bước 3. Cài đặt thư viện

Trong Terminal hoặc Command Prompt, vào thư mục code vừa tải về.  
Ví dụ:

**Trên Windows**:
```bash
cd C:\Users\<tên người dùng>\Downloads\memory-game
```

**Trên MacOS**:
```bash
cd /Users/<tên người dùng>/Downloads/memory-game
```

> **Lưu ý**: Nếu bạn tải code về thư mục khác, hãy thay đổi đường dẫn cho phù hợp nhé. Tên thư mục có thể là `memory-game` hoặc `memory-game-1.0` tùy theo cách bạn tải code ở trên

Sau đó, chạy lệnh sau để cài đặt các thư viện cần thiết:
```bash
pip install -r requirements.txt
```

---

#### Bước 4. Chạy ứng dụng

Sau khi cài đặt xong, chạy ứng dụng bằng lệnh:
```bash
python app.py
```

Nếu mọi thứ đều ổn, bạn sẽ thấy các dòng tương tự như sau:  
![Ứng dụng khởi chạy thành công](start_app.png "Ứng dụng Memory Game khởi chạy thành công")

---

### Chơi game thôi!

Đến phần thú vị nhất rồi đây.
Sau khi chạy ứng dụng, bạn sẽ nhìn thấy một dòng chữ kiểu như thế này:
```bash
Running on http://192.168.1.30:5001/
```

Mở trình duyệt web (Chrome, Firefox, Safari, Edge...) và nhập địa chỉ tương ứng. Ví dụ: `192.168.1.30:5001`.

> **Lưu ý**: Game được thiết kế để có thể chơi đồng thời trên cả điện thoại và máy tính, miễn là thiết bị của bạn kết nối cùng mạng với máy tính đang chạy ứng dụng.

Giờ thì, chơi game thôi nào!  
![Giao diện game Memory Game](game.gif "Giao diện game Memory Game")

Để dừng ứng dụng, bạn chỉ cần nhấn `Ctrl + C` trong cửa sổ Terminal hoặc Command Prompt mà bạn đã chạy ứng dụng.

---

### Cách thay thế bằng câu hỏi của bạn

Bạn có thể tùy chỉnh câu hỏi trong game bằng cách chuẩn bị một file Excel tên là `questions.xlsx` theo mẫu sau:  
![Mẫu file câu hỏi](questions.png "Mẫu file câu hỏi cho Memory Game")

> **Lưu ý**: Điền đúng tên hình ảnh sử dụng cho mỗi câu hỏi.

Sau đó:  
1. Thay thế file `static/questions.xlsx` bằng file của bạn.  
2. Copy các hình ảnh sử dụng vào thư mục `static/images`.  
3. Chạy lại ứng dụng bằng lệnh:
```bash
python app.py
```

Game sẽ tự động cập nhật các câu hỏi mới của bạn.

---


## Lời kết

Memory Game là một ứng dụng đơn giản mà mình nghĩ ra trong thời gian nghỉ trưa ở công ty và mất khoảng 4 tiếng để hoàn thành. Vì vậy, ứng dụng có thể còn nhiều chỗ chưa hoàn thiện, rất hoan nghênh các bạn tự mày mò và phát triển thêm.

Đây là ứng dụng đầu tiên trong series **"Làm những ứng dụng đơn giản, hữu ích và miễn phí"** mà mình sẽ chia sẻ trong thời gian tới. Hy vọng các bạn sẽ thích và ủng hộ mình nhé!

---

**Từ khóa liên quan**: Memory Game, học cùng con, ứng dụng giáo dục, Python, game học tập, cài đặt ứng dụng.