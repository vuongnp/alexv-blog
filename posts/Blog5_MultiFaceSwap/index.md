---
title: Hướng dẫn cài đặt Multi-Face Swap - Ứng dụng hoán đổi khuôn mặt miễn phí và an toàn
date: 2025-04-29
category: Application non-tech
description: Hướng dẫn chi tiết cách cài đặt Multi-Face Swap - ứng dụng giúp bạn hoán đổi khuôn mặt miễn phí và an toàn. Bao gồm cách tải code, cài đặt môi trường.
keywords: Multi-Face Swap, hoán đổi khuôn mặt, Python, ứng dụng sáng tạo, ChatGPT, FaceSwap, deepfake
---

## Giới thiệu

Face Swap có lẽ là một trong những ứng dụng được dùng nhiều nhất từ khi trend tạo ảnh bằng AI ra đời. Tuy nhiên, việc phải tải ảnh cá nhân lên các ứng dụng trên mạng khiến nhiều người lo ngại về rò rỉ dữ liệu cá nhân. Ở bài thứ Ba trong series **"Làm những ứng dụng đơn giản, hữu ích và chia sẻ miễn phí"**, mình sẽ hướng dẫn các bạn cách cài đặt ứng dụng **Multi-Face Swap** - ứng dụng cho phép bạn hoán đổi khuôn mặt trên ảnh hoàn toàn miễn phí.

🤔 App này có gì?
- 😄 **Hoán đổi khuôn mặt**: Đương nhiên rồi!
- 👥 **Hỗ trợ nhiều khuôn mặt**: Tự động phát hiện các khuôn mặt trong ảnh, cho phép bạn lựa chọn khuôn mặt muốn hoán đổi.
- 🔒 **Bảo mật**: Chạy hoàn toàn trên máy của bạn, không cần lo lắng về việc dữ liệu bị rò rỉ.
- 📷 **Chất lượng**: Tương đương với các ứng dụng trên thị trường.

💸 Tốn kém không?
- 🆓 Hoàn toàn miễn phí! Không quảng cáo, không watermark, không giới hạn số lượng ảnh.

---

## Cài đặt ứng dụng

### Bước 1. Tải code của ứng dụng

Bạn có thể tải code bằng 1 trong 2 cách sau:

**Cách 1. Dùng git (cần cài đặt git)**  
- Nếu bạn chưa cài git, hãy tham khảo hướng dẫn cài đặt cho Windows, MacOS, Linux [tại đây](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).  
- Sau khi cài xong, mở Terminal (trên MacOS và Linux) hoặc Command Prompt (trên Windows) và chạy lệnh sau:
```bash
git clone https://github.com/vuongnp/face-swap.git
```

**Cách 2. Tải và giải nén file zip**  
- Link tải: [face-swap.zip](https://github.com/vuongnp/face-swap/archive/refs/tags/1.0.zip)

---

### Bước 2. Cài đặt Python

Nếu bạn đã cài Python từ các bài viết trước thì hãy bỏ qua bước này. Nếu chưa, hãy tham khảo hướng dẫn cài đặt Python trong bài viết [Hướng dẫn cài đặt Memory Game - Ứng dụng học như chơi cùng con](https://vuongnp.github.io/alexv-blog/#blog=Blog3_MemoryGame).

---

### Bước 3. Cài đặt thư viện

Trong Terminal hoặc Command Prompt, vào thư mục code vừa tải về. Ví dụ:

**Trên Windows**:
```bash
cd C:\Users\<tên người dùng>\Downloads\face-swap
```

**Trên MacOS**:
```bash
cd /Users/<tên người dùng>/Downloads/face-swap
```
> **Lưu ý**: Nếu bạn tải code về thư mục khác, hãy thay đổi đường dẫn cho phù hợp. Tên thư mục có thể là `face-swap` hoặc `face-swap-1.0` tùy theo cách bạn tải code.

Sau đó, chạy lệnh sau để cài đặt các thư viện cần thiết:
```bash
pip install -r requirements.txt
```

---

### Bước 4. Chạy ứng dụng

Sau khi cài đặt xong, trong Terminal hoặc Command Prompt, chạy ứng dụng bằng lệnh:
```bash
streamlit run app.py
```

Một trang web sẽ mở ra trong trình duyệt của bạn. Tải ảnh lên, chọn khuôn mặt để hoán đổi, và thưởng thức thành quả thôi!
![Multi-Face Swap](face-swap.gif "Ứng dụng Multi-Face Swap")

---

## Phần mở rộng: Sử dụng trên điện thoại
Dành cho bạn nào muốn sử dụng ứng dụng trên điện thoại (hoặc một máy tính khác).

Trong **Bước 4**, sau khi chạy lệnh `streamlit run app.py`, trong Terminal (hoặc Command Prompt) bạn sẽ thấy một dòng kiểu như thế này:
```
Network URL: http://192.168.1.36:8501
```

Để truy cập bằng thiết bị khác, hãy thay thế câu lệnh trong Bước 4 bằng:
```bash
streamlit run app.py --server.address 0.0.0.0 --server.port 8501
```

Sau đó, bạn có thể truy cập ứng dụng từ bất kỳ thiết bị nào trong cùng mạng Wi-Fi bằng cách mở ứng dụng trình duyệt (Chrome, Safari) và nhập đúng địa chỉ. Ví dụ trong trường hợp trên là:
```bash
192.168.1.36:8501
```
> **Lưu ý**: Để sử dụng được tính năng này, bạn cần đảm bảo rằng cả hai thiết bị đều kết nối cùng một mạng Wi-Fi.

---

## Lời kết

Multi-Face Swap là một ứng dụng hữu ích và đủ mạnh mẽ để đáp ứng nhu cầu hoán đổi khuôn mặt của bạn. Thay vì phải tải ảnh lên các ứng dụng web và lo lắng về vấn đề bảo mật, giờ đây bạn có thể làm mọi thứ ngay trên thiết bị của mình.

> **Lưu ý**: 
- Không sử dụng ứng dụng cho mục đích xấu hoặc vi phạm quyền riêng tư của người khác.
- Nếu gặp vấn đề trong quá trình cài đặt, hãy liên hệ mình qua các link trong phần About Me, mình rất sẵn lòng hỗ trợ! 😄

---

**Từ khóa liên quan**: Multi-Face Swap, hoán đổi khuôn mặt, Python, ứng dụng sáng tạo, ChatGPT, trend tạo ảnh, FaceSwap, deepfake, face swap