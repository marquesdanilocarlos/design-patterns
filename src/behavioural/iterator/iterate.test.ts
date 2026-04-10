import ListIterator from "@/behavioural/iterator/list-iterator";
import MatrixIterator from "@/behavioural/iterator/matrix-iterator";
import AggregatePrint from "@/behavioural/iterator/aggregate-print";
import List from "@/behavioural/iterator/list";
import Matrix from "@/behavioural/iterator/matrix";

test('Deve iterar sobre uma lista', () => {
    const list = new List(9)

    list.addItem(1)
    list.addItem(2)
    list.addItem(3)
    list.addItem(4)
    list.addItem(5)
    list.addItem(6)
    list.addItem(7)
    list.addItem(8)
    list.addItem(9)
    list.addItem(10)

    let result = AggregatePrint.iterate(list)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])

})

test('Deve iterar sobre uma matriz', () => {
    const matrix = new Matrix(3, 3)

    matrix.addItem(1)
    matrix.addItem(2)
    matrix.addItem(3)
    matrix.addItem(4)
    matrix.addItem(5)
    matrix.addItem(6)
    matrix.addItem(7)
    matrix.addItem(8)
    matrix.addItem(9)
    matrix.addItem(10)

    let result = AggregatePrint.iterate(matrix)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])

})