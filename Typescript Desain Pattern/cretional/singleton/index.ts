class Me {
    private firstName: string = '';
    private lastName: string = '';

    getFullName(): string{
        this.firstName = 'soni';
        this.lastName = 'ahmad';
        return `${this.firstName} ${this.lastName}`;
    }
}

const profile1 = new Me();
console.log(profile1.getFullName());
const profile2 = new Me();
console.log(profile2.getFullName());
// maka hasilnya akan false karena dia tidak akan membuat instance dari instance yang pertama dari profile 1 dan akan membuat baru instace class
console.log(profile1 === profile2);