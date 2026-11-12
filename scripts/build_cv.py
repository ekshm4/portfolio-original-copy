"""Generate the one-page CV from the same data used by the portfolio.

Requires Python 3 standard library only. Run: python3 scripts/build_cv.py
"""
import json
import textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
cv = json.loads((ROOT / "src/data/cv.json").read_text())
commands = []
y = 795


def text(value, size=10, bold=False, gap=15, color="0.10 0.14 0.20"):
    global y
    safe = value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
    commands.append(f"BT /{'F2' if bold else 'F1'} {size} Tf {color} rg 1 0 0 1 48 {y} Tm ({safe}) Tj ET")
    y -= gap


def section(label):
    global y
    y -= 13
    text(label.upper(), 10, True, 19, "0.10 0.35 0.64")


def paragraph(value, width=96):
    for line in textwrap.wrap(value, width):
        text(line)


text(cv["name"], 25, True, 32)
text(cv["title"], 12, False, 23, "0.10 0.35 0.64")
text(cv["email"] + "  |  " + cv["phone"], 9, gap=14)
text(cv["website"], 9, gap=14)
text(cv["github"], 9, gap=20)
commands.append(f"0.15 0.53 0.96 RG 1 w 48 {y} m 547 {y} l S")
y -= 22
paragraph(cv["summary"])
section("Experience")
for item in cv["experience"]:
    text(item["role"], 11, True, 17)
    text(item["company"] + "  |  " + item["period"], 9, gap=22)
section("Education")
for item in cv["education"]:
    text(item["degree"], 11, True, 17)
    text(item["school"] + "  |  " + item["period"], 9, gap=18)
section("Technical toolkit")
for item in cv["skills"]:
    paragraph(item)
section("Selected capabilities")
for item in cv["highlights"]:
    paragraph("- " + item)
    y -= 4
assert y > 45, "CV content no longer fits one page; revise layout before publishing."

stream = "\n".join(commands).encode("latin-1")
objects = [
    b"<< /Type /Catalog /Pages 2 0 R >>",
    b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    f"<< /Length {len(stream)} >>\nstream\n".encode() + stream + b"\nendstream",
]
output = bytearray(b"%PDF-1.4\n")
offsets = [0]
for index, item in enumerate(objects, 1):
    offsets.append(len(output))
    output.extend(f"{index} 0 obj\n".encode() + item + b"\nendobj\n")
xref = len(output)
output.extend(f"xref\n0 {len(objects)+1}\n0000000000 65535 f \n".encode())
for offset in offsets[1:]:
    output.extend(f"{offset:010d} 00000 n \n".encode())
output.extend(f"trailer\n<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode())
(ROOT / "public/cv.pdf").write_bytes(output)
print("Generated public/cv.pdf from src/data/cv.json")
