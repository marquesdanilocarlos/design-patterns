export default abstract class Pizza {
    protected description!: string
    protected price!: number

    abstract getDescription(): string

    abstract getPrice(): number
}