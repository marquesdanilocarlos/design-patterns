import Directory from "@/structural/composite/directory";
import File from "@/structural/composite/file";

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

console.log(directory.show())
