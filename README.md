
# 🤖 Personal AI System

> Personal AI System — Hệ thống trí tuệ nhân tạo cá nhân, phát triển độc lập, sử dụng mô hình Open-Weight và có khả năng huấn luyện, mở rộng trong tương lai.

**Repository:** [personal-ai-system](https://github.com/pb110105/personal-ai-system)  
**Phiên bản:** v0.1.0 — Foundation  
**Cập nhật:** 03/11/2026  
**Trạng thái:** 🚧 Đang phát triển

---

## 1. Tổng quan dự án

Personal AI System là dự án xây dựng một hệ thống AI riêng có khả năng:

- Trò chuyện và hỗ trợ người dùng.
- Vận hành bằng mô hình AI Open-Weight.
- Ghi nhớ thông tin và lịch sử hội thoại.
- Học từ dữ liệu riêng thông qua Fine-Tuning.
- Truy xuất tài liệu bằng RAG.
- Sử dụng công cụ và tự động hóa công việc.
- Hỗ trợ lập trình, nghiên cứu và kỹ thuật MEP.
- Kết nối CAD, Revit, Excel và các phần mềm khác.
- Mở rộng thành hệ thống phục vụ nhiều người dùng.

### Mục tiêu dài hạn

Xây dựng một hệ thống AI có thể tự vận hành, quản lý dữ liệu riêng, tùy chỉnh mô hình và cung cấp dịch vụ cho người dùng thông qua website.

Không phụ thuộc vào OpenAI API làm mô hình xử lý chính.

---

## 2. Kiến trúc hệ thống

```text
PERSONAL AI SYSTEM
│
├── Frontend (Next.js)
│   ├── Chat Interface
│   ├── Dashboard
│   └── User Management
│
├── Backend (FastAPI)
│   ├── REST API
│   ├── Authentication
│   └── AI Orchestration
│
├── AI Engine
│   ├── Open-Weight Model
│   ├── Local Inference
│   ├── Fine-Tuning
│   └── Model Evaluation
│
├── AI Agents
│   ├── AI Manager
│   ├── MEP Technical AI
│   ├── Standards AI
│   ├── Coding AI
│   └── CAD/BIM AI
│
├── Memory System
│   ├── PostgreSQL
│   ├── Vector Database
│   └── RAG
│
└── Tools
    ├── Python
    ├── MCP
    ├── AutoCAD
    ├── Revit
    └── Excel
```

---

## 3. Công nghệ sử dụng

| Thành phần | Công nghệ | Trạng thái |
|---|---|---|
| Frontend | Next.js, React, TypeScript | ✅ Hoạt động |
| Backend | Python, FastAPI | ✅ Hoạt động |
| Version Control | Git, GitHub | ✅ Hoạt động |
| AI Inference | Ollama / llama.cpp | ⏳ Chưa triển khai |
| AI Model | Open-Weight LLM | ⏳ Chưa lựa chọn |
| Database | PostgreSQL | ⏳ Chưa triển khai |
| Vector Search | pgvector | ⏳ Chưa triển khai |
| Fine-Tuning | LoRA / QLoRA | ⏳ Chưa triển khai |
| Automation | Python / MCP | ⏳ Chưa triển khai |
| Deployment | Local / Cloud | ⏳ Đang nghiên cứu |

---

## 4. Tiến độ dự án

### Phase 1 — Foundation

**Trạng thái:** 🚧 Đang thực hiện

- [x] Khởi tạo GitHub Repository.
- [x] Thiết lập cấu trúc thư mục.
- [x] Kiểm tra Python, Node.js, npm và Git.
- [x] Khởi tạo Next.js Frontend.
- [x] Khởi tạo FastAPI Backend.
- [x] Tạo API Health Check.
- [x] Kết nối Frontend với Backend.
- [ ] Commit và xác minh mã nguồn Frontend/Backend trên GitHub.
- [ ] Cài đặt AI Inference Engine.
- [ ] Tải và chạy mô hình Open-Weight.
- [ ] Tạo API Chat.
- [ ] Xây dựng giao diện Chat AI.

**Kết quả hiện tại:**

Frontend hoạt động tại:

`http://localhost:3000`

Backend hoạt động tại:

`http://127.0.0.1:8000`

API Health Check:

`GET /health`

Kết quả:

```json
{
  "status": "ok"
}
```

Frontend đã hiển thị:

`Backend đã kết nối thành công`

### Phase 2 — AI Memory & Knowledge

**Trạng thái:** ⏳ Chưa bắt đầu

- [ ] PostgreSQL Database.
- [ ] Lưu lịch sử hội thoại.
- [ ] Quản lý bộ nhớ dài hạn.
- [ ] Vector Database.
- [ ] Retrieval-Augmented Generation (RAG).
- [ ] Thư viện tài liệu dùng chung.
- [ ] Quản lý tài liệu theo dự án.

### Phase 3 — AI Agents

**Trạng thái:** ⏳ Chưa bắt đầu

- [ ] AI Manager.
- [ ] MEP Technical Agent.
- [ ] Standards Agent.
- [ ] Hydraulic Calculation Agent.
- [ ] RFI / QAQC Agent.
- [ ] Coding Agent.
- [ ] CAD/BIM Agent.

### Phase 4 — Tools & Automation

**Trạng thái:** ⏳ Chưa bắt đầu

- [ ] Python Tool Execution.
- [ ] MCP Integration.
- [ ] Excel Processing.
- [ ] PDF Processing.
- [ ] Automated Reports.
- [ ] Workflow Automation.

### Phase 5 — CAD/BIM Integration

**Trạng thái:** ⏳ Chưa bắt đầu

- [ ] Đọc và phân tích DXF.
- [ ] Phát triển AutoLISP Tools.
- [ ] Xuất bản vẽ DXF.
- [ ] Kết nối AutoCAD.
- [ ] Thử nghiệm Revit API.
- [ ] Tự động hóa quy trình thiết kế MEP.

### Phase 6 — Optimization & Deployment

**Trạng thái:** ⏳ Chưa bắt đầu

- [ ] Kiểm thử hệ thống.
- [ ] Tối ưu hiệu năng.
- [ ] Quản lý tài khoản người dùng.
- [ ] Phân quyền và bảo mật.
- [ ] Cloud Deployment.
- [ ] Hỗ trợ nhiều người dùng.
- [ ] Monitoring và Backup.

---

## 5. Các vấn đề đang gặp phải

### ISSUE-001: Giới hạn phần cứng

**Trạng thái:** ⚠️ Chưa giải quyết

Máy tính phát triển hiện tại:

- Model: Dell Latitude 5420.
- CPU: Intel Core i5 Gen 11.
- RAM: 16 GB.
- GPU: Chưa xác nhận.
- OS: Windows.

**Vấn đề:**

RAM 16 GB giới hạn khả năng chạy mô hình lớn và Fine-Tuning.

**Hướng xử lý:**

- Ưu tiên mô hình nhỏ, lượng tử hóa 4-bit.
- Thử nghiệm mô hình khoảng 1.5B–3B.
- Đo tốc độ phản hồi và mức sử dụng RAM.
- Sử dụng GPU Cloud cho Fine-Tuning khi cần.

### ISSUE-002: Chưa lựa chọn AI Model

**Trạng thái:** ⚠️ Chưa giải quyết

Dự án không sử dụng OpenAI API làm bộ não chính.

**Hướng xử lý:**

- Nghiên cứu Qwen và các mô hình Open-Weight phù hợp.
- Kiểm tra giấy phép sử dụng.
- Cài đặt Ollama hoặc llama.cpp.
- Kiểm thử mô hình local.
- Kết nối mô hình với FastAPI.

### ISSUE-003: Fine-Tuning

**Trạng thái:** ⏳ Chưa triển khai

Mục tiêu là phát triển mô hình AI được tùy chỉnh theo dữ liệu và quy trình riêng.

**Hướng xử lý:**

- Xây dựng bộ dữ liệu huấn luyện chất lượng.
- Xây dựng bộ đánh giá độc lập.
- Nghiên cứu LoRA / QLoRA.
- Huấn luyện thử nghiệm khi có phần cứng phù hợp.
- Quản lý các phiên bản mô hình.

### ISSUE-004: Khả năng vận hành 24/7

**Trạng thái:** ⚠️ Chưa giải quyết

Hiện tại hệ thống chạy trên laptop cá nhân.

Khi laptop tắt, các dịch vụ local sẽ ngừng hoạt động.

**Hướng xử lý:**

- Phát triển và kiểm thử trên laptop trước.
- Thiết kế kiến trúc có thể chuyển sang Cloud.
- Triển khai AI Server khi có nhu cầu.
- Tách dữ liệu theo người dùng.
- Tối ưu chi phí hạ tầng GPU.

### ISSUE-005: Bảo mật dữ liệu

**Trạng thái:** 🚧 Cần triển khai xuyên suốt

**Yêu cầu:**

- Không commit API Key hoặc mật khẩu.
- Không đưa dữ liệu cá nhân lên repository công khai.
- Tách dữ liệu của từng người dùng.
- Bổ sung xác thực và phân quyền.
- Có cơ chế sao lưu và phục hồi dữ liệu.
- Kiểm tra giấy phép dữ liệu và mô hình.

### ISSUE-006: Đồng bộ mã nguồn GitHub

**Trạng thái:** ⚠️ Cần xác minh

Repository đã có commit tạo cấu trúc thư mục.

Chưa xác nhận toàn bộ mã nguồn Next.js và FastAPI mới nhất đã được push.

**Hướng xử lý:**

- Kiểm tra `git status`.
- Kiểm tra file thay đổi và `.gitignore`.
- Commit mã nguồn đã kiểm thử.
- Push lên branch `main`.

---

## 6. Lộ trình phát triển

| Phase | Thời gian dự kiến | Nội dung |
|---|---|---|
| 1 | Tuần 1–4 | Foundation + Local AI Chat |
| 2 | Tuần 5–8 | Memory & Knowledge |
| 3 | Tuần 9–12 | AI Agents |
| 4 | Tuần 13–16 | Tools & Automation |
| 5 | Tuần 17–20 | CAD/BIM Integration |
| 6 | Tuần 21–24 | Optimization & Deployment |

Thời gian dự kiến có thể điều chỉnh theo quá trình phát triển thực tế.

Fine-Tuning là một hướng phát triển bổ sung, thực hiện sau khi đã có mô hình local hoạt động ổn định và bộ dữ liệu phù hợp.

---

## 7. Công việc tiếp theo

### Next Sprint — Local AI Integration

- [ ] Kiểm tra GPU và dung lượng SSD còn trống.
- [ ] Lựa chọn mô hình Open-Weight.
- [ ] Cài đặt AI Inference Engine.
- [ ] Chạy thử mô hình AI trên laptop.
- [ ] Xây dựng API Chat trong FastAPI.
- [ ] Kết nối giao diện Next.js với AI.
- [ ] Kiểm thử một cuộc hội thoại thực tế.
- [ ] Đánh giá tốc độ, chất lượng và mức sử dụng RAM.
- [ ] Cập nhật tiến độ GitHub.

**Milestone tiếp theo:**

Người dùng có thể truy cập `localhost:3000`, nhập câu hỏi và nhận câu trả lời từ mô hình AI chạy local mà không cần OpenAI API.

---

## 8. Nhật ký phát triển

| Ngày | Nội dung | Kết quả |
|---|---|---|
| 30/10/2026 | Bắt đầu xây dựng repository | ✅ |
| 03/11/2026 | Kiểm tra môi trường lập trình | ✅ |
| 03/11/2026 | Hoàn thành cấu trúc thư mục | ✅ |
| 03/11/2026 | Khởi chạy Next.js | ✅ |
| 03/11/2026 | Khởi chạy FastAPI | ✅ |
| 03/11/2026 | Kết nối Frontend–Backend | ✅ |
| 03/11/2026 | Chuyển định hướng sang Open-Weight AI | ✅ |
| 03/11/2026 | Đánh giá rủi ro phần cứng và Hosting | ⚠️ |
| 03/11/2026 | Cập nhật README và Issue Tracking | 📝 |

---

## 9. Nguyên tắc phát triển

1. Ưu tiên hệ thống chạy được trước khi mở rộng.
2. Mỗi chức năng phải được kiểm thử.
3. Không đánh dấu hoàn thành khi chưa xác minh.
4. Quản lý mã nguồn bằng GitHub.
5. Không lưu dữ liệu nhạy cảm trong Git.
6. Tách biệt mô hình AI, dữ liệu, Backend và Frontend.
7. Ưu tiên mô hình Open-Weight có giấy phép phù hợp.
8. Fine-Tuning không thay thế RAG và công cụ tính toán.
9. Thiết kế theo hướng hỗ trợ nhiều người dùng.
10. Cập nhật README sau mỗi mốc phát triển.

---

**Project:** Personal AI System  
**Maintainer:** pb110105  
**Current Version:** v0.1.0 — Foundation  
**Next Milestone:** Local Open-Weight AI Chat MVP
