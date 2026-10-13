# Đê Mê Game · GitHub Pages

Website Đê Mê Game chạy bằng React + Vite trên GitHub Pages. Có kho Việt hoá ở trạng thái đề xuất, danh sách quan tâm trên trình duyệt, video thật của kênh và bản tin game Việt Nam / quốc tế.

## Chạy và build

Yêu cầu Node.js 22.13 trở lên:

```sh
npm ci
npm run dev
npm run news:update
npm run build
npm run preview
```

Website sử dụng đường dẫn `/de-me-game/`. Nếu đổi tên repo hoặc dùng tên miền riêng, sửa `base` trong `vite.config.ts`.

## Xuất bản

Trong **Settings → Pages**, chọn **Source: GitHub Actions**. Workflow `pages.yml` build và deploy khi push lên `main`, khi chạy thủ công và theo lịch mỗi giờ. GitHub có thể trì hoãn các lần chạy theo lịch; xem thời điểm xuất bản của bản tin ngay trên website.

Pages không có máy chủ `/api/news`. Script `scripts/update-news.mjs` lấy tiêu đề, ảnh và link từ Lag.vn và RSS PC Gamer trong quy trình build rồi ghi `public/news.json`. Trang kiểm tra JSON mỗi 15 phút khi mở. Nếu nguồn lỗi, giữ bản tin trước đó và đánh dấu đã lưu. Không sao chép bài đầy đủ.

## Nội dung

`src/site-data.ts`: game đề xuất, video và kênh YouTube. `src/page.tsx`: giao diện. `src/globals.css`: màu, bố cục và responsive. `scripts/news-parser.mjs`: bộ đọc và các tiêu đề biên tập tiếng Việt.

Kho chưa mở bán, chưa có thanh toán hoặc file Việt hoá tải xuống. Danh mục không khẳng định các game chưa có bản dịch trong cộng đồng.

Logo và thumbnail từ kênh Đê Mê Game do chủ website cung cấp; ảnh hero từ Steam. Hình và tên game thuộc chủ sở hữu tương ứng. Trước khi mở bán, cần xác nhận quyền phân phối bản dịch và thông tin tương thích.
