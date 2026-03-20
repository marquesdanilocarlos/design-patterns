import Directory from "@/structural/composite/directory";
import File from "@/structural/composite/file";
import FileManager from "@/structural/composite/fileManager";

test('Deve criar um diretório com 6 arquivos', () => {
    const directory = new Directory('root', '/');

    const file1 = new File('file1.txt', '/file1.txt')
    const file2 = new File('file2.txt', '/file2.txt')
    const file3 = new File('file3.txt', '/file3.txt')
    const file4 = new File('file4.txt', '/file4.txt')
    const file5 = new File('file5.txt', '/file5.txt')
    const file6 = new File('file6.txt', '/file6.txt')

    directory.add(file1)
    directory.add(file2)
    directory.add(file3)
    directory.add(file4)
    directory.add(file5)
    directory.add(file6)

    const directoryDetails = directory.show()

    expect(directoryDetails).toBe('root - [/] \n - file1.txt - [/file1.txt] \n - file2.txt - [/file2.txt] \n - file3.txt - [/file3.txt] \n - file4.txt - [/file4.txt] \n - file5.txt - [/file5.txt] \n - file6.txt - [/file6.txt] \n')
})

test('Deve criar um gerenciador de arquivos com uma árvore de pastas e arquivos', () => {
    const root = new Directory('root', '/');
    const fileManager = new FileManager(root)

    const file1 = new File('file1.txt', '/file1.txt')
    const file2 = new File('file2.txt', '/file2.txt')
    const file3 = new File('file3.txt', '/file3.txt')

    const childDirectory = new Directory('childDirectory', '/child')

    const file4 = new File('file4.txt', '/file4.txt')
    const file5 = new File('file5.txt', '/file5.txt')
    const file6 = new File('file6.txt', '/file6.txt')

    root.add(file1)
    root.add(file2)
    root.add(file3)
    root.add(childDirectory)
    childDirectory.add(file4)
    childDirectory.add(file5)
    childDirectory.add(file6)

    const allDetails = fileManager.showAll()

    expect(allDetails).toBe('root - [/] \n - file1.txt - [/file1.txt] \n - file2.txt - [/file2.txt] \n - file3.txt - [/file3.txt] \nchildDirectory - [/child] \n - file4.txt - [/file4.txt] \n - file5.txt - [/file5.txt] \n - file6.txt - [/file6.txt] \n')

})