from pdf import write_text_on_pdf, write_image_on_pdf
import json
'''
write_text_on_pdf(
    "Application.pdf",
    "output.pdf",
    0, # pagenum
    -230, # x
    465, # y
    "here should"
)
'''
write_image_on_pdf(
    "Application.pdf",
    "output.pdf",
    0,
    45.5,
    344,
    10,
    10,
    "assets/tick.png"
)

if False:
    f = open('attributes.json')
    data = json.load(f)
    for i in data:
        for position in i["positions"]:
            print(position["x"], position["y"], i["name"])
            write_text_on_pdf(
                "output.pdf",
                "output.pdf",
                position["n"], # pagenum
                position["x"], # x
                position["y"], # y
                i["name"]
            )
            import time

