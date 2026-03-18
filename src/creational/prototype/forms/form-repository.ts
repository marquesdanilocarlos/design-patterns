import Form from "@/creational/prototype/forms/form";

export default interface FormRepository {
    getById(formId: string): Promise<Form>
    save(form: Form): Promise<void>
}