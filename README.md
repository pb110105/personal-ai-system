# Personal AI System

> **Trạng thái:** Planning / Foundation · **Cập nhật:** 03/11/2026 · **Repository:** [pb110105/personal-ai-system](https://github.com/pb110105/personal-ai-system)

## 1. Tổng quan

**Personal AI System** là dự án xây dựng trợ lý AI cá nhân có khả năng quản lý tri thức, ghi nhớ ngữ cảnh, tổ chức công việc, phối hợp các AI chuyên gia và sử dụng công cụ để hỗ trợ thực hiện nhiệm vụ.

Dự án ưu tiên hai nhóm nhu cầu:

- **Trợ lý cá nhân:** nghiên cứu, học tập, ghi chú, lập trình, quản lý tài liệu và công việc.
- **Trợ lý kỹ thuật:** hỗ trợ MEP (cấp thoát nước, PCCC, hồ bơi, xử lý nước thải), tra cứu tiêu chuẩn, kiểm tra tính toán, xử lý RFI, QA/QC và hỗ trợ CAD/BIM.

**Nguyên tắc:** AI phải truy xuất được nguồn tài liệu, phân biệt dữ liệu chắc chắn/chưa chắc chắn, ghi lại các thao tác và yêu cầu phê duyệt trước khi thực hiện hành động có thể ảnh hưởng dữ liệu quan trọng. Quyết định thiết kế cuối cùng thuộc về kỹ sư.

## 2. Mục tiêu sản phẩm

| Nhóm tính năng | Mục tiêu | Trạng thái |
|---|---|---|
| Chat AI riêng | Giao diện hội thoại với mô hình AI qua API | ⬜ Chưa triển khai |
| Lịch sử & bộ nhớ | Lưu hội thoại, ngữ cảnh và tri thức cần thiết | ⬜ Chưa triển khai |
| Không gian dự án | Tách dữ liệu theo dự án; dùng chung thư viện cho phép | ⬜ Chưa triển khai |
| Thư viện tài liệu | Đọc PDF/DOCX/XLSX, đồng bộ nguồn và truy xuất có dẫn chứng | ⬜ Chưa triển khai |
| AI Manager | Điều phối công việc và các AI chuyên gia | ⬜ Chưa triển khai |
| AI MEP | Hỗ trợ tiêu chuẩn, thủy lực, RFI, QA/QC | ⬜ Chưa triển khai |
| Tool execution | Tính toán Python, tạo Excel/PDF, tích hợp API/MCP | ⬜ Chưa triển khai |
| CAD/BIM | Phân tích DXF, sinh DXF/AutoLISP; thử nghiệm Revit API | ⬜ Chưa triển khai |
| Bảo mật & vận hành | Phân quyền, phê duyệt, kiểm thử, sao lưu và nhật ký | ⬜ Chưa triển khai |

## 3. Kiến trúc đề xuất

```text
Web UI (Next.js/React)
        |
Backend API (Python/FastAPI)
        |
AI Manager (OpenAI API / tùy chọn Claude API)
        |
        +-- AI chuyên gia: Standards, MEP, Hydraulic, RFI/QAQC, Coding, Project
        +-- Knowledge retrieval: PostgreSQL + pgvector (RAG)
        +-- Project data & conversation history: PostgreSQL
        +-- File ingestion: PDF / DOCX / XLSX / Google Drive
        +-- Tools: Python / Excel / MCP / DXF / AutoLISP / Revit API
        |
Approval, logging, access control, evaluation & backup
```

Kiến trúc và công nghệ là **đề xuất**, chưa phải các thành phần đã cài đặt hoặc hoạt động.

### Công nghệ dự kiến

| Thành phần | Công nghệ |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Backend | Python, FastAPI |
| AI | OpenAI API; có thể bổ sung Claude API |
| Cơ sở dữ liệu | PostgreSQL |
| Tìm kiếm ngữ nghĩa | pgvector, RAG |
| Tài liệu | PDF/DOCX/XLSX, Google Drive |
| Tích hợp | API, MCP, Python scripts |
| CAD/BIM | DXF, AutoLISP, AutoCAD/Revit API |
| Version control & CI | GitHub, GitHub Actions |

## 4. Tiến độ hiện tại

**Ngày cập nhật: 03/11/2026.** Trạng thái dựa trên nội dung đã thống nhất và những gì quan sát được trong repository. Checklist được cập nhật theo **bằng chứng thực thi**, không tính kế hoạch là code đã hoàn thành.

### Đã hoàn thành (khâu chuẩn bị)

- [x] Xác định mục tiêu AI cá nhân số và phạm vi AI MEP.
- [x] Thống nhất kiến trúc định hướng và stack công nghệ dự kiến.
- [x] Phác thảo lộ trình 6 giai đoạn / 24 tuần.
- [x] Tạo GitHub repository `pb110105/personal-ai-system` với README khởi tạo.

### Đang chuẩn bị / chưa xác minh

- [ ] Cập nhật README lên nhánh `main` (chỉ đánh dấu khi đã push/merge thành công).
- [ ] Kiểm tra môi trường local: Git, Python, Node.js, VS Code.
- [ ] Cấu hình `.gitignore`, `.env.example`, quy trình commit và bảo mật.
- [ ] Khởi tạo cấu trúc dự án và ứng dụng chạy thử.

**Không có bằng chứng trên `main` rằng frontend, backend hoặc cơ sở dữ liệu đã được triển khai.**

## 5. Roadmap 24 tuần

> Các khoảng tuần là **ước tính tương đối**, không phải lịch đã bắt đầu thực hiện; điều chỉnh theo thời gian rảnh và kết quả kiểm thử.

| Giai đoạn | Thời gian dự kiến | Công việc chính | Tiêu chí hoàn thành | Trạng thái |
|---|---|---|---|---|
| 1. Foundation | Tuần 1–4 | Môi trường, Git, Next.js, FastAPI, API chat, lưu hội thoại | Chat chạy được và lưu lịch sử | ⬜ Chưa bắt đầu |
| 2. Memory & Knowledge | Tuần 5–8 | Dự án, upload tài liệu, RAG, Drive | Trả lời có trích nguồn tài liệu | ⬜ Chưa bắt đầu |
| 3. Multi-Agent | Tuần 9–12 | AI Manager và AI chuyên gia | Phân công và tổng hợp đúng công việc | ⬜ Chưa bắt đầu |
| 4. Tools & Automation | Tuần 13–16 | Python tools, Excel/PDF, API/MCP, logging | Tạo kết quả đầu ra có kiểm chứng | ⬜ Chưa bắt đầu |
| 5. CAD/BIM | Tuần 17–20 | Phân tích DXF, tính toán, AutoLISP, Revit API thử nghiệm | Đầu ra CAD kiểm tra được | ⬜ Chưa bắt đầu |
| 6. QA & Deployment | Tuần 21–24 | Kiểm thử, bảo mật, sao lưu, tối ưu, triển khai | Có phiên bản dùng ổn định | ⬜ Chưa bắt đầu |

**Ký hiệu:** ✅ Hoàn thành · 🚧 Đang thực hiện · ⬜ Chưa bắt đầu · ⚠️ Bị chặn.

## 6. Kế hoạch ngắn hạn (Sprint 01)

**Mục tiêu sprint:** tạo ứng dụng chat AI tối thiểu chạy local, có quy trình Git rõ ràng.

- [ ] **S01-01** — Kiểm tra và ghi phiên bản Python, Node.js, Git.
- [ ] **S01-02** — Chuẩn bị repo local, `.gitignore` và `.env.example` (không chứa key thật).
- [ ] **S01-03** — Khởi tạo `frontend/` với Next.js.
- [ ] **S01-04** — Khởi tạo `backend/` với FastAPI và endpoint `/health`.
- [ ] **S01-05** — Kết nối API mô hình AI thông qua backend.
- [ ] **S01-06** — Xây giao diện chat và kết nối frontend/backend.
- [ ] **S01-07** — Thực hiện kiểm thử cơ bản, ghi hướng dẫn chạy local.

### Tiêu chí nghiệm thu Sprint 01

1. Có thể chạy frontend và backend từ máy local theo hướng dẫn.
2. Giao diện gửi câu hỏi đến backend và nhận phản hồi từ mô hình AI.
3. Không lộ API key trong frontend, commit hoặc log.
4. README phản ánh đúng kết quả đã triển khai.

## 7. Cấu trúc thư mục dự kiến

```text
personal-ai-system/
├── frontend/          # Next.js UI
├── backend/           # FastAPI & service logic
├── agents/            # Vai trò / workflow AI
├── memory/            # Ingestion, search, RAG
├── tools/             # Python, MCP, CAD/BIM tools
├── tests/             # Automated tests
├── docs/              # Kiến trúc, hướng dẫn, quyết định thiết kế
├── .env.example       # Tên biến môi trường, không chứa bí mật
├── .gitignore
└── README.md
```

> Đây là **cấu trúc mục tiêu**, không phải danh sách folder hiện đang tồn tại.

## 8. Bảo mật và quy tắc vận hành

- Nên đặt repository ở chế độ **Private** nếu dùng cho code và quy trình cá nhân hoặc công việc.
- Không commit `.env`, API key, mật khẩu, token, dữ liệu dự án bảo mật hay thông tin cá nhân nhạy cảm.
- Dùng `.env.example` để mô tả biến môi trường cần cấu hình.
- Tránh đưa bản vẽ/tài liệu khách hàng lên dịch vụ bên ngoài khi chưa có quyền.
- Với tính toán MEP, yêu cầu dẫn nguồn tiêu chuẩn, ghi giả thiết và kiểm tra thủ công trước khi phát hành hồ sơ.
- Với thao tác sửa/xóa tài liệu, ghi nhật ký và yêu cầu xác nhận.
- Tạo backup dữ liệu và kiểm thử restore trước khi vận hành thực tế.

## 9. Cách cập nhật tiến độ

Khi hoàn thành một hạng mục:

1. Commit code và chạy kiểm thử tương ứng.
2. Đổi `[ ]` thành `[x]` trong checklist; cập nhật trạng thái giai đoạn nếu có bằng chứng.
3. Ghi ngày, kết quả kiểm thử và liên kết commit/PR/Issue nếu cần.
4. Cập nhật phần **Tiến độ hiện tại** và **Sprint** trước khi merge vào `main`.

Gợi ý sử dụng GitHub Issues cho các đầu việc `S01-xx`, và Pull Requests để kiểm tra thay đổi.

## 10. Nhật ký dự án

| Ngày | Nội dung | Trạng thái |
|---|---|---|
| 30/10/2026 | Bắt đầu trao đổi về Git và repository AI cá nhân | Ghi nhận |
| 03/11/2026 | Xác định kiến trúc AI, roadmap 24 tuần | Hoàn thành phần kế hoạch |
| 03/11/2026 | Soạn bản README mô tả dự án và theo dõi tiến độ | Chờ đưa lên GitHub |

---

**Maintainer:** `pb110105`  
**Development status:** Planning / Foundation  
**Next milestone:** Sprint 01 — Local AI Chat MVP
