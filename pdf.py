from PyPDF2 import PdfWriter, PdfReader
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from os import system

def write_text_on_pdf(input_path, output_path, page_number, x, y, text):
    pdf = canvas.Canvas("temp.pdf", pagesize=A4)
    pdf.translate(x, y) # move origin point of canvas
    pdf.setFillColor(colors.black, alpha=1) # input the color value and use the alpha value to adjust the transparency of watermark
    pdf.setFont("Helvetica", 12) # input the font and font size
    pdf.drawString(400, 100, text) # choose the positive you would like to put the watermark
    pdf.save() # export the watermark

    pdf_reader = PdfReader(open(input_path, "rb"))
    pdf_writer = PdfWriter()
    pdf_reader.pages[page_number].merge_page(PdfReader(open("temp.pdf", "rb")).pages[0])
    for page in pdf_reader.pages:
        pdf_writer.add_page(page)
    with open(output_path, "wb") as out:
        pdf_writer.write(out)
    system("rm temp.pdf")