import Form from "@/creational/prototype/form";

export default interface FormRepository {
    getById(formId: string): Promise<Form>
    save(form: Form): Promise<void>
}