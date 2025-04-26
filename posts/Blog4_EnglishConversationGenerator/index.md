---
title: Hướng dẫn cài đặt English Conversation Generator - Tạo hội thoại tiếng Anh dễ dàng
date: 2025-04-26
category: Application non-tech
description: Hướng dẫn chi tiết cách cài đặt English Conversation Generator - ứng dụng giúp bạn tạo hội thoại tiếng Anh theo chủ đề. Bao gồm cách tải code, cài đặt Python, và sử dụng API.
keywords: English Conversation Generator, học tiếng Anh, tạo hội thoại, Python, ứng dụng học tập, API, Google Gemini, Fal AI
---

## Giới thiệu

Tiếp tục với series **"Làm những ứng dụng đơn giản, hữu ích và chia sẻ miễn phí"**, mình sẽ hướng dẫn các bạn cách cài đặt ứng dụng **English Conversation Generator** - một ứng dụng giúp bạn tạo ra các cuộc hội thoại tiếng Anh thú vị và hữu ích.

🤔 App này có gì hay?
- 🗣️ Tự tạo bài nói: Nhập chủ đề bạn thích, chọn trình độ (A1-B2) và độ dài cuộc hội thoại.
- 🖼️ Có hình minh họa: Giúp bạn dễ hình dung ngữ cảnh.
- 📚 Học từ vựng: List từ quan trọng kèm nghĩa & phát âm chuẩn.
- 🎧 Audio: Có file audio để luyện nghe online hoặc tải về máy.

💸 Tốn kém không?
- CÓ, và rất "đắt" nhé! 😉 Nếu mỗi ngày bạn chăm chỉ học 4 bài, thì sau 1 tháng bạn sẽ "thiệt hại" khoảng... NỬA LY TRÀ SỮA! 😂

---

## Cài đặt ứng dụng

### Bước 1. Tải code của ứng dụng

Bạn có thể tải code bằng 1 trong 2 cách sau:

**Cách 1. Dùng git (cần cài đặt git)**  
- Nếu bạn chưa cài git, hãy tham khảo hướng dẫn cài đặt cho Windows, MacOS, Linux [tại đây](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).  
- Sau khi cài xong, mở Terminal (trên MacOS và Linux) hoặc Command Prompt (trên Windows) và chạy lệnh sau:
```bash
git clone https://github.com/vuongnp/english-conversation-generator.git
```

**Cách 2. Tải và giải nén file zip**  
- Link tải: [english-conversation-generator.zip](https://github.com/vuongnp/english-conversation-generator/archive/refs/tags/v1.0.zip)

---

### Bước 2. Cài đặt Python

Nếu bạn đã đọc bài viết trước của mình về Memory Game thì chắc hẳn bạn đã cài đặt Python rồi. Nếu chưa, hãy tham khảo hướng dẫn cài đặt trong bài viết [Hướng dẫn cài đặt Memory Game - Ứng dụng học như chơi cùng con](https://vuongnp.github.io/alexv-blog/#blog=Blog3_MemoryGame).

---

### Bước 3. Cài đặt thư viện

Trong Terminal hoặc Command Prompt, vào thư mục code vừa tải về.
Ví dụ:

**Trên Windows**:
```bash
cd C:\Users\<tên người dùng>\Downloads\english-conversation-generator
```

**Trên MacOS**:
```bash
cd /Users/<tên người dùng>/Downloads/english-conversation-generator
```
> **Lưu ý**: Nếu bạn tải code về thư mục khác, hãy thay đổi đường dẫn cho phù hợp nhé. Tên thư mục có thể là `english-conversation-generator` hoặc `english-conversation-generator-1.0` tùy theo cách bạn tải code ở trên.

Sau đó, chạy lệnh sau để cài đặt các thư viện cần thiết:
```bash
pip install -r requirements.txt
```

---

### Bước 4. Lấy API keys 

Mình sử dụng API của Google Gemini và Fal AI để tạo ra ứng dụng này. Để sử dụng được, bạn cần lấy API keys từ 2 nhà cung cấp này.
- **Google Gemini** (miễn phí): Truy cập [Google AI Studio](https://aistudio.google.com/app/apikey).
- **Fal AI** (trả phí, bạn sẽ được tặng 1$ khi tạo tài khoản): Truy cập [Fal AI](https://fal.ai/dashboard/keys).

> **Lưu ý**: Đừng chia sẻ API keys của bạn với bất kỳ ai khác, vì điều này có thể dẫn đến việc tài khoản của bạn bị khóa hoặc bị tính phí không mong muốn.

Sau khi lấy được API keys, bạn điền API keys vào file `api.py` trong thư mục code vừa tải về. 

API key Fal AI:
```python
os.environ["FAL_KEY"] = "your_fal_api_key_here"
```

API key Google Gemini:
```python
client = genai.Client(api_key="your_gemini_api_key_here")
```

---

### Bước 5. Chạy ứng dụng

Sau khi cài đặt xong, trong Terminal hoặc Command Prompt, chạy ứng dụng bằng lệnh:
```bash
streamlit run app.py
```

Một trang web sẽ mở ra trong trình duyệt của bạn. Tận hưởng ứng dụng thôi nào!
![English Conversation Generator](eng_conversation.gif "Ứng dụng English Conversation Generator")

---

## Lời kết

English Conversation Generator là một ứng dụng đơn giản giúp bạn học tiếng Anh một cách thú vị và hiệu quả. Với khả năng tạo hội thoại, hình ảnh minh họa, từ vựng, và file audio, ứng dụng này sẽ là người bạn đồng hành lý tưởng trên hành trình học tiếng Anh của bạn.

Hãy thử ngay hôm nay và chia sẻ trải nghiệm của bạn với mình nhé!

> **Lưu ý**: 
- Model mình sử dụng trong ứng dụng này không được dùng cho mục đích thương mại.
- Nếu có bất kỳ vấn đề gì trong quá trình cài đặt, hãy liên hệ với mình qua bất kỳ link nào trong phần About Me. Mình sẽ rất vui nếu giúp đỡ được bạn. 😄

---

**Từ khóa liên quan**: English Conversation Generator, học tiếng Anh, tạo hội thoại, Python, ứng dụng học tập, API, Google Gemini, Fal AI.