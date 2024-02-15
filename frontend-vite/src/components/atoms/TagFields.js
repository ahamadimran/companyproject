import Tagsfield from 'bulma-tagsfield'

export default class MyTagsField extends Tagsfield {
    constructor(onChange, ...args) {
        super(...args);
        this.onChange = onChange
    }

    onKeyDown(event) {
        if (['Enter', ','].indexOf(event.key) >= 0) {
            event.preventDefault()
            const value = this.editable.textContent.trim()
            if (value === "")
                return
            const tagsValues = this.input.value.split(',').filter(v => v.length > 0)
            tagsValues.push(value)
            this.input.value = tagsValues.join(',')
            this.addTag(value)
            this.editable.innerHTML = ''
            this.onChange(tagsValues)
        } else if (event.key === 'Backspace' &&
            this.editable.textContent.length === 0 &&
            this.el.children.length > 1) {
            const index = this.el.children.length - 2
            const tag = this.el.children[index]
            this.removeTag(tag)
            if (this.input.value.trim() === "")
                this.onChange([])
            else
                this.onChange(this.input.value.split(","))
        }
    }
}