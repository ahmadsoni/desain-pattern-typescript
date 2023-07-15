namespace SolutionSingleton {
    class Me {
        public static instance: Me;
        private firstName: string = '';
        private lastName: string = '';

        public static getInstance(): Me{
            if(!Me.instance){
                Me.instance = new Me();
            }
            return Me.instance;
        }
        getFullName(): string{
            this.firstName = 'soni';
            this.lastName = 'ahmad';
            return `${this.firstName} ${this.lastName}`;
        }
    }
    const profile1 = Me.getInstance();
    console.log(profile1.getFullName());
    const profile2 = Me.getInstance();
    console.log(profile2.getFullName());

    // maka hasilnya akan true karena dia akan membuat instance dari instance yang pertama dari profile 1
    console.log(profile1 === profile2);
}