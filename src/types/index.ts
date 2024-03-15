//定义接口,用于限制Person的属性
export interface PersonInterface {
    id: string,
    name: string,
    age: number
}


//一个自定义类型
export type Persons = Array<PersonInterface>
// export type Persons=PersonInterface[]  另一种写法