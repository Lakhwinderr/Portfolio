"""Generate 16:10 card thumbnails at 2x retina resolution."""
from PIL import Image
import os

TARGET_W, TARGET_H = 1440, 900
QUALITY = 85
BASE = os.path.join(os.path.dirname(__file__), "..", "src", "assets")
OUT = os.path.join(BASE, "cards")


def cover_crop(im, anchor="top"):
    src_w, src_h = im.size
    scale = max(TARGET_W / src_w, TARGET_H / src_h)
    new_w = round(src_w * scale)
    new_h = round(src_h * scale)
    im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = max(0, (new_w - TARGET_W) // 2)
    top = 0 if anchor == "top" else max(0, (new_h - TARGET_H) // 2)
    return im.crop((left, top, left + TARGET_W, top + TARGET_H))


SOURCES = {
    "Design/Homepage.jpg": ("homepage.jpg", "top"),
    "Design/Blog Page.jpg": ("blog-page.jpg", "top"),
    "Design/Post Page.jpg": ("post-page.jpg", "top"),
    "Design/Your Design.jpg": ("your-design.jpg", "top"),
    "Design/bookCover.JPG": ("bookCover.jpg", "center"),
    "Dev/1.jpeg": ("dev-1.jpg", "top"),
    "Dev/2.jpeg": ("dev-2.jpg", "top"),
    "Dev/3.jpeg": ("dev-3.jpg", "top"),
    "Dev/4.jpeg": ("dev-4.jpg", "top"),
    "Dev/5.jpeg": ("dev-5.jpg", "top"),
    "Dev/11.jpeg": ("dev-11.jpg", "top"),
    "Dev/21.jpeg": ("dev-21.jpg", "top"),
    "Dev/22.jpeg": ("dev-22.jpg", "top"),
    "Dev/23.jpeg": ("dev-23.jpg", "top"),
    "Dev/24.jpeg": ("dev-24.jpg", "top"),
    "project2.jpg": ("project2.jpg", "top"),
}


if __name__ == "__main__":
    print("BEFORE -> AFTER (bytes, dimensions)")
    for src_rel, (dst_name, anchor) in SOURCES.items():
        src_path = os.path.join(BASE, src_rel)
        dst_path = os.path.join(OUT, dst_name)
        before_size = os.path.getsize(dst_path) if os.path.exists(dst_path) else 0
        before_dims = (0, 0)
        if os.path.exists(dst_path):
            with Image.open(dst_path) as old:
                before_dims = old.size
        im = Image.open(src_path)
        if im.mode != "RGB":
            im = im.convert("RGB")
        thumb = cover_crop(im, anchor)
        thumb.save(dst_path, "JPEG", quality=QUALITY, optimize=True)
        after_size = os.path.getsize(dst_path)
        print(
            f"{dst_name}: {before_size}B {before_dims[0]}x{before_dims[1]} "
            f"-> {after_size}B {TARGET_W}x{TARGET_H}"
        )
