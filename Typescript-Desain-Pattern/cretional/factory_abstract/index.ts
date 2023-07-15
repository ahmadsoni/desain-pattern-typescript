enum ComputerType {
    PC = "PC",
    laptop = "laptop"
} 

abstract class Computer {
    protected type: ComputerType;
    protected monitor: string;

    constructor (type: ComputerType, monitor: string){
        this.type = type;
        this.monitor = monitor;
    }

    abstract getModel(): string;
}

class PC extends Computer{
    constructor(monitor: string){
        super(ComputerType.PC, monitor)
    }

    getModel(): string {
        return `${this.type} with ${this.monitor}`
    }
}
class Laptop extends Computer{
    constructor(monitor: string){
        super(ComputerType.laptop, monitor)
    }

    getModel(): string {
        return `${this.type} with ${this.monitor}`
    }
}

enum MonitorType {
    LED = "led",
    IPS = "ips",
}
class LEDComputerFactory {
    static buildComputer(type: ComputerType): Computer{
        switch(type){
            case ComputerType.PC:
                return new PC(MonitorType.LED)
            case ComputerType.laptop:
                return new Laptop(MonitorType.LED)
            default:
                throw new Error("Type not found")
        }
    }
}
class IPSComputerFactory {
    static buildComputer(type:  ComputerType): Computer{
        switch(type){
            case ComputerType.PC:
                return new PC(MonitorType.IPS)
            case ComputerType.laptop:
                return new Laptop(MonitorType.IPS)
            default:
                throw new Error('Type not found')
        }
    }
}

class ComputerFactory {
    static buildComputer(computerType: ComputerType, monitorType: MonitorType): Computer{
        switch(monitorType){
            case MonitorType.IPS:
                return IPSComputerFactory.buildComputer(computerType)
            case MonitorType.LED:
                return LEDComputerFactory.buildComputer(computerType)
            default:
                throw new Error("type not found")
        }
    }
}

const pcled = ComputerFactory.buildComputer(ComputerType.laptop, MonitorType.IPS)
console.log(pcled.getModel())


