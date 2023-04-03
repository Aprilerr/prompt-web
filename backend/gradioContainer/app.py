import gradio as gr
import os

os.environ['GRADIO_SERVER_NAME'] = '0.0.0.0'
os.environ['GRADIO_SERVER_PORT'] = '9000'

def greet(name):
    return "Hello " + name + "!"

with gr.Blocks(theme=gr.themes.Default()) as demo:
    name = gr.Textbox(label="Name")
    output = gr.Textbox(label="Output Box")
    greet_btn = gr.Button("Greet")
    greet_btn.click(fn=greet, inputs=name, outputs=output)
demo.launch()