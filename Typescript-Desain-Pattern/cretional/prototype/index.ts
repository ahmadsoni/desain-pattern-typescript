namespace PrototypePattern {
    class User {
        public name:string;
        public username:string;
        public umur: number;
        public email: string;
       constructor({name = '', username = '', umur = 0, email =''}){
            this.name = name;
            this.username = username;
            this.umur = umur;
            this.email = email;
       }

       public clone(): this{
         const clone = Object.assign({}, this);
         return clone;
       }
    }
    // ini akan berulang dan memakan banyak resource dan tidak reusable
    const user4 = new User({name: 'soni', username: 'sun'})
    const user3 = new User({name: 'soni', username: 'sun'})
    const user2 = new User({name: 'soni', username: 'sun'})

    // contoh penerapan prototype
    const user1 = user4.clone();
    user1.name = 'test';
    console.log(user1)
}