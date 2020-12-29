class Person{
    name
    age
    job
    constructor(name, age, job)
    {
        this.name=name;
        this.age=age;
        this.job=job;
    }
}
class Family{
    lishPer
    add
    constructor(add)
    {
        this.lishPer=[];
        this.add=add;
    }
    addPerson(person)
    {
        this.lishPer.push(person)
    }
    getLishPer()
    {
        for( let item of this.lishPer)
        {
            console.log(item)
        }
    }
}
class Town{
    lishFamily
    constructor()
    {
        this.lishFamily=[]
    }
    addFamily(family)
    {
        this.lishFamily.push(family)
    }
    getLishFamily()
    {
        for(let item of this.lishFamily)
        {
            console.log(item)
        }
    }
    findAdd(address)
    {
        for(let item of this.lishFamily)
        {
            if(item.add===address)
            {
                return item.lishPer
            }
        }
    }
}
const per1 = new Person('Nguyễn Bảo Long', 20, 'lalal');
const per2 = new Person('Nguyễn Thu Trang', 20, 'abc');
const per3 = new Person('Nguyễn Tiến Thuận', 20, 'ads');
const per4 = new Person('Vũ Văn Lập', 20, 'asd');
const per5 = new Person('Lê Minh Đức', 20, 'xcvb');
const per6 = new Person('Dương Tuyết Nhung', 20, 'qưert');
const per7 = new Person('Nguyễn Phương Quỳnh', 20, 'ádfg');
const per8 = new Person('CHiến', 20, '12345');
const per9 = new Person('Balaa', 20, 'vbnm,');
const fa1 = new Family('bg')
fa1.addPerson(per1)
fa1.addPerson(per2) 
fa1.addPerson(per3) 
fa1.addPerson(per4) 
const fa2= new Family('th')
fa2.addPerson(per5)
fa2.addPerson(per6)
fa2.addPerson(per7)
fa2.addPerson(per8)
fa2.addPerson(per9)
const tow = new Town()
tow.addFamily(fa1)
tow.addFamily(fa2)
console.log(tow)
const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    let i = input.value;
    let find = tow.findAdd(i);
    let value = document.getElementById("value");
    value.innerHTML = '';
    for (let item of find) {
        value.insertAdjacentHTML("beforeend", `
        <div style="display: inline-block; margin-right: 2em">
        <p><strong>Tên:</strong> ${item.name}</p>
        <p><strong>Tuổi:</strong> ${item.age}</p>
        <p><strong>Nghề nghiệp:</strong> ${item.job}</p>
        <br>
        <br>
        </div>
        `)
    }
});

