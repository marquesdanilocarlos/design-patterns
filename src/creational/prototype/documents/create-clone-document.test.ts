import Document from "@/creational/prototype/documents/document"
import Title from "@/creational/prototype/documents/title";
import TextBox from "@/creational/prototype/documents/text-box";
import Drawing from "@/creational/prototype/documents/drawing";
import Link from "@/creational/prototype/documents/link";

test('Deve criar e clonar um documento com seus componentes vinculados', () => {
    const title = new Title('Título Exemplo')
    const textBox = new TextBox('Utilizado para exemplos ilustrativos')
    const drawing = new Drawing('circle')
    const link = new Link('example.com', 'https://example.com')

    const document = new Document(title, textBox, drawing, link)

    expect(document.title.text).toBe('Título Exemplo')
    expect(document.textBox.text).toBe('Utilizado para exemplos ilustrativos')
    expect(document.drawing.shape).toBe('circle')
    expect(document.link.text).toBe('example.com')

    title.text = 'Título Alterado'

    const clonedDocument = document.clone()
    clonedDocument.title = title
    clonedDocument.textBox.text = 'Texto da box Alterado'

    expect(clonedDocument.title.text).toBe('Título Alterado')
    expect(clonedDocument.textBox.text).toBe('Texto da box Alterado')
    expect(clonedDocument.drawing.shape).toBe('circle')
    expect(clonedDocument.link.text).toBe('example.com')
})