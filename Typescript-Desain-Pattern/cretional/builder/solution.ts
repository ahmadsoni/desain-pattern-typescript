namespace BuilderSolution {
    // Cara 1
    class User {
        public name:string;
        public username:string;
        public umur: number;
        public email: string;
       getDetails(): string {
         return `${this.name} username ${this.username}`
       }
    }

    class UserBuilder{
        private user: User;
        constructor(){
            this.user = new User();
        }
        setName(value: string){
            this.user.name = value;
            return this;
        }
        setUsername(value: string){
            this.user.username = value;
            return this;
        }
        setUmur(value: number){
            this.user.umur = value;
            return this;
        }
        setEmail(value: string){
            this.user.email = value;
            return this;
        }

        build(): User{
            if(!this.user.username){
                throw new Error('Username tidak boleh kosong')
            }
            return this.user;
        }
    }

    const user1 = new UserBuilder()
                    .setEmail('soniahmad476@gmail.com')
                    .setName('Ahmad Shonhaji')
                    .setUmur(20)
                    .setUsername('sun')
                    .build()
    const user2 = new UserBuilder()
                    .setEmail('soniahmad476@gmail.com')
                    .setUsername('Ahmad Shonhaji')
                    .build()

    console.log(user1);
    console.log(user2);

    // Cara 2
    class User2 {
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
    }

    const user4 = new User2({name: 'soni', username: 'sun'})
    console.log(user4);
}