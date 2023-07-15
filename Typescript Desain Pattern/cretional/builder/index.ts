class User {
    private name:string;
    private umur: number;
    private email: string;
    constructor(name: string, umur: number, email: string){
        this.name = name;
        this.umur = umur;
        this.email = email;
    }
}
// nah kita akan kerepotan jika menganti semua ini jadi kita perlu builder
 const user1 = new User('soni', 12)
 const user2 = new User('soni', 12)
 const user3 = new User('soni', 12)