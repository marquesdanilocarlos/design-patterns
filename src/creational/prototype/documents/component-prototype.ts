import Cloneable from "@/creational/prototype/documents/cloneable";

export default class ComponentPrototype implements Cloneable<ComponentPrototype>{
    clone(): ComponentPrototype {
        return {...this}
    }
}