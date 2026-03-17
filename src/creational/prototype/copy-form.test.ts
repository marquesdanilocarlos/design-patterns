import CopyForm from "@/creational/prototype/copy-form";
import MemoryFormRepository from "@/creational/prototype/memory-form-repository";
import Form from "@/creational/prototype/form";

test('Deve copiar um formulário', async() => {
    const formRepository = new MemoryFormRepository()

    const form = new Form('1', 'Marketing', 'Leads v1')
    form.addField('text', 'name')
    form.addField('text', 'email')
    await formRepository.save(form)

    const copyForm = new CopyForm(formRepository)
    await copyForm.execute({
        fromFormId: '1',
        newFormId: '2',
        newCategory: 'Marketing',
        newDescription: 'Leads v2',
    })

    const newForm = await formRepository.getById('2')

    expect(newForm.category).toBe('Marketing')
    expect(newForm.description).toBe('Leads v2')

    expect(newForm.fields).toHaveLength(2)
    expect(newForm.fields.at(0)?.title).toBe('name')
    expect(newForm.fields.at(1)?.title).toBe('email')
})