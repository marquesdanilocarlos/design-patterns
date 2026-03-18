import FormRepository from "@/creational/prototype/forms/form-repository";
import Form from "@/creational/prototype/forms/form";

export type CopyFormInput = {
    fromFormId: string
    newFormId: string
    newCategory: string
    newDescription: string
}

export default class CopyForm {
    constructor(private formRepository: FormRepository) {
    }

    async execute (input: CopyFormInput): Promise<void> {
        const form: Form = await this.formRepository.getById(input.fromFormId)
        const newForm = form.clone()
        newForm.formId = input.newFormId
        newForm.category = input.newCategory
        newForm.description = input.newDescription
        await this.formRepository.save(newForm)
    }
}