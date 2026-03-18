import FormRepository from "@/creational/prototype/forms/form-repository";
import Form from "@/creational/prototype/forms/form";

export default class MemoryFormRepository implements FormRepository {
    private forms: Form[] = []

    async getById(formId: string): Promise<Form> {
        const form = this.forms.find((form: Form) => form.formId === formId)

        if (!form) {
            throw new Error('Form not found')
        }

        return form
    }

    async save(form: Form): Promise<void> {
        this.forms.push(form)
    }
}